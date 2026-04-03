import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";


// Use the most premium, cinematic black car image available
const heroImage = "/images/hero-slider/hero.jpeg";
const heroServices = ["Luxury Detailing", "Paint Protection", "Custom Interiors"];


export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `linear-gradient(180deg, rgba(6,7,10,0.82) 0%, rgba(9,10,14,0.62) 45%, rgba(4,4,6,0.9) 100%), radial-gradient(circle at 60% 38%, rgba(255,215,130,0.06) 0%, rgba(0,0,0,0) 28%), url(${heroImage}) center center / cover no-repeat`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.87) contrast(1.08) saturate(1.03)'
      }}
    >

      {/* Slide indicator dots */}
      {/* Slide indicator dots removed: only one image is used */}

      {/* Animated gold line */}
      {/* (Removed old gold line; using only the new luxury gradient line above heading) */}


      <div className="hero-content relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-8">

        <div className="absolute inset-x-6 top-1/2 -z-10 h-[360px] -translate-y-1/2 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(255,236,184,0.08),rgba(0,0,0,0)_60%)] blur-2xl" />

        {/* Logo and Brand Name above heading */}
        <div className="hero-logo-row mb-5 rounded-2xl border border-[#e3bf67]/25 bg-black/25 px-4 py-2 backdrop-blur-sm">
          <span style={{ height: '2.8rem', width: '2.8rem', minWidth: '2.8rem', minHeight: '2.8rem', borderRadius: '50%', overflow: 'hidden', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '2.8rem',
                width: '2.8rem',
                minWidth: '2.8rem',
                minHeight: '2.8rem',
                objectFit: 'cover',
                transform: 'scale(1.28)',
                transformOrigin: 'center'
              }}
            />
          </span>
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
          className="hero-heading mb-5 max-w-full break-words"
          style={{
            fontFamily: "'Bodoni Moda', 'Cormorant Garamond', serif",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#f5f5f5',
            textAlign: 'center',
            textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 0 2px rgba(255,255,255,0.08)',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
            <span
              className="block"
              style={{
                fontSize: 'clamp(2rem, 5.6vw, 52px)',
                color: '#fff',
                background: 'none',
                WebkitBackgroundClip: 'initial',
                WebkitTextFillColor: 'initial',
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: '-0.015em',
                display: 'block',
                opacity: 0.98,
                marginBottom: '4px',
              }}
            >
              Elevate Your
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.35rem, 6.7vw, 64px)',
                background: 'linear-gradient(120deg, #d6af44 0%, #f9e7a3 30%, #d7af45 56%, #a87f2f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontFamily: "'DM Serif Display', 'Bodoni Moda', serif",
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 0.92,
                display: 'block',
                textShadow: '0 6px 16px rgba(212,175,55,0.2), 0 0 30px rgba(212,175,55,0.12)',
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
          className="hero-subheading mb-6 flex w-full max-w-full flex-nowrap items-center justify-start gap-1 overflow-x-auto px-1 sm:justify-center sm:gap-2 sm:px-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(0.9rem, 1.5vw, 1.08rem)',
            color: 'rgba(245,241,232,0.9)',
            letterSpacing: '0.45px',
            textShadow: '0 1px 8px rgba(0,0,0,0.35)',
            lineHeight: 1.2,
            textAlign: 'center',
            width: '100%',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          {heroServices.map((service, index) => (
            <div key={service} className="flex shrink-0 items-center gap-1 sm:gap-2">
              <span className="whitespace-nowrap rounded-full border border-[#e4bf67]/30 bg-black/35 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-[#f1ebdb] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm sm:px-4 sm:text-[0.78rem]">
                {service}
              </span>
              {index < heroServices.length - 1 ? (
                <span className="text-[#e1bf67] text-[0.8rem] leading-none">✦</span>
              ) : null}
            </div>
          ))}
        </motion.div>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 mt-0"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e2c16a]/35 bg-black/30 px-5 py-2.5 shadow-[0_10px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#e2c16a]/80" />
            <span className="block" style={{fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', color: 'rgba(247,241,226,0.95)', letterSpacing: '0.4px', fontWeight: 700, textShadow: '0 2px 9px rgba(0,0,0,0.42)' }}>
              Precision. Protection. Perfection.
            </span>
            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#e2c16a]/80" />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16 mt-1 flex justify-center"
        >
          <Link to="/book" className="w-full max-w-xs">
            <button
              className="hero-btn relative w-full overflow-hidden rounded-[14px] border border-[#f1d487]/35 bg-[linear-gradient(135deg,#d6ad46,#f4d882_50%,#d1a541)] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#19150f] shadow-[0_10px_26px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_14px_30px_rgba(212,175,55,0.45)] focus:outline-none focus:ring-2 focus:ring-[#E6C16A]"
            >
              BOOK APPOINTMENT
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "44%",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.26), rgba(255,255,255,0))",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                  zIndex: 1,
                  opacity: 0.9,
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
          className="hero-stats mt-2 flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-x-2 break-words px-2 sm:gap-x-6"
        >
          <div className="flex w-full max-w-2xl flex-row items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-2 py-3 backdrop-blur-sm">
            <div className="hero-stat flex-1 text-center px-2 min-w-[90px] sm:min-w-[110px]">
              <p className="font-serif text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold" style={{
                background: "linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px #00000044"
              }}>4.8★</p>
              <p className="mt-1 font-sans text-sm tracking-wide text-[#e2decf] md:text-base">Google Rating</p>
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
              <p className="mt-1 font-sans text-sm tracking-wide text-[#e2decf] md:text-base">Cars Transformed</p>
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
              <p className="mt-1 font-sans text-sm tracking-wide text-[#e2decf] md:text-base">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-9 flex justify-center"
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
