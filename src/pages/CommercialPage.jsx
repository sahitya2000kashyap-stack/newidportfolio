import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, EyeOff } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import { LayersIcon, DropletsIcon, BatteryChargingIcon } from '../components/Icons';
import { COMMERCIAL_PROGRAMS } from '../data/commercialData';

function getProgramIcon(iconType) {
  switch (iconType) {
    case 'layers':
      return <LayersIcon className="w-5 h-5 text-neutral-900" />;
    case 'droplets':
      return <DropletsIcon className="w-5 h-5 text-neutral-900" />;
    case 'battery':
      return <BatteryChargingIcon className="w-5 h-5 text-neutral-900" />;
    default:
      return null;
  }
}

/* --- PAGE 3: COMMERCIAL --- */
export default function CommercialPage() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to home
      </Link>
      
      <header className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-white bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest">
          <Lock className="w-3 h-3" /> Confidential Commercial Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-tight">
          Commercialized &amp; <br /> Mass Produced Projects
        </h1>
        <p className="text-2xl text-neutral-500 leading-relaxed font-light">
          Selected commercial programs spanning domestic appliances and institutional hardware. Focused on strategic form ideation, and 1:1 high-fidelity visual mockups. Client identities protected under NDA.
        </p>
      </header>

      <section className="space-y-24" aria-labelledby="commercial-programs-heading">
        <h2 id="commercial-programs-heading" className="sr-only">
          Commercial Hardware Programs
        </h2>
        {COMMERCIAL_PROGRAMS.map((prog, pIdx) => (
          <div key={pIdx} className="border-t border-neutral-200 pt-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                {getProgramIcon(prog.iconType)}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">{prog.category}</h3>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{prog.badge}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prog.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-neutral-50 rounded-2xl border border-neutral-200/90 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300"
                >
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-neutral-200/60 relative overflow-hidden border-b border-neutral-200">
                    <ProjectImage 
                      id={item.imageId} 
                      altText={`${item.title} — Confidential Hardware CAD Architecture`} 
                      priority={pIdx === 0 && itemIdx === 0}
                      className="w-full h-full object-cover filter blur-[6px] scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-4">
                      <div className="bg-black/80 border border-neutral-700 text-white px-3 py-1.5 rounded-full flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase mb-1">
                        <EyeOff className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Confidential Hardware Architecture</span>
                      </div>
                      <span className="font-mono text-[9px] text-neutral-200">
                        Sanitized CAD Preview // NDA Protected
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">{item.tag}</span>
                      <h4 className="text-xl md:text-2xl font-medium text-neutral-900 mb-3">{item.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/70">
                      {item.specs.map((s, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-neutral-200 px-2.5 py-1 rounded text-neutral-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <section className="mt-28 p-12 bg-neutral-900 rounded-3xl text-center flex flex-col items-center" aria-labelledby="walkthrough-heading">
        <h2 id="walkthrough-heading" className="text-3xl font-medium text-white mb-4">Request Commercial Projects walkthrough</h2>
        <p className="text-neutral-400 text-base mb-8 max-w-xl font-light">
          Available for private walk-throughs of Design Process, physical visual mockups, and renders for verified teams.
        </p>
        <a 
          href="mailto:design.er.saahi@gmail.com?subject=Confidential%20Portfolio%20Review" 
          className="bg-white text-neutral-900 px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neutral-100 active:scale-95 transition-all duration-200"
        >
          Contact for access
        </a>
      </section>
    </div>
  );
}
