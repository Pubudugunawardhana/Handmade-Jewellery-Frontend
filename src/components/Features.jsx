import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    name: 'Pendants',
    subtext: 'Gold & Diamond Pendants',
    image: '/pendant.png',
    path: '/collections?category=pendant',
  },
  {
    name: 'Earrings',
    subtext: 'Pearl & Gold Earrings',
    image: '/earrings.png',
    path: '/collections?category=earrings',
  },
  {
    name: 'Necklaces',
    subtext: 'Sapphire Necklaces',
    image: '/necklace.png',
    path: '/collections?category=necklace',
  },
  {
    name: 'Bracelets',
    subtext: 'Wave & Shell Bracelets',
    image: '/bracelet.png',
    path: '/collections?category=bracelet',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Features = () => {
  return (
    <>
      {/* Category Grid — like Vogue Jewellers */}
      <section className="py-20 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3"
            >
              Our Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light mb-4"
            >
              Explore by Category
            </motion.h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Link to={cat.path} className="category-card block bg-[#F5F0E8] group">
                  <div className="aspect-square overflow-hidden bg-[#EDE8DC] flex items-center justify-center p-6">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-light mb-0.5">{cat.name}</h3>
                    <p className="text-[#888] text-xs font-light mb-3">{cat.subtext}</p>
                    <span className="text-[#B8962E] text-xs tracking-[0.18em] uppercase font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <FiArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury 3-Panel Banner */}
      <section className="py-0 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Panel 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#F5F0E8] overflow-hidden group h-[350px] flex items-end"
            >
              <img src="/bracelet.png" alt="Bracelets" className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
              <div className="relative z-10 p-6 w-full bg-gradient-to-t from-[#1a1a1a]/60 to-transparent">
                <p className="text-white font-serif text-2xl font-light">New Arrivals</p>
                <p className="text-[#B8962E] text-xs tracking-widest uppercase mt-1">Bracelets & Bangles</p>
              </div>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative bg-[#EDE8DC] overflow-hidden group h-[350px] flex items-end"
            >
              <img src="/earrings.png" alt="Earrings" className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
              <div className="relative z-10 p-6 w-full bg-gradient-to-t from-[#1a1a1a]/60 to-transparent">
                <p className="text-white font-serif text-2xl font-light">Bestsellers</p>
                <p className="text-[#B8962E] text-xs tracking-widest uppercase mt-1">Earrings & Studs</p>
              </div>
            </motion.div>

            {/* Panel 3 — Text CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#1a1a1a] h-[350px] flex flex-col justify-center items-start p-10"
            >
              <p className="text-[#B8962E] text-xs tracking-[0.3em] uppercase font-medium mb-4">Craftsmanship</p>
              <h3 className="font-serif text-3xl text-white font-light leading-snug mb-6">
                Where trust <br />
                <em className="text-[#B8962E]">shines bright</em>
              </h3>
              <div className="gold-divider mb-6"></div>
              <Link to="/collections" className="btn-gold inline-block rounded-none">
                Explore All
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features / Why Us */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3"
            >
              The Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light mb-4"
            >
              Uniquely Yours
            </motion.h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                num: '01',
                title: 'Bespoke Customization',
                desc: 'Design your own piece by choosing metals, gemstones, and settings. Every jewel is made uniquely for you.',
              },
              {
                num: '02',
                title: 'AI Style Advisor',
                desc: 'Our AI analyzes your face shape, skin tone, and personality to recommend pieces that are most flattering for you.',
              },
              {
                num: '03',
                title: 'Virtual Try-On',
                desc: 'See how each piece looks on you in real-time. Experience before you buy with our cutting-edge virtual fitting room.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#FDFCF9] p-8 border-t-2 border-[#B8962E] group hover:shadow-lg transition-shadow"
              >
                <p className="font-serif text-5xl text-[#B8962E]/20 font-light mb-4 group-hover:text-[#B8962E]/40 transition-colors">
                  {item.num}
                </p>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-3">{item.title}</h3>
                <div className="gold-divider mb-4"></div>
                <p className="text-[#666] font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Trust Bar */}
      <section className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {[
              { stat: '100%', label: 'Handcrafted' },
              { stat: 'Free', label: 'Shipping Island-Wide' },
              { stat: 'AI', label: 'Powered Recommendations' },
              { stat: '24/7', label: 'Customer Support' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="font-serif text-3xl text-[#B8962E] font-light">{item.stat}</span>
                <span className="text-[#aaa] text-xs tracking-[0.15em] uppercase font-light mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
