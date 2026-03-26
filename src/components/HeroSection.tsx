import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Star, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";


// Use the most premium, cinematic black car image available
const heroImage = "/images/hero-slider/hero.jpeg";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 font-sans bg-[#0B0B0B]">
      {/* Cinematic luxury car background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury black car - Xtreme Shine Studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.08, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ filter: "brightness(0.82) contrast(1.08) saturate(1.08)" }}
        />
        {/* Subtle dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
        {/* Vignette for premium mood */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.38) 100%)" }} />
      </div>

      {/* Slide indicator dots */}
      {/* Slide indicator dots removed: only one image is used */}

      {/* Animated gold line */}
      {/* (Removed old gold line; using only the new luxury gradient line above heading) */}


      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center">
        {/* Luxury gold gradient line above heading */}
        <div className="luxury-gradient-line mb-8 mt-2" aria-hidden="true" />

        {/* Main headline: Elevate Your Driving Experience */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-7"
          style={{
            fontFamily: "'Playfair Display Variable', 'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: '4rem',
            lineHeight: 1.08,
            letterSpacing: '0.01em',
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 4px 18px rgba(0,0,0,0.22)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
            <span style={{
              color: '#fff !important',
              background: 'none',
              WebkitBackgroundClip: 'initial',
              WebkitTextFillColor: 'initial',
              fontSize: '4.2rem',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '0.01em',
              display: 'block',
              opacity: 0.88,
            }}>
              Elevate Your
            </span>
          <span style={{
            background: 'linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            fontWeight: 800,
            fontSize: '1.2em',
            display: 'inline-block',
            letterSpacing: '0.01em',
          }}>
            Driving Experience
          </span>
        </motion.h1>

        {/* Subheadline: Luxury Detailing • Paint Protection • Custom Interiors */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-4 tracking-wide"
          style={{
            fontFamily: "'Playfair Display Variable', 'Georgia', 'Times New Roman', serif",
            fontWeight: 600,
            fontSize: '1.35rem',
            color: '#F7F5EF',
            letterSpacing: '0.12em',
            textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            lineHeight: 1.18,
            textAlign: 'center',
            width: '100%',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          <span style={{fontFamily: "inherit", fontWeight: 600, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Luxury Detailing</span>
          <span className="mx-2 text-[#E6C16A]" style={{fontSize: '1.5rem', fontWeight: 700}}>&bull;</span>
          <span style={{fontFamily: "inherit", fontWeight: 600, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Paint Protection</span>
          <span className="mx-2 text-[#E6C16A]" style={{fontSize: '1.5rem', fontWeight: 700}}>&bull;</span>
          <span style={{fontFamily: "inherit", fontWeight: 600, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Custom Interiors</span>
        </motion.div>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-10 mt-2"
        >
          <span className="block font-serif text-[1.1rem] md:text-lg text-[#F7F5EF] opacity-90 tracking-wide" style={{ letterSpacing: "0.12em" }}>
            Precision. Protection. Perfection.
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center mb-16 mt-2"
        >
          <Link to="/book" className="w-full max-w-xs">
            <button
              className="w-full py-5 px-8 text-lg md:text-xl rounded-xl font-semibold uppercase tracking-wider shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E6C16A] transition-all duration-200"
              style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                color: "#1A1A1A",
                fontWeight: 700,
                letterSpacing: "0.08em",
                border: "1px solid rgba(255, 215, 120, 0.25)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                textShadow: "0 1px 0 rgba(255,255,255,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(to bottom, #F3D37A 0%, #E6C16A 45%, #B8892F 75%, #8F6A24 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 18px rgba(0,0,0,0.38)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
              }}
              onMouseDown={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(1px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 6px rgba(0,0,0,0.22)";
              }}
              onMouseUp={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 18px rgba(0,0,0,0.38)";
              }}
            >
              BOOK APPOINTMENT
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "40%",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0))",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                  zIndex: 1,
                  opacity: 0.7,
                }}
                aria-hidden="true"
              />
            </button>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-0 md:gap-0 w-full"
        >
          <div className="flex flex-row items-center justify-center w-full max-w-2xl">
            <div className="flex-1 text-center px-2 min-w-[90px]">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>4.8★</p>
              <p className="text-sm md:text-base text-[#e2decf] mt-1 tracking-wide font-sans">Google Rating</p>
            </div>
            <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#E6C16A99] to-[#B8892F55]" />
            <div className="flex-1 text-center px-2 min-w-[90px]">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>1000+</p>
              <p className="text-sm md:text-base text-[#e2decf] mt-1 tracking-wide font-sans">Cars Transformed</p>
            </div>
            <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#E6C16A99] to-[#B8892F55]" />
            <div className="flex-1 text-center px-2 min-w-[90px]">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>1M+</p>
              <p className="text-sm md:text-base text-[#e2decf] mt-1 tracking-wide font-sans">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <span className="italic text-[#F7F5EF] text-base md:text-lg tracking-wider flex items-center gap-2 font-serif" style={{ opacity: 0.92 }}>
            <span className="inline-block w-10 h-px bg-gradient-to-r from-[#E6C16A] to-transparent"></span>
            <span className="text-[#E6C16A] font-serif font-medium" style={{ fontStyle: "italic", letterSpacing: "0.08em" }}>Over 1 Million Journeys Elevated</span>
            <span className="inline-block w-10 h-px bg-gradient-to-l from-[#E6C16A] to-transparent"></span>
          </span>
        </motion.div>
      </div>

      {/* Bottom gradient fade for cinematic finish */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
    </section>
  );
}
