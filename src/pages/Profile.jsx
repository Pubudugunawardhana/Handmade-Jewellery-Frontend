import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiUser, FiMail, FiEdit2, FiLogOut, FiShoppingBag, FiHeart, FiSettings } from 'react-icons/fi';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });
  const [saving, setSaving] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setUser(null);
    navigate('/login');
    toast.success('Logged out successfully.');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem('auth-token');
      const { data } = await axios.put('/api/user/profile', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data);
      setEditing(false);
      toast.success('Profile updated successfully!');
    } catch {
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser size={16} /> },
    { id: 'orders', label: 'My Orders', icon: <FiShoppingBag size={16} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <FiHeart size={16} /> },
    { id: 'settings', label: 'Settings', icon: <FiSettings size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title={`Welcome, ${user?.name?.split(' ')[0] || 'Member'}`}
        subtitle="Manage your account, orders, and personalization preferences."
        crumbs={[{ name: 'My Profile' }]}
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Avatar Card */}
              <div className="bg-white border border-[#e8e0d0] p-6 text-center mb-4">
                <div className="w-20 h-20 rounded-full bg-[#B8962E]/10 flex items-center justify-center mx-auto mb-4 border-2 border-[#B8962E]/20">
                  <span className="font-serif text-3xl text-[#B8962E] font-light">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <p className="font-serif text-xl text-[#1a1a1a] font-light">{user?.name}</p>
                <p className="text-[#999] text-xs font-light mt-1 tracking-wide">{user?.email}</p>
                <div className="inline-block bg-[#B8962E]/10 text-[#B8962E] text-[10px] tracking-[0.15em] uppercase font-medium px-3 py-1 mt-3">{user?.role || 'Member'}</div>
              </div>

              {/* Tabs */}
              <div className="bg-white border border-[#e8e0d0] overflow-hidden">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-sm font-light text-left border-b border-[#f0ebe0] last:border-b-0 transition-colors ${activeTab === tab.id ? 'bg-[#B8962E]/5 text-[#B8962E] border-l-2 border-l-[#B8962E]' : 'text-[#555] hover:text-[#B8962E] hover:bg-[#F5F0E8]/50'}`}
                  >
                    {tab.icon}
                    <span className="tracking-wide">{tab.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-5 py-4 text-sm font-light text-[#e05] hover:bg-red-50 transition-colors"
                >
                  <FiLogOut size={16} />
                  <span className="tracking-wide">Logout</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#e8e0d0]">
                  <div className="flex items-center justify-between px-8 py-5 border-b border-[#f0ebe0]">
                    <h2 className="font-serif text-2xl text-[#1a1a1a] font-light">Personal Information</h2>
                    {!editing && (
                      <button onClick={() => setEditing(true)} className="flex items-center gap-2 text-[#B8962E] text-sm font-medium hover:underline">
                        <FiEdit2 size={14} /> Edit
                      </button>
                    )}
                  </div>
                  <div className="p-8">
                    {!editing ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-[10px] tracking-widest uppercase text-[#999] font-medium mb-1.5">Full Name</p>
                            <p className="font-serif text-xl text-[#1a1a1a] font-light">{user?.name}</p>
                          </div>
                          <div>
                            <p className="text-[10px] tracking-widest uppercase text-[#999] font-medium mb-1.5">Email Address</p>
                            <p className="text-[#333] font-light">{user?.email}</p>
                          </div>
                          <div>
                            <p className="text-[10px] tracking-widest uppercase text-[#999] font-medium mb-1.5">Account Type</p>
                            <p className="text-[#333] font-light">{user?.role || 'Registered Member'}</p>
                          </div>
                          <div>
                            <p className="text-[10px] tracking-widest uppercase text-[#999] font-medium mb-1.5">Member Since</p>
                            <p className="text-[#333] font-light">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'June 2024'}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSave} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Full Name</label>
                            <input
                              type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
                              className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] focus:outline-none focus:border-[#B8962E] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[#555] mb-2">Email Address</label>
                            <input
                              type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
                              className="w-full border border-[#e0d8cc] bg-white px-4 py-3 text-sm font-light text-[#333] focus:outline-none focus:border-[#B8962E] transition-colors"
                            />
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button type="submit" disabled={saving} className="btn-gold rounded-none disabled:opacity-60">
                            {saving ? 'Saving...' : 'Save Changes'}
                          </button>
                          <button type="button" onClick={() => setEditing(false)} className="btn-outline-dark rounded-none">Cancel</button>
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#e8e0d0]">
                  <div className="px-8 py-5 border-b border-[#f0ebe0]">
                    <h2 className="font-serif text-2xl text-[#1a1a1a] font-light">My Orders</h2>
                  </div>
                  <div className="p-8 text-center py-20">
                    <FiShoppingBag size={40} className="text-[#e0d8cc] mx-auto mb-4" />
                    <p className="font-serif text-xl text-[#aaa] font-light mb-2">No orders yet</p>
                    <p className="text-[#bbb] font-light text-sm mb-6">Your order history will appear here once you make a purchase.</p>
                    <a href="/collections" className="btn-gold rounded-none inline-block">Browse Collection</a>
                  </div>
                </motion.div>
              )}

              {activeTab === 'wishlist' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#e8e0d0]">
                  <div className="px-8 py-5 border-b border-[#f0ebe0]">
                    <h2 className="font-serif text-2xl text-[#1a1a1a] font-light">My Wishlist</h2>
                  </div>
                  <div className="p-8 text-center py-20">
                    <FiHeart size={40} className="text-[#e0d8cc] mx-auto mb-4" />
                    <p className="font-serif text-xl text-[#aaa] font-light mb-2">Your wishlist is empty</p>
                    <p className="text-[#bbb] font-light text-sm mb-6">Save pieces you love to your wishlist and never miss an exclusive offer.</p>
                    <a href="/collections" className="btn-gold rounded-none inline-block">Explore Jewellery</a>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#e8e0d0]">
                  <div className="px-8 py-5 border-b border-[#f0ebe0]">
                    <h2 className="font-serif text-2xl text-[#1a1a1a] font-light">Account Settings</h2>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="p-5 border border-[#f0ebe0]">
                      <h3 className="font-serif text-lg text-[#1a1a1a] font-light mb-1">Email Notifications</h3>
                      <p className="text-[#999] text-sm font-light mb-4">Receive updates about new collections, exclusive offers, and your order status.</p>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-[#B8962E] w-4 h-4" />
                        <span className="text-sm text-[#555] font-light">Enable email notifications</span>
                      </label>
                    </div>
                    <div className="p-5 border border-red-100 bg-red-50/30">
                      <h3 className="font-serif text-lg text-red-700 font-light mb-1">Danger Zone</h3>
                      <p className="text-[#999] text-sm font-light mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
                      <button className="text-red-600 border border-red-300 px-5 py-2 text-xs tracking-widest uppercase font-medium hover:bg-red-50 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
