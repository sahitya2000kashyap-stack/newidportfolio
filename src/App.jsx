import React, { useState, useEffect, Component } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useNavigate 
} from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  Lock, 
  ImageIcon 
} from 'lucide-react';

/* --- ERROR BOUNDARY --- */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Portfolio caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Something went wrong.</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {this.state.error?.toString()}
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ padding: '8px 16px', background: '#111', color: '#fff', borderRadius: '20px', border: 'none', cursor: 'pointer' }}
          >
            Reload Homepage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* --- DIRECT STATIC IMPORTS --- */
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';
import img12 from './assets/12.jpg';
import img13 from './assets/13.jpg';
import img14 from './assets/14.jpg';
import img15 from './assets/15.jpg';
import img16 from './assets/16.jpg';
import img17 from './assets/17.jpg';
import img18 from './assets/18.jpg';
import img19 from './assets/19.jpg';
import img20 from './assets/20.jpg';

const imageMap = {
  "1": img1, "2": img2, "3": img3, "4": img4, "5": img5,
  "6": img6, "7": img7, "8": img8, "9": img9, "10": img10,
  "11": img11, "12": img12, "13": img13, "14": img14, "15": img15,
  "16": img16, "17": img17, "18": img18, "19": img19, "20": img20,
};

function ProjectImage({ id, altText, className = "" }) {
  const src = imageMap[String(id)];

  if (!src) {
    return (
      <div className={`bg-neutral-100 flex flex-col items-center justify-center text-center p-6 w-full h-full ${className}`}>
        <ImageIcon className="w-8 h-8 text-neutral-300 mb-2 stroke-1" />
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-tighter">
          {id ? `${id}.jpg` : "Render Preview"}
        </span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={altText} 
      className={`object-cover w-full h-full ${className}`} 
    />
  );
}

/* --- INLINE ROBUST ICONS --- */
function GraduationCapIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/>
    </svg>
  );
}

function WrenchIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>
    </svg>
  );
}

function DropletsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  );
}

function LayersIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function BatteryChargingIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/>
      <path d="M19 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"/>
      <rect x="5" y="6" width="14" height="12" rx="2"/>
      <path d="m11 9-2 3h4l-2 3"/>
    </svg>
  );
}

/* --- FULL DATA REPOSITORY --- */
/* 2 Flagship Works (2026) */
const FLAGSHIP_2026_PROJECTS = [
  {
    slug: "strata-purifier",
    title: "Strata Modular Air Engine",
    tagline: "High-CADR Domestic Filtration Architecture & Tooling DFM",
    client: "Industrial Mass-Production Appliance Study",
    timeline: "2026 Flagship",
    date: "2026",
    category: "Consumer Appliance",
    badge: "PRODUCTION ID / INJECTION DFM",
    thumbId: "1",
    heroId: "5",
    gallery: [
      { id: "9", caption: "Multi-Zone Centrifugal Impeller CAD Simulation" },
      { id: "10", caption: "Structural Chassis Split & Anti-Vibration Bayonet Lock" },
      { id: "11", caption: "2-Part Shell Tooling & Side Lifter Parting Action" }
    ],
    heroMetrics: [
      { label: "CADR Output", val: "450 m³/h" },
      { label: "Acoustics", val: "< 24 dB(A)" },
      { label: "Filter Swapping", val: "Magnetic Latch" },
      { label: "Year", val: "2026" }
    ],
    brief: "To architect a high-volume domestic air filtration unit balancing 360-degree acoustic damping with toolable, low-draft injection molding geometry.",
    sections: [
      {
        step: "01",
        title: "Aero-Acoustic Louvre Topology",
        content: "Iterated 12 blade sweep angles to smooth turbulent intake vortices, yielding a 4.2 dB drop in high-frequency motor whine while maximizing particulate capture."
      },
      {
        step: "02",
        title: "Tooling-First Chassis Layout",
        content: "Applied a uniform 2.2mm nominal wall thickness with strategic internal flow ribs, preventing sink marks on the visible consumer exterior."
      }
    ],
    specs: {
      material: "Matte Polypropylene (PP) Copolymer + Anodized Aluminum Handle Rail",
      finish: "Mold-Tech MT-11020 Fine Grain on main housing; high-polish chamfers",
      tooling: "Single-pull straight-action core & cavity mold with minimal slide action",
      software: "SolidWorks, KeyShot 2026, Flow Simulation CFD, Rapid 1:1 CNC Prototyping"
    }
  },
  {
    slug: "veloce-espresso",
    title: "Veloce Countertop Espresso",
    tagline: "Ultra-Compact Domestic Thermal Architecture & Precision CMF",
    client: "Kinematics & Premium Hardware Build",
    timeline: "2026 Flagship",
    date: "2026",
    category: "Hardware & CMF",
    badge: "KINEMATICS / DIE-CAST & STAINLESS",
    thumbId: "2",
    heroId: "6",
    gallery: [
      { id: "12", caption: "Internal Aluminum Thermoblock Packaging Layout" },
      { id: "13", caption: "Tactile Detent Rotary Dial & Mechanical Pressure Gauge" },
      { id: "14", caption: "Die-Cast Zinc Group Head Finite Element Stress Analysis" }
    ],
    heroMetrics: [
      { label: "Pump Pressure", val: "15 Bar ULKA" },
      { label: "Warm-Up Time", val: "22 Seconds" },
      { label: "Chassis", val: "Die-Cast + 304 SS" },
      { label: "Year", val: "2026" }
    ],
    brief: "Distill professional manual espresso extraction into an ultra-narrow 14cm footprint with satisfying mechanical haptics and die-cast ballast.",
    sections: [
      {
        step: "01",
        title: "Internal Packaging Optimization",
        content: "Consolidated the vibration pump, thermo-coil, and solenoid block into a rigid vertical stack, routing silicone hydraulic tubing away from hot zones."
      },
      {
        step: "02",
        title: "Haptic Detent Engineering",
        content: "Engineered custom stepped rotary dials featuring ball-bearing spring detents that deliver crisp mechanical feedback."
      }
    ],
    specs: {
      material: "Die-Cast Zamak 3 internal spine, brushed 304 Stainless Steel cladding",
      finish: "PVD Gunmetal and bead-blasted satin steel with turned knurled knobs",
      tooling: "Multi-slide zinc die casting and progressive die sheet metal stamping",
      software: "SolidWorks Mechanical FEA, KeyShot Studio, Procreate Sketching"
    }
  }
];

/* 4 Foundation Projects Formatted Verbatim to Presentation Flow */
const ARCHIVE_PROJECTS = [
  {
    slug: "scotch",
    title: "One Hand Scotch Dispenser",
    tagline: "An alternative variant of Tape Dispenser by Scotch which only needs one hand to operate.",
    client: "Group Brainstorming / Individual Studio Project",
    timeline: "9 Weeks",
    date: "2024",
    category: "Industrial Design",
    badge: "CONSUMER HARDWARE / KINEMATICS",
    thumbId: "1",
    heroId: "5",
    gallery: [
      { id: "9", caption: "Notch & Pull Kinematic Mechanism Layout" },
      { id: "10", caption: "Tabletop vs Handheld Ergonomic Testing Models" },
      { id: "11", caption: "2-Plate Injection Mould Core & Cavity Schematics" }
    ],
    heroMetrics: [
      { label: "Operation", val: "1-Handed" },
      { label: "Mechanism", val: "Notch & Pull" },
      { label: "Modes", val: "Dual (Desk & Hand)" },
      { label: "Timeline", val: "9 Weeks" }
    ],
    brief: "To design a tape dispenser variant under the iconic Scotch brand language that requires strictly one hand to hold, dispense, notch, and cleanly cut tape.",
    successCriteria: [
      "Works reliably with just one hand",
      "Satisfies brand value: Resourcefulness ('Using smarter with what you've got')",
      "Maintains Scotch visual brand language (translucent shell, iconic plaid)"
    ],
    sections: [
      {
        step: "01",
        title: "Problem Identification",
        content: "The current Scotch Magic Tape dispenser requires two hands to use, forcing the user to take both hands off of their project which needs holding down. Standard heavy desktop blocks solve this partly but sacrifice mobility and cost efficiency."
      },
      {
        step: "02",
        title: "Benchmarking & Ideation",
        content: "Benchmarked competitor products and analogous mechanisms (jar openers, paper hole punchers, paint rollers, and tape guns). Generated 6 disparate approaches: cutting wheels, sticky-note pull, mechanical suction, cap cutters, and foot tethers."
      },
      {
        step: "03",
        title: "Evaluation & Concept Selection",
        content: "Evaluated 3 chosen concepts: 1. 'Fix It' (mechanical suction base), 2. 'Notch & Pull' (versatile tabletop & handheld hinge), 3. 'Cutter Cap' (portable sleeve). Concept 2 (Notch & Pull) was selected as it complied best with the brand core value of resourcefulness while keeping part count minimal."
      },
      {
        step: "04",
        title: "Refined Concept & Part Count Reduction",
        content: "Transitioned from a multi-piece sliding mechanism to an elegant top notching hinge. Pressing the top lever engages the concealed micro-blade; a gentle wrist twist shears the tape cleanly without springs or metal screws."
      },
      {
        step: "05",
        title: "Usability in Dual Modes",
        content: "Tabletop Mode: Hold tape end -> Pull tape -> Press Notch Hinge -> Twist tape to tear off. Handheld Mode: Hold dispenser -> Roll tape directly on surface -> Press Notch Hinge -> Twist dispenser to tear off cleanly."
      },
      {
        step: "06",
        title: "Form Development & Success Verification",
        content: "Engineered dual ergonomic balance: anti-skid base geometry prevents rolling forward on tables; contoured thumb rests align pressure directly above the notching hinge in hand. Verified against all three initial success criteria."
      }
    ],
    specs: {
      material: "Optical-grade Polycarbonate (PC) + Rubberised TPE Base Pad",
      finish: "SPI-A2 High Polish Shell with VDI 24 Textured Finger Grip",
      tooling: "2-plate injection mould with mechanical lifters for the inner spool hub",
      software: "SolidWorks, KeyShot Studio, Rapid Physical Cardboard & FDM Mockups"
    }
  },
  {
    slug: "coordinate-war",
    title: "Coordinate War",
    tagline: "Interactive STEAM tabletop educational toy teaching 2D Cartesian coordinate indexing.",
    client: "Webby Toys Pvt Ltd (Design Internship)",
    timeline: "2 Months",
    date: "2023",
    category: "Toy Design",
    badge: "TOY ARCHITECTURE / LOW-CAPEX DFM",
    thumbId: "3",
    heroId: "7",
    gallery: [
      { id: "15", caption: "Sheet Nesting Optimization & Friction Fit Joints" },
      { id: "16", caption: "Kinematic Turret 180° Rotational Pivot Assembly" },
      { id: "17", caption: "Physical Playtesting with 2D Cartesian Coordinate Dice" }
    ],
    heroMetrics: [
      { label: "Target Cost", val: "< ₹1,000 (₹350)" },
      { label: "Tooling Capex", val: "Zero Injection" },
      { label: "Age Group", val: "8 to 12 Years" },
      { label: "Core Concept", val: "Cartesian Indexing" }
    ],
    brief: "Design an interactive STEAM-based educational toy for children aged 8 to 12 to be sold under Rs. 1000/-, engineered without expensive injection mold tooling.",
    successCriteria: [
      "Zero injection tooling CAPEX (<6% scrap allowance)",
      "Highly interactive physical tactile mechanics without screen dependency",
      "STEAM concept based: teaching 2D Cartesian coordinates (X, Y) and trajectory physics",
      "Visually intuitive with distinct levels of difficulty"
    ],
    sections: [
      {
        step: "01",
        title: "User Research & Industry Insights",
        content: "Parents and educators noted that modern toys often over-automate with lights and sounds, taking away active imagination. Research highlighted two core insights: simpler toys that are 'easy to understand, hard to master' are most desirable, and satisfying physical reset actions create an engrossing 'flow state'."
      },
      {
        step: "02",
        title: "Finding Opportunities & STEAM Concept",
        content: "Mapped intersections between classic games (Pinball, Carrom) and educational curricula (spatial reasoning, 2D coordinate maps, trajectory angles). Created an opportunity matrix focused on coordinate indexing and manual aiming."
      },
      {
        step: "03",
        title: "Prototyping & Mechanism Evolution",
        content: "Iterated through 4 functional physical prototypes. Refined the sheet slot-and-tab interlocking joints, 180° rotational turret pivot, and marble trigger clearance to guarantee shot consistency across varied tabletop friction."
      },
      {
        step: "04",
        title: "How to Play (Gameplay Flow)",
        content: "Step 1: Throw the coordinate dice. Step 2: Calculate the coordinate intersection, orient the mechanical turret angle, aim & shoot. Step 3: Record score on friction-fit sliding markers."
      },
      {
        step: "05",
        title: "Zero-Tooling Production Optimization",
        content: "Constructed entirely from standardized sheet stock utilizing high-yield CNC laser cutting and die nesting optimization, achieving unit economics well below the sub-₹1000 retail price threshold."
      }
    ],
    specs: {
      material: "Precision FSC MDF / Pine composite sheets + Low-friction Delrin bushings",
      finish: "Direct UV Screen Printed Graphics with clear matte protective coat",
      tooling: "High-yield CNC laser cutting and die nesting optimization (<6% scrap allowance)",
      software: "Rhino 3D, SolidWorks, AutoCAD Nesting, Rapid Laser Prototyping"
    }
  },
  {
    slug: "moodi",
    title: "MOODI Lamp",
    tagline: "Algorithmic Lighting & Tooling DFM Exploration",
    client: "Skill Demonstration Project",
    timeline: "Independent Build",
    date: "2024",
    category: "Computational Design",
    badge: "COMPUTATIONAL ID / AM + INJECTION",
    thumbId: "2",
    heroId: "6",
    gallery: [
      { id: "12", caption: "Grasshopper Parametric Toolpath Computation" },
      { id: "13", caption: "Non-Planar Curved Parting Line Enclosure CAD" },
      { id: "14", caption: "Dual Potentiometer Arduino Breadboard & CCT Test" }
    ],
    heroMetrics: [
      { label: "Print Mode", val: "Continuous Spiral" },
      { label: "Tooling", val: "Non-Planar Parting" },
      { label: "Controls", val: "Dual Analogue Knobs" },
      { label: "Electronics", val: "Arduino / CCT Warm-Cold" }
    ],
    brief: "To harmonize computational algorithmic additive manufacturing with rigorous mass-production injection molding DFM and physical firmware prototyping.",
    successCriteria: [
      "Project Goal: Tangible analog tactile knobs & unobtrusive ambient domestic presence",
      "Personal Goal: Tooling DFM constraints (zero undercuts) & GhPython parametric toolpaths"
    ],
    sections: [
      {
        step: "01",
        title: "Form Ideation & Silhouette Evaluation",
        content: "Explored over 20 distinct form silhouettes balancing minimalist aesthetics against intuitive tactile affordance. Selected an inviting split form pairing an organic diffuser with a grounded, toolable base."
      },
      {
        step: "02",
        title: "Generative Grasshopper Algorithm",
        content: "Developed a custom Grasshopper/GhPython script translating mathematical wave sweeps into continuous single-line toolpaths. Designed specifically for single-walled 'Vase Mode' printing to eliminate travel seams (Z-scar) and optimize optical rib frequencies that eliminate LED glare."
      },
      {
        step: "03",
        title: "Electronic Hardware & Firmware Prototyping",
        content: "Assembled and programmed an onboard Arduino circuit reading dual analog potentiometers for independent, real-time control over lumen intensity (PWM) and warm-to-cold correlated color temperature (CCT)."
      },
      {
        step: "04",
        title: "Shopfloor Tooling & Undercut Mitigation",
        content: "Applied Tool & Die principles to the lower chassis. Engineered non-planar curved parting lines around the rotary potentiometer bosses and power inputs, achieving clean zero-undercut line-of-draw demolding without internal mechanical side lifters."
      },
      {
        step: "05",
        title: "Physical Working Model Assembly",
        content: "Fabricated full functional models: 3D printed translucent PETG lampshades, hand-finished ABS chassis with Mold-Tech MT-11010 fine texture, custom turned knurled knobs, and internal soldered driver electronics."
      }
    ],
    specs: {
      material: "Lampshade: Translucent PETG (AM). Base: Matte ABS Injection Resins",
      finish: "Lampshade: Optical refractive ribs. Base: Mold-Tech MT-11010 Fine Matte",
      tooling: "Complex curved parting line eliminating internal slide undercuts for DC barrel jack and dual potentiometer bosses",
      software: "Rhino, Grasshopper (GhPython), SolidWorks, Arduino IDE"
    }
  },
  {
    slug: "joseph-joseph",
    title: "Articulating Glue Gun",
    tagline: "A glue gun concept designed in line with the design language & philosophy of Joseph Joseph.",
    client: "Personal Brand Translation Project",
    timeline: "8 Weeks",
    date: "2024",
    category: "Ergonomics & CMF",
    badge: "BRAND DNA / KINEMATICS",
    thumbId: "4",
    heroId: "8",
    gallery: [
      { id: "18", caption: "Chromatic Blocking & Material Breakdown" },
      { id: "19", caption: "Twist-and-Lock Detent Articulation Joint" },
      { id: "20", caption: "PTC Ceramic Heating Core & Anti-Drool Silicone Nozzle" }
    ],
    heroMetrics: [
      { label: "Articulations", val: "Pencil & Pistol" },
      { label: "Charging", val: "USB-C Internal" },
      { label: "CMF Style", val: "Dual-Tone Blocking" },
      { label: "Timeline", val: "8 Weeks" }
    ],
    brief: "To translate the clean functional design language and 'Problem Solved / Buy once. Buy well.' philosophy of Joseph Joseph into workshop craft equipment.",
    successCriteria: [
      "Eliminate wrist fatigue during precision micro-craftwork",
      "Integrate safe thermal management and anti-drool silicone protection",
      "Translate Joseph Joseph CMF DNA: analogous palettes, functional material separation, recessed branding"
    ],
    sections: [
      {
        step: "01",
        title: "Brand Philosophy & DNA Analysis",
        content: "Deconstructed Joseph Joseph's design language: functional material separation to divide visual weight, analogous color palettes with neutral contrast, clean flush transitions between materials, and soft geometric forms."
      },
      {
        step: "02",
        title: "Problem Identification & Market Positioning",
        content: "Identified widespread user pain points: standard pistol grips are ill-suited for precision work causing severe hand cramping; tools drool molten adhesive when idling; lack of temperature feedback; and awkward two-handed on/off switches."
      },
      {
        step: "03",
        title: "Kinematic Exploration: Mild to Wild",
        content: "Explored 3 mechanism architectures: Concept 1 'Attach' (swappable modular handles), Concept 2 'Bend' (single plane hinge), and Concept 3 'Twist' (twist-and-lock detent joint). Concept 3 was selected for robust internal wire conduit protection and firm tactile locking."
      },
      {
        step: "04",
        title: "Dual-Grip Ergonomic Articulation",
        content: "The body pivots seamlessly between a low-angle Pencil Grip (optimal for fine craft and electronics assembly) and an upright Pistol Grip (for heavy continuous pressure). Contoured rests provide natural thumb indexing in both configurations."
      },
      {
        step: "05",
        title: "Functional Hardware Refinement",
        content: "Integrated an internal PTC ceramic heating core with automatic timeout, analog-style rocker switch with distinct color dot feedback, internal USB-C fast charging, and an anti-drool food-grade silicone nozzle shroud."
      }
    ],
    specs: {
      material: "High-impact heat-resistant Polyamide (PA66-GF) + Food-grade Silicone Boot",
      finish: "Velvet Soft-touch Matte body with glossy functional highlight levers",
      tooling: "Internal central pivot joint with detent indexing and flexible silicone wire conduit",
      software: "SolidWorks, KeyShot Studio, Procreate / SketchBook Pro, Clay Ergonomic Studies"
    }
  }
];

const ALL_PROJECTS = [...FLAGSHIP_2026_PROJECTS, ...ARCHIVE_PROJECTS];
const PROJECTS = ALL_PROJECTS;

/* --- NAVIGATION --- */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight text-neutral-900 hover:opacity-75 transition-opacity">
          SAHITYA KASHYAP
        </Link>
        
        <div className="flex items-center gap-8 md:gap-10">
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <Link to="/commercial" className="hover:text-neutral-900 transition-colors">Commercial</Link>
            <Link to="/playground" className="hover:text-neutral-900 transition-colors">Playground</Link>
            <Link to="/about" className="hover:text-neutral-900 transition-colors">About</Link>
            <a 
              href="https://www.behance.net/sahityakashyap" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-neutral-900 transition-colors"
            >
              Behance
            </a>
          </div>

          <a 
            href="mailto:design.er.saahi@gmail.com" 
            className="text-[13px] font-semibold bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 active:scale-95 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

/* --- FOOTER --- */
function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl font-medium text-neutral-900 mb-6 leading-tight">
              Bridging craftsmanship and industrial precision.
            </h3>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              Industrial Designer & Tool Maker based in Mumbai / Delhi. Designing mass-market appliances and precision hardware for global brands.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6">Contact</p>
              <div className="flex flex-col gap-3 text-neutral-900 font-medium text-sm">
                <a href="mailto:design.er.saahi@gmail.com" className="hover:text-neutral-500 transition-colors">Email</a>
                <a href="tel:+918800633820" className="hover:text-neutral-500 transition-colors">+91-8800633820</a>
                <a href="https://sahityakashyap.in" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">sahityakashyap.in</a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6">Sections & Social</p>
              <div className="flex flex-col gap-3 text-neutral-900 font-medium text-sm">
                <Link to="/" className="hover:text-neutral-500 transition-colors">Home</Link>
                <Link to="/commercial" className="hover:text-neutral-500 transition-colors">Commercial Work</Link>
                <Link to="/playground" className="hover:text-neutral-500 transition-colors">Playground</Link>
                <Link to="/about" className="hover:text-neutral-500 transition-colors">About Me</Link>
                <a href="https://www.behance.net/sahityakashyap" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">Behance</a>
                <a href="https://linkedin.com/in/sahityakashyap" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4 text-[13px] text-neutral-400 font-medium">
          <p>© {new Date().getFullYear()} Sahitya Kashyap</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <span>Portfolio v2.0</span>
            <span>Tool Maker Turned Industrial Designer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- PAGE 1: HOME --- */
function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Pulsating Indicator & Updated Status */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Currently working at Future Factory, Mumbai
            </p>
          </div>
          
          <h1 className="text-5xl md:text-[84px] font-medium leading-[1.05] tracking-tight text-neutral-900 mb-10">
            Designing for <br />
            <span className="text-neutral-400">the real world.</span>
          </h1>
          
          {/* Subtext: Tool Maker Turned Designer + Design Sensibility & Technical Knowledge */}
          <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed font-light">
            Tool maker turned industrial designer with strong design sensibility and rigorous technical knowledge. Bringing 4 years of Tool & Die precision to human-centric product design—bridging shopfloor manufacturing reality with refined consumer aesthetics.
          </p>
        </div>
      </section>

      {/* SECTION 1: 2026 FLAGSHIP PROJECTS (Large Thumbnails) */}
      <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex items-center justify-between mb-12 border-b border-neutral-100 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase rounded">2026</span>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">Featured Flagship Works</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">Current Competency</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {FLAGSHIP_2026_PROJECTS.map((proj) => (
            <Link 
              key={proj.slug} 
              to={`/project/${proj.slug}`}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-8 relative rounded-xl shadow-sm">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-neutral-900" />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-500 text-[15px] font-normal leading-relaxed max-w-sm">
                    {proj.tagline}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">{proj.category}</span>
                  <span className="text-[11px] font-medium text-neutral-400 font-mono">{proj.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 2: 4 PAST CASE STUDIES (Smaller Archive Thumbnails) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="flex items-center justify-between mb-8 border-t border-neutral-100 pt-16 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold uppercase rounded">2023 — 2024</span>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Foundation Projects & Archive Studies</h3>
          </div>
          <span className="text-xs text-neutral-400">04 Case Studies</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ARCHIVE_PROJECTS.map((proj) => (
            <Link 
              key={proj.slug} 
              to={`/project/${proj.slug}`}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden mb-4 rounded-lg shadow-sm">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">{proj.category}</span>
                <h4 className="text-base font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors leading-snug">
                  {proj.title}
                </h4>
                <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed">
                  {proj.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Page Navigation Cards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            to="/commercial" 
            className="group block bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Lock className="w-4 h-4 text-neutral-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Sanitized Dossier</span>
            </div>
            <h4 className="text-xl font-medium text-neutral-900 mb-2">Commercial Hardware</h4>
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">
              High-volume commercial programs spanning dual-mode cleaning equipment, heavy-duty institutional water systems, and domestic appliances.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Commercial Dossier <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link 
            to="/playground" 
            className="group block bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <SparklesIcon className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Visual Lab</span>
            </div>
            <h4 className="text-xl font-medium text-neutral-900 mb-2">Design Playground</h4>
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">
              Compact vertical mosaic of unconstrained CAD experiments, clay models, and material explorations.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Explore Renders <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link 
            to="/about" 
            className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCapIcon className="w-4 h-4 text-orange-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Tool Maker Roots</span>
            </div>
            <h4 className="text-xl font-medium text-white mb-2">About Sahitya</h4>
            <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">
              4-Year Tool & Die Making Diploma, DTU Design, CSWP Certified, and Future Factory experience.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white">
              Read Experience <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* --- PAGE 2: PROJECT DETAIL (Restructured per Presentation Flow) --- */
function ProjectDetailPage() {
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
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-20">
        <div className="max-w-4xl">
          <button 
            onClick={() => navigate(-1)} 
            className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          
          <div className="mb-6 flex gap-4">
            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
              {project.date}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8">
            {project.title}
          </h1>
          <p className="text-2xl text-neutral-500 leading-relaxed max-w-3xl font-light">
            {project.tagline}
          </p>
        </div>
        
        {project.heroMetrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 pt-12 border-t border-neutral-100">
            {project.heroMetrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">{m.label}</span>
                <span className="text-lg font-medium text-neutral-900">{m.val}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero Showcase Image */}
      <div className="w-full aspect-[21/9] bg-neutral-100 overflow-hidden mb-24">
        <ProjectImage 
          id={project.heroId} 
          altText={`${project.title} Showcase`} 
          className="w-full h-full"
        />
      </div>

      {/* Project Content — Structured strictly per presentation flow */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8">
            <div className="space-y-24">
              
              {/* The Brief & Success Criteria */}
              {project.brief && (
                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-neutral-200"></span> The Brief & Objectives
                  </h3>
                  <p className="text-xl text-neutral-700 leading-relaxed font-light mb-8">
                    {project.brief}
                  </p>
                  {project.successCriteria && (
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-3">Success Criteria</span>
                      <ul className="space-y-2">
                        {project.successCriteria.map((c, i) => (
                          <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                            <span className="text-neutral-400">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )}

              {/* Step-by-Step Presentation Process Sections */}
              {project.sections && project.sections.map((sec, idx) => (
                <section key={idx}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-neutral-200"></span> {sec.step || `0${idx + 1}`}. {sec.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed font-light">
                    {sec.content}
                  </p>
                </section>
              ))}
            </div>
          </div>
          
          {/* Sticky Technical Specifications */}
          {project.specs && (
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-8">Technical Specs</h4>
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">Material</span>
                    <p className="text-[13px] text-neutral-700 leading-relaxed font-medium">{project.specs.material}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">Finish</span>
                    <p className="text-[13px] text-neutral-700 leading-relaxed font-medium">{project.specs.finish}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">Tooling</span>
                    <p className="text-[13px] text-neutral-700 leading-relaxed font-medium">{project.specs.tooling}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">Software</span>
                    <p className="text-[13px] text-neutral-700 leading-relaxed font-medium">{project.specs.software}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-32">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="aspect-square bg-neutral-100 overflow-hidden rounded-md">
                  <ProjectImage 
                    id={img.id} 
                    altText={img.caption} 
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.1em]">{img.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/* --- PAGE 3: COMMERCIAL (Sanitized Confidential Programs — No Brand Names) --- */
function CommercialPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Strict Confidentiality: Brand names omitted per instructions
  const commercialPrograms = [
    {
      category: "High-Volume Consumer Utility Hardware",
      badge: "Injection Moulding DFM & Ergonomics",
      icon: <LayersIcon className="w-5 h-5 text-neutral-900" />,
      items: [
        {
          title: "Dual-Function Utility Stool & Cleaning Bucket System",
          tag: "PP Copolymer Tooling & Anthropometric Seating",
          desc: "Architected a dual-purpose sanitary domestic stool-cum-bucket meeting high-volume injection constraints. ",
          specs: [
            "Total Plastic Weight: 674g – 693g",
            "Dual Water Chamber: 6L+6L / 6.4L+6.4L",
            "Stacking & Shipping Nesting Ratio: 4:1",
            "Tooling: 2-Part Single-Pull Core & Cavity"
          ]
        }
      ]
    },
    {
      category: "Heavy-Duty Institutional & Commercial Water Systems",
      badge: "High-Pressure Hydraulics & Sheet Metal Architecture",
      icon: <DropletsIcon className="w-5 h-5 text-neutral-900" />,
      items: [
        {
          title: "High-Capacity Institutional Floor-Standing Purification Station",
          tag: "Industrial Canteen & Enterprise Architecture",
          desc: "Engineered an industrial-scale standing RO purification station for high-footfall institutions, canteens, and enterprise workspaces. ",
          specs: [
            "Heavy-Duty 1.5mm CRCA Metal Enclosure",
            "Insulated Foam Infill Tank Enclosure",
            "Heater, Chiller & Pump Modular Bay",
            "1:1 Physical Visual Mockup Validated"
          ]
        },
        {
          title: "Architectural Wall-Mounted Domestic Purifier Unit",
          tag: "Compact Kitchen Integration & Tool-Free Servicing",
          desc: "Designed an architectural wall-mounted domestic purifier unit with a compact footprint and tool-free servicing.",
          specs: [
            "Internal Filter & Booster Pump Packaging",
            "Kinematic Drop-Down Maintenance Door",
            "Integrated Ambient LED & TDS Readout",
            "Full 1:1 Functional Appearance Prototype"
          ]
        }
      ]
    },
    {
      category: "Power & Domestic Energy Storage Hardware",
      badge: "Structural CMF & Parametric Surface Texture",
      icon: <BatteryChargingIcon className="w-5 h-5 text-neutral-900" />,
      items: [
        {
          title: "Domestic Inverter Battery Enclosure & Texture Study",
          tag: "Parametric Surface Texture & Heavy-Duty Load Linkages",
          desc: "Re-engineered heavy 150 Ah tall-tubular inverter battery housings into a modern domestic hardware asset.",
          specs: [
            "High-Impact Polypropylene Battery Shell",
            "Parametric Dimple Aerated Stiffness Grid",
            "Integrated Dual Rope Pivot Handles",
            "Level Indicator & Terminal Shrouds"
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to home
      </Link>
      
      <div className="max-w-4xl mb-20">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-white bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest">
          <Lock className="w-3 h-3" /> Confidential Commercial Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8">
          Mass Production & <br /> Industrial Programs
        </h1>
        <p className="text-2xl text-neutral-500 leading-relaxed font-light">
          Sanitized engineering overviews of high-volume consumer cleaning equipment, institutional hydraulic fluid systems, and domestic appliances. Brand names withheld under non-disclosure agreements.
        </p>
      </div>

      <div className="space-y-20">
        {commercialPrograms.map((prog, pIdx) => (
          <div key={pIdx} className="border-t border-neutral-200 pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  {prog.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium text-neutral-900">{prog.category}</h2>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{prog.badge}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prog.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="p-10 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between hover:border-neutral-300 transition-colors duration-300"
                >
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-3">{item.tag}</span>
                    <h3 className="text-2xl font-medium text-neutral-900 mb-4">{item.title}</h3>
                    <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 font-light">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/50">
                    {item.specs.map((s, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white border border-neutral-200 px-3 py-1.5 rounded text-neutral-600">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Portfolio Walkthrough CTA */}
      <div className="mt-28 p-12 bg-neutral-900 rounded-3xl text-center flex flex-col items-center">
        <h3 className="text-3xl font-medium text-white mb-6">Request full portfolio walk-through</h3>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl font-light">
          Available for private walk-throughs of sanitized CAD models, physical visual mockups, and production tooling drawings for verified teams.
        </p>
        <a 
          href="mailto:design.er.saahi@gmail.com?subject=Confidential%20Portfolio%20Review" 
          className="bg-white text-neutral-900 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neutral-100 active:scale-95 transition-all duration-200"
        >
          Contact for access
        </a>
      </div>
    </div>
  );
}

/* --- PAGE 4: PLAYGROUND (Dense, Non-Clickable Vertical Mosaic Grid) --- */
function PlaygroundPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const playgroundRenders = [
    { id: "1", tag: "KeyShot 2026", alt: "Refractive Optical Ribs & Light Bleed" },
    { id: "2", tag: "Grasshopper", alt: "Continuous Wave Toolpath Modulation" },
    { id: "3", tag: "SolidWorks", alt: "Dual-Durometer Co-Injection Grip" },
    { id: "4", tag: "CMF Study", alt: "Analogous Palette & SPI Polish Blocking" },
    { id: "7", tag: "CNC Sheet", alt: "Zero-CAPEX Sheet Nesting Slot Geometry" },
    { id: "8", tag: "Kinematics", alt: "Twist-and-Lock Detent Articulation" },
    { id: "13", tag: "Tooling DFM", alt: "Curved Parting Line Demold Analysis" },
    { id: "17", tag: "Physical Test", alt: "Kinematic Marble Trajectory Release" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to home
      </Link>
      
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-widest">
          <SparklesIcon className="w-3 h-3 text-orange-600" /> Visual Lab & Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6">
          Renders, Form Studies <br />& Explorations
        </h1>
        <p className="text-xl text-neutral-500 leading-relaxed font-light">
          A visual archive of unconstrained CAD experiments, clay models, rapid CMF studies, and Grasshopper iterations.
        </p>
      </div>

      {/* TIGHT VERTICAL IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 cursor-default select-none">
        {playgroundRenders.map((item, idx) => (
          <div 
            key={idx} 
            className="w-full aspect-square bg-neutral-100 overflow-hidden relative group rounded-md"
          >
            <ProjectImage 
              id={item.id} 
              altText={item.alt} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors pointer-events-none" />
            <span className="absolute bottom-2 left-2 bg-neutral-900/80 backdrop-blur-xs text-white text-[9px] font-mono uppercase px-2 py-0.5 rounded pointer-events-none">
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Under Construction Notice */}
      <div className="mt-16 bg-neutral-50 border border-neutral-200 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 block mb-3 font-bold">
            Curating New High-Res Renders
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">
            Website under construction
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed font-light">
            I am actively compiling the complete high-resolution 3D asset library here. Till then, check out my <strong>Behance</strong> to view in-depth sketchbooks, clay ergonomics, and full production renders.
          </p>
        </div>

        <a 
          href="https://www.behance.net/sahityakashyap" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:shadow-lg active:scale-95 transition-all duration-200 shrink-0"
        >
          Check my Behance till then <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* --- PAGE 5: ABOUT ME --- */
function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      {/* Header */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-20">
        <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Tool Maker Turned Industrial Designer
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8">
            Precision at the intersection of <br />
            <span className="text-neutral-400">machining and design.</span>
          </h1>
          <p className="text-2xl text-neutral-600 leading-relaxed font-light">
            With 4 years of intensive Tool & Die making training followed by formal Industrial Design at DTU, I bridge shopfloor manufacturing reality with clean, human-centered consumer hardware aesthetics.
          </p>
        </div>
      </header>

      {/* Main Content Details */}
      <section className="bg-neutral-900 py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Accolades, Education & Skills */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Pedigree & Accolades</h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6">
                  Design decisions made in CAD directly affect mold longevity, cycle times, parting complexity, and tooling CAPEX. My shopfloor background ensures every draft angle and shutoff is intentional.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">CSWP SolidWorks Pro</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">CSWA Additive Mfg</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">WorldSkills Regional Gold</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">WorldSkills Delhi Gold</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">B.Des DTU</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">DITE Tool & Die</span>
                </div>
              </div>

              {/* Education Card */}
              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <GraduationCapIcon className="w-4 h-4 text-orange-400" /> Formal Education
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-medium text-white">Offsite Pro 2024</h5>
                    <p className="text-neutral-400 text-xs">Advanced Design • Chicago, Illinois (Jun – Aug 2024)</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <h5 className="font-medium text-white">Bachelors of Design (B.Des)</h5>
                    <p className="text-neutral-400 text-xs">Delhi Technological University (DTU) • 2021 – 2025</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <h5 className="font-medium text-white">Diploma in Tool & Die Making (4-Year Program)</h5>
                    <p className="text-neutral-400 text-xs">Delhi Institute of Tool Engineering (DITE) • 2017 – 2021</p>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <WrenchIcon className="w-4 h-4 text-orange-400" /> Core Competencies
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-neutral-400 block mb-1">3D CAD & Surface Modeling</span>
                    <p className="text-neutral-200 font-medium">Rhino, Grasshopper, SolidWorks, Autodesk Inventor, Fusion 360</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-2.5">
                    <span className="text-neutral-400 block mb-1">Manufacturing & Shopfloor</span>
                    <p className="text-neutral-200 font-medium">DFM / DFA, Conformal Cooling, GD&T, Metal AM, Press Tools, Injection Moulds, Welding</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-2.5">
                    <span className="text-neutral-400 block mb-1">Visualization & Prototyping</span>
                    <p className="text-neutral-200 font-medium">KeyShot, Illustrator, Photoshop, InDesign, SketchBook Pro, Rapid Laser & CNC</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Work Experience Timeline */}
            <div className="lg:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Work Experience</h3>
              <div className="space-y-8">
                {[
                  {
                    role: "Industrial Designer",
                    company: "Future Factory, Mumbai",
                    period: "2025 — Present",
                    desc: "Developing mass-market appliances and structural mechanism systems for leading global consumer brands."
                  },
                  {
                    role: "CMF Design Intern",
                    company: "Maruti Suzuki India, Gurgaon",
                    period: "2025",
                    desc: "User research, trends research, and 3D texture & illumination pattern generation with Grasshopper."
                  },
                  {
                    role: "Product Design Intern",
                    company: "Webby Toys Pvt Ltd",
                    period: "2023",
                    desc: "Designed interactive tabletop games under target price thresholds; DFM optimization for high-yield sheet nesting & injection moulding."
                  },
                  {
                    role: "Product Design Intern",
                    company: "Webby Toys Pvt Ltd",
                    period: "2022",
                    desc: "Design research, ideation, competitor analysis, prototyping, and CAD modeling for children aged 6 to 14. Pine wood workflow optimization."
                  },
                  {
                    role: "Application Engineer Trainee",
                    company: "Objectify Technologies Pvt Ltd",
                    period: "2021",
                    desc: "Design for Additive Manufacturing (DFAM), conformal cooling channel architecture for injection moulds, and RFQ technical client quotation."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 -mx-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-800/30 transition-all duration-200 flex flex-col md:flex-row justify-between gap-4 border-b border-neutral-800 pb-8 last:border-0"
                  >
                    <div>
                      <h4 className="text-xl font-medium text-white">{item.role}</h4>
                      <p className="text-neutral-400 text-sm mt-1">{item.company}</p>
                    </div>
                    <div className="md:text-right flex flex-col md:items-end gap-1">
                      <span className="text-neutral-500 text-sm font-mono">{item.period}</span>
                      <p className="text-neutral-400 text-sm max-w-sm md:text-right font-light">{item.desc}</p>
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

/* --- ROOT APP --- */
export default function App() {
  useEffect(() => {
    document.title = "Sahitya Kashyap Industrial Designer";
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col">
          <div className="bg-neutral-900 py-1.5 text-center">
            <span className="text-white font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
              Website under construction
            </span>
          </div>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectDetailPage />} />
              <Route path="/commercial" element={<CommercialPage />} />
              <Route path="/commercial-nda" element={<CommercialPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/personal" element={<PlaygroundPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}