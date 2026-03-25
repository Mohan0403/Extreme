import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Star, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/hero-slider/hero.jpeg"
];

export default function HeroSection() {
  // Only use the first image, no cycling
  const current = 0;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 font-sans">
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
              className="absolute inset-0 h-full w-full object-cover object-center brightness-110 contrast-110 saturate-110"
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
            background: "linear-gradient(105deg, transparent 40%, #bfa76a22 50%, transparent 60%)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.25) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-background/30" />
      </div>

      {/* Slide indicator dots */}
      {/* Slide indicator dots removed: only one image is used */}

      {/* Animated gold line */}
      {/* (Removed old gold line; using only the new luxury gradient line above heading) */}

      <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[2.7rem] sm:text-5xl md:text-6xl font-normal leading-tight mb-4"
            style={{
              fontFamily: 'Playfair Display Variable, Georgia, serif',
              letterSpacing: '0.04em',
              textShadow: '0 2px 16px rgba(0,0,0,0.32)'
            }}
          >
            <span className="block text-white">Elevate Your</span>
            <span className="block" style={{ color: '#bfa76a', fontWeight: 400 }}>Driving Experience</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-2 text-base md:text-lg font-medium text-white/80 uppercase tracking-widest mb-2"
          >
            <span>Luxury Detailing</span>
            <span className="mx-1 text-yellow-400">&bull;</span>
            <span>Paint Protection</span>
            <span className="mx-1 text-yellow-400">&bull;</span>
            <span>Custom Interiors</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <Link to="/book" className="w-full max-w-xs">
              <Button
                variant="gold"
                size="xl"
                className="w-full py-5 text-xl rounded-2xl tracking-wide border-none shadow-[0_6px_32px_0_#bfa76a33,0_1.5px_6px_0_#00000022] font-heading font-semibold bg-gold hover:scale-105 transition-transform duration-200"
                style={{
                  letterSpacing: '0.04em',
                  textShadow: '0 1px 2px #fff8e1cc',
                }}
              >
                BOOK APPOINTMENT
              </Button>
            </Link>
          </motion.div>
          {/* Stats with icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-0 md:gap-0"
          >
            <div className="flex flex-row items-center justify-center w-full max-w-2xl">
              <div className="flex-1 text-center px-2">
                <p className="font-heading text-4xl md:text-5xl font-bold gold" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #00000044'}}>4.8★</p>
                <p className="text-base md:text-lg text-[#b0a98c] mt-1 tracking-wide font-sans">Google Rating</p>
              </div>
              <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#bfa76a99] to-[#c2b28055]" />
              <div className="flex-1 text-center px-2">
                <p className="font-heading text-4xl md:text-5xl font-bold gold" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #00000044'}}>1000+</p>
                <p className="text-base md:text-lg text-[#b0a98c] mt-1 tracking-wide font-sans">Cars Transformed</p>
              </div>
              <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#bfa76a99] to-[#c2b28055]" />
              <div className="flex-1 text-center px-2">
                <p className="font-heading text-4xl md:text-5xl font-bold gold" style={{letterSpacing: '0.01em', textShadow: '0 1px 4px #00000044'}}>1M+</p>
                <p className="text-base md:text-lg text-[#b0a98c] mt-1 tracking-wide font-sans">Happy Customers</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <span className="italic text-white/80 text-base md:text-lg tracking-wider flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-gradient-to-r from-[#bfa76a] to-transparent"></span>
              <span className="text-[#bfa76a] font-serif font-medium">Over 1 Million Journeys Elevated</span>
              <span className="inline-block w-8 h-px bg-gradient-to-l from-[#bfa76a] to-transparent"></span>
            </span>
              </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
