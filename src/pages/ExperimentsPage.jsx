import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Terminal, 
  Cpu, 
  Camera, 
  Layers, 
  Box, 
  FileText, 
  Copy, 
  Check, 
  Sliders, 
  Eye, 
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';
import renderFloIcon from '../assets/id-renderflo-icon.png';

export default function ExperimentsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('Edit > Preferences > Add-ons > Install from Disk... > ID_RenderFlo.zip');
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
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
      <section className="bg-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 md:p-14 mb-24 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>v2.3.1 Released</span>
              </span>
              <span className="text-neutral-400 font-mono text-xs">
                Blender 3.6 LTS – 5.2.2+ Compatible
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MIT Licensed · Free for Personal & Studio Use</span>
            </div>
          </div>

          {/* Main Title, Plugin Icon & Pitch */}
          <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 mb-12">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-700/80 bg-neutral-900 shrink-0 transform hover:scale-105 transition-all duration-300">
              <img 
                src={renderFloIcon} 
                alt="ID RenderFlo Plugin Icon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
                ID RenderFlo — Blender Studio & Matrix Render Pipeline
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                A dedicated product visualization pipeline built directly into Blender's 3D Viewport. Brings a fast, KeyShot-style workflow to Cycles: multi-camera studios, interactive specular highlight targeting, CMF colorway management, and an unattended GPU matrix queue that crosses every camera with every material variation without freezing your machine.
              </p>
            </div>
          </div>

          {/* Download Action Bar */}
          <div className="p-6 md:p-8 bg-neutral-900/90 rounded-2xl border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-neutral-700/80 shrink-0 bg-neutral-950 shadow-sm">
                <img 
                  src={renderFloIcon} 
                  alt="ID RenderFlo Icon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold">
                  <span>ID_RenderFlo.zip</span>
                  <span className="text-xs text-neutral-400 font-normal">(v2.3.1 Production Bundle)</span>
                </div>
                <p className="text-neutral-400 text-xs font-mono">
                  Includes: <code className="text-neutral-200">ID_RenderFlo/__init__.py</code>, <code className="text-neutral-200">blender_manifest.toml</code>, <code className="text-neutral-200">HOW_TO_USE.txt</code>, and <code className="text-neutral-200">LICENSE.txt</code>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/assets/ID_RenderFlo.zip" 
                download="ID_RenderFlo.zip"
                className="inline-flex items-center gap-2.5 bg-white text-neutral-900 hover:bg-neutral-100 active:scale-95 px-6 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <Download className="w-4 h-4 text-neutral-900 group-hover:translate-y-0.5 transition-transform" />
                <span>Download v2.3.1 (.zip)</span>
                <span className="text-[10px] text-neutral-500 font-normal">23.7 KB</span>
              </a>

              <button
                onClick={handleCopyInstall}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-mono text-xs transition-colors cursor-pointer"
                title="Copy installation path"
              >
                {copiedInstall ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Path</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Install Path</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WHAT'S NEW IN V2.3.1 (RELEASE NOTES) */}
          <div className="mb-14 p-6 md:p-8 bg-neutral-900/70 rounded-2xl border border-neutral-800/90">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>What's New in v2.3.1 — Studio Workflow & Matrix Overhaul</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                Release Notes // v2.3.1
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Note 1 */}
              <div className="p-5 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <h4 className="text-sm font-medium text-white">Live Auto-Save Engine</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Camera angles, focal lengths, and studio lighting adjustments now save continuously in real time via a targeted depsgraph handler (<code className="text-neutral-300">depsgraph_update_post</code>), plus automatically before switching studios or starting a batch render. No more needing to click manual refresh after every tweak.
                </p>
              </div>

              {/* Note 2 */}
              <div className="p-5 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <h4 className="text-sm font-medium text-white">Studio Lock (LOCKED / UNLOCKED)</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Added a per-studio padlock toggle in the studio list. Locking a studio freezes its camera and light transforms directly in the 3D viewport (<code className="text-neutral-300">lock_location</code>, <code className="text-neutral-300">lock_rotation</code>, <code className="text-neutral-300">lock_scale</code>) and protects its saved state against accidental overwrites.
                </p>
              </div>

              {/* Note 3 */}
              <div className="p-5 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <h4 className="text-sm font-medium text-white">Independent Per-Studio CMF Matrix Selection</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Colorway batch toggles are now decoupled from global presets and stored per studio. You can select specific CMF combinations for each individual studio (e.g., render 2 colorways for Hero Studio and all 5 colorways for Detail Studio).
                </p>
              </div>

              {/* Note 4 */}
              <div className="p-5 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <h4 className="text-sm font-medium text-white">Smart Default Material Fallback in Matrix Mode</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Unchecking the CMF module (or unchecking all individual colorway boxes) on a studio no longer skips that studio during a Matrix Render—instead, it multiplies cleanly as 1 render pass using that studio's default materials.
                </p>
              </div>

              {/* Note 5 */}
              <div className="p-5 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-2 md:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <h4 className="text-sm font-medium text-white">UI & Context Crash Fix</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Resolved a Blender <code className="text-neutral-300">draw()</code> context restriction that caused UI panels below the CMF section to disappear when toggling colorway options. Added a dedicated sync operator (<code className="text-neutral-300">renderflo.sync_cmf_matrix</code>) and automatic property callbacks.
                </p>
              </div>
            </div>
          </div>

          {/* FULL FEATURE SUMMARY (FOR GITHUB / FIRST-TIME USERS) */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <Cpu className="w-4 h-4 text-orange-400" />
              <span>Full Feature Summary (For GitHub / First-Time Users)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Box className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Universal Isolated CAD Bridge</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Self-bootstraps an OpenCASCADE (<code className="text-neutral-300">cascadio</code> / <code className="text-neutral-300">gmsh</code>) kernel in an isolated environment to import <code className="text-neutral-300">.STEP</code>, <code className="text-neutral-300">.STP</code>, <code className="text-neutral-300">.IGES</code>, and <code className="text-neutral-300">.STL</code> assemblies cleanly across Blender 3.6 through 5.2.2+.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Multi-Studio Camera & Format Manager</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Switch between independent cameras, focal lengths, and aspect ratios (16:9, 1:1, 4:5, 9:16, 21:9) with automatic sensor fitting, preventing products from getting clipped during aspect switching.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Model Sets & Exploded Views</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Record and restore per-studio part positions, rotations, and collection visibility to effortlessly toggle between assembled hero shots and exploded technical views without duplicating geometry.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">In-Panel CMF Cloner & Highlight Pinning</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Clone materials on the fly, manage multi-part colorways, and use the interactive eyedropper to pin area light reflections directly onto product chamfers and curved surfaces without 3D gizmo friction.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Non-Blocking GPU Batch & Matrix Queue</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Render checked studios or full cross-product Studios x CMFs matrices sequentially on your GPU (OptiX, CUDA, HIP, Metal, oneAPI) with live progress tracking and ESC cancel support.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sliders className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Floor Shadow Catcher & Cyclorama</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  One-click infinite sweep cycloramas and invisible ground shadow catchers that isolate clean alpha contact occlusion shadows for transparent presentation boards and client pitch decks.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Step Setup Guide */}
          <div className="p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              // Setup in 60 Seconds
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 01</span>
                <p className="text-neutral-300 font-sans text-sm">Download <code className="text-xs font-mono text-neutral-200">ID_RenderFlo.zip</code> (v2.3.1) using the direct button above.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 02</span>
                <p className="text-neutral-300 font-sans text-sm">In Blender: <code className="text-xs font-mono text-neutral-200">Edit &gt; Preferences &gt; Add-ons &gt; Install from Disk...</code> and check the box.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 03</span>
                <p className="text-neutral-300 font-sans text-sm">Open 3D Viewport, press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd>, click the <strong className="text-white">ID RenderFlo</strong> tab, and import your CAD.</p>
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
          — Sahitya Kashyap // Industrial Design Studio
        </span>
      </div>
    </div>
  );
}

