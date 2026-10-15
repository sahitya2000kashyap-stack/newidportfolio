import React from 'react';
import { BRANDS } from '../data/brandsData';

export default function BrandLogos({ 
  headline = "Brands & Industry Collaborations",
  tagline = "Trusted by enterprise market leaders, defence organisations, and high-volume consumer brands."
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-28 md:pb-36">
      <div className="border-t border-neutral-100 pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-mono">
                Industry Track Record
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
              {headline}
            </h2>
          </div>
          <p className="text-base text-neutral-500 max-w-lg font-light leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* 8-Brand Industrial Logo Grid (2x4 Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group relative flex items-center justify-center bg-white hover:bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-900/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xs h-32 md:h-36"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                loading="lazy"
                className={`${brand.sizeClass} w-auto object-contain filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
