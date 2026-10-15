import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowUpRight, Sparkles } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import { GraduationCapIcon } from '../components/Icons';
import { FLAGSHIP_2026_PROJECTS, ARCHIVE_PROJECTS } from '../data/projectsData';

/* --- PAGE 1: HOME --- */
export default function HomePage() {
  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              INDUSTRIAL DESIGNER @ FUTURE FACTORY, MUMBAI
            </p>
          </div>
          
          <h1 className="text-5xl md:text-[84px] font-medium leading-[1.05] tracking-tight text-neutral-900 mb-10">
            Designing for <br />
            <span className="text-neutral-400">the real world.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed font-light">
            Industrial designer translating complex human behaviors into refined physical products. Leveraging a foundation in Tool & Die precision to ensure that expressive forms, ergonomic interactions, and premium CMF translate flawlessly into high-volume manufacturing.
          </p>
        </div>
      </section>

      {/* SECTION 1: 2026 FLAGSHIP PROJECTS */}
      <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-12 border-b border-neutral-100 pb-6 w-full">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase rounded shrink-0">
              2026
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-900">
              Featured Flagship Works
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 self-end sm:self-auto shrink-0">
            In Active Development
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {FLAGSHIP_2026_PROJECTS.map((proj) => (
            <div 
              key={proj.slug} 
              className="flex flex-col relative select-none cursor-not-allowed group"
            >
              <div className="w-full aspect-[4/3] lg:aspect-[16/11] bg-neutral-100 overflow-hidden mb-6 md:mb-8 relative rounded-2xl shadow-xs border border-neutral-200">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="filter blur-[8px] opacity-60 scale-105 pointer-events-none" 
                />
                
                <div className="absolute inset-0 bg-neutral-900/10 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-neutral-900/90 border border-neutral-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase mb-1 shadow-sm">
                    <Lock className="w-3.5 h-3.5 text-orange-400" />
                    <span>In Active Development</span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-700 font-semibold tracking-wider">
                    Unreleased Flagship Project
                  </span>
                </div>
              </div>

              <div className="filter blur-[4px] opacity-40 pointer-events-none transition-all">
                <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded">
                    {proj.category}
                  </span>
                  <span className="text-neutral-400 font-semibold">{proj.date}</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-500 text-sm md:text-[15px] font-normal leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: 4 PAST CASE STUDIES */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 border-t border-neutral-100 pt-16 pb-4 w-full">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold uppercase rounded shrink-0">
              2023 — 2024
            </span>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500">
              Foundation & Archive Projects
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 self-end sm:self-auto shrink-0">
            04 Case Studies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ARCHIVE_PROJECTS.map((proj) => (
            <Link 
              key={proj.slug} 
              to={`/project/${proj.slug}`}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-neutral-100 overflow-hidden mb-4 rounded-xl shadow-xs border border-neutral-150">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                  <span className="font-bold uppercase tracking-wider text-neutral-500">{proj.category}</span>
                  <span className="text-neutral-400">{proj.date}</span>
                </div>
                <h4 className="text-base md:text-lg font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors leading-snug">
                  {proj.title}
                </h4>
                <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed">
                  {proj.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Page Navigation Cards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            to="/commercial" 
            className="group block bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Lock className="w-4 h-4 text-neutral-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Sanitized Dossier</span>
            </div>
            <h4 className="text-xl font-medium text-neutral-900 mb-2">Commercial Hardware</h4>
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">
              High-volume commercial programs spanning dual-mode cleaning equipment, heavy-duty institutional water systems, and domestic appliances.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Commercial Dossier <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link 
            to="/playground" 
            className="group block bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-neutral-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Visual Lab</span>
            </div>
            <h4 className="text-xl font-medium text-neutral-900 mb-2">Design Playground</h4>
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">
              Dynamic multi-aspect mosaic of unconstrained Blender CAD experiments, physical mockups, and material explorations.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Explore Visual Lab <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link 
            to="/about" 
            className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCapIcon className="w-4 h-4 text-neutral-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Design Background</span>
            </div>
            <h4 className="text-xl font-medium text-white mb-2">About Sahitya</h4>
            <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">
              B.Des from DTU, Offsite Pro Chicago, CSWP Certified, Blender 3D, and Future Factory experience.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white">
              Read Profile <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

