import React from 'react';
import { motion } from 'framer-motion';
import { FiMinimize2, FiAperture, FiFeather } from 'react-icons/fi';

const featuresData = [
  {
    title: 'Bespoke Craftsmanship',
    description: 'Design your own unique pieces with our interactive customization tools. Tailor every material and gemstone to your desire.',
    icon: <FiFeather className="w-7 h-7 text-stone-700" strokeWidth={1.5} />,
    className: 'md:col-span-2 md:row-span-1 bg-white',
  },
  {
    title: 'AI Curation',
    description: 'Advanced algorithms analyze your face shape and skin tone to recommend the most flattering and harmonious jewelry.',
    icon: <FiAperture className="w-7 h-7 text-stone-700" strokeWidth={1.5} />,
    className: 'md:col-span-1 md:row-span-2 bg-stone-50',
  },
  {
    title: 'Virtual Fitting Room',
    description: 'Experience how each piece looks on you in real-time. Match your mood and personal aesthetic with the perfect accessory instantly.',
    icon: <FiMinimize2 className="w-7 h-7 text-stone-700" strokeWidth={1.5} />,
    className: 'md:col-span-2 md:row-span-1 bg-white',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Features = () => {
  return (
    <section className="py-32 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20 flex flex-col items-center">
          <p className="text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">The Experience</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6">Uniquely Yours</h2>
          <div className="w-16 h-px bg-stone-300 mb-6"></div>
          <p className="text-stone-600 font-light max-w-2xl mx-auto text-lg">
            Discover the innovative features that transform shopping with Wave Mirissa into an intimately personal journey.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`p-10 lg:p-12 border border-stone-200/60 flex flex-col shadow-elegant transition-all duration-300 group ${feature.className}`}
            >
              <div className="mb-8 p-4 bg-stone-100/50 w-fit rounded-full transition-colors group-hover:bg-stone-200/50">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
