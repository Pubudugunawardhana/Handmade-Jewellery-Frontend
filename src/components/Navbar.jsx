import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const onLogout = () => {
        localStorage.removeItem('auth-token');
        setUser(null);
        navigate('/login');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Collections', path: '/collections' },
        { name: 'Customize', path: '/customize' }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-[#F0F3BD] tracking-wider">
                            Wave Mirissa
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className="text-[#E0E1DD] hover:text-[#00A896] transition-colors font-medium text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="ml-4 flex items-center space-x-4 border-l border-white/20 pl-4">
                            {user ? (
                                <>
                                    <Link to="/profile" className="text-[#E0E1DD] hover:text-[#00A896] transition-colors font-medium text-sm">
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={onLogout} 
                                        className="px-4 py-2 rounded-full border border-[#00A896] text-[#00A896] hover:bg-[#00A896]/10 transition-colors text-sm font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-[#E0E1DD] hover:text-[#00A896] transition-colors font-medium text-sm">
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        className="px-5 py-2 rounded-full bg-[#028090] text-white hover:bg-[#026670] shadow-[0_4px_15px_rgba(2,128,144,0.4)] transition-all text-sm font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#E0E1DD] hover:text-[#00A896] focus:outline-none"
                        >
                            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    className="block text-[#E0E1DD] hover:text-[#00A896] py-2 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            <div className="w-full border-t border-white/20 my-2"></div>
                            
                            {user ? (
                                <>
                                    <Link to="/profile" className="block text-[#E0E1DD] hover:text-[#00A896] py-2 font-medium">
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={onLogout} 
                                        className="w-full max-w-[200px] mt-2 px-4 py-2 rounded-full border border-[#00A896] text-[#00A896] hover:bg-[#00A896]/10 font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="block text-[#E0E1DD] hover:text-[#00A896] py-2 font-medium">
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        className="w-full max-w-[200px] text-center mt-2 px-5 py-2 rounded-full bg-[#028090] text-white font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
