import { motion } from "framer-motion";
import { useState } from "react";
import { CirclePlay } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getServiceVideo } from "@/lib/serviceVideos";

type Service = {
  title: string;
  description: string;
  featured?: boolean;
};

export default function ServicesSection() {
  const services: Service[] = [
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

  // No borderColors needed, using luxury-gradient-line

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const selectedServiceVideo = selectedService ? getServiceVideo(selectedService.title) : {};

  return (
    <section className="relative overflow-x-hidden bg-[#13161b] py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{ background: "repeating-linear-gradient(135deg, #21262d 0px, #21262d 2px, transparent 2px, transparent 22px)" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(210,181,106,0.13),rgba(0,0,0,0)_46%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-heading text-sm uppercase tracking-[0.32em] text-primary">What We Offer</p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Our <span className="text-gradient-gold">Premium Services</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-40 bg-gradient-to-r from-transparent via-[#d2b56a] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -7 }}
              className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-[26px] border border-[#d2b56a]/18 bg-[linear-gradient(165deg,rgba(26,31,38,0.96),rgba(17,20,26,0.98))] px-6 pb-7 pt-10 shadow-[0_16px_30px_rgba(0,0,0,0.33)] transition-all duration-300"
            >
              <div className="pointer-events-none absolute -top-20 right-[-60px] h-48 w-48 rounded-full bg-[#d2b56a]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute left-6 right-6 top-12 z-0 h-px bg-gradient-to-r from-transparent via-[#d4b76d]/80 to-transparent" />
              <div className="absolute left-6 right-6 top-12 z-0 h-[1px] bg-white/10 blur-[1px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ba9850] bg-[linear-gradient(145deg,#f0cf73,#ca9f39)] font-heading text-2xl font-bold text-[#1a1710] shadow-[0_8px_14px_rgba(0,0,0,0.28)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {service.featured ? (
                  <span className="rounded-full border border-[#d9bc76]/45 bg-[#191d24]/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#f2e1b6]">
                    Featured
                  </span>
                ) : null}
              </div>

              <h3 className="relative z-10 mt-7 text-center font-heading text-3xl font-bold leading-tight text-gradient-gold">
                {service.title}
              </h3>

              <p className="relative z-10 mt-4 text-center text-lg font-medium leading-relaxed text-[#e8e8e8]">
                {service.description}
              </p>

              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="relative z-10 mt-auto inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#e8c97f]/35 bg-[linear-gradient(135deg,#e8c467,#cb9f3d)] px-6 py-2.5 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[#17120a] shadow-[0_8px_20px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#e0c06d]"
              >
                <CirclePlay className="h-4 w-4" />
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
