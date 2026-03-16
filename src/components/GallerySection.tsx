import { motion } from "framer-motion";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  type?: "image" | "video";
  poster?: string;
  isPlaceholder?: boolean;
};

const galleryItems: GalleryItem[] = [
  { src: "/images/services/interior-deep-cleaning.jpeg", alt: "Interior Deep Cleaning", label: "Interior Deep Cleaning" },
  { src: "/images/services/ceramic-coating.jpeg", alt: "Ceramic Coating", label: "Ceramic Coating" },
  { src: "/images/services/car-polishing-detailing.jpeg", alt: "Car Polishing & Detailing", label: "Car Polishing & Detailing" },
  { src: "/images/services/camera-360-installation.jpeg", alt: "360° Camera Installation", label: "360° Camera Installation" },
  { src: "/images/services/car-accessories.jpeg", alt: "Car Accessories", label: "Car Accessories" },
  { src: "/images/services/premium-car-wash.jpeg", alt: "Premium Car Wash", label: "Premium Car Wash" },
  // ...existing code...
];

export default function GallerySection() {
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer"
            >
              {item.type === "video" && item.src ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={item.alt}
                />
              ) : item.type === "video" ? (
                <div
                  className="h-full w-full bg-gradient-to-br from-secondary to-background flex items-center justify-center"
                  aria-label={item.alt}
                >
                  <div className="text-center px-4">
                    <div className="mx-auto h-14 w-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary text-2xl">
                      ▶
                    </div>
                    <p className="mt-3 text-sm font-heading text-foreground">Video coming soon</p>
                    {item.isPlaceholder && (
                      <p className="text-xs text-muted-foreground mt-1">Replace this with your uploaded file</p>
                    )}
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                <p className="font-heading font-bold text-lg text-foreground">{item.label}</p>
                <div className="h-0.5 w-12 bg-gradient-gold mt-2 group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
