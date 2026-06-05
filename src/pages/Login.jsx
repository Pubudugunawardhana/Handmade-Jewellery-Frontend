import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Footer from '../components/Footer';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/login', form);
      localStorage.setItem('auth-token', data.token);
      setUser(data.user);
      toast.success(`Welcome back, ${data.user.name}!`);
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
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
            <img src="/hero_jewellery.png" alt="jewellery" className="w-64 object-contain drop-shadow-2xl mx-auto mb-8" />
            <p className="text-[#aaa] font-light font-serif text-xl italic leading-relaxed max-w-xs">
              "Every piece of jewellery tells a story of the ocean."
            </p>
          </div>
        </div>

        {/* Right — Login Form */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-2">Welcome Back</p>
              <h1 className="font-serif text-4xl text-[#1a1a1a] font-light mb-2">Sign in to your account</h1>
              <div className="gold-divider"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    type={showPass ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} required
                    placeholder="Enter your password"
                    className="w-full border border-[#e0d8cc] bg-white pl-10 pr-12 py-3.5 text-sm font-light text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#B8962E] transition-colors"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#B8962E]">
                    {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full rounded-none disabled:opacity-60">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <p className="text-center text-sm text-[#888] font-light mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#B8962E] hover:underline font-medium">Create one here →</Link>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
