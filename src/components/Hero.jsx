import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    tag: 'The Artisan Collection',
    headline: 'Where Heritage',
    subHeadline: 'Meets the Ocean',
    desc: 'Handcrafted jewellery inspired by the timeless beauty of Sri Lanka\'s southern coast. Every piece tells a story of the sea.',
    cta: 'Explore Collection',
    ctaPath: '/collections',
    cta2: 'Virtual Try-On',
    cta2Path: '/try-on',
    image: '/hero_jewellery.png',
  },
  {
    tag: 'AI-Powered Advisor',
    headline: 'Crafted for You,',
    subHeadline: 'Perfectly Personalised',
    desc: 'Our AI advisor analyzes your face shape, skin tone, and personality to find the jewellery that was made for you.',
    cta: 'Get AI Recommendations',
    ctaPath: '/try-on',
    cta2: 'Customize Yours',
    cta2Path: '/customize',
    image: '/necklace.png',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-[88vh] flex items-center bg-[#F5F0E8] overflow-hidden">

      {/* Subtle background gradient that transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current + '-bg'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: current === 0
              ? 'linear-gradient(135deg, #F5F0E8 0%, #FDFCF9 50%, #EDE8DC 100%)'
              : 'linear-gradient(135deg, #FDFCF9 0%, #F5F0E8 50%, #f0e8d8 100%)',
          }}
        />
      </AnimatePresence>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B8962E]/40 to-transparent" />

      <div className="relative z-10 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center" style={{ padding: '80px 60px 80px 80px' }}>

        {/* ── Left: Text ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-text'}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag */}
            <p className="text-[#B8962E] text-[11px] tracking-[0.38em] uppercase font-medium mb-5">
              — {slide.tag}
            </p>

            {/* Headline */}
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] font-light text-[#1a1a1a] leading-[1.08] mb-1">
              {slide.headline}
            </h1>
            <h2 className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] italic font-light text-[#B8962E] leading-[1.08] mb-7">
              {slide.subHeadline}
            </h2>

            {/* Gold divider */}
            <div className="gold-divider mb-7" />

            {/* Description */}
            <p className="text-[#5a5a5a] font-light text-[1.05rem] leading-relaxed max-w-[440px] mb-10">
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link to={slide.ctaPath} className="btn-gold">
                {slide.cta}
              </Link>
              <Link to={slide.cta2Path} className="btn-outline-dark">
                {slide.cta2}
              </Link>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`block h-[2px] transition-all duration-500 rounded-full ${
                    i === current ? 'w-10 bg-[#B8962E]' : 'w-4 bg-[#ccc]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Right: Image ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-img'}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end items-center relative"
          >
            {/* Soft circular glow behind image */}
            <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-[#B8962E]/8 blur-3xl" />
            <img
              src={slide.image}
              alt={slide.headline}
              className="relative z-10 w-[280px] md:w-[400px] lg:w-[460px] max-h-[520px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 border border-[#B8962E]/40 text-[#B8962E] flex items-center justify-center hover:bg-[#B8962E] hover:text-white hover:border-[#B8962E] transition-all duration-200 bg-white/60 backdrop-blur-sm"
      >
        <FiChevronLeft size={17} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 border border-[#B8962E]/40 text-[#B8962E] flex items-center justify-center hover:bg-[#B8962E] hover:text-white hover:border-[#B8962E] transition-all duration-200 bg-white/60 backdrop-blur-sm"
      >
        <FiChevronRight size={17} />
      </button>
    </section>
  );
};

export default Hero;
