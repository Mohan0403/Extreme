import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Car, User, Phone, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TIME_SLOTS, SERVICES } from "@/lib/bookings";
import { toast } from "sonner";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4kXssusJyisJUQVSELXJCUlaqghgEQDztjMlGu4zePhfobdcUwXhh6sYzudN8Kdgp/exec";

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [slots, setSlots] = useState<{ slot: string; available: boolean }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const availabilityErrorShownRef = useRef(false);

  const applyBookedSlots = (bookedSlots: string[]) => {
    setSlots(
      TIME_SLOTS.map((slot) => ({
        slot,
        available: !bookedSlots.includes(slot),
      }))
    );
  };

  const fetchBookedSlotsForDate = async (selectedDate: string): Promise<string[]> => {
    const response = await fetch(
      `${SCRIPT_URL}?action=getSlots&date=${encodeURIComponent(selectedDate)}&_ts=${Date.now()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch slots");
    }

    const data: { bookedSlots?: string[] } = await response.json();
    return Array.isArray(data.bookedSlots) ? data.bookedSlots : [];
  };

  useEffect(() => {
    if (!date) return;

    let isMounted = true;

    const loadBookedSlots = async () => {
      try {
        const bookedSlots = await fetchBookedSlotsForDate(date);

        if (!isMounted) return;

        availabilityErrorShownRef.current = false;
        applyBookedSlots(bookedSlots);

        if (bookedSlots.includes(timeSlot)) {
          setTimeSlot("");
        }
      } catch {
        if (!isMounted) return;

        // Fail closed: prevent booking when availability cannot be verified.
        setSlots(TIME_SLOTS.map((slot) => ({ slot, available: false })));
        if (!availabilityErrorShownRef.current) {
          toast.error("Could not load slot availability. Please refresh and try again.");
          availabilityErrorShownRef.current = true;
        }
      }
    };

    setTimeSlot("");
    loadBookedSlots();

    const pollId = window.setInterval(() => {
      void loadBookedSlots();
    }, 5000);

    const handleFocus = () => {
      void loadBookedSlots();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      isMounted = false;
      window.clearInterval(pollId);
      window.removeEventListener("focus", handleFocus);
    };
  }, [date]);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !carModel || !serviceType || !date || !timeSlot) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const latestBookedSlots = await fetchBookedSlotsForDate(date);
      if (latestBookedSlots.includes(timeSlot)) {
        toast.error("This time slot is already booked. Please choose another slot.");
        applyBookedSlots(latestBookedSlots);
        setTimeSlot("");
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        // Keep as text/plain to avoid CORS preflight while sending JSON payload.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "book",
          name,
          phone,
          car_model: carModel,
          service: serviceType,
          date,
          time: timeSlot,
        }),
      });

      const raw = await response.text();
      let result: { status?: string; message?: string } = {};

      try {
        result = JSON.parse(raw);
      } catch {
        if (raw.toLowerCase().includes("google hasn't verified this app")) {
          toast.error("Please authorize the Apps Script deployment once, then try again.");
          return;
        }
        throw new Error("Invalid API response");
      }

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      if (result.status === "error" && result.message === "Slot already booked") {
        toast.error("This time slot is already booked. Please choose another slot.");

        const bookedSlots = await fetchBookedSlotsForDate(date);
        applyBookedSlots(bookedSlots);
        setTimeSlot("");
        return;
      }

      if (result.status && result.status !== "success") {
        toast.error(result.message || "Booking failed");
        return;
      }

      // Immediately lock this slot in UI for the currently selected date.
      applyBookedSlots([...latestBookedSlots, timeSlot]);
      setTimeSlot("");
      setSubmitted(true);
      toast.success("Booking confirmed!");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to complete booking. Please try again.";
      toast.error(message);
    }
  };

  const handleBookAnother = async () => {
    setSubmitted(false);

    if (!date) return;

    try {
      const bookedSlots = await fetchBookedSlotsForDate(date);
      applyBookedSlots(bookedSlots);
    } catch {
      setSlots(TIME_SLOTS.map((slot) => ({ slot, available: false })));
      toast.error("Could not refresh slot availability. Please refresh and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for choosing Xtreme Car Care. We'll see you on {date} at {timeSlot}.
            </p>
            <Button variant="gold" size="lg" onClick={handleBookAnother}>
              Book Another
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Appointment</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold">
              Book Your <span className="text-gradient-gold">Service</span>
            </h1>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-2">
                <User className="h-4 w-4 text-primary" /> Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-2">
                <Phone className="h-4 w-4 text-primary" /> Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Car Model */}
            <div>
              <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-2">
                <Car className="h-4 w-4 text-primary" /> Car Model
              </label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder="e.g., Hyundai Creta, BMW 3 Series"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-2">
                <Wrench className="h-4 w-4 text-primary" /> Service Type
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-2">
                <CalendarDays className="h-4 w-4 text-primary" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Time Slots */}
            {date && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <label className="flex items-center gap-2 text-sm font-heading font-semibold mb-3">
                  <Clock className="h-4 w-4 text-primary" /> Available Time Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {slots.map(({ slot, available }) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={!available}
                      onClick={() => setTimeSlot(slot)}
                      className={`rounded-lg px-4 py-3 text-sm font-heading font-semibold transition-all duration-200 ${
                        timeSlot === slot
                          ? "bg-primary text-primary-foreground glow-gold"
                          : available
                          ? "bg-secondary text-foreground hover:border-primary border border-border"
                          : "bg-destructive/20 text-destructive line-through cursor-not-allowed border border-destructive/30"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-secondary border border-border" /> Available
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-destructive/30" /> Booked
                  </span>
                </div>
              </motion.div>
            )}

            <Button type="submit" variant="gold" size="lg" className="w-full shine-effect">
              Confirm Booking
            </Button>
          </motion.form>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
