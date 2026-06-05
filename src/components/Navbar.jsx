import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiShoppingBag, FiLogOut, FiSearch } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const onLogout = () => {
    localStorage.removeItem('auth-token');
    setUser(null);
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Customize', path: '/customize' },
    { name: 'Virtual Try-On', path: '/try-on' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#1a1a1a] text-center py-2 px-4 text-xs tracking-[0.2em] text-[#B8962E] uppercase font-light z-50 relative">
        Free Shipping on orders above Rs. 15,000 — Handcrafted in Sri Lanka
      </div>

      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-400 ${
          isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-[#FDFCF9] py-4 border-b border-[#e8e0d0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center flex-shrink-0">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-widest leading-none">
              Wave Mirissa
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#B8962E] uppercase mt-0.5 font-light">
              Coastal Jewellery — Est. 2024
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors relative group ${
                  location.pathname === link.path ? 'text-[#B8962E]' : 'text-[#333] hover:text-[#B8962E]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#B8962E] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-[#555] hover:text-[#B8962E] transition-colors">
              <FiSearch size={18} strokeWidth={1.5} />
            </button>
            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-1.5 text-[#555] hover:text-[#B8962E] transition-colors">
                  <FiUser size={18} strokeWidth={1.5} />
                  <span className="text-xs tracking-widest uppercase">{user.name?.split(' ')[0]}</span>
                </Link>
                <button onClick={onLogout} className="text-[#555] hover:text-[#B8962E] transition-colors">
                  <FiLogOut size={18} strokeWidth={1.5} />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 text-[#555] hover:text-[#B8962E] transition-colors"
              >
                <FiUser size={18} strokeWidth={1.5} />
                <span className="text-xs tracking-widest uppercase">Account</span>
              </Link>
            )}
            <Link
              to="/register"
              className="btn-gold inline-block rounded-none"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#1a1a1a] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} strokeWidth={1.5} /> : <FiMenu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden bg-[#FDFCF9] border-t border-[#e8e0d0] overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-xs tracking-[0.2em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8962E] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-12 h-px bg-[#e8e0d0] my-2"></div>
                {user ? (
                  <>
                    <Link to="/profile" className="text-xs tracking-widest uppercase text-[#1a1a1a] hover:text-[#B8962E]">
                      My Profile
                    </Link>
                    <button onClick={onLogout} className="text-left text-xs tracking-widest uppercase text-[#1a1a1a] hover:text-[#B8962E]">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-xs tracking-widest uppercase text-[#1a1a1a] hover:text-[#B8962E]">Account</Link>
                    <Link to="/register" className="btn-gold inline-block text-center rounded-none">Register</Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
