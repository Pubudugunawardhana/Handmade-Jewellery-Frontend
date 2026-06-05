import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const branches = [
  { city: 'Mirissa (Head Office)', address: 'No. 42, Beach Road, Mirissa, Sri Lanka', phone: '+94 77 123 4567', email: 'mirissa@wavemirissa.lk' },
  { city: 'Colombo', address: 'No. 15, Galle Road, Colombo 03, Sri Lanka', phone: '+94 11 456 7890', email: 'colombo@wavemirissa.lk' },
  { city: 'Kandy', address: 'No. 8, Dalada Veediya, Kandy, Sri Lanka', phone: '+94 81 234 5678', email: 'kandy@wavemirissa.lk' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully! We will contact you within 24 hours.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out through any channel below."
        crumbs={[{ name: 'Contact Us' }]}
      />

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Get in Touch</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] font-light mb-6">Send us a Message</h2>
              <div className="gold-divider mb-8"></div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold inline-flex items-center gap-2 rounded-none w-full justify-center disabled:opacity-60"
                >
                  <FiSend size={16} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Direct Contact</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] font-light mb-6">Reach Us Directly</h2>
              <div className="gold-divider mb-8"></div>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <FiMapPin size={20} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#999] font-medium mb-1">Head Office</p>
                    <p className="text-[#333] font-light">No. 42, Beach Road, Mirissa, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FiPhone size={20} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#999] font-medium mb-1">Phone</p>
                    <a href="tel:+94771234567" className="text-[#333] hover:text-[#B8962E] font-light transition-colors">+94 77 123 4567</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FiMail size={20} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#999] font-medium mb-1">Email</p>
                    <a href="mailto:info@wavemirissa.lk" className="text-[#333] hover:text-[#B8962E] font-light transition-colors">info@wavemirissa.lk</a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 text-sm tracking-[0.12em] uppercase font-medium hover:bg-[#128C7E] transition-colors w-full justify-center mb-10"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>

              {/* Business Hours */}
              <div className="bg-[#F5F0E8] p-6 border-l-2 border-[#B8962E]">
                <h4 className="font-serif text-lg text-[#1a1a1a] font-light mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-[#555] font-light">
                    <span>Monday – Friday</span><span className="text-[#B8962E]">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#555] font-light">
                    <span>Saturday</span><span className="text-[#B8962E]">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#555] font-light">
                    <span>Sunday</span><span className="text-[#999]">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-3">Our Showrooms</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-light">Find Us Near You</h2>
            <div className="gold-divider mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border-t-2 border-[#B8962E] hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl text-[#1a1a1a] font-light mb-4">{branch.city}</h3>
                <div className="space-y-3">
                  <p className="flex gap-3 text-[#666] text-sm font-light"><FiMapPin size={14} className="text-[#B8962E] mt-0.5 flex-shrink-0" />{branch.address}</p>
                  <p className="flex gap-3 text-[#666] text-sm font-light"><FiPhone size={14} className="text-[#B8962E] mt-0.5 flex-shrink-0" />{branch.phone}</p>
                  <p className="flex gap-3 text-[#666] text-sm font-light"><FiMail size={14} className="text-[#B8962E] mt-0.5 flex-shrink-0" />{branch.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
