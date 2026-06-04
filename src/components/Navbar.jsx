import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    { name: 'Collections', path: '/collections' },
    { name: 'Customize', path: '/customize' },
    { name: 'Try-On', path: '/try-on' },
  ];

  return (
    <motion.header
      layout
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-stone-800 focus:outline-none transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FiX size={26} strokeWidth={1.5} /> : <FiMenu size={26} strokeWidth={1.5} />}
        </button>

        {/* Desktop Left Nav */}
        <nav className="hidden md:flex flex-1 space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-stone-600 hover:text-stone-900 text-sm uppercase tracking-widest font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Logo — centered */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-serif text-stone-900 uppercase tracking-[0.2em] font-medium flex-shrink-0 mx-auto md:mx-0"
        >
          Wave Mirissa
        </Link>

        {/* Desktop Right Nav / Auth Actions */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
          {user ? (
            <>
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <FiUser size={18} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-widest font-medium">{user.name?.split(' ')[0] || 'Profile'}</span>
              </Link>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <FiLogOut size={18} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-widest font-medium">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <FiUser size={18} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-widest font-medium">Account</span>
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-stone-900 text-white text-xs uppercase tracking-widest font-medium hover:bg-stone-700 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Right Spacer (to keep logo centered) */}
        <div className="w-6 md:hidden"></div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-stone-200/50 shadow-elegant"
          >
            <div className="flex flex-col px-6 py-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-stone-800 hover:text-stone-500 text-lg uppercase tracking-[0.15em] font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-stone-200 mx-auto my-2"></div>
              {user ? (
                <>
                  <Link to="/profile" className="text-stone-800 hover:text-stone-500 text-lg uppercase tracking-[0.15em] font-medium">
                    Profile
                  </Link>
                  <button onClick={onLogout} className="text-stone-800 hover:text-stone-500 text-lg uppercase tracking-[0.15em] font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-stone-800 hover:text-stone-500 text-lg uppercase tracking-[0.15em] font-medium">
                    Account
                  </Link>
                  <Link to="/register" className="text-stone-800 hover:text-stone-500 text-lg uppercase tracking-[0.15em] font-medium">
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
