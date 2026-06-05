import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Reusable dark navy page hero banner used on every inner page.
 * Props:
 *   - title: string (main heading)
 *   - subtitle: string (description text)
 *   - crumbs: array of { name, path } — last one is current page (no link)
 */
const PageHero = ({ title, subtitle, crumbs = [] }) => {
  return (
    <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
      {/* Decorative gold line top */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B8962E]/50 to-transparent"></div>
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,150,46,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-medium mb-4">Wave Mirissa</p>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-light mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-[#aaa] font-light text-base md:text-lg max-w-2xl mx-auto mb-6">{subtitle}</p>
        )}
        {/* Breadcrumbs */}
        {crumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-[#777] font-light">
            <Link to="/" className="hover:text-[#B8962E] transition-colors tracking-wide">Home</Link>
            {crumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <FiChevronRight size={12} className="text-[#555]" />
                {i === crumbs.length - 1 ? (
                  <span className="text-[#B8962E] tracking-wide">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-[#B8962E] transition-colors tracking-wide">{crumb.name}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Decorative gold line bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8962E]/20 to-transparent"></div>
    </section>
  );
};

export default PageHero;
