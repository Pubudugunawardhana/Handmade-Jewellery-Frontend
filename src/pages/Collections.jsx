import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';

const allProducts = [
  { id: 1, name: 'Ocean Wave Necklace', category: 'necklaces', material: 'Gold & Sapphire', image: '/necklace.png', price: 'LKR 85,000' },
  { id: 2, name: 'Pearl Drop Earrings', category: 'earrings', material: 'Gold & Pearl', image: '/earrings.png', price: 'LKR 42,000' },
  { id: 3, name: 'Coastal Wave Pendant', category: 'pendants', material: 'Gold & Diamond', image: '/pendant.png', price: 'LKR 65,000' },
  { id: 4, name: 'Shell Motif Bracelet', category: 'bracelets', material: 'Gold & Diamond', image: '/bracelet.png', price: 'LKR 58,000' },
  { id: 5, name: 'Sapphire Collar Necklace', category: 'necklaces', material: 'White Gold & Sapphire', image: '/necklace.png', price: 'LKR 120,000' },
  { id: 6, name: 'Diamond Stud Earrings', category: 'earrings', material: 'Gold & Diamond', image: '/earrings.png', price: 'LKR 95,000' },
  { id: 7, name: 'Sunrise Pendant', category: 'pendants', material: 'Rose Gold & Ruby', image: '/pendant.png', price: 'LKR 55,000' },
  { id: 8, name: 'Mirissa Wave Bangle', category: 'bracelets', material: 'Gold & Pearl', image: '/bracelet.png', price: 'LKR 78,000' },
  { id: 9, name: 'Layered Gold Necklace', category: 'necklaces', material: 'Gold', image: '/necklace.png', price: 'LKR 48,000' },
  { id: 10, name: 'Teardrop Earrings', category: 'earrings', material: 'Gold & Emerald', image: '/earrings.png', price: 'LKR 67,000' },
  { id: 11, name: 'Diamond Wave Pendant', category: 'pendants', material: 'Gold & Diamond', image: '/pendant.png', price: 'LKR 88,000' },
  { id: 12, name: 'Ocean Pearl Bracelet', category: 'bracelets', material: 'Gold & Pearl', image: '/bracelet.png', price: 'LKR 45,000' },
];

const categories = ['all', 'necklaces', 'earrings', 'pendants', 'bracelets'];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [viewMode, setViewMode] = useState('grid');

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <PageHero
        title="Our Collections"
        subtitle="Discover handcrafted jewellery inspired by the beauty of coastal Sri Lanka."
        crumbs={[{ name: 'Our Collections' }]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Filter + Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e8e0d0]">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-transparent text-[#555] border-[#ddd] hover:border-[#B8962E] hover:text-[#B8962E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View + Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#999] tracking-wide">{filtered.length} pieces</span>
            <div className="flex border border-[#ddd]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#1a1a1a] text-white' : 'text-[#555] hover:text-[#B8962E]'} transition-colors`}
              >
                <FiGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#1a1a1a] text-white' : 'text-[#555] hover:text-[#B8962E]'} transition-colors`}
              >
                <FiList size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white border border-[#f0ebe0] hover:border-[#B8962E]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`bg-[#F5F0E8] overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`overflow-hidden ${viewMode === 'list' ? 'w-40 h-40 flex-shrink-0' : 'aspect-square'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {viewMode === 'list' && (
                  <div className="p-6 flex flex-col justify-center">
                    <p className="text-[#B8962E] text-xs tracking-[0.2em] uppercase font-medium mb-1">{product.category}</p>
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-light mb-1">{product.name}</h3>
                    <p className="text-[#999] text-xs font-light mb-3">{product.material}</p>
                    <p className="text-[#1a1a1a] font-medium text-sm mb-4">{product.price}</p>
                    <Link to={`/collections/${product.id}`} className="btn-gold inline-block text-center w-fit rounded-none">View Details</Link>
                  </div>
                )}
              </div>
              {viewMode === 'grid' && (
                <div className="p-4">
                  <p className="text-[#B8962E] text-[10px] tracking-[0.2em] uppercase font-medium mb-1">{product.category}</p>
                  <h3 className="font-serif text-lg text-[#1a1a1a] font-light mb-0.5">{product.name}</h3>
                  <p className="text-[#999] text-xs font-light mb-2">{product.material}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1a1a1a] font-medium text-sm">{product.price}</span>
                    <Link
                      to={`/collections/${product.id}`}
                      className="text-[#B8962E] text-xs tracking-[0.15em] uppercase font-medium hover:underline transition-all"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-14">
          {[1, 2, 3, 4].map(n => (
            <button
              key={n}
              className={`w-9 h-9 text-sm font-medium transition-all ${n === 1 ? 'bg-[#B8962E] text-white' : 'border border-[#ddd] text-[#555] hover:border-[#B8962E] hover:text-[#B8962E]'}`}
            >
              {n}
            </button>
          ))}
          <button className="w-9 h-9 text-sm border border-[#ddd] text-[#555] hover:border-[#B8962E] hover:text-[#B8962E] transition-all">→</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
