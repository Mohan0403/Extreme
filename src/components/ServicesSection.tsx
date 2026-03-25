import { motion } from "framer-motion";
import { useState } from "react";
import { Droplets, Shield, Paintbrush, Camera, Wrench, Sparkles, Car, CirclePlay } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getServiceVideo } from "@/lib/serviceVideos";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Class Customisation",
      description: "Step into luxury! Our business class upgrades turn your car into a true executive lounge on wheels.",
      featured: true,
    },
    {
      title: "Full Car Customisation",
      description: "Dream it, drive it! We’ll transform your ride to match your personality and style.",
    },
    {
      title: "Paint Protection Film (PPF)",
      description: "Keep your car looking brand new with our invisible, ultra-tough paint shield.",
    },
    {
      title: "Ceramic Coating",
      description: "Shine that lasts! Our nano-ceramic coat gives your car a mirror finish and serious protection.",
      featured: true,
    },
    {
      title: "Body Kits",
      description: "Stand out from the crowd with custom body kits for a bold, aerodynamic look.",
    },
    {
      title: "Premium Infotainment Systems",
      description: "Upgrade your drive with the latest in entertainment and connectivity.",
    },
    {
      title: "Accessories",
      description: "From sporty to practical, we have the perfect add-ons for your ride.",
    },
    {
      title: "Automatic Car Wash",
      description: "Fast, spotless, and touchless—let your car sparkle in minutes!",
    },
    {
      title: "Gold Package",
      description: "The ultimate all-in-one care for your pride and joy.",
    },
  ];

  // Alternating border colors for cards
  const borderColors = [
    'border-t-4 border-yellow-400',
    'border-t-4 border-primary',
    'border-t-4 border-blue-400',
    'border-t-4 border-green-400',
    'border-t-4 border-pink-400',
    'border-t-4 border-orange-400',
  ];

  const [selectedService, setSelectedService] = useState(null);
  const selectedServiceVideo = selectedService ? getServiceVideo(selectedService.title) : {};

  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-[#191c1f] overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'repeating-linear-gradient(135deg, #23272b 0px, #23272b 2px, transparent 2px, transparent 20px)'}} />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Premium Services</span>
          </h2>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className={`relative rounded-2xl bg-card shadow-xl ${borderColors[i % borderColors.length]} transition-all duration-300 flex flex-col items-center px-6 pt-12 pb-20 min-h-[340px]`}
            >
              {/* Clear, large number */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black font-extrabold text-3xl shadow-lg border-4 border-background select-none z-20" style={{letterSpacing: '0.05em', textShadow: '0 2px 8px #0008'}}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2 mt-8 text-center relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-base mb-4 leading-relaxed font-medium text-center">{service.description}</p>
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-lg hover:bg-primary hover:text-white transition-all"
              >
                Watch Video Demo
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal for video demo */}
        <Dialog open={Boolean(selectedService)} onOpenChange={(isOpen) => !isOpen && setSelectedService(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            {selectedService && (
              <>
                <div className="aspect-video w-full bg-surface-light">
                  {selectedServiceVideo.videoSrc ? (
                    <video
                      src={selectedServiceVideo.videoSrc}
                      controls
                      preload="metadata"
                      className="h-full w-full"
                    />
                  ) : selectedServiceVideo.videoEmbedUrl ? (
                    <iframe
                      src={selectedServiceVideo.videoEmbedUrl}
                      title={`${selectedService.title} video`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                      <p className="font-heading text-xl text-foreground">Video placeholder</p>
                      <p className="mt-2 text-sm text-muted-foreground">Add videoSrc or videoEmbedUrl in serviceVideos.ts</p>
                    </div>
                  )}
                </div>
                <DialogHeader className="p-6 pt-5">
                  <DialogTitle className="font-heading text-2xl">{selectedService.title}</DialogTitle>
                  <DialogDescription className="text-sm">{selectedService.description}</DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
