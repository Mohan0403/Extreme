import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/hero-slider/hero.jpeg"
];

export default function HeroSection() {
  // Only use the first image, no cycling
  const current = 0;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Auto-rotating background — cross-fade + Ken Burns slow pan/zoom */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroImages[current]}
            className="absolute inset-0"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Ken Burns: slow continuous zoom-pan while this slide is active */}
            <motion.img
              src={heroImages[current]}
              alt="Xtreme Car Care detailing"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-95 contrast-110 saturate-110"
              initial={{ scale: 1.12, x: "2%", y: "1%" }}
              animate={{ scale: 1.0, x: "-2%", y: "-1%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Moving gold light-sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(105deg, transparent 40%, hsla(51,100%,50%,0.07) 50%, transparent 60%)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/30 to-background/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/20" />
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Animated gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-gold opacity-60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Premium Car Detailing
            <br />
            <span className="text-gradient-gold">&amp; Restoration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Experience world-class car care with precision detailing, ceramic coating, and expert restoration services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/book">
              <Button variant="gold" size="xl" className="shine-effect">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+919884149111">
              <Button variant="gold-outline" size="xl">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: "4.8★", label: "Google Rating" },
              { value: "341+", label: "Happy Reviews" },
              { value: "300+", label: "Cars Serviced" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
