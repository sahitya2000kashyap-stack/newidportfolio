import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Quote, Wrench } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import { ALL_PROJECTS } from '../data/projectsData';

/* --- PAGE 2: PRESENTATION-ALIGNED PROJECT CASE STUDY --- */
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = ALL_PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-32 text-center">
        <h2 className="text-2xl font-medium text-neutral-900 mb-4">Project Not Found</h2>
        <Link to="/" className="text-sm font-semibold underline text-neutral-600 hover:text-neutral-900">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-32">
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="max-w-4xl">
          <button 
            onClick={() => navigate(-1)} 
            className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to projects
          </button>
          
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
              {project.date} // {project.timeline}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-2xl text-neutral-500 leading-relaxed max-w-3xl font-light">
            {project.tagline}
          </p>

          {project.metaHeader && (
            <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-neutral-500">
              <div><span className="text-neutral-400 block text-[10px]">TIMELINE:</span> {project.metaHeader.timeline}</div>
              <div><span className="text-neutral-400 block text-[10px]">CLIENT / CONTEXT:</span> {project.metaHeader.client}</div>
              <div><span className="text-neutral-400 block text-[10px]">FOCUS:</span> {project.metaHeader.focus}</div>
            </div>
          )}
        </div>
        
        {project.heroMetrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12 pt-10 border-t border-neutral-100 font-mono">
            {project.heroMetrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">{m.label}</span>
                <span className="text-lg font-medium text-neutral-900">{m.val}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Wide Hero Banner */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-28">
        <div className={`w-full ${project.heroAspectClass || 'aspect-[16/10] md:aspect-[21/9]'} bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm`}>
          <ProjectImage 
            id={project.heroId} 
            altText={`${project.title} Hero Banner`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dynamic Slide Blocks Engine */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-28">
        {project.deckBlocks && project.deckBlocks.map((block, idx) => {
          
          /* LAYOUT: Video Embed (YouTube Privacy-Enhanced Player) */
          if (block.type === 'video_embed') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                    // {block.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">
                    {block.title}
                  </h3>
                  {block.desc && (
                    <p className="text-base text-neutral-600 font-light leading-relaxed">
                      {block.desc}
                    </p>
                  )}
                </div>
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-black shadow-sm">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}?rel=0&modestbranding=1`}
                    title={block.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-3 text-center">
                  Live Mechanism Demo Video
                </span>
              </section>
            );
          }

          /* LAYOUT: Thin Horizontal Strip */
          if (block.type === 'thin_horizontal_strip') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">{block.title}</h3>
                  {block.desc && <p className="text-base text-neutral-600 font-light leading-relaxed">{block.desc}</p>}
                </div>
                <div className={`w-full ${block.aspectClass || 'aspect-[21/8]'} rounded-2xl overflow-hidden border border-neutral-200 bg-white p-2 shadow-xs`}>
                  <ProjectImage 
                    id={block.imageId} 
                    altText={block.caption} 
                    fitMode={block.fitMode || "object-contain"} 
                    className="w-full h-full"
                  />
                </div>
                <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2.5">fig.{idx + 1} — {block.caption}</span>
              </section>
            );
          }

          /* LAYOUT: Problem Breakdown */
          if (block.type === 'problem_breakdown') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">{block.title}</h3>
                  <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">{block.desc}</p>
                  
                  {block.steps && (
                    <div className="flex flex-wrap gap-3 font-mono text-xs">
                      {block.steps.map((st, sIdx) => (
                        <div key={sIdx} className="bg-neutral-100 border border-neutral-200 text-neutral-800 px-4 py-2 rounded-xl flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">{sIdx + 1}</span>
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`w-full ${block.aspectClass || 'aspect-[16/9]'} rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100`}>
                  <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                </div>
                <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2.5">fig.{idx + 1} — {block.caption}</span>
              </section>
            );
          }

          /* LAYOUT: Success Criteria Cards */
          if (block.type === 'criteria_cards') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-medium text-neutral-900">{block.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {block.items.map((it, iIdx) => (
                    <div key={iIdx} className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-bold mb-6">
                        0{iIdx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-neutral-900 mb-2">{it.title}</h4>
                        <p className="text-neutral-500 text-sm font-light leading-relaxed">{it.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          /* LAYOUT: Text Top, Big Image Bottom */
          if (block.type === 'text_top_image_bottom') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">{block.title}</h3>
                  <p className="text-base text-neutral-600 font-light leading-relaxed">{block.desc}</p>
                </div>
                <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200`}>
                  <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                </div>
                <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2.5">fig.{idx + 1} — {block.caption}</span>
              </section>
            );
          }

          /* LAYOUT: Text Left, Image Right */
          if (block.type === 'text_left_image_right') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">// {block.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 leading-snug">{block.title}</h3>
                    <p className="text-base text-neutral-600 font-light leading-relaxed">{block.desc}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200`}>
                      <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2">fig.{idx + 1} — {block.caption}</span>
                  </div>
                </div>
              </section>
            );
          }

          /* LAYOUT: Image Left, Text Right */
          if (block.type === 'text_right_image_left') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200`}>
                      <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2">fig.{idx + 1} — {block.caption}</span>
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">// {block.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 leading-snug">{block.title}</h3>
                    <p className="text-base text-neutral-600 font-light leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              </section>
            );
          }

          /* LAYOUT: Comparison Columns */
          if (block.type === 'comparison_columns') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-3xl font-medium text-neutral-900">{block.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {block.concepts.map((c, cIdx) => (
                    <div key={cIdx} className={`p-8 rounded-2xl border flex flex-col justify-between ${c.selected ? 'bg-neutral-900 text-white border-neutral-800 shadow-lg' : 'bg-neutral-50 text-neutral-900 border-neutral-200'}`}>
                      <div>
                        <div className="flex justify-between items-center mb-4 font-mono text-[10px]">
                          <span className={`uppercase tracking-wider ${c.selected ? 'text-orange-400 font-bold' : 'text-neutral-400'}`}>{c.tag}</span>
                          {c.selected && <span className="bg-orange-500 text-black px-2 py-0.5 rounded font-bold">SELECTED</span>}
                        </div>
                        <h4 className="text-2xl font-medium mb-4">{c.name}</h4>
                        <div className="space-y-3 text-sm font-light">
                          <p><strong className={c.selected ? 'text-white' : 'text-neutral-900'}>Pros:</strong> {c.pros}</p>
                          <p><strong className={c.selected ? 'text-white' : 'text-neutral-900'}>Cons:</strong> {c.cons}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          /* LAYOUT: Pure Standalone Render Spread */
          if (block.type === 'pure_render_spread') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-12">
                <div className={`w-full ${block.aspectClass || 'aspect-[16/9] md:aspect-[21/9]'} bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm`}>
                  <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                </div>
                {block.caption && (
                  <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-3 text-center">
                    {block.caption}
                  </span>
                )}
              </section>
            );
          }

          /* LAYOUT: Quote & Insights Block */
          if (block.type === 'quote_and_insights') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="p-8 md:p-12 bg-neutral-50 rounded-3xl border border-neutral-200 mb-12">
                  <Quote className="w-8 h-8 text-neutral-300 mb-4" />
                  <p className="text-xl md:text-2xl text-neutral-800 font-light italic leading-relaxed mb-4">
                    "{block.quote}"
                  </p>
                  <span className="font-mono text-xs text-neutral-400 block">— {block.quoteAuthor}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {block.insights.map((ins, inIdx) => (
                    <div key={inIdx} className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-2">0{inIdx + 1} / INSIGHT</span>
                      <h4 className="text-base font-medium text-neutral-900 mb-2">{ins.label}</h4>
                      <p className="text-neutral-500 text-xs font-light leading-relaxed">{ins.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          /* LAYOUT: Dual Goals Grid */
          if (block.type === 'dual_goals') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="max-w-3xl mb-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">// {block.tag}</span>
                  <h3 className="text-3xl font-medium text-neutral-900">{block.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">// PROJECT GOALS</span>
                    <div className="space-y-6">
                      {block.projectGoals.map((pg, pIdx) => (
                        <div key={pIdx}>
                          <h4 className="text-lg font-medium text-neutral-900 mb-1">{pg.label}</h4>
                          <p className="text-neutral-500 text-sm font-light leading-relaxed">{pg.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-neutral-900 text-white rounded-2xl border border-neutral-800">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">// PERSONAL GOALS</span>
                    <div className="space-y-6">
                      {block.personalGoals.map((pg, pIdx) => (
                        <div key={pIdx}>
                          <h4 className="text-lg font-medium text-white mb-1">{pg.label}</h4>
                          <p className="text-neutral-400 text-sm font-light leading-relaxed">{pg.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          /* LAYOUT: Brand Manifesto Box */
          if (block.type === 'brand_manifesto') {
            return (
              <section key={idx} className="border-t border-neutral-200 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">// {block.tag}</span>
                    <h3 className="text-3xl font-medium text-neutral-900 leading-snug">{block.title}</h3>
                    <p className="text-base text-neutral-600 font-light leading-relaxed">{block.desc}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200`}>
                      <ProjectImage id={block.imageId} altText={block.caption} fitMode={block.fitMode || "object-cover"} className="w-full h-full" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 tracking-wider block mt-2">fig.{idx + 1} — {block.caption}</span>
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section key={idx} className="border-t border-neutral-200 pt-16">
              <div className="w-full aspect-[16/10] bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200">
                <ProjectImage id={block.imageId} altText={block.caption} fitMode="object-cover" className="w-full h-full" />
              </div>
            </section>
          );
        })}

        {/* Technical DFM Specifications Drawer */}
        {project.specs && (
          <div className="p-8 md:p-12 bg-neutral-900 text-white rounded-3xl border border-neutral-800 font-mono text-xs">
            <div className="text-neutral-400 font-semibold mb-6 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>SHOPFLOOR DFM & TOOLING ARCHITECTURE</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="text-neutral-500 block mb-1">MATERIAL SPECIFICATION:</span>
                <span className="text-neutral-200 font-medium leading-relaxed block">{project.specs.material}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1">SURFACE & CMF:</span>
                <span className="text-neutral-200 font-medium leading-relaxed block">{project.specs.finish}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1">TOOLING ARCHITECTURE:</span>
                <span className="text-neutral-200 font-medium leading-relaxed block">{project.specs.tooling}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1">SOFTWARE & VISUALS:</span>
                <span className="text-neutral-200 font-medium leading-relaxed block">{project.specs.software}</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200 font-mono text-xs">
          <Link to="/" className="text-neutral-500 hover:text-neutral-900 underline">
            ← Return to Overview
          </Link>
          <a 
            href="https://www.behance.net/sahityakashyap" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 text-neutral-900 font-bold hover:underline"
          >
            Full High-Res Boards on Behance <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

