import React from 'react';
import { Link } from 'react-router-dom';

/* --- FOOTER --- */
export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl font-medium text-neutral-900 mb-6 leading-tight">
              Bridging design sensibility and technical vigour.
            </h3>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              Industrial Designer based in Mumbai / Delhi. Designing mass-market appliances and precision hardware for global brands.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6">Contact</p>
              <div className="flex flex-col gap-3 text-neutral-900 font-medium text-sm">
                <a href="mailto:design.er.saahi@gmail.com" className="hover:text-neutral-500 transition-colors">Email</a>
                <a href="tel:+918800633820" className="hover:text-neutral-500 transition-colors">+91-8800633820</a>
                <a href="https://sahityakashyap.in" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">sahityakashyap.in</a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6">Sections & Social</p>
              <div className="flex flex-col gap-3 text-neutral-900 font-medium text-sm">
                <Link to="/" className="hover:text-neutral-500 transition-colors">Home</Link>
                <Link to="/commercial" className="hover:text-neutral-500 transition-colors">Commercial Work</Link>
                <Link to="/playground" className="hover:text-neutral-500 transition-colors">Playground</Link>
                <Link to="/about" className="hover:text-neutral-500 transition-colors">About Me</Link>
                <a href="https://www.behance.net/sahityakashyap" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">Behance</a>
                <a href="https://linkedin.com/in/sahityakashyap" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4 text-[13px] text-neutral-400 font-medium">
          <p>© {new Date().getFullYear()} Sahitya Kashyap</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <span>Portfolio v2.0</span>
            <span>Industrial Designer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

