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
  Zap,
  Sparkles,
  FolderOpen,
  Ruler,
  Maximize2,
  Sticker,
  Scissors,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';
import renderFloIcon from '../assets/id-renderflo-icon.png';

export default function ExperimentsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [showOlderNotes, setShowOlderNotes] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('Edit > Preferences > Get Extensions (4.2+) or Add-ons (3.6-4.1) > Install from Disk... > id_renderflo-3.0.0-website-standalone.zip');
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
              <span className="bg-orange-500 text-black px-3.5 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>v3.0.0 Major Release</span>
              </span>
              <span className="text-neutral-300 font-mono text-xs bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                Blender 3.6 LTS – 5.2.2+ (Add-on &amp; Extension)
              </span>
              <span className="text-neutral-400 font-mono text-xs hidden sm:inline-block">
                Windows · macOS (Apple Silicon / Intel) · Linux
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MIT Licensed · Free for Studio, Personal &amp; Commercial Use</span>
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
                ID RenderFlo — Universal Industrial Design Studio &amp; Parametric CAD Pipeline
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                A dedicated product visualization pipeline built directly into Blender's 3D Viewport. Reorganized into a continuous 6-stage industrial design lifecycle dock and persistent topbar ribbon: native Rhino (.3dm) &amp; STEP CAD ingestion with millimeter true-scale calibration and 1-click hot-reload, multi-shot studio cameras with custom sample overrides, procedural HDRI dome with 2D interactive pin canvas, CMF matrix colorways with VDI 3400 textures, raycast surface decals with zero Z-fighting, live boolean section cutaways, and non-blocking GPU batch render queues with 1-click DXF export.
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
                  <span>id_renderflo-3.0.0-website-standalone.zip</span>
                  <span className="text-xs text-orange-400 font-normal">(v3.0.0 Production Release)</span>
                </div>
                <p className="text-neutral-400 text-xs font-mono">
                  Includes: <code className="text-neutral-200">blender_manifest.toml</code>, <code className="text-neutral-200">modules/</code>, <code className="text-neutral-200">app_template/</code>, <code className="text-neutral-200">properties.py</code>, <code className="text-neutral-200">HOW_TO.md</code>, <code className="text-neutral-200">RELEASE_NOTES.md</code>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/assets/id_renderflo-3.0.0-website-standalone.zip" 
                download="id_renderflo-3.0.0-website-standalone.zip"
                className="inline-flex items-center gap-2.5 bg-white text-neutral-900 hover:bg-neutral-100 active:scale-95 px-6 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <Download className="w-4 h-4 text-neutral-900 group-hover:translate-y-0.5 transition-transform" />
                <span>Download v3.0.0 (.zip)</span>
                <span className="text-[10px] text-neutral-500 font-normal">94.8 KB</span>
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

          {/* WHAT'S NEW IN V3.0.0 (LATEST RELEASE NOTES) */}
          <div className="mb-14 p-6 md:p-8 bg-neutral-900/70 rounded-2xl border border-neutral-800/90">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-orange-400">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>What's New in v3.0.0 — 6-Menu Lifecycle Dock &amp; Topbar Ribbon</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider bg-neutral-800 px-2.5 py-1 rounded">
                Official Release Notes // v3.0.0
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Note 1: 6-Menu Lifecycle Dock */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </div>
                  <h4 className="text-base font-medium text-white">🎛️ Reorganized 6-Menu Industrial Design Lifecycle Dock</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  The N-Panel sidebar dock has been redesigned into a continuous 6-stage industrial design workflow:
                </p>
                <ul className="text-neutral-300 text-xs space-y-1.5 list-disc list-inside font-light">
                  <li><strong className="text-white">1. CAD Bridge:</strong> STEP &amp; Rhino <code className="text-neutral-300">.3dm</code> import, unit calibration, origin centering, and 1-Click Hot-Reload.</li>
                  <li><strong className="text-white">2. Studios:</strong> Multi-shot camera framing, focal length presets, padlock protection, and custom render samples.</li>
                  <li><strong className="text-white">3. Lighting:</strong> Procedural HDRI dome, interactive 2D pin canvas, and physical studio softboxes.</li>
                  <li><strong className="text-white">4. CMF Matrix:</strong> Color, Material &amp; Finish variants, VDI 3400 mold-tech textures, and anodized/brushed metals.</li>
                  <li><strong className="text-white">5. Decals &amp; FX:</strong> Raycast surface sticker dropper, conformal shrinkwrap with zero Z-fighting, and live section cutaways.</li>
                  <li><strong className="text-white">6. Render &amp; DXF:</strong> GPU batch queue, custom output directory selector, and manufacturing DXF export.</li>
                </ul>
              </div>

              {/* Note 2: Topbar Ribbon */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    02
                  </div>
                  <h4 className="text-base font-medium text-white">⚡ Unified Persistent Topbar Ribbon</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Directly accessible from Blender's main topbar alongside standard menus for instant global control:
                </p>
                <ul className="text-neutral-300 text-xs space-y-1.5 list-disc list-inside font-light">
                  <li><strong className="text-white">CAD Quick Actions:</strong> <code className="text-neutral-300">Import CAD (.STEP/.3DM)</code> and <code className="text-neutral-300">Hot-Reload CAD</code> buttons.</li>
                  <li><strong className="text-white">Studio Selector:</strong> Active studio dropdown, camera padlock toggle, camera settings popover, and <code className="text-neutral-300">+ Add Studio</code>.</li>
                  <li><strong className="text-white">CMF Quick Matrix:</strong> Active CMF variant selector, <code className="text-neutral-300">Rename Variant</code>, and <code className="text-neutral-300">Duplicate Colorway</code>.</li>
                  <li><strong className="text-white">Aspect Ratio Selector:</strong> 1-Click format presets (<code className="text-neutral-300">1:1</code>, <code className="text-neutral-300">4:5</code>, <code className="text-neutral-300">16:9</code>, <code className="text-neutral-300">9:16</code>, <code className="text-neutral-300">2.39:1</code>).</li>
                </ul>
              </div>

              {/* Note 3: True Scale & Orientation */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    03
                  </div>
                  <h4 className="text-base font-medium text-white">📐 CAD Import True Scale &amp; Orientation Defaults</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  <strong className="text-white">True Scale Default:</strong> Set to <strong className="text-orange-400">Millimeters (0.001x True Scale / Recommended)</strong>. In Blender, 1 unit = 1 meter. Converting millimeter CAD assemblies by 0.001x guarantees accurate real-world dimensions for Cycles lighting inverse-square falloff, shadows, and physical camera depth-of-field.
                </p>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  <strong className="text-white">Z-Up Default:</strong> Default CAD Up-Axis set to Z-Up to natively match Rhino, Fusion 360, and Blender coordinate systems. Streamlined strictly for <code className="text-neutral-300">.step/.stp</code> and Rhino <code className="text-neutral-300">.3dm</code> with 1-click hot-reload.
                </p>
              </div>

              {/* Note 4: Per-Studio Samples */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    04
                  </div>
                  <h4 className="text-base font-medium text-white">🔢 Per-Studio Custom Render Samples</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Restored custom sample limits per studio item (<code className="text-neutral-300">use_custom_samples</code> and <code className="text-neutral-300">studio_samples</code>). Features real-time bidirectional sync with <code className="text-neutral-300">scene.cycles.samples</code>—allowing rapid draft angles to preview at 128 samples while hero closeups and optical glass renders compute at 1024+ samples during sequential batch jobs.
                </p>
              </div>

              {/* Note 5: Output Directory & Folder Opener */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    05
                  </div>
                  <h4 className="text-base font-medium text-white">📂 Interactive Render Output Directory</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Added a dedicated output directory path picker in both the Render tab and the Studio Dashboard. Includes a 1-click <strong className="text-white">Open Folder</strong> button that instantly reveals the destination render directory in Windows File Explorer, macOS Finder, or Linux file manager without manually browsing filesystem paths.
                </p>
              </div>

              {/* Note 6: Decals & Section Cutaways */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    06
                  </div>
                  <h4 className="text-base font-medium text-white">🏷️ Decals &amp; Section Cutaways Refinement</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Streamlined the decal workflow to focus on high-precision raycast decal dropping, normal surface alignment, rotation controls, and conformal shrinkwrapping with zero Z-fighting. Removed experimental mesh displace deformers to prevent geometry corruption on dense CAD assemblies, paired with fast live boolean section cutaways via an interactive slicing box.
                </p>
              </div>

              {/* Note 7: Consolidated Manufacturing Export (Spans 2 cols on md) */}
              <div className="p-6 bg-neutral-950/70 rounded-xl border border-neutral-800/80 space-y-3 md:col-span-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                    07
                  </div>
                  <h4 className="text-base font-medium text-white">🏭 Consolidated Manufacturing Export</h4>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Moved 1-Click DXF silhouette and flat pattern export into the unified <strong className="text-white">Render &amp; DXF</strong> tab. Create 2D laser-cutting outlines, sheet-metal silhouettes, and engineering drawing contours directly alongside high-fidelity photorealistic rendering for a unified product design handoff stage.
                </p>
              </div>
            </div>
          </div>

          {/* HISTORICAL CHANGELOG ARCHIVE (V2.4.1 & V2.4.0) TOGGLE */}
          <div className="mb-14">
            <button
              onClick={() => setShowOlderNotes(!showOlderNotes)}
              className="w-full p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-colors flex items-center justify-between font-mono text-xs text-neutral-300 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ClockIcon className="w-3.5 h-3.5 text-neutral-400" />
                <span>View Previous Release Notes (v2.4.1 &amp; v2.4.0 Archive)</span>
              </span>
              {showOlderNotes ? (
                <ChevronUp className="w-4 h-4 text-neutral-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            {showOlderNotes && (
              <div className="mt-4 p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800 space-y-8 animate-in fade-in duration-200">
                {/* v2.4.1 Notes */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800 font-mono text-xs text-neutral-300 font-bold uppercase tracking-wider">
                    <span>What's New in v2.4.1 — Official Extensions Compliance &amp; Stability</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-neutral-400">
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">📦 Official Extensions Platform Compliance</h5>
                      <p>Pre-bundled Python wheels for Windows, Linux, macOS Apple Silicon, and Intel. Zero network downloads, no runtime pip, and direct in-memory CAD conversion.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">⚡ Depsgraph &amp; Performance Stability</h5>
                      <p>Removed mutating depsgraph handlers to eliminate viewport lag and undo corruption. Rock-solid event-driven persistence on explicit user action.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">🛡️ Python Environment Isolation</h5>
                      <p>Passes isolated mode flags (<code className="text-neutral-300">-I</code>) and eliminated manual <code className="text-neutral-300">sys.path</code> tampering to prevent system variable conflicts.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">🏷️ Manifest &amp; Tag Standards</h5>
                      <p>Updated manifest tags to conform strictly to Blender Extensions standards: <code className="text-neutral-300">tags = ["Render", "Import-Export"]</code>.</p>
                    </div>
                  </div>
                </div>

                {/* v2.4.0 Notes */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800 font-mono text-xs text-neutral-300 font-bold uppercase tracking-wider">
                    <span>What Was Introduced in v2.4.0 — Studio Workflow &amp; Parametric CAD Overhaul</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-neutral-400">
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">🦏 Native Rhino .3DM CAD Importer</h5>
                      <p>Direct extraction of Rhino Meshes, Breps, SubD, and cached render meshes with custom split vertex normals and automatic layer-to-material mapping.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">💡 KeyShot-Style Procedural HDRI Dome &amp; 2D Pin Canvas</h5>
                      <p>Interactive 2D panoramic canvas inside the 3D Viewport with specular spotlight pins, softbox strips, and eyedropper normal raycasting.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">🔦 Simultaneous Dual-Lighting Rig</h5>
                      <p>Concurrent evaluation of HDRI environment dome and physical studio lamps without viewport interference.</p>
                    </div>
                    <div className="p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/60 space-y-1.5">
                      <h5 className="font-medium text-white">🎨 Color Management Look &amp; Contrast Selector</h5>
                      <p>Dedicated Contrast selector beside Exposure for instant auditioning of all 8 standard Blender color management looks.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* FULL FEATURE SUMMARY (FOR GITHUB & STUDIO TEAMS) */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <Cpu className="w-4 h-4 text-orange-400" />
              <span>Full Feature Summary (For GitHub &amp; Studio Teams)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Box className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Universal CAD Bridge (STEP &amp; .3DM)</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Imports Rhino <code className="text-neutral-300">.3dm</code> and <code className="text-neutral-300">.step/.stp</code> assemblies directly in memory with true custom split normals. Defaults to Millimeter True-Scale (0.001x) and Z-Up with 1-click Hot-Reload.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Multi-Studio Camera &amp; Topbar Ribbon</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Persistent Blender topbar access with aspect ratio presets (1:1, 4:5, 16:9, 9:16, 2.39:1), padlock protection against accidental edits, and per-studio custom render sample limits.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sliders className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Procedural HDRI Dome &amp; 2D Pin Canvas</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Interactive KeyShot-style 2D panoramic canvas in the 3D Viewport. Position round spotlights and rectangular softboxes, or click anywhere on CAD surfaces to raycast highlights directly.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">CMF Matrix &amp; Mold-Tech Textures</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Manage multi-part colorways, rename and duplicate variants from the topbar, and apply procedural VDI 3400 spark erosion mold textures, brushed aluminum, and anodized finishes.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sticker className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">Raycast Decals &amp; Live Cutaways</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Drop stickers and graphics directly onto 3D surfaces with conformal shrinkwrap and zero Z-fighting. Slice dense assemblies cleanly with live interactive boolean cutaway boxes.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">GPU Batch Queue &amp; DXF Export</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Render cross-product Studios x CMFs matrices sequentially with 1-click OS folder openers, paired with 1-click manufacturing DXF flat pattern and silhouette exports.
                </p>
              </div>
            </div>
          </div>

          {/* INSTALLATION INSTRUCTIONS (DUAL BLENDER SUPPORT) */}
          <div className="p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-3 border-b border-neutral-800">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-bold">
                // Installation Instructions (Cross-Version Setup)
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                Backward &amp; Forward Compatible: 3.6 LTS – 5.2.2+
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              {/* Method A: Blender 4.2+ Extensions */}
              <div className="p-5 bg-neutral-950/80 rounded-xl border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">BLENDER 4.2+ (EXTENSION PACKAGE)</span>
                  <span className="text-[10px] text-neutral-500 uppercase">Recommended</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-neutral-300 font-sans text-xs font-light leading-relaxed">
                  <li>In Blender, go to <strong className="text-white">Edit &gt; Preferences &gt; Get Extensions</strong>.</li>
                  <li>Click the top-right menu icon (down arrow) and select <strong className="text-white">Install from Disk...</strong></li>
                  <li>Select <code className="text-neutral-200 font-mono bg-neutral-900 px-1 py-0.5 rounded">id_renderflo-3.0.0-website-standalone.zip</code> and enable the extension.</li>
                  <li>Press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd> in any 3D Viewport to open the <strong className="text-white">ID RenderFlo</strong> dock.</li>
                </ol>
              </div>

              {/* Method B: Blender 3.6 - 4.1 Classic Add-on */}
              <div className="p-5 bg-neutral-950/80 rounded-xl border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 font-bold">BLENDER 3.6 LTS – 4.1 (CLASSIC ADD-ON)</span>
                  <span className="text-[10px] text-neutral-500 uppercase">Legacy LTS</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-neutral-300 font-sans text-xs font-light leading-relaxed">
                  <li>In Blender, go to <strong className="text-white">Edit &gt; Preferences &gt; Add-ons</strong>.</li>
                  <li>Click <strong className="text-white">Install...</strong> at the top right.</li>
                  <li>Select <code className="text-neutral-200 font-mono bg-neutral-900 px-1 py-0.5 rounded">id_renderflo-3.0.0-website-standalone.zip</code> and check the box to activate.</li>
                  <li>Press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd> in any 3D Viewport to access the studio manager.</li>
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

function ClockIcon(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
