import { motion } from "framer-motion";
import { useState } from "react";
import { CirclePlay } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getServiceVideo } from "@/lib/serviceVideos";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  fileName: string;
};

const galleryItems: GalleryItem[] = [
  { src: "/images/services/interior-deep-cleaning.jpeg", alt: "Interior Deep Cleaning service", label: "Interior Deep Cleaning", fileName: "interior-deep-cleaning.jpeg" },
  { src: "/images/services/ceramic-coating.jpeg", alt: "Ceramic Coating service", label: "Ceramic Coating", fileName: "ceramic-coating.jpeg" },
  { src: "/images/services/car-polishing-detailing.jpeg", alt: "Car Polishing and Detailing service", label: "Car Polishing & Detailing", fileName: "car-polishing-detailing.jpeg" },
  { src: "/images/services/camera-360-installation.jpeg", alt: "360 Camera Installation service", label: "360 Camera Installation", fileName: "camera-360-installation.jpeg" },
  { src: "/images/services/car-accessories.jpeg", alt: "Car Accessories service", label: "Car Accessories", fileName: "car-accessories.jpeg" },
  { src: "/images/services/premium-car-wash.jpeg", alt: "Premium Car Wash service", label: "Premium Car Wash", fileName: "premium-car-wash.jpeg" },
];

export default function GallerySection() {
  const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>({});
  const [selectedWork, setSelectedWork] = useState<GalleryItem | null>(null);
  const selectedWorkVideo = selectedWork ? getServiceVideo(selectedWork.label) : { videoSrc: "", videoEmbedUrl: "" };

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Before &amp; <span className="text-gradient-gold">After</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            See the transformations we deliver — from dull and dirty to showroom perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, i) => (
            <motion.button
              type="button"
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedWork(item)}
              className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {!imageLoadError[item.fileName] ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={() => setImageLoadError((prev) => ({ ...prev, [item.fileName]: true }))}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div
                  className="h-full w-full bg-gradient-to-br from-secondary to-background flex items-center justify-center"
                  aria-label={item.alt}
                >
                  <div className="text-center px-4">
                    <div className="mx-auto h-14 min-w-14 rounded-full border border-primary/40 bg-primary/10 px-4 flex items-center justify-center text-primary text-lg font-semibold">
                      IMG
                    </div>
                    <p className="mt-3 text-sm font-heading text-foreground">Add service image</p>
                    <p className="text-xs text-muted-foreground mt-1">/images/services/{item.fileName}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                <p className="font-heading font-bold text-lg text-foreground">{item.label}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-background/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  <CirclePlay className="h-3.5 w-3.5" />
                  Watch Video
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={Boolean(selectedWork)} onOpenChange={(isOpen) => !isOpen && setSelectedWork(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            {selectedWork && (
              <>
                <div className="aspect-video w-full bg-surface-light">
                  {selectedWorkVideo.videoSrc ? (
                    <video
                      src={selectedWorkVideo.videoSrc}
                      controls
                      preload="metadata"
                      className="h-full w-full"
                    />
                  ) : selectedWorkVideo.videoEmbedUrl ? (
                    <iframe
                      src={selectedWorkVideo.videoEmbedUrl}
                      title={`${selectedWork.label} video`}
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
                  <DialogTitle className="font-heading text-2xl">{selectedWork.label}</DialogTitle>
                  <DialogDescription className="text-sm">Our latest work for this service.</DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
