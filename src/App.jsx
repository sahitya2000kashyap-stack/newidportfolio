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
  ImageIcon, 
  ArrowUp, 
  Menu, 
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  Wrench,
  ShieldCheck,
  EyeOff,
  Quote,
  Play
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

/* --- SCROLL TO TOP FLOATING BUTTON --- */
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-900 text-white shadow-xl hover:bg-neutral-800 border border-neutral-700 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

/* --- DYNAMIC ASSET REGISTRY --- */
const assetFiles = import.meta.glob('./assets/*.png', { eager: true });

function getAssetUrl(id) {
  if (!id) return null;
  const matchKey = Object.keys(assetFiles).find(key => {
    const filename = key.split('/').pop().replace(/\.png$/i, '');
    return filename === String(id);
  });
  return matchKey ? assetFiles[matchKey].default : null;
}

function ProjectImage({ id, altText, className = "", fitMode = "object-cover" }) {
  const src = getAssetUrl(id);

  if (!src) {
    return (
      <div className={`bg-neutral-100 flex flex-col items-center justify-center text-center p-6 w-full h-full min-h-[160px] border border-dashed border-neutral-300 rounded-xl ${className}`}>
        <ImageIcon className="w-8 h-8 text-neutral-300 mb-2 stroke-1" />
        <span className="font-mono text-[11px] text-neutral-600 font-bold tracking-wider">
          {id ? `${id}.png` : "Render Preview"}
        </span>
        <span className="font-mono text-[9px] text-neutral-400 mt-0.5">Missing: src/assets/{id}.png</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={altText} 
      className={`${fitMode} w-full h-full ${className}`} 
    />
  );
}

/* --- INLINE ICONS --- */
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

/* --- FULL DATA REPOSITORY (GAPLESS 1 TO 78 MAPPING) --- */
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
    thumbId: "28",
    heroId: "5",
    deckBlocks: [
      {
        type: "text_top_image_bottom",
        tag: "ACOUSTICS & ARCHITECTURE",
        title: "Aero-Acoustic Louvre Topology & Air Vortex CFD",
        desc: "Domestic purifiers generate unbearable high-pitch motor whistle at high CADR settings. Iterated 12 blade sweep angles to smooth turbulent intake vortices, yielding a 4.2 dB drop in motor whine.",
        imageId: "9",
        caption: "Centrifugal Aero-Impeller CFD Pressure Gradient Analysis",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "TOOLING DFM REALIZATION",
        title: "2-Part Shell Tooling & Side Lifter Mitigation",
        desc: "Applied a uniform 2.2mm nominal wall thickness with internal structural flow ribs, keeping the exterior strictly toolable on a single-pull straight-action core and cavity mold.",
        imageId: "10",
        caption: "Split Chassis Rib Architecture & Bayonet Filter Latch",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-cover"
      }
    ],
    heroMetrics: [
      { label: "CADR Output", val: "450 m³/h" },
      { label: "Acoustics", val: "< 24 dB(A)" },
      { label: "Filter Swapping", val: "Magnetic Latch" },
      { label: "Year", val: "2026" }
    ],
    specs: {
      material: "Matte Polypropylene (PP) Copolymer + Anodized Aluminum Handle Rail",
      finish: "Mold-Tech MT-11020 Fine Grain on main housing; high-polish chamfers",
      tooling: "Single-pull straight-action core & cavity mold with minimal slide action",
      software: "SolidWorks, Blender (Form Concepting & Cycles Shading), KeyShot, Flow Simulation CFD"
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
    deckBlocks: [
      {
        type: "text_left_image_right",
        tag: "THERMAL PACKAGING",
        title: "14cm Footprint Vertical Consolidation",
        desc: "Consolidated the vibration pump, thermo-coil, and solenoid block into a rigid vertical stack, routing silicone hydraulic lines safely away from hot electrical coils.",
        imageId: "12",
        caption: "Internal Aluminum Thermoblock Hydraulic Packaging",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "MECHANICAL HAPTICS",
        title: "Spring Ball-Bearing Detent Selector",
        desc: "Engineered custom stepped rotary dials featuring ball-bearing spring detents that deliver crisp mechanical feedback, anchored by a heavy die-cast Zamak counterweight base.",
        imageId: "14",
        caption: "Finite Element Stress Verification on Group Head Clamp",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-cover"
      }
    ],
    heroMetrics: [
      { label: "Pump Pressure", val: "15 Bar ULKA" },
      { label: "Warm-Up Time", val: "22 Seconds" },
      { label: "Chassis", val: "Die-Cast + 304 SS" },
      { label: "Year", val: "2026" }
    ],
    specs: {
      material: "Die-Cast Zamak 3 internal spine, brushed 304 Stainless Steel cladding",
      finish: "PVD Gunmetal and bead-blasted satin steel with turned knurled knobs",
      tooling: "Multi-slide zinc die casting and progressive die sheet metal stamping",
      software: "SolidWorks Mechanical FEA, Blender (Lighting & Renders), KeyShot Studio"
    }
  }
];

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
    thumbId: "3",
    heroId: "7",
    metaHeader: {
      timeline: "9 Weeks",
      client: "Group Brainstorming / Individual Project",
      focus: "Real World Sketching, Product Visualization"
    },
    deckBlocks: [
      {
        type: "problem_breakdown",
        tag: "PROBLEM IDENTIFICATION",
        title: "The Two-Hand Bottleneck",
        desc: "The current Scotch Magic Tape dispenser requires two hands to use, forcing the user to take both hands off of their project which needs holding down.",
        steps: ["Release the tape", "Pull the tape", "Cut the tape"],
        imageId: "11",
        caption: "Slide 04: The Two-Hand Frustration & Interaction Breakdown",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "criteria_cards",
        tag: "SUCCESS CRITERIA",
        title: "How do we define success for this product?",
        items: [
          { title: "Works with just one hand", note: "Hold, dispense, notch & shear tape reliably" },
          { title: "Satisfy Brand Values: Resourcefulness", note: "Using smarter with what you've got" },
          { title: "Satisfy Brand Language", note: "Optical clarity, curved silhouettes, iconic tartan" }
        ]
      },
      {
        type: "text_top_image_bottom",
        tag: "BENCHMARKING",
        title: "Competitor & Analogous Products",
        desc: "Studied existing market tape tools alongside analogous single-hand products (jar openers, hole punchers, pizza cutting wheels, and paint rollers) to isolate intuitive tactile cues.",
        imageId: "13",
        caption: "Slide 06: Benchmarking Existing & Analogous Physical Mechanisms",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "IDEATION & EVALUATION",
        title: "Generating Variety of Ideas",
        desc: "Brainstormed 6 functional categories: Cutting Wheel, Stack Sticky-Note Style, Earbuds with Blade on Cap, Mechanical Suction, and Foot Tether.",
        imageId: "15",
        caption: "Slide 07: 6-Column Brainstorming Matrix Evaluating Functionality & Part Counts",
        aspectClass: "aspect-[4/3] md:aspect-[5/4]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "comparison_columns",
        tag: "3 CHOSEN CONCEPTS",
        title: "Evaluation & Concept Selection",
        concepts: [
          { name: "1. Fix It", tag: "Mechanical Suction", pros: "Direct, easy to use, lower upfront cost", cons: "Cannot be used if surface is porous" },
          { name: "2. Notch & Pull", tag: "Selected Concept", pros: "Versatile tabletop & handheld, minimal parts, highly intuitive", cons: "Requires calibrated shear geometry", selected: true },
          { name: "3. Cutter Cap", tag: "Portable Sleeve", pros: "Highly compact, portable", cons: "More expensive, complex internal sliders" }
        ]
      },
      {
        type: "thin_horizontal_strip",
        tag: "REFINED CONCEPT",
        title: "Refined Concept — Notch & Pull (Slide to Hinge)",
        desc: "Reduced the number of parts by adopting a top notching hinge rather than a sliding cutter. Pressing down engages the concealed micro-blade; a light wrist flick tears the tape cleanly.",
        imageId: "16",
        caption: "Slide 09: Slide-to-Hinge Kinematic Conversion & Notching Tool Architecture",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "USABILITY SKETCHES",
        title: "Tabletop vs Handheld Dual-Mode Walkthrough",
        desc: "Tabletop Mode: Hold tape end -> Pull tape -> Press Notch Hinge -> Twist tape to tear off. Handheld Mode: Hold dispenser -> Roll tape directly on surface -> Press Notch Hinge -> Twist dispenser to tear off.",
        imageId: "17",
        caption: "Slide 10: 4-Step Interaction Sequences Comparing Desktop and Handheld Usability",
        aspectClass: "aspect-[21/9] md:aspect-[26/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "BRAND ANALYSIS",
        title: "Brand Language & Core Value Analysis",
        desc: "Resourcefulness is a core value at Scotch: 'Resourcefulness is about adapting, making do and doing more with what you've got. It's not about using less, but using smarter.'",
        imageId: "18",
        caption: "Slide 11: Deconstructing Packaging Variants, Color Architecture & Price Points",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "FORM DEVELOPMENT",
        title: "Form — Making It Look More Scotch",
        desc: "Integrated functional silhouettes: contoured thumb notch hinge, finger rest grooves, and an anti-rollover base lip that anchors horizontal pull forces.",
        imageId: "19",
        caption: "Slide 12: Form Iterations & Functional Feature Integration Array",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "20",
        caption: "Slide 14: Dual-Mode Functional Hero Render",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "39", // Formerly gap 39
        caption: "Slide 16: Final Production Model in Translucent Optical Finish",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "23",
        caption: "Exploded CMF & Internal Spool Fitment Render",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "40", // Formerly gap 40
        caption: "High-Gloss Studio Perspective View",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "success_verification",
        tag: "EVALUATION",
        title: "Did I hit the mark?",
        desc: "Verified against the kickoff success criteria: single-hand operation, true adherence to brand resourcefulness, and iconic Scotch visual transparency.",
        imageId: "25",
        caption: "Slide 17: Previously Set Success Criteria Confirmed Hit",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-contain bg-white"
      }
    ],
    specs: {
      material: "Optical-grade Polycarbonate (PC) + High-Tack Overmoulded TPE Grip",
      finish: "SPI-A2 High Polish Body with VDI 24 Textured Thumb Indents",
      tooling: "2-plate injection mould with dual mechanical slide lifters for core spool hub",
      software: "SolidWorks, Blender (Ideation & Rendering), KeyShot Studio, Rapid 3D Mockups"
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
    thumbId: "4",
    heroId: "8",
    metaHeader: {
      timeline: "2 Months",
      client: "Webby Toys — Freshmen Year Internship Project",
      focus: "Toy Design, Design Process, Prototyping (Credits: Vikrant for Graphics)"
    },
    deckBlocks: [
      {
        type: "quote_and_insights",
        tag: "RESEARCH & INSIGHTS",
        quote: "Toys are more interactive now. A lot of them take the imagination out of it. Action figures used to have a little plastic gun, now they have this HUGE oversized gun that actually fires projectiles. Or everything has lights, and sounds... kinda takes the creativity out of it.",
        quoteAuthor: "Parent Interview (Male, 42, children aged 5, 8)",
        insights: [
          { label: "Low Initial Investment", text: "Zero injection molded parts to avoid heavy upfront tooling CAPEX." },
          { label: "Easy to Understand, Hard to Master", text: "Simpler toys with progressive mastery are significantly more desirable." },
          { label: "Satisfying Physical UX", text: "Physical reset actions create a high-engagement loop." },
          { label: "State of Flow", text: "Correct challenge balance puts children into focused flow." }
        ]
      },
      {
        type: "text_top_image_bottom",
        tag: "OPPORTUNITY MAPPING",
        title: "Finding Opportunities in STEAM Curricula",
        desc: "Mapped intersections between classic games (Pinball, Carrom) and childhood behaviors (spatial reasoning, 2D maps, trajectory angles) to anchor Cartesian coordinate math in physical play.",
        imageId: "31",
        caption: "Slide 21: Opportunity Tree Across Science, Math & Spatial Reasoning",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_left_image_right",
        tag: "CONCEPT IDEATION",
        title: "Mechanism Explorations & Trajectory Linkages",
        desc: "Explored 3 concepts: Concept #1 Slider linkages, Concept #2 Light ray angles, and Concept #3 Rotating Turret Linkages. Concept #3 was selected for its direct tactile feedback.",
        imageId: "32",
        caption: "Slide 23: Mechanism Ideation Sheets & Aiming Detent Concepts",
        aspectClass: "aspect-[4/3]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "RAPID PROTOTYPING",
        title: "Prototype Evolution & Structural Assembly",
        desc: "Iterated through 4 functional working mockups to test friction fit tab-and-slot joints, 180° rotational turret tolerances, and consistent marble launch trajectories.",
        imageId: "33",
        caption: "Slide 24: Progressive Physical Prototyping Evolution Milestones",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "34",
        caption: "Slide 25: Production Laser-Cut Assembly & Integrated Score Board",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "COORDINATE INDEXING",
        title: "Plan View Coordinate Grid: (X, Y) Numerical Trajectory Layout",
        desc: "Calculated layout of 16 precision drop holes marked with discrete Cartesian indices (1,1 to 4,4), calibrated directly to dice roll probability matrices.",
        imageId: "36",
        caption: "Slide 27: Top-Down Plan View Numerical Grid Map",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-contain bg-neutral-900"
      },
      {
        type: "text_top_image_bottom",
        tag: "HOW TO PLAY",
        title: "Play! Throw the Dice, Aim & Shoot, Record Score",
        desc: "Step 1: Throw the coordinate dice -> Step 2: Calculate the coordinate intersection, orient the mechanical turret angle, aim & shoot -> Step 3: Record score on friction-fit sliding markers.",
        imageId: "38",
        caption: "Slide 28: Interactive Gameplay Flow & Tactile Scoring Steps",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "35",
        caption: "Kinematic Turret Pivot Detailing & Pinion Teeth Fitment",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "37",
        caption: "Die-Cut Flat Packaging Nesting Simulation",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "41", // Formerly gap 41
        caption: "Elevation View Assembly & Marble Feed Clearance",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "48", // Formerly gap 48
        caption: "Laser Sheet Stock High-Yield Nesting Layout",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "video_embed",
        tag: "PHYSICAL PLAYTESTING DEMO",
        title: "Working Toy Mechanics & Marble Launch Demonstration",
        desc: "Watch the live demonstration of the 180° rotary aiming turret, 2D Cartesian coordinate indexing, and marble launch feedback.",
        youtubeId: "TGUaLafrzao"
      }
    ],
    specs: {
      material: "Precision FSC MDF / Pine composite sheets + Low-friction Delrin bushings",
      finish: "Direct UV Screen Printed Graphics with clear matte protective coat",
      tooling: "High-yield CNC laser cutting and die nesting optimization (<6% scrap rate)",
      software: "Rhino 3D, Blender (Product Stills & Assembly Exploded Views), SolidWorks, AutoCAD"
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
    thumbId: "21",
    heroId: "22",
    metaHeader: {
      timeline: "Independent Build",
      client: "Skill Demonstration Project",
      focus: "Computational Design, DFM Tooling, Physical Firmware"
    },
    deckBlocks: [
      {
        type: "dual_goals",
        tag: "PROJECT & PERSONAL GOALS",
        title: "Balancing Tangible Touch with Algorithmic Craft",
        projectGoals: [
          { label: "Tangible Interactions", text: "Creating satisfying tactile analog knobs." },
          { label: "Unobtrusive Aesthetic", text: "Design that blends quietly into domestic spaces." }
        ],
        personalGoals: [
          { label: "Tooling & Manufacturing", text: "Designing with injection constraints to turn limitations into creative details." },
          { label: "Computational Design", text: "Leveraging GhPython algorithms for seamless single-wall 3D printing." }
        ]
      },
      {
        type: "thin_horizontal_strip",
        tag: "FORM IDEATION",
        title: "20+ Form Silhouette Iterations",
        desc: "Explored varied profiles balancing minimal geometry with inviting analog affordances.",
        imageId: "42",
        caption: "Slide 31: 20+ Silhouette Explorations Balancing Base and Diffuser Ratios",
        aspectClass: "aspect-[21/9] md:aspect-[26/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "EVALUATION & PARTING LINES",
        title: "Concept Evaluation & Parting Line Innovation",
        desc: "Evaluated 3 concepts. Chose the split configuration with angled dial bosses, designing a non-planar 3D parting line to demold the bosses without costly side-actions.",
        imageId: "43",
        caption: "Slide 32: Evaluating Form, Affordance & Line-of-Draw Demold Constraints",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "DFM SECTION DRAFT",
        title: "Development Sketch & Tooling Architecture",
        desc: "Engineered single-wall spiral vase mode for the shade, quick-draw threads, and draft angles for injection molding.",
        imageId: "44",
        caption: "Slide 33: Cross-Sectional DFM Architecture for Injection & Additive Manufacturing",
        aspectClass: "aspect-[16/9] md:aspect-[21/10]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "NATURAL INSPIRATION",
        title: "Form Cues: Curls, Curves & Geometric Fluting",
        desc: "Extracted surface wave mathematics from spiraling shells, cream swirls, and architectural facade ribbing.",
        imageId: "45",
        caption: "Slide 34: Visual Moodboard Guiding the Parametric Mathematical Toolpaths",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "thin_horizontal_strip",
        tag: "COMPUTATIONAL DESIGN",
        title: "Grasshopper Parametric Wave Algorithm",
        desc: "Formulated a custom Grasshopper script that translates mathematical wave sweeps into continuous single-line G-code toolpaths.",
        imageId: "46",
        caption: "Slide 35: Grasshopper Visual Script for Continuous Toolpath Wave Modulation",
        aspectClass: "aspect-[21/7] md:aspect-[28/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PROTOTYPING & WORKSHOP",
        title: "Visual Optical Testing & Firmware Breadboards",
        desc: "Printed test shades at varied frequencies to eliminate LED glare, paired with an Arduino circuit controlling PWM dimming and warm-to-cold CCT balance.",
        imageId: "47",
        caption: "Slide 36: Optical Shade Testing Samples Array",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "49",
        caption: "Slide 38: DFM Line-of-Draw Exploration: Non-Planar Parting Line CAD",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PHYSICAL BUILD",
        title: "Ender 3 Continuous Printing & Base Post-Processing",
        desc: "Fabricated functional working models using continuous spiral PETG printing, hand-sprayed fine texture ABS bases, and turned knobs.",
        imageId: "54",
        caption: "Slide 41: Workshop Production: 3D Printing, Enclosure Sanding & Internal Soldering",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "50",
        caption: "Slide 44: Final Working Model in Illuminated Domestic Setting",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "51",
        caption: "Warm CCT Illumination Detail & Translucent Optical Ripple",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "52",
        caption: "Turned Knurled Potentiometer Detailing & Undercut-Free Split Base",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "53", // Formerly gap 53
        caption: "Diffuser Optical Caustic Shadow Cast Simulation",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "55", // Formerly gap 55
        caption: "Exploded Internal Electronics Bay & Soldered Potentiometer Wire Loom",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      }
    ],
    specs: {
      material: "Shade: Translucent PETG (Continuous AM). Base: Matte ABS Injection Resins",
      finish: "Diffuser: Optical refractive wave fluting. Base: Mold-Tech MT-11010 Fine Matte",
      tooling: "Single-action 2-plate tool using non-planar curves to avoid costly side-actions",
      software: "Rhino, Grasshopper (GhPython), Blender (Procedural Shaders), SolidWorks, Arduino"
    }
  },
  {
    slug: "joseph-joseph",
    title: "Joseph Joseph Glue Gun",
    tagline: "A glue gun concept designed in line with the design language & philosophy of Joseph Joseph.",
    client: "Personal Brand Translation Project",
    timeline: "8 Weeks",
    date: "2024",
    category: "Ergonomics & CMF",
    badge: "BRAND DNA / KINEMATICS",
    thumbId: "26",
    heroId: "27",
    metaHeader: {
      timeline: "8 Weeks",
      client: "Personal Brand Translation Project",
      focus: "Brand Language, CMF, Ergonomics & Kinematics"
    },
    deckBlocks: [
      {
        type: "brand_manifesto",
        tag: "BRAND PHILOSOPHY",
        title: "Joseph Joseph: Problem Solved / Buy Once. Buy Well.",
        desc: "Joseph Joseph design philosophy keeps functionality at the heart of everything. Starting by identifying an everyday problem and devising durable, beautiful solutions following circular economy principles.",
        imageId: "61",
        caption: "Slide 46: Functional Innovation & Material Quality Manifesto",
        aspectClass: "aspect-[4/3] md:aspect-[16/10]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "BRAND DNA ANALYSIS",
        title: "Deconstructing Design Language Markers",
        desc: "Analyzed design hallmarks: functional material separation to divide visual weight, analogous color palettes with neutral contrast, clean flush transitions between materials, and soft geometric forms.",
        imageId: "62",
        caption: "Slide 47: Comprehensive Visual Brand Language & CMF Analysis Matrix",
        aspectClass: "aspect-[4/3] md:aspect-[16/10]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "OPPORTUNITY MAPPING",
        title: "Ergonomic Pain Points Mind Map & Market Positioning",
        desc: "Mapped user personas (DIY enthusiasts, electronics crafters) against functional requirements: preventing burn hazards, dual grip modes, thermal indication, and anti-drool protection.",
        imageId: "64",
        caption: "Slide 49: Extensive Mind Map Connecting Functionality, CMF & Ergonomics",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PROBLEM IDENTIFICATION",
        title: "5 Critical Hot-Glue Gun Pain Points",
        desc: "1. Not meant for precision micro-work. 2. Some controls need two hands. 3. Not knowing when it's ready. 4. Frequent turning on/off. 5. Molten adhesive drools during idle rests.",
        imageId: "65",
        caption: "Slide 50: Step-by-Step Problem Identification & Hand Interaction Studies",
        aspectClass: "aspect-[21/8] md:aspect-[26/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "KINEMATICS: MILD TO WILD",
        title: "Attach, Bend, and Twist Architectures",
        desc: "Explored 3 mechanism architectures: Concept 1 'Attach' (swappable handles), Concept 2 'Bend' (single-plane hinge), and Concept 3 'Twist' (twist-and-lock detent joint). Concept 3 was selected for internal wire protection and tactile locking.",
        imageId: "67",
        caption: "Slide 52: Kinematic Exploration: Comparing Mechanical Hinge Concepts",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "FORM EVOLUTION",
        title: "Form Exploration Across Articulations",
        desc: "Iterated handle proportions across straight-line, 45-degree, and 90-degree angles to ensure natural thumb indexing in both pencil and pistol configurations.",
        imageId: "68",
        caption: "Slide 53: Form Variations Investigating Balance in Pencil and Pistol Modes",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "CONCEPT REFINEMENT",
        title: "Haptic Detents, Rocker Switches & USB-C",
        desc: "Integrated an internal PTC ceramic heating core, analog rocker switch with color dot feedback, internal USB-C fast charging, and an anti-drool food-grade silicone nozzle shroud.",
        imageId: "74",
        caption: "Slide 59: CMF Detailing: Soft-Touch Chassis, High-Gloss Actuators & Rocker Switches",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "75",
        caption: "Slide 60: Hero Render: Articulating Craft Adhesive Tool in Pencil Grip Mode",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "76",
        caption: "Internal Mechanical Packaging & PTC Heating Cartridge Assembly",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "77",
        caption: "Detent Articulation Joint Exploded View",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "78",
        caption: "Slide 62: CMF Product Still: Balanced Dual-Tone Ergonomics and Silicone Shroud",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "56", // Formerly gap 56
        caption: "Dual-Tone Analogous CMF Colorway Study",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "57", // Formerly gap 57
        caption: "Pistol Grip High-Pressure Adhesive Extrusion View",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      }
    ],
    specs: {
      material: "High-impact heat-resistant Polyamide (PA66-GF) + Food-grade Silicone Boot",
      finish: "Velvet Soft-touch Matte body with glossy functional highlight levers",
      tooling: "Internal central pivot joint with detent indexing and flexible silicone wire conduit",
      software: "SolidWorks, Blender (Procedural Silicone & Cycles Renders), KeyShot Studio, Clay Ergonomics"
    }
  }
];

const ALL_PROJECTS = [...FLAGSHIP_2026_PROJECTS, ...ARCHIVE_PROJECTS];

/* --- NAVIGATION --- */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-lg md:text-xl font-medium tracking-[0.08em] text-neutral-900 hover:opacity-75 transition-opacity"
        >
          SAHITYA KASHYAP
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          <div className="flex items-center gap-8 text-[13px] font-medium text-neutral-500 uppercase tracking-wider">
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

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-neutral-800 hover:text-black focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 font-mono text-sm tracking-wider uppercase text-neutral-700">
            <Link to="/" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[01. Home]</Link>
            <Link to="/commercial" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[02. Commercial Hardware]</Link>
            <Link to="/playground" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[03. Playground & Visual Lab]</Link>
            <Link to="/about" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[04. About Sahitya]</Link>
            <a 
              href="https://www.behance.net/sahityakashyap" 
              target="_blank" 
              rel="noreferrer" 
              onClick={closeMenu}
              className="py-2 flex items-center justify-between text-neutral-900 font-bold border-b border-neutral-100"
            >
              <span>Behance Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="pt-2">
              <a 
                href="mailto:design.er.saahi@gmail.com" 
                onClick={closeMenu}
                className="w-full text-center block text-xs font-sans font-semibold bg-neutral-900 text-white px-5 py-3 rounded-full hover:bg-neutral-800 active:scale-95 transition-all tracking-normal"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
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
              Bridging design sensibility and technical vigour.
            </h3>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              Industrial Designer based in Mumbai / Delhi. Designing mass-market appliances and precision hardware for global brands.
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
            <span>Industrial Designer</span>
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
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              INDUSTRIAL DESIGNER @ FUTURE FACTORY, MUMBAI
            </p>
          </div>
          
          <h1 className="text-5xl md:text-[84px] font-medium leading-[1.05] tracking-tight text-neutral-900 mb-10">
            Designing for <br />
            <span className="text-neutral-400">the real world.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed font-light">
            Industrial designer translating complex human behaviors into refined physical products. Leveraging a foundation in Tool & Die precision to ensure that expressive forms, ergonomic interactions, and premium CMF translate flawlessly into high-volume manufacturing.
          </p>
        </div>
      </section>

      {/* SECTION 1: 2026 FLAGSHIP PROJECTS */}
      <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-12 border-b border-neutral-100 pb-6 w-full">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase rounded shrink-0">
              2026
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-900">
              Featured Flagship Works
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 self-end sm:self-auto shrink-0">
            In Active Development
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {FLAGSHIP_2026_PROJECTS.map((proj) => (
            <div 
              key={proj.slug} 
              className="flex flex-col relative select-none cursor-not-allowed group"
            >
              <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 md:mb-8 relative rounded-2xl shadow-xs border border-neutral-200">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="filter blur-[8px] opacity-60 scale-105 pointer-events-none" 
                />
                
                <div className="absolute inset-0 bg-neutral-900/10 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-neutral-900/90 border border-neutral-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase mb-1 shadow-sm">
                    <Lock className="w-3.5 h-3.5 text-orange-400" />
                    <span>In Active Development</span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-700 font-semibold tracking-wider">
                    Unreleased Flagship Project
                  </span>
                </div>
              </div>

              <div className="filter blur-[4px] opacity-40 pointer-events-none transition-all">
                <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded">
                    {proj.category}
                  </span>
                  <span className="text-neutral-400 font-semibold">{proj.date}</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-500 text-sm md:text-[15px] font-normal leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: 4 PAST CASE STUDIES */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 border-t border-neutral-100 pt-16 pb-4 w-full">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold uppercase rounded shrink-0">
              2023 — 2024
            </span>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500">
              Foundation & Archive Projects
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 self-end sm:self-auto shrink-0">
            04 Case Studies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ARCHIVE_PROJECTS.map((proj) => (
            <Link 
              key={proj.slug} 
              to={`/project/${proj.slug}`}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden mb-4 rounded-xl shadow-xs border border-neutral-150">
                <ProjectImage 
                  id={proj.thumbId} 
                  altText={proj.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                  <span className="font-bold uppercase tracking-wider text-neutral-500">{proj.category}</span>
                  <span className="text-neutral-400">{proj.date}</span>
                </div>
                <h4 className="text-base md:text-lg font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors leading-snug">
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
              <Sparkles className="w-4 h-4 text-neutral-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Visual Lab</span>
            </div>
            <h4 className="text-xl font-medium text-neutral-900 mb-2">Design Playground</h4>
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">
              Dynamic multi-aspect mosaic of unconstrained Blender CAD experiments, physical mockups, and material explorations.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Explore Visual Lab <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link 
            to="/about" 
            className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCapIcon className="w-4 h-4 text-neutral-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Design Background</span>
            </div>
            <h4 className="text-xl font-medium text-white mb-2">About Sahitya</h4>
            <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">
              B.Des from DTU, Offsite Pro Chicago, CSWP Certified, Blender 3D, and Future Factory experience[cite: 8].
            </p>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white">
              Read Profile <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* --- PAGE 2: PRESENTATION-ALIGNED PROJECT CASE STUDY --- */
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
        <div className="w-full aspect-[21/9] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
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

/* --- PAGE 3: COMMERCIAL --- */
function CommercialPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const commercialPrograms = [
    {
      category: "High-Volume Consumer Utility Hardware",
      badge: "Injection Moulding DFM & Ergonomics",
      icon: <LayersIcon className="w-5 h-5 text-neutral-900" />,
      items: [
        {
          title: "Dual-Function Utility Stool & Cleaning Bucket System",
          tag: "PP Copolymer Tooling & Anthropometric Seating",
          desc: "Architected a dual-purpose sanitary domestic stool-cum-bucket meeting high-volume injection constraints. Features structural load-bearing rib matrices, quick single-pull tooling, and stackable container logistics.",
          imageId: "29",
          specs: [
            "Total Plastic Weight: 674g – 693g",
            "Dual Water Chamber: 6L+6L",
            "Stacking Nesting Ratio: 4:1",
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
          desc: "Engineered an industrial-scale standing RO purification station for high-footfall institutions, canteens, and enterprise workspaces. Multi-bay maintenance access and insulated foam tanks.",
          imageId: "30",
          specs: [
            "Heavy-Duty 1.5mm CRCA Metal Enclosure",
            "Insulated Foam Infill Tank Enclosure",
            "Modular Pump & Filter Bay",
            "1:1 Physical Visual Mockup Validated"
          ]
        },
        {
          title: "Architectural Wall-Mounted Domestic Purifier Unit",
          tag: "Compact Kitchen Integration & Tool-Free Servicing",
          desc: "Designed an architectural wall-mounted domestic purifier unit with a compact footprint, tool-free filter replacement, and ambient status readouts.",
          imageId: "58", // Formerly gap 58
          specs: [
            "Internal Booster Pump Packaging",
            "Kinematic Drop-Down Service Door",
            "Integrated Ambient LED & TDS Readout",
            "Full 1:1 Appearance Prototype"
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
          desc: "Re-engineered heavy 150 Ah tall-tubular inverter battery housings into a modern domestic hardware asset with aerated stiffness dimples and dual rope pivot handles.",
          imageId: "31",
          specs: [
            "High-Impact Polypropylene Shell",
            "Parametric Dimple Aerated Grid",
            "Dual Rope Pivot Carrying Handles",
            "Integrated Terminal Shrouds"
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
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-tight">
          Mass Production & <br /> Industrial Programs
        </h1>
        <p className="text-2xl text-neutral-500 leading-relaxed font-light">
          Sanitized engineering overviews of high-volume consumer cleaning equipment, institutional hydraulic fluid systems, and domestic appliances. Brand names and sensitive CAD assemblies are obscured under active non-disclosure agreements.
        </p>
      </div>

      <div className="space-y-24">
        {commercialPrograms.map((prog, pIdx) => (
          <div key={pIdx} className="border-t border-neutral-200 pt-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                {prog.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-900">{prog.category}</h2>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{prog.badge}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prog.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-neutral-50 rounded-2xl border border-neutral-200/90 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300"
                >
                  <div className="w-full h-56 bg-neutral-200/60 relative overflow-hidden border-b border-neutral-200">
                    <ProjectImage 
                      id={item.imageId} 
                      altText={`${item.title} Confidential Hardware`} 
                      className="w-full h-full object-cover filter blur-[6px] scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-4">
                      <div className="bg-black/80 border border-neutral-700 text-white px-3 py-1.5 rounded-full flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase mb-1">
                        <EyeOff className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Confidential Hardware Architecture</span>
                      </div>
                      <span className="font-mono text-[9px] text-neutral-200">
                        Sanitized CAD Preview // NDA Protected
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">{item.tag}</span>
                      <h3 className="text-xl md:text-2xl font-medium text-neutral-900 mb-3">{item.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/70">
                      {item.specs.map((s, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-neutral-200 px-2.5 py-1 rounded text-neutral-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-28 p-12 bg-neutral-900 rounded-3xl text-center flex flex-col items-center">
        <h3 className="text-3xl font-medium text-white mb-4">Request sanitized CAD walkthrough</h3>
        <p className="text-neutral-400 text-base mb-8 max-w-xl font-light">
          Available for private walk-throughs of sanitized CAD models, physical visual mockups, and production tooling drawings for verified teams.
        </p>
        <a 
          href="mailto:design.er.saahi@gmail.com?subject=Confidential%20Portfolio%20Review" 
          className="bg-white text-neutral-900 px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neutral-100 active:scale-95 transition-all duration-200"
        >
          Contact for access
        </a>
      </div>
    </div>
  );
}

/* --- PAGE 4: PLAYGROUND (16 CONSECUTIVE NON-REPEATING SLOTS: 59 TO 78) --- */
function PlaygroundPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Consecutive slots filling all previously skipped gaps without exceeding 78
  const playgroundRenders = [
    { id: "59", alt: "Physical Form & Ergonomic Clay Mockup" },
    { id: "60", alt: "Procedural Shading & Optical Refraction Study" },
    { id: "63", alt: "Grasshopper Parametric Fluting Toolpath" },
    { id: "66", alt: "High-Gloss CMF Study with SPI-A1 Specularity" },
    { id: "69", alt: "Kinematic Detent Joint Exploration" },
    { id: "70", alt: "Exploded Mechanism Packaging Study" },
    { id: "71", alt: "Continuous 3D Print Toolpath Iteration" },
    { id: "72", alt: "Sheet Metal Stamping Progressive Layout" },
    { id: "73", alt: "Hard Surface Blender Subdivision Study" },
    { id: "81", alt: "Tactile Button Affordance & Travel Clearance" },
    { id: "82", alt: "Die-Cast Heat Sink Fin Simulation" },
    { id: "83", alt: "Dual-Durometer Overmold Texture Sample" },
    { id: "84", alt: "Minimalist Ambient Lighting Render" },
    { id: "85", alt: "Workshop Prototyping Assembly Still" },
    { id: "79", alt: "Fine Mold-Tech Texture CMF Palette" },
    { id: "80", alt: "Curved Parting Line Engineering Section" }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to home
      </Link>
      
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-neutral-900" /> Visual Lab & Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
          Renders, Form Studies <br />& Explorations
        </h1>
        <p className="text-xl text-neutral-500 leading-relaxed font-light">
          A visual archive of unconstrained CAD experiments, clay models, rapid CMF studies, Blender visual labs, and Grasshopper iterations.
        </p>
      </div>

      {/* Dynamic Multi-Aspect Masonry (Accommodates Wide, Square & Tall Renders with Zero Underlay Text) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {playgroundRenders.map((item, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs hover:border-neutral-400 transition-all duration-300 group"
          >
            <ProjectImage 
              id={item.id} 
              altText={item.alt} 
              fitMode="object-cover"
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      <div className="mt-20 bg-neutral-50 border border-neutral-200 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3 font-bold">
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
              Formal Industrial Design background from DTU and Offsite Pro, enriched by 4 years of deep shopfloor Tool & Die craftsmanship[cite: 8]. I craft cohesive product languages, ergonomic consumer experiences, and category-defining hardware that manufacturers can produce without compromise.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] lg:aspect-[16/13] rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-neutral-100">
              <ProjectImage 
                id="1" 
                altText="Sahitya Kashyap Studio CAD & Prototyping Setup" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-neutral-900 py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Design Pedigree & Honors</h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6">
                  Industrial design leadership driven by user empathy, visual form development, and tactical ergonomics. My foundation in toolmaking acts as a production accelerator—ensuring aesthetic visions survive the engineering handoff intact.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 border border-neutral-700 bg-neutral-800/60 rounded-full text-xs text-white font-mono font-medium">B.Des DTU Design</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 bg-neutral-800/60 rounded-full text-xs text-white font-mono font-medium">Offsite Pro Chicago</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">WorldSkills Regional Gold</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">WorldSkills Delhi Gold</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">CSWP SolidWorks Certified</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono">CSWA Additive Mfg</span>
                  <span className="px-3.5 py-1.5 border border-neutral-700/80 rounded-full text-xs text-neutral-400 font-mono">DITE Tool & Die (4-Yr)</span>
                </div>
              </div>

              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <GraduationCapIcon className="w-4 h-4 text-neutral-300" /> Formal Education
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-medium text-white">Bachelors of Design (B.Des)</h5>
                    <p className="text-neutral-400 text-xs">Delhi Technological University (DTU) • Aug 2021 – May 2025[cite: 8]</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <h5 className="font-medium text-white">Offsite Pro 2024</h5>
                    <p className="text-neutral-400 text-xs">Advanced Industrial Design Intensive • Chicago, Illinois (June 2024 – Aug 2024)[cite: 8]</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <h5 className="font-medium text-white">Diploma in Tool & Die Making (4-Year Program)</h5>
                    <p className="text-neutral-400 text-xs">Delhi Institute of Tool Engineering (DITE) • Aug 2017 – July 2021[cite: 8]</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-neutral-800/40 rounded-2xl border border-neutral-800 space-y-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                  <WrenchIcon className="w-4 h-4 text-neutral-300" /> Design Competencies
                </div>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-neutral-400 block mb-1">Industrial Design & Form Development</span>
                    <p className="text-neutral-200 font-medium leading-relaxed">Form Semantics, User Ergonomics, CMF Strategy, Analogous Blocking, Clay & Visual Mockups</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <span className="text-neutral-400 block mb-1">Digital Ideation & Advanced Visualization</span>
                    <p className="text-neutral-200 font-medium leading-relaxed">Blender (Procedural Material Shading, Fast Form Ideation & Cycles Rendering), KeyShot Studio</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <span className="text-neutral-400 block mb-1">Computational & Parametric CAD</span>
                    <p className="text-neutral-200 font-medium leading-relaxed">Rhino, Grasshopper (GhPython), SolidWorks (CSWP), Autodesk Inventor, Fusion 360[cite: 8]</p>
                  </div>
                  <div className="border-t border-neutral-700/50 pt-3">
                    <span className="text-neutral-400 block mb-1">Manufacturing Realization (DFM/DFA)</span>
                    <p className="text-neutral-200 font-medium leading-relaxed">Injection Mould Core/Cavity, Undercut Mitigation, GD&T, Progressive Dies, Sheet Nesting[cite: 8]</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Work Experience</h3>
              <div className="space-y-8">
                {[
                  {
                    role: "Industrial Designer",
                    company: "Future Factory, Mumbai",
                    period: "June 2025 — Present",
                    duration: "Ongoing",
                    desc: "Developing mass-market appliances and structural mechanism systems for leading global consumer brands."
                  },
                  {
                    role: "CMF Design Intern",
                    company: "Maruti Suzuki India, Gurgaon",
                    period: "Jan 2025 — May 2025",
                    duration: "5 Months",
                    desc: "User research, trends research, and 3D texture & illumination pattern generation with Grasshopper for passenger cabin interiors."
                  },
                  {
                    role: "Product Design Intern",
                    company: "Webby Toys Pvt Ltd, Delhi",
                    period: "June 2023 — Aug 2023",
                    duration: "3 Months",
                    desc: "Designed interactive tabletop games under target price thresholds; DFM optimization for high-yield sheet nesting & injection moulding."
                  },
                  {
                    role: "Product Design Intern",
                    company: "Webby Toys Pvt Ltd, Delhi",
                    period: "June 2022 — July 2022",
                    duration: "2 Months",
                    desc: "Design research, ideation, competitor analysis, prototyping, and CAD modeling for children aged 6 to 14. Pine wood workflow optimization."
                  },
                  {
                    role: "Application Engineer Trainee",
                    company: "Objectify Technologies Pvt Ltd, NOIDA",
                    period: "Jan 2021 — June 2021",
                    duration: "6 Months",
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

/* --- ROOT APP --- */
export default function App() {
  useEffect(() => {
    document.title = "Sahitya Kashyap | Industrial Designer";
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col">
          <div className="bg-neutral-900 py-1.5 text-center">
            <span className="text-white font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
              Website under construction, Please visit my behance for my portfolio.
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
          <ScrollToTopButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}