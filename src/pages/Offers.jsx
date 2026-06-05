import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

const offers = [
  { badge: 'Limited Time', title: 'Diamond Diamond Special', desc: 'Get up to 60% off on selected diamond jewellery. Offer valid for in-store and online purchases.', highlight: 'Up to 60% OFF' },
  { badge: 'Buy More Save More', title: 'Gold Chain Bundle', desc: 'Buy any 2 gold chains and get the 3rd one absolutely free. Choose from our wide range of styles.', highlight: 'Buy 2 Get 1 Free' },
  { badge: 'Exclusive', title: 'Gold Coin Gifting Offer', desc: 'Purchase any jewellery set above LKR 150,000 and receive a complimentary 1-gram gold coin.', highlight: 'Free Gold Coin' },
  { badge: 'Seasonal', title: 'Bridal Collection Discount', desc: 'Exclusive 20% discount on our curated bridal jewellery sets for weddings booked this season.', highlight: '20% OFF Bridal Sets' },
  { badge: 'Members Only', title: 'Loyalty Reward Points', desc: 'Earn double points on every purchase this month. Redeem points for exclusive discounts and gifts.', highlight: '2x Loyalty Points' },
  { badge: 'New', title: 'Virtual Try-On Launch Offer', desc: 'Use our AI Virtual Try-On feature and get 10% off your first purchase. No code needed — discount applied automatically.', highlight: '10% OFF First Purchase' },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Exclusive Offers"
        subtitle="Discover our latest promotions, installment plans, and seasonal deals."
        crumbs={[{ name: 'Exclusive Offers' }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Current Season</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-light mb-4">
              Exclusive Offers for This Season
            </h2>
            <div className="gold-divider mx-auto mb-6"></div>
            <p className="text-[#666] font-light max-w-2xl mx-auto">
              At Wave Mirissa, we believe luxury should be accessible. Browse our current promotional offers — valid for a limited time only. Contact us to inquire or place an order.
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-[#e8e0d0] hover:border-[#B8962E]/40 hover:shadow-lg transition-all group"
              >
                <div className="bg-[#111] px-4 py-2 flex items-center justify-between">
                  <span className="text-[#B8962E] text-[10px] tracking-[0.2em] uppercase font-medium">{offer.badge}</span>
                  <span className="text-white font-serif text-sm font-light">{offer.highlight}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#1a1a1a] font-light mb-3">{offer.title}</h3>
                  <p className="text-[#777] text-sm font-light leading-relaxed mb-5">{offer.desc}</p>
                  <div className="flex items-center gap-2 text-[#555] text-xs font-light">
                    <FiCheck size={14} className="text-[#B8962E]" />
                    <span>Valid for all purchases</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] text-white text-center py-16 px-8"
          >
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-4">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Interested in an offer? <em className="text-[#B8962E]">Inquire now.</em>
            </h2>
            <div className="gold-divider mx-auto mb-6"></div>
            <p className="text-[#aaa] font-light max-w-lg mx-auto mb-8 text-sm">
              Our team is ready to assist you with any queries about our offers, pricing, or customization. Click below to connect directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/94771234567?text=Hi%20Wave%20Mirissa!%20I%20am%20interested%20in%20your%20exclusive%20offers."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm tracking-[0.12em] uppercase font-medium hover:bg-[#128C7E] transition-colors shadow-lg"
            >
              <FaWhatsapp size={22} />
              Inquire Now on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Offers;
