import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiSliders, FiCircle, FiStar, FiCheck, FiArrowRight } from 'react-icons/fi';

const metals = ['24K Gold', '22K Gold', '18K Gold', 'White Gold', 'Rose Gold', 'Silver'];
const stones = ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Pearl', 'Amethyst', 'No Stone'];
const types = [
  { name: 'Necklace', icon: '📿' },
  { name: 'Earrings', icon: '💍' },
  { name: 'Bracelet', icon: '⌚' },
  { name: 'Pendant', icon: '🔮' },
  { name: 'Ring', icon: '💎' },
  { name: 'Bangle', icon: '🔄' },
];
const occasions = ['Everyday Wear', 'Wedding', 'Engagement', 'Anniversary', 'Birthday Gift', 'Festival'];

const Customize = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({ type: '', metal: '', stone: '', occasion: '', budget: 50000, notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const select = (key, val) => setConfig(c => ({ ...c, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Customize Your Jewellery"
        subtitle="Design the perfect piece — tailored exactly to your taste and occasion."
        crumbs={[{ name: 'Customize' }]}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#B8962E]/10 flex items-center justify-center mx-auto mb-6">
                <FiCheck size={40} className="text-[#B8962E]" />
              </div>
              <h2 className="font-serif text-4xl text-[#1a1a1a] font-light mb-4">Customization Request Sent!</h2>
              <div className="gold-divider mx-auto mb-6"></div>
              <p className="text-[#666] font-light mb-2">Thank you for your request. Our master craftsmen will review your specifications.</p>
              <p className="text-[#666] font-light mb-8">You will receive a detailed quote within <strong className="text-[#B8962E]">24–48 hours</strong>.</p>
              <div className="bg-[#F5F0E8] p-6 text-left max-w-md mx-auto mb-8">
                <h4 className="font-serif text-lg text-[#1a1a1a] font-light mb-3">Your Configuration</h4>
                <div className="space-y-2 text-sm text-[#666] font-light">
                  <p><span className="text-[#B8962E] font-medium">Type:</span> {config.type}</p>
                  <p><span className="text-[#B8962E] font-medium">Metal:</span> {config.metal}</p>
                  <p><span className="text-[#B8962E] font-medium">Stone:</span> {config.stone}</p>
                  <p><span className="text-[#B8962E] font-medium">Occasion:</span> {config.occasion}</p>
                  <p><span className="text-[#B8962E] font-medium">Budget:</span> LKR {config.budget.toLocaleString()}</p>
                </div>
              </div>
              <button onClick={() => { setSubmitted(false); setStep(1); setConfig({ type: '', metal: '', stone: '', occasion: '', budget: 50000, notes: '' }); }} className="btn-gold rounded-none">Start a New Design</button>
            </motion.div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-0 mb-12">
                {['Jewellery Type', 'Materials', 'Details', 'Review'].map((label, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-all border ${step > i + 1 ? 'bg-[#B8962E] border-[#B8962E] text-white' : step === i + 1 ? 'border-[#B8962E] text-[#B8962E]' : 'border-[#ddd] text-[#bbb]'}`}>
                        {step > i + 1 ? <FiCheck size={16} /> : i + 1}
                      </div>
                      <p className={`text-[10px] tracking-[0.1em] uppercase mt-1.5 ${step === i + 1 ? 'text-[#B8962E]' : 'text-[#aaa]'}`}>{label}</p>
                    </div>
                    {i < 3 && <div className={`h-px flex-1 mt-[-14px] mx-2 transition-all ${step > i + 1 ? 'bg-[#B8962E]' : 'bg-[#e0d8cc]'}`}></div>}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Type */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-6 text-center">What would you like to create?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {types.map(t => (
                        <button type="button" key={t.name} onClick={() => select('type', t.name)}
                          className={`p-6 border text-center transition-all hover:border-[#B8962E] ${config.type === t.name ? 'border-[#B8962E] bg-[#B8962E]/5' : 'border-[#e0d8cc] bg-white'}`}>
                          <span className="text-4xl block mb-3">{t.icon}</span>
                          <span className="font-serif text-lg text-[#1a1a1a] font-light">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Materials */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-8 text-center">Choose your materials</h3>
                    <div className="mb-8">
                      <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-[#555] mb-4">Metal Type</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {metals.map(m => (
                          <button type="button" key={m} onClick={() => select('metal', m)}
                            className={`py-3 px-4 border text-sm font-light transition-all ${config.metal === m ? 'border-[#B8962E] bg-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E]'}`}>
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-[#555] mb-4">Gemstone</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {stones.map(s => (
                          <button type="button" key={s} onClick={() => select('stone', s)}
                            className={`py-3 px-4 border text-sm font-light transition-all ${config.stone === s ? 'border-[#B8962E] bg-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E]'}`}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-8 text-center">Final Details</h3>
                    <div className="mb-8">
                      <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-[#555] mb-4">Occasion</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {occasions.map(o => (
                          <button type="button" key={o} onClick={() => select('occasion', o)}
                            className={`py-3 px-4 border text-sm font-light transition-all ${config.occasion === o ? 'border-[#B8962E] bg-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E]'}`}>
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-[#555] mb-3">Budget</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-[#999] text-sm font-light">LKR 10,000</span>
                        <input type="range" min={10000} max={500000} step={5000} value={config.budget} onChange={e => select('budget', Number(e.target.value))} className="flex-1 accent-[#B8962E]" />
                        <span className="text-[#999] text-sm font-light">LKR 500,000</span>
                      </div>
                      <p className="text-center mt-2 font-serif text-2xl text-[#B8962E] font-light">LKR {config.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-[#555] mb-3">Special Notes</h4>
                      <textarea
                        value={config.notes}
                        onChange={e => select('notes', e.target.value)}
                        rows={4}
                        placeholder="Any specific design details, engravings, or special requests..."
                        className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-8 text-center">Review Your Design</h3>
                    <div className="bg-[#F5F0E8] p-8 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {[['Jewellery Type', config.type], ['Metal', config.metal], ['Gemstone', config.stone], ['Occasion', config.occasion], ['Budget', `LKR ${config.budget.toLocaleString()}`]].map(([label, val]) => (
                          <div key={label} className="border-b border-[#e0d8cc] pb-3">
                            <p className="text-[10px] tracking-widest uppercase text-[#999] mb-1">{label}</p>
                            <p className="font-serif text-lg text-[#1a1a1a] font-light">{val || '—'}</p>
                          </div>
                        ))}
                      </div>
                      {config.notes && (<div className="mt-4"><p className="text-[10px] tracking-widest uppercase text-[#999] mb-1">Special Notes</p><p className="text-[#555] font-light text-sm">{config.notes}</p></div>)}
                    </div>
                    <p className="text-center text-[#777] text-sm font-light mb-6">By submitting, our team will review your request and contact you with a detailed quote within 24–48 hours.</p>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10 pt-6 border-t border-[#e0d8cc]">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)} className="btn-outline-dark rounded-none">← Back</button>
                  ) : <div />}
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => setStep(s => s + 1)}
                      disabled={step === 1 && !config.type}
                      className="btn-gold rounded-none disabled:opacity-40"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button type="submit" className="btn-gold rounded-none">Submit Request</button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Customize;
