import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold text-white tracking-widest block">Wave Mirissa</span>
              <span className="text-[9px] tracking-[0.35em] text-[#B8962E] uppercase font-light">Coastal Jewellery — Est. 2024</span>
            </Link>
            <p className="text-[#999] text-sm font-light leading-relaxed mb-6">
              Handcrafted jewellery inspired by the timeless beauty of Sri Lanka's southern coast. Every piece tells a story of the ocean.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer" className="text-[#999] hover:text-[#25D366] transition-colors"><FaWhatsapp size={18} /></a>
              <a href="#" className="text-[#999] hover:text-[#B8962E] transition-colors"><FiFacebook size={17} /></a>
              <a href="#" className="text-[#999] hover:text-[#B8962E] transition-colors"><FiInstagram size={17} /></a>
              <a href="#" className="text-[#999] hover:text-[#B8962E] transition-colors"><FiYoutube size={17} /></a>
              <a href="mailto:info@wavemirissa.lk" className="text-[#999] hover:text-[#B8962E] transition-colors"><FiMail size={17} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-light mb-5 after:block after:w-8 after:h-px after:bg-[#B8962E] after:mt-2">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Collections', path: '/collections' },
                { name: 'Customize', path: '/customize' },
                { name: 'Virtual Try-On', path: '/try-on' },
                { name: 'About Us', path: '/about' },
                { name: 'Exclusive Offers', path: '/offers' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#999] hover:text-[#B8962E] text-sm font-light transition-colors tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg text-white font-light mb-5 after:block after:w-8 after:h-px after:bg-[#B8962E] after:mt-2">Categories</h4>
            <ul className="space-y-2.5">
              {['Necklaces', 'Earrings', 'Pendants', 'Bracelets', 'Rings', 'Bangles', 'Anklets'].map(cat => (
                <li key={cat}>
                  <Link to={`/collections?category=${cat.toLowerCase()}`} className="text-[#999] hover:text-[#B8962E] text-sm font-light transition-colors tracking-wide">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white font-light mb-5 after:block after:w-8 after:h-px after:bg-[#B8962E] after:mt-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[#999] font-light">
                <FiMapPin size={16} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                <span>No. 42, Beach Road,<br />Mirissa, Sri Lanka</span>
              </li>
              <li className="flex gap-3 text-sm text-[#999] font-light">
                <FiPhone size={16} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                <a href="tel:+94771234567" className="hover:text-[#B8962E] transition-colors">+94 77 123 4567</a>
              </li>
              <li className="flex gap-3 text-sm text-[#999] font-light">
                <FiMail size={16} className="text-[#B8962E] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@wavemirissa.lk" className="hover:text-[#B8962E] transition-colors">info@wavemirissa.lk</a>
              </li>
              <li className="flex gap-3 text-sm text-[#999] font-light">
                <FaWhatsapp size={16} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer" className="hover:text-[#B8962E] transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#666] text-xs tracking-wide">© {currentYear} Wave Mirissa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[#666] hover:text-[#B8962E] text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[#666] hover:text-[#B8962E] text-xs transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
