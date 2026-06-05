import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Footer from '../components/Footer';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('auth-token', data.token);
      setUser(data.user);
      toast.success(`Welcome to Wave Mirissa, ${data.user.name}!`);
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* Left — Brand Panel */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#111] p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,150,46,0.08)_0%,transparent_70%)]"></div>
          <div className="relative z-10 text-center">
            <Link to="/" className="inline-block mb-10">
              <span className="font-serif text-4xl font-light text-white tracking-widest block">Wave Mirissa</span>
              <span className="text-[9px] tracking-[0.4em] text-[#B8962E] uppercase font-light mt-1 block">Coastal Jewellery — Est. 2024</span>
            </Link>
            <div className="gold-divider mx-auto mb-8"></div>
            <img src="/pendant.png" alt="jewellery" className="w-56 object-contain drop-shadow-2xl mx-auto mb-8" />
            <div className="space-y-3 text-left max-w-xs">
              {['Personalized AI jewellery recommendations', 'Access to exclusive member-only offers', 'Save your favorites & customization history', 'Early access to new collections'].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-[#aaa] text-sm font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8962E] flex-shrink-0"></span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Register Form */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Join Wave Mirissa</p>
              <h1 className="font-serif text-4xl text-[#1a1a1a] font-light mb-2">Create your account</h1>
              <div className="gold-divider"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Full Name</label>
                <div className="relative">
                  <FiUser size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your full name"
                    className="w-full border border-[#e0d8cc] bg-white pl-10 pr-4 py-3.5 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Email Address</label>
                <div className="relative">
                  <FiMail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full border border-[#e0d8cc] bg-white pl-10 pr-4 py-3.5 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Password</label>
                <div className="relative">
                  <FiLock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                  <input
                    type={showPass ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} required minLength={6}
                    placeholder="At least 6 characters"
                    className="w-full border border-[#e0d8cc] bg-white pl-10 pr-12 py-3.5 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#B8962E]">
                    {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Confirm Password</label>
                <div className="relative">
                  <FiLock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                  <input
                    type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required
                    placeholder="Confirm your password"
                    className="w-full border border-[#e0d8cc] bg-white pl-10 pr-4 py-3.5 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full rounded-none disabled:opacity-60">
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-sm text-[#888] font-light mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-[#B8962E] hover:underline font-medium">Sign in here →</Link>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
