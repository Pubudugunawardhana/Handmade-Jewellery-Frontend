import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF9]">

      {/* Elegant minimalist background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-50/40 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-stone-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6"
        >
          The Artisan Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-8 leading-[1.1] tracking-tight"
        >
          Discover Your <br className="hidden md:block" />
          <em className="not-italic text-stone-500">Coastal Charm.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-stone-600 font-light max-w-2xl leading-relaxed mb-12"
        >
          Discover handcrafted jewellery that captures the serene beauty of the coast. Ethically sourced, perfectly customized for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/collections"
              className="block px-10 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest font-medium hover:bg-stone-700 transition-colors w-full sm:w-auto text-center shadow-xl shadow-stone-900/10"
            >
              Explore Collection
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/try-on"
              className="block px-10 py-4 bg-transparent text-stone-900 border border-stone-300 text-sm uppercase tracking-widest font-medium hover:border-stone-900 hover:bg-stone-50 transition-colors w-full sm:w-auto text-center"
            >
              Virtual Try-On
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
