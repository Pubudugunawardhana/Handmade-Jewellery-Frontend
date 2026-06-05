import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDFCF9] text-[#1a1a1a] border-t border-[#ede6d8]">
      <div 
        className="w-full px-6 md:px-10 pt-16 pb-8"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* Top Section - Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <span className="font-serif text-[1.8rem] md:text-4xl font-semibold text-[#1a1a1a] tracking-widest block">Wave Mirissa</span>
            <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#B8962E] uppercase font-light mt-1 block">Coastal Jewellery — Est. 2024</span>
          </Link>

          {/* Social & Contact */}
          <div className="flex flex-col items-end gap-6">
            <a href="tel:+94771234567" className="inline-flex items-center gap-2 bg-[#ede6d8]/60 px-5 py-2.5 rounded-full text-sm text-[#1a1a1a] font-medium hover:bg-[#ede6d8] transition-colors">
              <FaWhatsapp size={16} className="text-[#B8962E]" />
              +94 77 123 4567
            </a>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#1a1a1a] hover:text-[#B8962E] transition-colors"><FiFacebook size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-[#1a1a1a] hover:text-[#B8962E] transition-colors"><FiInstagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-[#1a1a1a] hover:text-[#B8962E] transition-colors"><FiYoutube size={20} strokeWidth={1.5} /></a>
              <a href="mailto:info@wavemirissa.lk" className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#B8962E] transition-colors font-medium text-sm ml-2">
                <FiMail size={20} strokeWidth={1.5} />
                info@wavemirissa.lk
              </a>
            </div>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2 lg:pr-8">
            <h4 className="font-medium text-[#B8962E] mb-6 text-[13px] tracking-wide">Wave Mirissa Pvt Ltd</h4>
            <p className="text-[#555] text-[13px] font-medium leading-relaxed mb-6">
              Timeless Craftsmanship, Modern Elegance.
            </p>
            <p className="text-[#1a1a1a] text-[13px] font-bold">Est. 2024</p>
          </div>

          {/* Home Link (mimicking the single link column in Vogue) */}
          <div className="lg:ml-6">
            <Link to="/" className="font-bold text-[13px] text-[#1a1a1a] hover:text-[#B8962E] transition-colors block mb-6">Home</Link>
            <Link to="/collections" className="font-bold text-[13px] text-[#1a1a1a] hover:text-[#B8962E] transition-colors block mb-6">Collections</Link>
            <Link to="/customize" className="font-bold text-[13px] text-[#1a1a1a] hover:text-[#B8962E] transition-colors block">Customize</Link>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-[13px] text-[#1a1a1a] mb-6">Categories</h4>
            <ul className="space-y-4">
              {['Bangles', 'Bracelets', 'Chains', 'Earrings & Studs', 'Necklaces', 'Pendants', 'Rings'].map(cat => (
                <li key={cat}>
                  <Link to={`/collections?category=${cat.toLowerCase()}`} className="text-[#333] hover:text-[#B8962E] text-[13px] font-bold transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Vogue -> About Us */}
          <div>
            <h4 className="font-bold text-[13px] text-[#1a1a1a] mb-6">About Wave</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[#333] hover:text-[#B8962E] text-[13px] font-bold transition-colors">About Us</Link></li>
              <li><Link to="/try-on" className="text-[#333] hover:text-[#B8962E] text-[13px] font-bold transition-colors">Virtual Try-On</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[13px] text-[#1a1a1a] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-[#333] hover:text-[#B8962E] text-[13px] font-bold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[#333] hover:text-[#B8962E] text-[13px] font-bold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-bold text-[13px] text-[#1a1a1a] mb-6">Visit us</h4>
            <div className="text-[#333] text-[13px] mb-6">
              <p className="font-bold mb-1">Head Office</p>
              <p className="font-medium leading-relaxed">No. 42, Beach Road,<br/>Mirissa, Sri Lanka</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#1a1a1a] hover:text-[#B8962E] text-[13px] font-bold transition-colors underline underline-offset-4">Find us on Maps</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ede6d8] pt-6 flex justify-center">
          <p className="text-[#555] text-xs font-medium tracking-wide">© {currentYear} Wave Mirissa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
