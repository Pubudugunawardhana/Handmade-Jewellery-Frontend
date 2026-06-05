import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLogOut, FiSearch } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'Customize', path: '/customize' },
  { name: 'Virtual Try-On', path: '/try-on' },
  { name: 'About Us', path: '/about' },
];

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem('auth-token');
    setUser(null);
    navigate('/login');
  };

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="w-full bg-[#1a1a1a] py-2 px-4 text-center text-[11px] tracking-[0.22em] text-[#B8962E] uppercase font-medium z-50 relative select-none">
        Free Shipping on orders above Rs.&nbsp;15,000 &mdash; Handcrafted in Sri Lanka
      </div>

      {/* ── Main Header ── */}
      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3'
            : 'bg-[#FDFCF9] border-b border-[#ede6d8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-14 flex items-center gap-8">

          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0 flex flex-col leading-none">
            <span className="font-serif text-[1.6rem] md:text-[1.85rem] font-semibold text-[#1a1a1a] tracking-[0.15em]">
              Wave Mirissa
            </span>
            <span className="text-[9px] tracking-[0.38em] text-[#B8962E] uppercase font-light mt-0.5">
              Coastal Jewellery — Est. 2024
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[11px] tracking-[0.18em] uppercase font-medium transition-colors pb-0.5 group ${
                  isActive(link.path) ? 'text-[#B8962E]' : 'text-[#444] hover:text-[#B8962E]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B8962E] transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0 ml-auto">
            <button aria-label="Search" className="text-[#666] hover:text-[#B8962E] transition-colors">
              <FiSearch size={17} strokeWidth={1.6} />
            </button>

            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-2 text-[#555] hover:text-[#B8962E] transition-colors">
                  <FiUser size={17} strokeWidth={1.6} />
                  <span className="text-[11px] tracking-[0.16em] uppercase font-medium">
                    {user.name?.split(' ')[0] || 'Profile'}
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="text-[#555] hover:text-[#B8962E] transition-colors"
                  aria-label="Logout"
                >
                  <FiLogOut size={17} strokeWidth={1.6} />
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center gap-2 text-[#555] hover:text-[#B8962E] transition-colors">
                <FiUser size={17} strokeWidth={1.6} />
                <span className="text-[11px] tracking-[0.16em] uppercase font-medium">Account</span>
              </Link>
            )}

            <Link to="/register" className="btn-gold">Register</Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden ml-auto text-[#1a1a1a] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={23} strokeWidth={1.5} /> : <FiMenu size={23} strokeWidth={1.5} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden bg-[#FDFCF9] border-t border-[#ede6d8]"
            >
              <div className="flex flex-col px-8 py-6 gap-4">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[11px] tracking-[0.22em] uppercase font-medium py-1 transition-colors ${
                      isActive(link.path) ? 'text-[#B8962E]' : 'text-[#333] hover:text-[#B8962E]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-[#ede6d8] my-1" />
                {user ? (
                  <>
                    <Link to="/profile" className="text-[11px] tracking-[0.22em] uppercase font-medium text-[#333] hover:text-[#B8962E] transition-colors">
                      My Profile
                    </Link>
                    <button onClick={logout} className="text-left text-[11px] tracking-[0.22em] uppercase font-medium text-[#333] hover:text-[#B8962E] transition-colors">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-[11px] tracking-[0.22em] uppercase font-medium text-[#333] hover:text-[#B8962E] transition-colors">
                      Account
                    </Link>
                    <Link to="/register" className="btn-gold text-center">Register</Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
