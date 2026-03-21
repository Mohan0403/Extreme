import { motion } from "framer-motion";
import { useState } from "react";
import { Droplets, Shield, Paintbrush, Camera, Wrench, Sparkles, Car, CirclePlay } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getServiceVideo } from "@/lib/serviceVideos";

const services = [
  {
    icon: Sparkles,
    title: "Business Class Customisation",
    description: "Exclusive upgrades and features for a luxury business-class experience.",
  },
  {
    icon: Car,
    title: "Full Car Customisation",
    description: "Complete transformation of your vehicle to match your unique style and needs.",
  },
  {
    icon: Car,
    title: "Paint Protection Film (PPF)",
    description: "Invisible PPF shield that protects your car's paint from scratches and chips.",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting nano ceramic protection that gives your car a mirror-like finish.",
  },
  {
    icon: Paintbrush,
    title: "Body Kits",
    description: "Custom body kits for enhanced aesthetics and aerodynamics.",
  },
  {
    icon: Camera,
    title: "Premium Infotainment Systems",
    description: "State-of-the-art infotainment upgrades for a premium driving experience.",
  },
  {
    icon: Wrench,
    title: "Accessories",
    description: "Premium aftermarket accessories to customize and enhance your ride.",
  },
  {
    icon: Shield,
    title: "Gold Package",
    description: "All-in-one premium care package for your vehicle.",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const selectedServiceVideo = selectedService ? getServiceVideo(selectedService.title) : {};

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.button
              type="button"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:glow-gold overflow-hidden text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute right-4 top-4 z-20 rounded-full border border-primary/40 bg-background/70 p-2 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <CirclePlay className="h-4 w-4" />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                  <CirclePlay className="h-3.5 w-3.5" />
                  Watch Video Demo
                </div>
              </div>
            </motion.button>
          ))}
        </div>



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
