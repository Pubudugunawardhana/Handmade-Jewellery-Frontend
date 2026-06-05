import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiCheck } from 'react-icons/fi';

const metals = ['24K Gold', '22K Gold', '18K Gold', 'White Gold', 'Rose Gold', 'Silver'];
const stones = ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Pearl', 'Amethyst', 'No Stone'];
const TYPES = [
  { name: 'Necklace',  svgPath: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 4v8m-4-4h8' },
  { name: 'Earrings',  svgPath: 'M9 3h6v2a3 3 0 0 1-6 0V3zM9 5a3 3 0 1 0 6 0M12 8v13' },
  { name: 'Bracelet',  svgPath: 'M5 12a7 7 0 1 0 14 0A7 7 0 0 0 5 12zm7-3v3l2 2' },
  { name: 'Pendant',   svgPath: 'M12 2a3 3 0 0 1 3 3v1h2l-3 14H10L7 6h2V5a3 3 0 0 1 3-3z' },
  { name: 'Ring',      svgPath: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z' },
  { name: 'Bangle',    svgPath: 'M4 12a8 8 0 1 0 16 0A8 8 0 0 0 4 12zm8-5v2m0 6v2m5-5h-2m-6 0H7' },
];
const occasions = ['Everyday Wear', 'Wedding', 'Engagement', 'Anniversary', 'Birthday Gift', 'Festival'];

const STEPS = ['Jewellery Type', 'Materials', 'Details', 'Review'];

const Customize = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({ type: '', metal: '', stone: '', occasion: '', budget: 50000, notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const sel = (k, v) => setConfig(c => ({ ...c, [k]: v }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFCF9]">
        <PageHero title="Customization Request Sent" crumbs={[{ name: 'Customize' }]} />
        <div className="max-w-2xl mx-auto px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-20 h-20 rounded-full bg-[#B8962E]/10 border-2 border-[#B8962E]/30 flex items-center justify-center mx-auto mb-8">
              <FiCheck size={36} className="text-[#B8962E]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-4xl text-[#1a1a1a] font-light mb-3">Request Received!</h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-[#666] font-light mb-2">Our master craftsmen will review your design specifications.</p>
            <p className="text-[#666] font-light mb-10">
              You will receive a detailed quote within{' '}
              <span className="text-[#B8962E] font-medium">24–48 hours</span>.
            </p>
            {/* Summary table */}
            <div className="bg-[#F5F0E8] border border-[#ede6d8] text-left p-8 mb-8">
              <h4 className="font-serif text-xl text-[#1a1a1a] font-light mb-5">Your Configuration</h4>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                {[['Type', config.type], ['Metal', config.metal], ['Gemstone', config.stone], ['Occasion', config.occasion], ['Budget', `LKR ${config.budget.toLocaleString()}`]].map(([l, v]) => (
                  <React.Fragment key={l}>
                    <span className="text-[10px] tracking-widest uppercase text-[#999]">{l}</span>
                    <span className="font-serif text-base text-[#1a1a1a] font-light">{v || '—'}</span>
                  </React.Fragment>
                ))}
              </div>
              {config.notes && (
                <div className="mt-4 pt-4 border-t border-[#ede6d8]">
                  <p className="text-[10px] tracking-widest uppercase text-[#999] mb-1">Special Notes</p>
                  <p className="text-[#555] font-light text-sm">{config.notes}</p>
                </div>
              )}
            </div>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setConfig({ type: '', metal: '', stone: '', occasion: '', budget: 50000, notes: '' }); }}
              className="btn-gold"
            >
              Start a New Design
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Customize Your Jewellery"
        subtitle="Design the perfect piece — tailored exactly to your taste and occasion."
        crumbs={[{ name: 'Customize' }]}
      />

      <section className="py-16">
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 56px' }}>

          {/* ── Step Indicator ── */}
          <div className="flex items-start justify-center mb-14">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2" style={{ width: 80 }}>
                    <div className={`w-9 h-9 flex items-center justify-center text-xs font-semibold border transition-all duration-300 ${
                      done   ? 'bg-[#B8962E] border-[#B8962E] text-white' :
                      active ? 'border-[#B8962E] text-[#B8962E] bg-white' :
                               'border-[#ddd] text-[#bbb] bg-white'
                    }`}>
                      {done ? <FiCheck size={14} strokeWidth={2.5} /> : n}
                    </div>
                    <span className={`text-[9px] tracking-[0.08em] uppercase font-medium text-center leading-tight px-1 ${
                      active ? 'text-[#B8962E]' : done ? 'text-[#B8962E]/60' : 'text-[#bbb]'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`h-px flex-1 mt-[18px] transition-all duration-300 ${step > n ? 'bg-[#B8962E]' : 'bg-[#e0d8cc]'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>

            {/* ── Step 1: Type ── */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-2 text-center">What would you like to create?</h3>
                <p className="text-center text-[#999] text-sm font-light mb-8">Select one jewellery type to continue.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {TYPES.map(t => (
                    <button
                      type="button"
                      key={t.name}
                      onClick={() => sel('type', t.name)}
                      className={`group p-7 border text-center transition-all duration-200 hover:border-[#B8962E] hover:bg-[#B8962E]/3 ${
                        config.type === t.name ? 'border-[#B8962E] bg-[#B8962E]/5 shadow-sm' : 'border-[#e0d8cc] bg-white'
                      }`}
                    >
                      {/* Simple geometric SVG icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke={config.type === t.name ? '#B8962E' : '#aaa'} strokeWidth="1.4" className="w-9 h-9 mx-auto mb-3 transition-colors group-hover:stroke-[#B8962E]">
                        <path strokeLinecap="round" strokeLinejoin="round" d={t.svgPath} />
                      </svg>
                      <span className={`font-serif text-[1.05rem] font-light ${config.type === t.name ? 'text-[#B8962E]' : 'text-[#1a1a1a]'}`}>
                        {t.name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Materials ── */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-2 text-center">Choose your materials</h3>
                <p className="text-center text-[#999] text-sm font-light mb-8">Select a metal and a gemstone preference.</p>

                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#555] mb-4">Metal Type</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {metals.map(m => (
                      <button type="button" key={m} onClick={() => sel('metal', m)}
                        className={`py-3 px-5 border text-[0.82rem] font-light transition-all duration-200 ${
                          config.metal === m ? 'bg-[#B8962E] border-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E] hover:text-[#B8962E]'
                        }`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#555] mb-4">Gemstone</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stones.map(s => (
                      <button type="button" key={s} onClick={() => sel('stone', s)}
                        className={`py-3 px-4 border text-[0.82rem] font-light transition-all duration-200 ${
                          config.stone === s ? 'bg-[#B8962E] border-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E] hover:text-[#B8962E]'
                        }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Details ── */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-2 text-center">Tell us more</h3>
                <p className="text-center text-[#999] text-sm font-light mb-8">Occasion, budget and any special requests.</p>

                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#555] mb-4">Occasion</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {occasions.map(o => (
                      <button type="button" key={o} onClick={() => sel('occasion', o)}
                        className={`py-3 px-4 border text-[0.82rem] font-light transition-all duration-200 ${
                          config.occasion === o ? 'bg-[#B8962E] border-[#B8962E] text-white' : 'border-[#e0d8cc] bg-white text-[#333] hover:border-[#B8962E] hover:text-[#B8962E]'
                        }`}>
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#555] mb-3">Budget (LKR)</p>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-[#bbb] font-light w-20">10,000</span>
                    <input
                      type="range" min={10000} max={500000} step={5000}
                      value={config.budget}
                      onChange={e => sel('budget', Number(e.target.value))}
                      className="flex-1 accent-[#B8962E] h-1 cursor-pointer"
                    />
                    <span className="text-sm text-[#bbb] font-light w-24 text-right">500,000</span>
                  </div>
                  <p className="text-center font-serif text-3xl text-[#B8962E] font-light">
                    LKR {config.budget.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#555] mb-3">Special Notes <span className="normal-case text-[#bbb]">(optional)</span></p>
                  <textarea
                    value={config.notes}
                    onChange={e => sel('notes', e.target.value)}
                    rows={4}
                    placeholder="Any specific design details, engravings, size preferences, or special requests…"
                    className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* ── Step 4: Review ── */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
                <h3 className="font-serif text-2xl text-[#1a1a1a] font-light mb-2 text-center">Review your design</h3>
                <p className="text-center text-[#999] text-sm font-light mb-8">Confirm everything looks correct before submitting.</p>
                <div className="border border-[#e0d8cc] bg-[#F5F0E8] mb-6">
                  <div className="grid grid-cols-2 divide-y divide-[#e0d8cc]">
                    {[['Jewellery Type', config.type], ['Metal', config.metal], ['Gemstone', config.stone], ['Occasion', config.occasion], ['Budget', `LKR ${config.budget.toLocaleString()}`]].map(([l, v]) => (
                      <React.Fragment key={l}>
                        <div className="px-6 py-4 border-r border-[#e0d8cc]">
                          <p className="text-[9px] tracking-[0.2em] uppercase text-[#aaa] mb-0.5">{l}</p>
                        </div>
                        <div className="px-6 py-4">
                          <p className="font-serif text-lg text-[#1a1a1a] font-light">{v || '—'}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  {config.notes && (
                    <div className="px-6 py-4 border-t border-[#e0d8cc]">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-[#aaa] mb-1">Special Notes</p>
                      <p className="text-[#555] text-sm font-light">{config.notes}</p>
                    </div>
                  )}
                </div>
                <p className="text-center text-[#999] text-sm font-light">
                  Our team will review your request and contact you with a detailed quote within 24–48 hours.
                </p>
              </motion.div>
            )}

            {/* ── Navigation ── */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e8e0d0]">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(s => s - 1)} className="btn-outline-dark">
                  ← Back
                </button>
              ) : <div />}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(s => s + 1)}
                  disabled={step === 1 && !config.type}
                  className="btn-gold"
                >
                  Continue →
                </button>
              ) : (
                <button type="submit" className="btn-gold">Submit Request</button>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Customize;
