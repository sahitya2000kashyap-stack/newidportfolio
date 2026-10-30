import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Terminal, 
  Camera, 
  Layers, 
  Box, 
  Copy, 
  Check, 
  Sliders, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Sticker, 
  ExternalLink
} from 'lucide-react';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';
import renderFloIcon from '../assets/id-renderflo-icon.png';

export default function ExperimentsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('Edit > Preferences > Get Extensions > Install from Disk... > id_renderflo-3.2.0-website-standalone.zip');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <PlaygroundHeaderNav />

      {/* Hero Manifesto Header */}
      <header className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
          <Terminal className="w-3 h-3 text-orange-500" />
          <span>Workflows // Automation // Systematic Shortcuts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.08]">
          Engineering out friction. <br />
          <span className="text-neutral-400">Mostly just for fun.</span>
        </h1>

        <div className="space-y-4 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
          <p>
            I have an allergic reaction to manual, repetitive friction. I would genuinely rather spend three hours engineering a clever, repeatable workflow using whatever resources are right in front of me than spend twenty minutes doing brain-numbing repetitive tasks by hand.
          </p>
          <p>
            It is not always about writing code; it is about <strong className="font-medium text-neutral-900">systematic leverage</strong>. Eliminating redundant clicks, standardizing studio rigs, and building pipelines that get out of the way so the physical industrial design craft can flourish.
          </p>
        </div>
      </header>

      {/* 3 Philosophy Cards */}
      <section className="mb-16" aria-labelledby="workflow-philosophy-heading">
        <h2 id="workflow-philosophy-heading" className="sr-only">
          Workflow Leverage Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-3">
                01 // REPEATABLE LEVERAGE
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Never repeat what a system can automate
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                If an action requires more than three identical clicks per render or CAD iteration, it belongs in a pipeline, a template, or a macro.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Zero Redundancy
            </div>
          </div>

          <div className="p-7 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-3">
                02 // RESOURCEFUL CRAFT
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Not code for code's sake
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Shortcuts don't need complicated software. Use whatever tool is right in front of you—Python, Grasshopper math, CAD macros, or workshop jigs.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Pragmatic Engineering
            </div>
          </div>

          <div className="p-7 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-3">
                03 // PURE ENJOYMENT
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Solving workflow puzzles for fun
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Designing the tool is as creatively engaging as designing the product. Personal weapons built to make high-fidelity physical realization effortless.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Studio Labs
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORKFLOW ASSET: ID RENDERFLO */}
      <section className="bg-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>v3.2.0</span>
              </span>
              <a 
                href="https://extensions.blender.org/add-ons/id-renderflo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-mono text-xs bg-orange-950/40 hover:bg-orange-950/70 border border-orange-500/30 px-3 py-1 rounded-full transition-colors"
              >
                <span>Official Blender Extension</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-neutral-400 font-mono text-xs bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                Blender 4.2 LTS – 5.2+
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GPL-3.0 / MIT · Free &amp; Open</span>
            </div>
          </div>

          {/* Main Title, Icon & Pitch */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/80 bg-neutral-900 shrink-0 transform hover:scale-105 transition-all duration-300">
              <img 
                src={renderFloIcon} 
                alt="ID RenderFlo Blender Extension Official Icon" 
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-2 leading-tight">
                ID RenderFlo — Studio &amp; Parametric CAD Pipeline
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                KeyShot-style product visualization and CAD engineering workflow embedded directly into Blender's 3D Viewport. Native STEP &amp; Rhino <code className="text-neutral-200">.3dm</code> ingestion, multi-shot studio cameras, procedural HDRI dome with 2D pin canvas, CMF matrix colorways, decals, and headless GPU batch rendering.
              </p>
            </div>
          </div>

          {/* Action / Download Bar */}
          <div className="p-5 md:p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold">
                <span>Official Blender Extensions Release</span>
              </div>
              <p className="text-neutral-400 text-xs font-mono">
                Install directly via <code className="text-neutral-200">Edit &gt; Preferences &gt; Get Extensions</code> or download the standalone package.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://extensions.blender.org/add-ons/id-renderflo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-4 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <span>Blender Extensions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a 
                href="/assets/id_renderflo-3.2.0-website-standalone.zip" 
                download="id_renderflo-3.2.0-website-standalone.zip"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-100 active:scale-95 text-neutral-900 px-4 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .zip</span>
                <span className="text-[10px] text-neutral-500 font-normal">108 KB</span>
              </a>

              <button
                onClick={handleCopyInstall}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-mono text-xs transition-colors cursor-pointer"
                title="Copy installation path"
              >
                {copiedInstall ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Path</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 6 Core Features (Ultra Crisp Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Box className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">01 // CAD Bridge</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Native STEP, IGES, STL &amp; Rhino <code className="text-neutral-300">.3dm</code> import with true CAD split normals, millimeter true-scale calibration (0.001x), and 1-click hot-reload.
              </p>
            </div>

            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Camera className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">02 // Studio &amp; Camera Dock</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Multi-shot framing, aspect ratio presets (1:1, 4:5, 16:9, 9:16, 2.39:1), camera padlock toggle, and independent per-studio render samples.
              </p>
            </div>

            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Sliders className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">03 // HDRI Dome &amp; 2D Pin Canvas</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Interactive 2D panoramic canvas inside the 3D Viewport with specular spotlights, softboxes, and surface normal raycasting to pin reflections directly onto product fillets.
              </p>
            </div>

            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Eye className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">04 // CMF Matrix &amp; Mold-Tech</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Rapid multi-part colorway variations, procedural VDI 3400 spark erosion textures, and brushed or anodized aluminum finishes with 1-click topbar duplication.
              </p>
            </div>

            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">05 // Model Sets &amp; Exploded Views</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Non-destructive parametric explosion slider and per-studio transform memory. Seamlessly toggle between assembled hero and exploded technical views with auto-restoring rest positions.
              </p>
            </div>

            <div className="p-5 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                <Sticker className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-medium text-white">06 // Decals, Cutaways &amp; Batch</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Conformal shrinkwrap surface stickers (zero Z-fighting), live boolean slicing cutaways, and sequential GPU batch matrix renders with 1-click manufacturing DXF export.
              </p>
            </div>
          </div>

          {/* Simple 2-Step Installation for Blender 4.2+ */}
          <div className="p-5 md:p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-orange-400 font-bold block">
                // INSTALLATION (BLENDER 4.2 LTS – 5.2+)
              </span>
              <p className="text-neutral-300 font-sans text-xs font-light leading-relaxed">
                In Blender, navigate to <strong className="text-white">Edit &gt; Preferences &gt; Get Extensions</strong>, search <strong className="text-orange-400">ID RenderFlo</strong>, and click Install. Or click the menu dropdown and select <strong className="text-white">Install from Disk...</strong> with the downloaded zip.
              </p>
            </div>
            <a 
              href="https://extensions.blender.org/add-ons/id-renderflo/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-orange-400 hover:text-orange-300 font-mono text-xs inline-flex items-center gap-1.5 border border-orange-500/30 px-3 py-1.5 rounded-lg bg-orange-950/20 hover:bg-orange-950/40 transition-colors"
            >
              <span>View Extension Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <div className="p-8 md:p-10 bg-neutral-100 rounded-2xl border border-neutral-200 text-center max-w-2xl mx-auto">
        <p className="text-neutral-800 text-base md:text-lg font-light italic mb-3">
          "The best tools are the ones you build because you were too impatient to do it the boring way."
        </p>
        <span className="font-mono text-xs text-neutral-400 block uppercase tracking-wider">
          — Sahitya Kashyap // Industrial Designer
        </span>
      </div>
    </div>
  );
}
