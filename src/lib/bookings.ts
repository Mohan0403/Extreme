export interface Booking {
  id: string;
  name: string;
  phone: string;
  carModel: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  status: "booked" | "completed";
  createdAt: string;
}

const STORAGE_KEY = "xtreme_bookings";

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const SERVICES = [
  "Premium Car Wash",
  "Interior Deep Cleaning",
  "Ceramic Coating",
  "Paint Protection Film (PPF)",
  "Car Polishing & Detailing",
  "Android System Installation",
  "360° Camera Installation",
  "Car Accessories Installation",
];

export function getBookings(): Booking[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addBooking(booking: Omit<Booking, "id" | "status" | "createdAt">): Booking {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    status: "booked",
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
}

export function deleteBooking(id: string): void {
  const bookings = getBookings().filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function markCompleted(id: string): void {
  const bookings = getBookings().map((b) =>
    b.id === id ? { ...b, status: "completed" as const } : b
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function getBookedSlots(date: string): string[] {
  return getBookings()
    .filter((b) => b.date === date && b.status === "booked")
    .map((b) => b.timeSlot);
}

export function getAvailableSlots(date: string): { slot: string; available: boolean }[] {
  const booked = getBookedSlots(date);
  return TIME_SLOTS.map((slot) => ({
    slot,
    available: !booked.includes(slot),
  }));
}
