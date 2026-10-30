import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';
import { PLAYGROUND_RENDERS } from '../data/playgroundData';

/* --- PAGE 4: PLAYGROUND WITH SHIMMER LOADERS --- */
export default function PlaygroundPage() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <PlaygroundHeaderNav />
      
      <header className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-neutral-900" /> Visual Lab &amp; Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
          Renders, Form Studies <br />&amp; Explorations
        </h1>
        <p className="text-xl text-neutral-500 leading-relaxed font-light">
          A visual archive of unconstrained CAD experiments, clay models, rapid CMF studies, Blender visual labs, and Grasshopper iterations.
        </p>
      </header>

      <section aria-labelledby="playground-grid-heading">
        <h2 id="playground-grid-heading" className="sr-only">
          CAD Renders &amp; Experimental Form Studies
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {PLAYGROUND_RENDERS.map((item, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xs hover:border-neutral-400 transition-all duration-300 group"
            >
              <ProjectImage 
                id={item.id} 
                altText={item.alt || `${item.id} — Industrial design form and CMF study by Sahitya Kashyap`} 
                fitMode="object-cover"
                withLoader={true}
                priority={idx < 4}
                className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
