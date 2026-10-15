import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import BrandLogos from '../components/BrandLogos';
import { GraduationCapIcon, WrenchIcon } from '../components/Icons';
import { 
  EDUCATION_DATA, 
  COMPETENCIES_DATA, 
  CERTIFICATIONS_AND_AWARDS, 
  WORK_EXPERIENCE_DATA 
} from '../data/aboutData';

/* --- PAGE 5: ABOUT ME --- */
export default function AboutPage() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-20">
        <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Tool Maker Turned Industrial Designer
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.08]">
              Design Sensibility <br />
              <span className="text-neutral-400">With Technical Vigour.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
              Formal Industrial Design background from DTU and Offsite Pro, enriched by 4 years of deep shopfloor Tool & Die craftsmanship. I craft cohesive product languages, ergonomic consumer experiences, and category-defining hardware that manufacturers can produce without compromise.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-neutral-100">
              <ProjectImage 
                id="sahitya-studio-cad-setup"
                altText="Sahitya Kashyap Studio CAD & Prototyping Setup" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Brands Worked With */}
      <BrandLogos 
        headline="Brands & Industry Client Experience"
        tagline="Design & Manufacturing engagements across consumer appliances, cabin interior CMF, and additive manufacturing and topology optimization."
      />

      <section className="bg-neutral-900 py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Design Education & ToolMaking Background</h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6">
                  Industrial design leadership driven by user empathy, visual form development, and tactical ergonomics. My foundation in toolmaking acts as a production accelerator—ensuring aesthetic visions survive the engineering handoff intact.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {CERTIFICATIONS_AND_AWARDS.map((item, idx) => (
                    <span 
                      key={idx}
                      className={`px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs font-mono ${
                        item.highlight 
                          ? 'bg-neutral-800/60 text-white font-medium' 
                          : 'text-neutral-300'
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <GraduationCapIcon className="w-4 h-4 text-neutral-300" /> Formal Education
                </div>
                <div className="space-y-4 text-sm">
                  {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx} className={idx > 0 ? "border-t border-neutral-700/50 pt-3" : ""}>
                      <h5 className="font-medium text-white">{edu.title}</h5>
                      <p className="text-neutral-400 text-xs">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <WrenchIcon className="w-4 h-4 text-neutral-300" /> Design Competencies
                </div>
                <div className="space-y-4 text-xs">
                  {COMPETENCIES_DATA.map((comp, idx) => (
                    <div key={idx} className={idx > 0 ? "border-t border-neutral-700/50 pt-3" : ""}>
                      <span className="text-neutral-400 block mb-1">{comp.category}</span>
                      <p className="text-neutral-200 font-medium leading-relaxed">{comp.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Work Experience</h3>
              <div className="space-y-8">
                {WORK_EXPERIENCE_DATA.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 -mx-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-800/30 transition-all duration-200 flex flex-col md:flex-row justify-between gap-4 border-b border-neutral-800 pb-8 last:border-0"
                  >
                    <div>
                      <h4 className="text-xl font-medium text-white">{item.role}</h4>
                      <p className="text-neutral-400 text-sm mt-1">{item.company}</p>
                    </div>
                    <div className="md:text-right flex flex-col md:items-end gap-1">
                      <span className="text-neutral-300 text-sm font-mono font-medium">{item.period}</span>
                      <span className="text-neutral-500 text-xs font-mono">{item.duration}</span>
                      <p className="text-neutral-400 text-sm max-w-sm md:text-right font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
