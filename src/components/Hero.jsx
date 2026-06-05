import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    headline: 'Where Heritage',
    subHeadline: 'Meets the Ocean',
    desc: 'Handcrafted jewellery inspired by the timeless beauty of Sri Lanka\'s southern coast.',
    cta: 'Explore Collection',
    ctaPath: '/collections',
    cta2: 'Virtual Try-On',
    cta2Path: '/try-on',
    bg: 'bg-gradient-to-br from-[#F5F0E8] via-[#FDFCF9] to-[#EDE8DC]',
    image: '/hero_jewellery.png',
  },
  {
    headline: 'Crafted for You',
    subHeadline: 'Personalised & Perfect',
    desc: 'Use our AI-powered advisor to find jewellery that perfectly matches your face, skin tone, and personality.',
    cta: 'Get AI Recommendations',
    ctaPath: '/try-on',
    cta2: 'Customize Yours',
    cta2Path: '/customize',
    bg: 'bg-gradient-to-br from-[#FDFCF9] via-[#F5F0E8] to-[#f0e8d8]',
    image: '/necklace.png',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-700 ${slides[current].bg}`}>

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8962E]/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-text'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-4">
              — Wave Mirissa Coastal Jewellery
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#1a1a1a] leading-[1.05] mb-2">
              {slides[current].headline}
            </h1>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl italic font-light text-[#B8962E] leading-[1.05] mb-6">
              {slides[current].subHeadline}
            </h1>

            <div className="gold-divider mb-6 ml-1"></div>

            <p className="text-[#555] font-light text-base md:text-lg max-w-md leading-relaxed mb-10">
              {slides[current].desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={slides[current].ctaPath} className="btn-gold rounded-none text-center">
                {slides[current].cta}
              </Link>
              <Link to={slides[current].cta2Path} className="btn-outline-dark rounded-none text-center">
                {slides[current].cta2}
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-500 ${i === current ? 'w-10 bg-[#B8962E]' : 'w-4 bg-[#ccc]'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-img'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* Decorative background circle */}
            <div className="absolute w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-[#B8962E]/10 to-transparent"></div>
            <img
              src={slides[current].image}
              alt="Wave Mirissa Jewellery"
              className="relative z-10 w-72 md:w-[420px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#B8962E]/30 text-[#B8962E] flex items-center justify-center hover:bg-[#B8962E] hover:text-white transition-all z-20"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#B8962E]/30 text-[#B8962E] flex items-center justify-center hover:bg-[#B8962E] hover:text-white transition-all z-20"
      >
        <FiChevronRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
