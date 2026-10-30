import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass, Wrench, Mail } from 'lucide-react';
import { updateMetaTags } from '../hooks/useSEO';

export default function NotFoundPage() {
  useEffect(() => {
    updateMetaTags({
      title: 'Page Not Found (404) | Sahitya Kashyap',
      description: 'The requested page could not be found. Navigate back to the industrial design portfolio of Sahitya Kashyap.',
      canonical: '/404'
    });
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-mono text-xs uppercase tracking-widest">
          <span>Error 404 // Coordinate Out of Bounds</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-neutral-900 mb-6 font-mono">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-neutral-500 text-base font-light leading-relaxed mb-10 max-w-md mx-auto">
          The requested CAD model, case study, or directory coordinate does not exist or has been relocated.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10 font-mono text-xs text-left">
          <Link 
            to="/" 
            className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 transition-colors flex items-center gap-3 group"
          >
            <Home className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <div>
              <span className="font-semibold text-neutral-900 block">Home</span>
              <span className="text-neutral-400 text-[11px]">Featured projects</span>
            </div>
          </Link>

          <Link 
            to="/commercial" 
            className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 transition-colors flex items-center gap-3 group"
          >
            <Compass className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <div>
              <span className="font-semibold text-neutral-900 block">Commercial</span>
              <span className="text-neutral-400 text-[11px]">Hardware programs</span>
            </div>
          </Link>

          <Link 
            to="/experiments" 
            className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 transition-colors flex items-center gap-3 group"
          >
            <Wrench className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <div>
              <span className="font-semibold text-neutral-900 block">Experiments</span>
              <span className="text-neutral-400 text-[11px]">ID RenderFlo CAD</span>
            </div>
          </Link>

          <a 
            href="mailto:design.er.saahi@gmail.com" 
            className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 transition-colors flex items-center gap-3 group"
          >
            <Mail className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <div>
              <span className="font-semibold text-neutral-900 block">Contact</span>
              <span className="text-neutral-400 text-[11px]">Direct inquiry</span>
            </div>
          </a>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors underline underline-offset-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}

