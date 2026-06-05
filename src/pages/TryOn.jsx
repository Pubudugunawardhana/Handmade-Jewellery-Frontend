import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const FACE_SHAPES = [
  { name: 'Oval',     icon: 'M12 4c-4 0-7 3.5-7 7.5S8 20 12 20s7-4 7-8.5S16 4 12 4z' },
  { name: 'Round',    icon: 'M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z' },
  { name: 'Square',   icon: 'M6 5h12v14H6z' },
  { name: 'Heart',    icon: 'M12 21C12 21 4 13.5 4 8.5a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-8 12.5-8 12.5z' },
  { name: 'Diamond',  icon: 'M12 3l7 9-7 9-7-9z' },
  { name: 'Oblong',   icon: 'M10 3h4c2 0 4 2 4 5v8c0 3-2 5-4 5h-4c-2 0-4-2-4-5V8c0-3 2-5 4-5z' },
];

const SKIN_TONES = [
  { name: 'Fair',   color: '#FDDBB4', text: 'Very light complexion' },
  { name: 'Light',  color: '#F5C6A0', text: 'Light with warm tones' },
  { name: 'Medium', color: '#D4956A', text: 'Medium with golden glow' },
  { name: 'Olive',  color: '#B8874E', text: 'Olive, warm undertone' },
  { name: 'Tan',    color: '#9B6B3A', text: 'Deep tan, rich tone' },
  { name: 'Deep',   color: '#5C3A1E', text: 'Deep, beautifully dark' },
];

const STYLES = [
  { name: 'Classic & Timeless',    desc: 'Elegant pieces that never go out of style.' },
  { name: 'Bold & Statement',      desc: 'Eye-catching, dramatic, unforgettable.' },
  { name: 'Minimalist',            desc: 'Clean, simple, effortlessly modern.' },
  { name: 'Romantic & Soft',       desc: 'Delicate, feminine, dreamy aesthetics.' },
  { name: 'Coastal & Bohemian',    desc: 'Ocean-inspired, free-spirited, natural.' },
  { name: 'Modern & Edgy',         desc: 'Contemporary, fashion-forward, unique.' },
];

const RECS = [
  { name: 'Ocean Wave Necklace',  image: '/necklace.png',  match: 98 },
  { name: 'Pearl Drop Earrings',  image: '/earrings.png',  match: 95 },
  { name: 'Coastal Wave Pendant', image: '/pendant.png',   match: 91 },
];

const TryOn = () => {
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState({ face: '', skin: '', style: '' });

  const pick = (k, v) => setSel(s => ({ ...s, [k]: v }));

  // ── Intro screen ──
  if (step === 0) {
    return (
      <div className="min-h-screen bg-[#FDFCF9]">
        <PageHero
          title="AI Style Advisor"
          subtitle="Answer 3 quick questions and discover jewellery that was made for you."
          crumbs={[{ name: 'Virtual Try-On' }]}
        />

        <section className="py-20">
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 56px' }}>

            {/* How it works */}
            <div className="text-center mb-14">
              <p className="text-[#B8962E] text-[11px] tracking-[0.35em] uppercase font-medium mb-3">How It Works</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light mb-4">Your Personal Stylist</h2>
              <div className="gold-divider mx-auto mb-4" />
              <p className="text-[#666] font-light max-w-xl mx-auto text-[1rem]">
                Our AI analyzes three key factors to curate a selection of jewellery uniquely suited to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { num: '01', title: 'Face Shape Analysis', desc: 'Different face shapes suit different jewellery silhouettes. We match the right proportions to your features.' },
                { num: '02', title: 'Skin Tone Matching',  desc: 'Gold, rose gold, white gold — each complements different skin tones. We find your perfect metal match.' },
                { num: '03', title: 'Style Personality',   desc: 'Your personal aesthetic guides our curation. Tell us your vibe and we handle the rest.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white border border-[#e8e0d0] p-8 border-t-2 border-t-[#B8962E]"
                >
                  <p className="font-serif text-4xl text-[#B8962E]/20 font-light mb-4">{item.num}</p>
                  <h3 className="font-serif text-xl text-[#1a1a1a] font-light mb-3">{item.title}</h3>
                  <div className="gold-divider mb-4" />
                  <p className="text-[#888] font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(1)}
                className="btn-gold inline-flex items-center gap-3"
              >
                Start AI Consultation <FiArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ── Results ──
  if (step === 4) {
    return (
      <div className="min-h-screen bg-[#FDFCF9]">
        <PageHero title="Your AI Results" crumbs={[{ name: 'Virtual Try-On' }, { name: 'Results' }]} />
        <section className="py-20">
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 56px' }}>
            <div className="text-center mb-10">
              <p className="text-[#B8962E] text-[11px] tracking-[0.35em] uppercase font-medium mb-3">Personalized for You</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] font-light mb-3">Your Perfect Matches</h2>
              <div className="gold-divider mx-auto mb-4" />
              <p className="text-[#888] font-light text-sm">
                Based on your <strong className="text-[#1a1a1a]">{sel.face}</strong> face shape,{' '}
                <strong className="text-[#1a1a1a]">{sel.skin}</strong> skin tone, and{' '}
                <em className="text-[#B8962E]">{sel.style}</em> style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {RECS.map((rec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.14 }}
                  className="bg-white border border-[#e8e0d0] hover:border-[#B8962E]/40 hover:shadow-lg transition-all group"
                >
                  <div className="bg-[#F5F0E8] aspect-square flex items-center justify-center p-8">
                    <img src={rec.image} alt={rec.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-lg text-[#1a1a1a] font-light">{rec.name}</h3>
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-[#B8962E]/10 text-[#B8962E] px-2 py-1 font-medium">{rec.match}% Match</span>
                    </div>
                    <Link to="/collections" className="text-[#B8962E] text-[11px] tracking-[0.15em] uppercase font-medium hover:underline inline-flex items-center gap-1">
                      View Details <FiArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => { setStep(0); setSel({ face: '', skin: '', style: '' }); }} className="btn-outline-dark">
                Start Over
              </button>
              <Link to="/collections" className="btn-gold">Shop These Pieces</Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ── Step screens ──
  const steps = [
    {
      label: 'Face Shape',
      question: 'What is your face shape?',
      sub: 'Different shapes suit different jewellery silhouettes.',
      key: 'face',
      can: !!sel.face,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FACE_SHAPES.map(s => (
            <button
              key={s.name}
              type="button"
              onClick={() => pick('face', s.name)}
              className={`group p-7 border text-center transition-all duration-200 ${
                sel.face === s.name ? 'border-[#B8962E] bg-[#B8962E]/5' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={sel.face === s.name ? '#B8962E' : '#bbb'} strokeWidth="1.3" className="w-10 h-10 mx-auto mb-3 transition-colors group-hover:stroke-[#B8962E]">
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <span className={`font-serif text-[1.05rem] font-light ${sel.face === s.name ? 'text-[#B8962E]' : 'text-[#1a1a1a]'}`}>{s.name}</span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Skin Tone',
      question: 'What is your skin tone?',
      sub: 'We use this to match you with the most flattering metal types.',
      key: 'skin',
      can: !!sel.skin,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SKIN_TONES.map(t => (
            <button
              key={t.name}
              type="button"
              onClick={() => pick('skin', t.name)}
              className={`group p-6 border text-center transition-all duration-200 ${
                sel.skin === t.name ? 'border-[#B8962E] ring-1 ring-[#B8962E]/30 bg-white' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'
              }`}
            >
              <span
                className="block w-12 h-12 rounded-full mx-auto mb-3 shadow-md ring-2 ring-white"
                style={{ backgroundColor: t.color }}
              />
              <p className={`font-serif text-[1.05rem] font-light mb-0.5 ${sel.skin === t.name ? 'text-[#B8962E]' : 'text-[#1a1a1a]'}`}>{t.name}</p>
              <p className="text-[#bbb] text-[11px] font-light">{t.text}</p>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Style',
      question: 'Which style resonates with you?',
      sub: 'Your personal aesthetic guides our recommendations.',
      key: 'style',
      can: !!sel.style,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STYLES.map(s => (
            <button
              key={s.name}
              type="button"
              onClick={() => pick('style', s.name)}
              className={`group flex items-start gap-4 p-6 border text-left transition-all duration-200 ${
                sel.style === s.name ? 'border-[#B8962E] bg-[#B8962E]/5' : 'border-[#e0d8cc] bg-white hover:border-[#B8962E]/40'
              }`}
            >
              <div>
                <p className={`font-serif text-[1.1rem] font-light mb-1 ${sel.style === s.name ? 'text-[#B8962E]' : 'text-[#1a1a1a]'}`}>{s.name}</p>
                <p className="text-[#999] text-sm font-light">{s.desc}</p>
              </div>
              {sel.style === s.name && <FiCheck size={18} className="text-[#B8962E] ml-auto flex-shrink-0 mt-0.5" strokeWidth={2} />}
            </button>
          ))}
        </div>
      ),
    },
  ];

  const current = steps[step - 1];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title={current.question}
        subtitle={current.sub}
        crumbs={[{ name: 'Virtual Try-On' }]}
      />

      <section className="py-16">
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 56px' }}>

          {/* Mini step indicator */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className={`flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-medium ${step === i + 1 ? 'text-[#B8962E]' : step > i + 1 ? 'text-[#B8962E]/50' : 'text-[#ccc]'}`}>
                  <span className={`w-6 h-6 flex items-center justify-center border text-[11px] ${step === i + 1 ? 'border-[#B8962E] text-[#B8962E]' : step > i + 1 ? 'border-[#B8962E] bg-[#B8962E] text-white' : 'border-[#ddd] text-[#ccc]'}`}>
                    {step > i + 1 ? <FiCheck size={12} strokeWidth={2.5} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {i < steps.length - 1 && <div className={`h-px w-10 ${step > i + 1 ? 'bg-[#B8962E]' : 'bg-[#e0d8cc]'}`} />}
              </React.Fragment>
            ))}
          </div>

          {/* Step content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            {current.content}
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e8e0d0]">
            <button
              onClick={() => setStep(s => s - 1)}
              className="btn-outline-dark"
            >
              {step === 1 ? '← Back to Intro' : '← Back'}
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!current.can}
                className="btn-gold"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={() => setStep(4)}
                disabled={!current.can}
                className="btn-gold"
              >
                Get My Recommendations →
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TryOn;
