import { motion } from "framer-motion";
import { Star, Users, Car, Award } from "lucide-react";

const stats = [
  { icon: Star, value: "4.8", label: "Google Rating", suffix: "★" },
  { icon: Users, value: "341", label: "Happy Reviews", suffix: "+" },
  { icon: Car, value: "1M", label: "Happy Customers", suffix: "+" },
  { icon: Award, value: "5", label: "Years Experience", suffix: "+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Chennai's Most <span className="text-gradient-gold text-[#bfa76a]">Trusted</span> Auto Care
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Xtreme Car Care is one of Chennai's most trusted car detailing and restoration studios. With over 1M+ happy customers and a 4.8 star rating, we specialize in high-quality detailing, paint protection, and automotive upgrades.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of trained professionals uses only premium products and state-of-the-art equipment to ensure your vehicle receives the best care possible. From basic washes to complete ceramic coatings, we treat every car like it's our own.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 bg-gradient-gold rounded-full" />
              <p className="text-primary font-heading font-semibold tracking-wide text-sm">EXCELLENCE IN EVERY DETAIL</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/hero-slider/hero1.jpeg"
                alt="Xtreme Car Care shop"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B99] to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-gradient-gold">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
