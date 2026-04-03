import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Star, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";


// Use the most premium, cinematic black car image available
const heroImage = "/images/hero-slider/hero.jpeg";


export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 font-sans"
      style={{
        background: `linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.44) 54%, rgba(0,0,0,0.74) 100%), radial-gradient(ellipse at 50% 38%, rgba(0,0,0,0.07) 58%, rgba(0,0,0,0.24) 100%), url(${heroImage}) center center / cover no-repeat`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(1.03) contrast(1.08) saturate(1.02)'
      }}
    >

      {/* Slide indicator dots */}
      {/* Slide indicator dots removed: only one image is used */}

      {/* Animated gold line */}
      {/* (Removed old gold line; using only the new luxury gradient line above heading) */}


      <div className="hero-content relative z-10 w-full text-center flex flex-col items-center justify-center" style={{left: 0, right: 0, position: 'relative'}}>

        {/* Logo and Brand Name above heading */}
        <div className="hero-logo-row mb-1">
          <img src={logo} alt="Logo" style={{ height: '2.8rem', width: '2.8rem', minWidth: '2.8rem', minHeight: '2.8rem', objectFit: 'cover', borderRadius: '0.4em' }} />
          <span className="hero-brand-name">
            <span className="hero-brand-gold-gradient">XTREME</span>
            <span className="hero-brand-white"> CAR </span>
            <span className="hero-brand-gold-gradient">CARE</span>
          </span>
        </div>

        {/* Main headline: Elevate Your Driving Experience */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hero-heading mb-[18px] break-words max-w-full"
          style={{
            fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '0.3px',
            color: '#f5f5f5',
            textAlign: 'center',
            textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.1)',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
            <span
              className="block"
              style={{
                fontSize: 'clamp(2rem, 6.2vw, 50px)',
                color: '#fff',
                background: 'none',
                WebkitBackgroundClip: 'initial',
                WebkitTextFillColor: 'initial',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '0.3px',
                display: 'block',
                opacity: 0.98,
                marginBottom: '6px',
              }}
            >
              Elevate Your
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.35rem, 7.2vw, 60px)',
                background: 'linear-gradient(120deg, #d4af37 0%, #f9e27d 30%, #d4af37 55%, #a8872d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontWeight: 600,
                letterSpacing: '0.3px',
                lineHeight: 1.1,
                display: 'block',
                textShadow: '0 3px 12px rgba(212,175,55,0.25), 0 0 30px rgba(212,175,55,0.1)',
              }}
            >
              Driving Experience
            </span>
        </motion.h1>

        {/* Subheadline: Luxury Detailing • Paint Protection • Custom Interiors */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-subheading flex flex-row flex-nowrap justify-center items-center gap-2 mb-[20px] w-full break-words max-w-full px-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '20px',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.8px',
            textShadow: '0 1px 6px rgba(0,0,0,0.25)',
            lineHeight: 1.2,
            textAlign: 'center',
            width: '100%',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          <span style={{fontFamily: "inherit", fontWeight: 400, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Luxury Detailing</span>
          <span className="mx-2" style={{fontSize: '1rem', fontWeight: 400, color: 'rgba(255,255,255,0.7)'}}>&bull;</span>
          <span style={{fontFamily: "inherit", fontWeight: 400, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Paint Protection</span>
          <span className="mx-2" style={{fontSize: '1rem', fontWeight: 400, color: 'rgba(255,255,255,0.7)'}}>&bull;</span>
          <span style={{fontFamily: "inherit", fontWeight: 400, fontSize: 'inherit', letterSpacing: 'inherit', color: 'inherit'}}>Custom Interiors</span>
        </motion.div>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-[28px] mt-1"
        >
          <span className="block" style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.3px', fontWeight: 500, textShadow: '0 2px 7px rgba(0,0,0,0.38)' }}>
            Precision. Protection. Perfection.
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center mb-16 mt-1"
        >
          <Link to="/book" className="w-full max-w-xs">
            <button
              className="hero-btn w-full py-4 px-8 text-[15px] md:text-[15px] rounded-[12px] font-semibold uppercase tracking-[0.08em] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E6C16A] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #d4af37, #f7d774)",
                color: "#111",
                fontWeight: 600,
                letterSpacing: "0.06em",
                border: "1px solid rgba(255, 215, 120, 0.25)",
                boxShadow: "0 8px 25px rgba(212,175,55,0.4), inset 0 1px 1px rgba(255,255,255,0.4)",
                textShadow: "0 1px 0 rgba(255,255,255,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #ddba51, #f8df8f)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 35px rgba(212,175,55,0.6)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #d4af37, #f7d774)";
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(212,175,55,0.4), inset 0 1px 1px rgba(255,255,255,0.4)";
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
          className="hero-stats mt-2 flex flex-row flex-wrap items-center justify-center gap-x-2 sm:gap-x-6 w-full break-words max-w-full px-2"
        >
          <div className="flex flex-row items-center justify-center w-full max-w-2xl">
            <div className="hero-stat flex-1 text-center px-2 min-w-[90px] sm:min-w-[110px]">
              <p className="font-serif text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>4.8★</p>
              <p className="text-sm md:text-base text-[#e2decf] mt-1 tracking-wide font-sans">Google Rating</p>
            </div>
            <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#E6C16A99] to-[#B8892F55] hidden sm:block" />
            <div className="hero-stat flex-1 text-center px-2 min-w-[90px] sm:min-w-[110px]">
              <p className="font-serif text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>1000+</p>
              <p className="text-sm md:text-base text-[#e2decf] mt-1 tracking-wide font-sans">Cars Transformed</p>
            </div>
            <div className="h-10 w-px mx-2 md:mx-6 bg-gradient-to-b from-[#E6C16A99] to-[#B8892F55] hidden sm:block" />
            <div className="hero-stat flex-1 text-center px-2 min-w-[90px] sm:min-w-[110px]">
              <p className="font-serif text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold" style={{
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
