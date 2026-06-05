import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiCamera, FiSmile, FiHeart, FiArrowRight, FiCheck } from 'react-icons/fi';

const faceShapes = ['Oval', 'Round', 'Square', 'Heart', 'Diamond', 'Oblong'];
const skinTones = [
  { name: 'Fair', color: '#FDDBB4' },
  { name: 'Light', color: '#F5C6A0' },
  { name: 'Medium', color: '#D4956A' },
  { name: 'Olive', color: '#B8874E' },
  { name: 'Tan', color: '#9B6B3A' },
  { name: 'Deep', color: '#5C3A1E' },
];
const personalities = [
  { name: 'Classic & Timeless', icon: '👑', desc: 'Elegant, sophisticated, never out of style.' },
  { name: 'Bold & Statement', icon: '🌟', desc: 'Dramatic, eye-catching, unforgettable.' },
  { name: 'Minimalist', icon: '🌿', desc: 'Clean, simple, effortlessly chic.' },
  { name: 'Romantic & Soft', icon: '🌸', desc: 'Feminine, delicate, dreamy.' },
  { name: 'Coastal & Bohemian', icon: '🌊', desc: 'Free-spirited, ocean-inspired, natural.' },
  { name: 'Modern & Edgy', icon: '⚡', desc: 'Contemporary, fashion-forward, unique.' },
];

const recommendations = [
  { name: 'Ocean Wave Necklace', desc: 'Perfectly flatters your facial structure with flowing coastal curves.', image: '/necklace.png', match: '98% Match' },
  { name: 'Pearl Drop Earrings', desc: 'Softens angular features and complements your skin tone beautifully.', image: '/earrings.png', match: '95% Match' },
  { name: 'Coastal Wave Pendant', desc: 'A versatile piece that enhances your natural elegance.', image: '/pendant.png', match: '91% Match' },
];

const TryOn = () => {
  const [step, setStep] = useState(0); // 0=intro, 1=face, 2=skin, 3=personality, 4=results
  const [selections, setSelections] = useState({ face: '', skin: '', personality: '' });

  const select = (key, val) => setSelections(s => ({ ...s, [key]: val }));

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Virtual Try-On & AI Advisor"
        subtitle="Our AI analyzes your unique features to find the jewellery that's made for you."
        crumbs={[{ name: 'Virtual Try-On' }]}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">

          {/* Intro */}
          {step === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <FiSmile size={28} />, title: 'Face Shape Analysis', desc: 'We analyze your face shape to recommend the most flattering styles.' },
                  { icon: <FiHeart size={28} />, title: 'Skin Tone Matching', desc: 'Gold, rose gold, or white gold — we match to your unique complexion.' },
                  { icon: <FiCamera size={28} />, title: 'Personality Styling', desc: 'Your personal style DNA guides our AI recommendations.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#e8e0d0] p-8 hover:border-[#B8962E]/40 transition-colors">
                    <div className="text-[#B8962E] mb-4">{item.icon}</div>
                    <h3 className="font-serif text-lg text-[#1a1a1a] font-light mb-2">{item.title}</h3>
                    <p className="text-[#999] text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="gold-divider mx-auto mb-8"></div>
              <h2 className="font-serif text-3xl text-[#1a1a1a] font-light mb-4">Ready to discover your perfect jewellery?</h2>
              <p className="text-[#666] font-light mb-8">Answer 3 simple questions and our AI will curate a personalized collection just for you.</p>
              <button onClick={() => setStep(1)} className="btn-gold rounded-none inline-flex items-center gap-2">
                Start AI Consultation <FiArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Step 1: Face Shape */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="text-center mb-10">
                <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Step 1 of 3</p>
                <h2 className="font-serif text-3xl text-[#1a1a1a] font-light">What is your face shape?</h2>
                <div className="gold-divider mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {faceShapes.map(shape => (
                  <button key={shape} onClick={() => select('face', shape)}
                    className={`p-6 border text-center transition-all ${selections.face === shape ? 'border-[#B8962E] bg-[#B8962E]/5' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'}`}>
                    <span className="block text-4xl mb-3">
                      {shape === 'Oval' ? '🥚' : shape === 'Round' ? '⭕' : shape === 'Square' ? '⬜' : shape === 'Heart' ? '💝' : shape === 'Diamond' ? '💎' : '📏'}
                    </span>
                    <span className="font-serif text-lg text-[#1a1a1a] font-light">{shape}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button onClick={() => setStep(2)} disabled={!selections.face} className="btn-gold rounded-none disabled:opacity-40">Continue →</button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Skin Tone */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="text-center mb-10">
                <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Step 2 of 3</p>
                <h2 className="font-serif text-3xl text-[#1a1a1a] font-light">What is your skin tone?</h2>
                <div className="gold-divider mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skinTones.map(tone => (
                  <button key={tone.name} onClick={() => select('skin', tone.name)}
                    className={`p-6 border text-center transition-all ${selections.skin === tone.name ? 'border-[#B8962E] ring-2 ring-[#B8962E]/30' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'}`}>
                    <span className="block w-12 h-12 rounded-full mx-auto mb-3 ring-2 ring-white shadow-md" style={{ backgroundColor: tone.color }}></span>
                    <span className="font-serif text-lg text-[#1a1a1a] font-light">{tone.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(1)} className="btn-outline-dark rounded-none">← Back</button>
                <button onClick={() => setStep(3)} disabled={!selections.skin} className="btn-gold rounded-none disabled:opacity-40">Continue →</button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Personality */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="text-center mb-10">
                <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Step 3 of 3</p>
                <h2 className="font-serif text-3xl text-[#1a1a1a] font-light">What describes your style?</h2>
                <div className="gold-divider mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalities.map(p => (
                  <button key={p.name} onClick={() => select('personality', p.name)}
                    className={`p-6 border text-left transition-all flex gap-4 items-start ${selections.personality === p.name ? 'border-[#B8962E] bg-[#B8962E]/5' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'}`}>
                    <span className="text-3xl flex-shrink-0">{p.icon}</span>
                    <div>
                      <p className="font-serif text-lg text-[#1a1a1a] font-light">{p.name}</p>
                      <p className="text-[#999] text-sm font-light">{p.desc}</p>
                    </div>
                    {selections.personality === p.name && <FiCheck size={18} className="text-[#B8962E] ml-auto flex-shrink-0 mt-1" />}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(2)} className="btn-outline-dark rounded-none">← Back</button>
                <button onClick={() => setStep(4)} disabled={!selections.personality} className="btn-gold rounded-none disabled:opacity-40">
                  Get My Recommendations →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Results */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-center mb-10">
                <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Your AI Results</p>
                <h2 className="font-serif text-3xl text-[#1a1a1a] font-light mb-2">Your Perfect Matches</h2>
                <p className="text-[#999] font-light text-sm">Based on your <strong>{selections.face}</strong> face shape, <strong>{selections.skin}</strong> skin tone, and <em>{selections.personality}</em> style.</p>
                <div className="gold-divider mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {recommendations.map((rec, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                    className="bg-white border border-[#e8e0d0] hover:border-[#B8962E]/40 hover:shadow-lg transition-all group">
                    <div className="bg-[#F5F0E8] aspect-square flex items-center justify-center p-6">
                      <img src={rec.image} alt={rec.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-lg text-[#1a1a1a] font-light">{rec.name}</h3>
                        <span className="text-[10px] tracking-widest text-[#B8962E] bg-[#B8962E]/10 px-2 py-1 font-medium uppercase">{rec.match}</span>
                      </div>
                      <p className="text-[#999] text-xs font-light leading-relaxed">{rec.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <button onClick={() => { setStep(0); setSelections({ face: '', skin: '', personality: '' }); }} className="btn-outline-dark rounded-none mr-4">Start Over</button>
                <a href="/collections" className="btn-gold rounded-none inline-block">Shop These Pieces →</a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TryOn;
