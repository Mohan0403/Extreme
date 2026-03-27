import { motion } from "framer-motion";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  type?: "image" | "video";
  poster?: string;
  isPlaceholder?: boolean;
};

// Existing gallery items
// The following items will be updated to match the new service order and names

const galleryItems: GalleryItem[] = [
  { src: "/images/services/business-class-customization.jpeg", alt: "Business Class Customisation", label: "Business Class Customisation" },
  { src: "/images/services/full-car-customization.jpeg", alt: "Full Car Customisation", label: "Full Car Customisation" },
  { src: "/images/services/ppf.jpeg", alt: "Paint Protection Film (PPF)", label: "Paint Protection Film (PPF)" },
  { src: "/images/services/ceramic-coating.jpeg", alt: "Ceramic Coating", label: "Ceramic Coating" },
  { src: "/images/services/body-kit.jpeg", alt: "Body Kits", label: "Body Kits" },
  { src: "/images/services/premium-infotainment-system.jpeg", alt: "Premium Infotainment Systems", label: "Premium Infotainment Systems" },
  { src: "/images/services/car-accessories.jpeg", alt: "Accessories", label: "Accessories" },
  { src: "/images/services/gold-package.jpeg", alt: "Gold Package", label: "Gold Package" },
  { src: "/images/services/automatic car wash.jpeg", alt: "Automatic Car Wash", label: "Automatic Car Wash" },
  // ...existing code...
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Explore Our Recent Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Discover some of the latest projects and services we have completed for our valued customers.
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
