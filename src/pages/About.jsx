import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiAward, FiHeart, FiStar } from 'react-icons/fi';

const milestones = [
  { year: '2024', event: 'Wave Mirissa Founded', desc: 'Born from a passion for coastal craftsmanship, Wave Mirissa opened its first studio in Mirissa.' },
  { year: '2024', event: 'AI Integration', desc: 'Launched AI-powered face shape and skin tone analysis to personalize jewellery recommendations.' },
  { year: '2024', event: 'Virtual Try-On', desc: 'Introduced cutting-edge virtual try-on technology, allowing customers to visualize jewellery before purchase.' },
  { year: '2025', event: 'Collections Expanded', desc: 'Grew to over 200 unique handcrafted pieces inspired by Sri Lanka\'s southern coastline.' },
  { year: '2025', event: 'Island-Wide Recognition', desc: 'Recognized as one of Sri Lanka\'s most innovative jewellery brands by Coastal Living Magazine.' },
];

const pillars = [
  { icon: <FiAward size={28} />, title: 'Design', desc: 'Our designs are inspired by the serene beauty of the Sri Lankan coast — waves, shells, and the eternal ocean. Each piece is a wearable work of art that blends tradition with modernity.' },
  { icon: <FiHeart size={28} />, title: 'Craftsmanship', desc: 'Every Wave Mirissa piece is hand-crafted by master artisans with decades of experience. We use only the finest 22-karat gold, ethically sourced precious stones, and eco-conscious materials.' },
  { icon: <FiStar size={28} />, title: 'Quality', desc: 'We guarantee every piece meets the highest international standards. Our jewellery comes with a lifetime quality guarantee and free resizing for the life of the piece.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="About Us"
        subtitle="Six decades of tradition, reborn through the spirit of the ocean."
        crumbs={[{ name: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Our Story</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light mb-6 leading-snug">
                Born from the <em className="text-[#B8962E] not-italic">ocean's embrace</em>
              </h2>
              <div className="gold-divider mb-6"></div>
              <p className="text-[#555] font-light leading-relaxed mb-4">
                Wave Mirissa began with a simple vision: to capture the breathtaking beauty of Sri Lanka's southern coast and transform it into wearable art. Founded by a team of passionate artisans and technology pioneers, we marry ancient jewellery-making traditions with cutting-edge AI personalization.
              </p>
              <p className="text-[#555] font-light leading-relaxed mb-4">
                Our studio, perched just steps from the turquoise shores of Mirissa, is where every piece begins its journey — from raw gold and ethically sourced gemstones to the finished creation that adorns you.
              </p>
              <p className="text-[#555] font-light leading-relaxed">
                We believe that jewellery is more than an accessory — it is a personal statement, a memory, a piece of you. That is why every Wave Mirissa creation is crafted with intention, care, and the timeless spirit of the sea.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative">
                <div className="bg-[#F5F0E8] p-10 flex items-center justify-center min-h-[400px]">
                  <img src="/hero_jewellery.png" alt="Wave Mirissa Story" className="w-full max-w-sm object-contain drop-shadow-xl" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#B8962E] text-white p-6 shadow-xl">
                  <p className="font-serif text-3xl font-light">Est.</p>
                  <p className="font-serif text-4xl font-semibold">2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Our Values</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light">The Pillars of Wave Mirissa</h2>
            <div className="gold-divider mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#FDFCF9] p-10 border-t-2 border-[#B8962E] hover:shadow-lg transition-shadow"
              >
                <div className="text-[#B8962E] mb-5">{pillar.icon}</div>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-4">{pillar.title}</h3>
                <div className="gold-divider mb-4"></div>
                <p className="text-[#666] font-light text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FDFCF9]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Our Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light">Golden Milestones</h2>
            <div className="gold-divider mx-auto mt-4"></div>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#e8e0d0]"></div>
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex gap-8 items-start ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <p className="text-[#B8962E] font-serif text-3xl font-light">{m.year}</p>
                    <h4 className="font-serif text-xl text-[#1a1a1a] font-light mt-1 mb-2">{m.event}</h4>
                    <p className="text-[#777] text-sm font-light leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Center dot */}
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#B8962E] border-4 border-[#FDFCF9] ring-1 ring-[#B8962E] mt-1.5 relative z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
