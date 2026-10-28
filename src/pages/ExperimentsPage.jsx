import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Terminal, 
  Cpu, 
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
  ExternalLink,
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';
import renderFloIcon from '../assets/id-renderflo-icon.png';

export default function ExperimentsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('Edit > Preferences > Get Extensions (4.2+) or Add-ons (3.6-4.1) > Install from Disk... > id_renderflo-3.2.0-website-standalone.zip');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <PlaygroundHeaderNav />

      {/* Hero Manifesto Header */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
          <Terminal className="w-3 h-3 text-orange-500" />
          <span>Workflows // Automation // Systematic Shortcuts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.08]">
          Engineering out friction. <br />
          <span className="text-neutral-400">Mostly just for fun.</span>
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
          <p>
            I have an allergic reaction to manual, repetitive friction. I would genuinely rather spend three hours engineering a clever, repeatable workflow using whatever resources are right in front of me than spend twenty minutes doing brain-numbing repetitive tasks by hand.
          </p>
          <p>
            It is not always about writing code or complex scripts; it is about <strong className="font-medium text-neutral-900">systematic leverage</strong>. Finding the faster way, eliminating redundant clicks, standardizing studio rigs, and building pipelines that get out of the way so the actual industrial design craft can flourish.
          </p>
        </div>
      </div>

      {/* 3 Philosophy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              01 // REPEATABLE LEVERAGE
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Never repeat what a system can automate
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              If an action requires more than three identical clicks per render or CAD iteration, it belongs in a pipeline, a template, or a hotkey macro.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Zero Redundancy Rule
          </div>
        </div>

        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              02 // RESOURCEFUL ENGINEERING
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Not code for code's sake
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              Clever shortcuts don't need complex software engineering. Use whatever tool is right in front of you—Python, Grasshopper math, SolidWorks macros, or physical workshop jigs.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Pragmatic Craftsmanship
          </div>
        </div>

        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              03 // PURE ENJOYMENT
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Solving workflow puzzles for fun
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              Designing the tool is as creatively engaging as designing the product. These experiments are personal weapons built to make high-fidelity physical realization effortless.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Personal Studio Labs
          </div>
        </div>
      </div>

      {/* FEATURED WORKFLOW ASSET: ID RENDERFLO */}
      <section className="bg-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 md:p-12 mb-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-orange-500 text-black px-3.5 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>v3.2.0 Production Release</span>
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
              <span className="text-neutral-400 font-mono text-xs bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full hidden sm:inline-block">
                Blender 3.6 LTS – 5.2+
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GPL-3.0 / MIT · Free for Studio, Personal & Commercial Use</span>
            </div>
          </div>

          {/* Main Title, Icon & Pitch */}
          <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/80 bg-neutral-900 shrink-0 transform hover:scale-105 transition-all duration-300">
              <img 
                src={renderFloIcon} 
                alt="ID RenderFlo Plugin Icon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-3 leading-tight">
                ID RenderFlo — Universal Industrial Design Studio & Parametric CAD Pipeline
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                KeyShot-grade product visualization embedded directly into Blender's 3D Viewport. Native Rhino (<code className="text-neutral-200">.3dm</code>) &amp; STEP CAD ingestion, multi-shot studio cameras, procedural HDRI dome with 2D interactive pin canvas, CMF matrix colorways with VDI 3400 textures, surface decals, parametric exploded views, and automated GPU batch rendering.
              </p>
            </div>
          </div>

          {/* Dual Action / Download Bar */}
          <div className="p-6 md:p-8 bg-neutral-900/90 rounded-2xl border border-neutral-800 mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold">
                  <span>Available on Official Blender Extensions Platform</span>
                  <span className="text-xs text-orange-400 font-normal">(Extensions 4.2+ &amp; Classic Add-on)</span>
                </div>
                <p className="text-neutral-400 text-xs font-mono">
                  Install instantly from Blender via <code className="text-neutral-200">Edit &gt; Preferences &gt; Get Extensions</code> or download the standalone offline package below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://extensions.blender.org/add-ons/id-renderflo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-5 py-3 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
                >
                  <span>Blender Extensions</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a 
                  href="/assets/id_renderflo-3.2.0-website-standalone.zip" 
                  download="id_renderflo-3.2.0-website-standalone.zip"
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 active:scale-95 text-neutral-900 px-5 py-3 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
                >
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download .zip</span>
                  <span className="text-[10px] text-neutral-500 font-normal">108 KB</span>
                </a>

                <button
                  onClick={handleCopyInstall}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-mono text-xs transition-colors cursor-pointer"
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
          </div>

          {/* What's New in v3.2.0 & v3.1.0 Highlights (Crisp & Scannable) */}
          <div className="mb-12 p-6 md:p-8 bg-neutral-900/60 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-3 border-b border-neutral-800">
              <span className="font-mono text-xs uppercase tracking-widest text-orange-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>What's New in v3.2.0 &amp; Recent Updates</span>
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                Official Multi-OS Build
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-1.5">
                <div className="font-mono text-xs font-medium text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Official Extensions Listing</span>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Published on <a href="https://extensions.blender.org/add-ons/id-renderflo/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2">extensions.blender.org</a> with dedicated wheels for Windows, macOS Apple Silicon/Intel, and Linux.
                </p>
              </div>

              <div className="p-4 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-1.5">
                <div className="font-mono text-xs font-medium text-white flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span>Per-Studio Bloom &amp; Glow</span>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Real-time viewport glare and bloom with alpha channel transparency preservation for clean product PNG cutouts.
                </p>
              </div>

              <div className="p-4 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-1.5">
                <div className="font-mono text-xs font-medium text-white flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-orange-400" />
                  <span>Part Visibility Snapshots</span>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Store hidden/unhidden component states per studio. Isolate internal sub-assemblies and restore exterior housings automatically.
                </p>
              </div>

              <div className="p-4 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-1.5">
                <div className="font-mono text-xs font-medium text-white flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-orange-400" />
                  <span>Blender 5.2+ &amp; Python 3.13</span>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Dual-ABI support with forward compatibility across Blender 3.6 LTS through modern Blender 5.0, 5.1, and 5.2+.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Core Industrial Design Stages (Crisp Feature Matrix) */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <Cpu className="w-4 h-4 text-orange-400" />
              <span>Core Architecture // 6-Stage Industrial Design Lifecycle</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Stage 1: CAD Bridge */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Box className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 01</span>
                </div>
                <h4 className="text-base font-medium text-white">CAD Bridge (STEP &amp; Rhino .3DM)</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Native Rhino <code className="text-neutral-300">.3dm</code> and <code className="text-neutral-300">.step/.stp</code> assembly ingestion with razor-sharp custom split vertex normals. Default Millimeter True-Scale (0.001x), Z-Up, and 1-Click Hot-Reload.
                </p>
              </div>

              {/* Stage 2: Studios */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 02</span>
                </div>
                <h4 className="text-base font-medium text-white">Multi-Studio Camera Manager</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Multi-shot framing, aspect ratio presets (1:1, 4:5, 16:9, 9:16, 2.39:1), camera padlock toggle, 1-click shot reordering, and independent per-studio render sample overrides.
                </p>
              </div>

              {/* Stage 3: Lighting & HDRI Pins */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 03</span>
                </div>
                <h4 className="text-base font-medium text-white">HDRI Dome &amp; 2D Pin Canvas</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Interactive KeyShot-style 2D panoramic canvas inside the 3D Viewport. Spotlights, rectangular softboxes, and surface normal raycasting to pin specular highlights directly onto product fillets.
                </p>
              </div>

              {/* Stage 4: CMF Matrix */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 04</span>
                </div>
                <h4 className="text-base font-medium text-white">CMF Matrix &amp; Mold-Tech Textures</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Fast multi-colorway variations, procedural VDI 3400 spark erosion textures, anodized aluminum, and brushed finishes with topbar variant renaming and duplicating.
                </p>
              </div>

              {/* Stage 5: Model Sets & Exploded Views */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 05</span>
                </div>
                <h4 className="text-base font-medium text-white">Model Sets &amp; Exploded Views</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Non-destructive parametric explosion slider and per-studio transform memory (<code className="text-neutral-300">use_transforms</code>). Toggles between assembled hero and exploded technical views with automatic rest-position recovery.
                </p>
              </div>

              {/* Stage 6: Decals & Render Queue */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center">
                    <Sticker className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Stage 06</span>
                </div>
                <h4 className="text-base font-medium text-white">Decals, Section Cutaways &amp; Batch</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Conformal shrinkwrap surface decals (zero Z-fighting), live boolean slicing boxes, and sequential GPU batch matrix renders with 1-click manufacturing DXF flat pattern exports.
                </p>
              </div>
            </div>
          </div>

          {/* Crisp Installation Instructions */}
          <div className="p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-3 border-b border-neutral-800">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-bold">
                // Quick Installation (Blender 3.6 LTS – 5.2+)
              </span>
              <a 
                href="https://extensions.blender.org/add-ons/id-renderflo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-mono text-[11px] inline-flex items-center gap-1"
              >
                <span>View on Blender Extensions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
              {/* Method A: Blender 4.2+ Extensions */}
              <div className="p-5 bg-neutral-950/80 rounded-xl border border-neutral-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">BLENDER 4.2+ (OFFICIAL EXTENSION)</span>
                  <span className="text-[10px] text-neutral-500 uppercase">Recommended</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-neutral-300 font-sans text-xs font-light leading-relaxed">
                  <li>In Blender, go to <strong className="text-white">Edit &gt; Preferences &gt; Get Extensions</strong>.</li>
                  <li>Search for <strong className="text-orange-400">ID RenderFlo</strong> and click Install, or click the down arrow and select <strong className="text-white">Install from Disk...</strong> with the downloaded zip.</li>
                  <li>Press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd> in any 3D Viewport to open the dock.</li>
                </ol>
              </div>

              {/* Method B: Blender 3.6 - 4.1 Classic Add-on */}
              <div className="p-5 bg-neutral-950/80 rounded-xl border border-neutral-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 font-bold">BLENDER 3.6 LTS – 4.1 (CLASSIC ADD-ON)</span>
                  <span className="text-[10px] text-neutral-500 uppercase">Legacy LTS</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-neutral-300 font-sans text-xs font-light leading-relaxed">
                  <li>In Blender, go to <strong className="text-white">Edit &gt; Preferences &gt; Add-ons</strong>.</li>
                  <li>Click <strong className="text-white">Install...</strong> at the top right and select <code className="text-neutral-200 font-mono bg-neutral-900 px-1 py-0.5 rounded">id_renderflo-3.2.0-website-standalone.zip</code>.</li>
                  <li>Check the box to activate, then press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd> to open.</li>
                </ol>
              </div>
            </div>
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
