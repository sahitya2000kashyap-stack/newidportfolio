import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles, Terminal } from 'lucide-react';

export default function PlaygroundHeaderNav() {
  const location = useLocation();
  const isPlayground = location.pathname === '/playground' || location.pathname === '/personal';
  const isExperiments = location.pathname === '/experiments';

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 border-b border-neutral-100 pb-8">
      <Link 
        to="/" 
        className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors uppercase font-mono"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to home
      </Link>

      {/* Dual Tab Switcher Pill Navigation */}
      <div className="inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200 font-mono text-xs shadow-xs self-start sm:self-auto">
        <Link
          to="/playground"
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition-all duration-200 ${
            isPlayground
              ? 'bg-neutral-900 text-white shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Lab</span>
        </Link>
        <Link
          to="/experiments"
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition-all duration-200 ${
            isExperiments
              ? 'bg-neutral-900 text-white shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Experiments</span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        </Link>
      </div>
    </div>
  );
}

