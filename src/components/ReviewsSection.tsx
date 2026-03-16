import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh K.",
    rating: 5,
    text: "Excellent car wash service and great coordination. My car looks brand new after the ceramic coating!",
    service: "Ceramic Coating",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Friendly staff and great place to get your car work done. The interior deep cleaning was phenomenal.",
    service: "Interior Cleaning",
  },
  {
    name: "Arun S.",
    rating: 5,
    text: "Fantastic detailing and premium service. They installed a 360° camera and it works flawlessly.",
    service: "360° Camera",
  },
  {
    name: "Karthik R.",
    rating: 5,
    text: "Best car detailing service in Chennai. The PPF application was perfect with no bubbles.",
    service: "PPF Installation",
  },
  {
    name: "Sneha V.",
    rating: 4,
    text: "Very professional team. They took great care of my BMW. Highly recommend their polishing service.",
    service: "Car Polishing",
  },
  {
    name: "Vikram P.",
    rating: 5,
    text: "World-class service at affordable rates. The Android system they installed works perfectly.",
    service: "Android System",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-heading font-bold text-lg">4.8</span>
            <span className="text-muted-foreground text-sm">(341 reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
                {[...Array(5 - review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-muted-foreground" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-sm">{review.name}</p>
                  <p className="text-primary text-xs">{review.service}</p>
                </div>
                {/* Google logo removed as requested */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
