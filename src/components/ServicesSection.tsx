import { motion } from "framer-motion";
import { Droplets, Shield, Paintbrush, Smartphone, Camera, Wrench, Sparkles, Car } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Premium Car Wash",
    description: "Thorough exterior and interior cleaning using premium products that leave your car spotless.",
    price: "Starting ₹499",
  },
  {
    icon: Sparkles,
    title: "Interior Deep Cleaning",
    description: "Complete interior restoration including seats, dashboard, carpets, and air vents.",
    price: "Starting ₹1,999",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting nano ceramic protection that gives your car a mirror-like finish.",
    price: "Starting ₹7,999",
  },
  {
    icon: Car,
    title: "Paint Protection Film",
    description: "Invisible PPF shield that protects your car's paint from scratches and chips.",
    price: "Starting ₹14,999",
  },
  {
    icon: Paintbrush,
    title: "Car Polishing & Detailing",
    description: "Multi-stage paint correction and polishing for a showroom-quality finish.",
    price: "Starting ₹2,999",
  },
  {
    icon: Smartphone,
    title: "Android System Installation",
    description: "Upgrade your car with the latest Android infotainment system.",
    price: "Starting ₹8,999",
  },
  {
    icon: Camera,
    title: "360° Camera Installation",
    description: "Full surround-view camera system for safer and easier parking.",
    price: "Starting ₹12,999",
  },
  {
    icon: Wrench,
    title: "Car Accessories",
    description: "Premium aftermarket accessories to customize and enhance your ride.",
    price: "Custom Quote",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Premium Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:glow-gold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-primary font-heading font-semibold text-sm">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
