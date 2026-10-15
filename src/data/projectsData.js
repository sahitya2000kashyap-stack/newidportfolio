/* --- FULL DATA REPOSITORY --- */
export const FLAGSHIP_2026_PROJECTS = [
  {
    slug: "In Development",
    title: "In Development",
    tagline: "High-CADR Domestic Filtration Architecture & Tooling DFM",
    client: "Industrial Mass-Production Appliance Study",
    timeline: "2026 Flagship",
    date: "2026",
    category: "Consumer Appliance",
    badge: "PRODUCTION ID / INJECTION DFM",
    thumbId: "thumb-cadr-air-filtration",
    heroId: "cadr-air-filtration-hero",
    heroAspectClass: "aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9]",
    deckBlocks: [
      {
        type: "text_top_image_bottom",
        tag: "ACOUSTICS & ARCHITECTURE",
        title: "Aero-Acoustic Louvre Topology & Air Vortex CFD",
        desc: "Domestic purifiers generate unbearable high-pitch motor whistle at high CADR settings. Iterated 12 blade sweep angles to smooth turbulent intake vortices, yielding a 4.2 dB drop in motor whine.",
        imageId: "cadr-impeller-cfd-pressure",
        caption: "Centrifugal Aero-Impeller CFD Pressure Gradient Analysis",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "TOOLING DFM REALIZATION",
        title: "2-Part Shell Tooling & Side Lifter Mitigation",
        desc: "Applied a uniform 2.2mm nominal wall thickness with internal structural flow ribs, keeping the exterior strictly toolable on a single-pull straight-action core and cavity mold.",
        imageId: "cadr-chassis-rib-architecture",
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
    slug: "In Development",
    title: "In Development",
    tagline: "Ultra-Compact Domestic Thermal Architecture & Precision CMF",
    client: "Kinematics & Premium Hardware Build",
    timeline: "2026 Flagship",
    date: "2026",
    category: "Hardware & CMF",
    badge: "KINEMATICS / DIE-CAST & STAINLESS",
    thumbId: "thumb-thermal-espresso-machine",
    heroId: "thermal-espresso-machine-hero",
    heroAspectClass: "aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9]",
    deckBlocks: [
      {
        type: "text_left_image_right",
        tag: "THERMAL PACKAGING",
        title: "14cm Footprint Vertical Consolidation",
        desc: "Consolidated the vibration pump, thermo-coil, and solenoid block into a rigid vertical stack, routing silicone hydraulic lines safely away from hot electrical coils.",
        imageId: "thermal-hydraulic-packaging",
        caption: "Internal Aluminum Thermoblock Hydraulic Packaging",
        aspectClass: "aspect-[16/10]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "MECHANICAL HAPTICS",
        title: "Spring Ball-Bearing Detent Selector",
        desc: "Engineered custom stepped rotary dials featuring ball-bearing spring detents that deliver crisp mechanical feedback, anchored by a heavy die-cast Zamak counterweight base.",
        imageId: "thermal-clamp-fea-stress",
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

export const ARCHIVE_PROJECTS = [
  /* 1. GLUE GUN */
  {
    slug: "joseph-joseph",
    title: "Joseph Joseph Glue Gun",
    tagline: "A glue gun concept designed in line with the design language & philosophy of Joseph Joseph.",
    client: "Personal Brand Translation Project",
    timeline: "8 Weeks",
    date: "2024",
    category: "Ergonomics & CMF",
    badge: "BRAND DNA / KINEMATICS",
    thumbId: "thumb-joseph-joseph-glue-gun",
    heroId: "glue-gun-hero",
    heroAspectClass: "aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9]",
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
        imageId: "glue-gun-brand-manifesto",
        caption: "Slide 46: Functional Innovation & Material Quality Manifesto",
        aspectClass: "aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "BRAND DNA ANALYSIS",
        title: "Deconstructing Design Language Markers",
        desc: "Analyzed design hallmarks: functional material separation to divide visual weight, analogous color palettes with neutral contrast, clean flush transitions between materials, and soft geometric forms.",
        imageId: "glue-gun-brand-dna-analysis",
        caption: "Slide 47: Comprehensive Visual Brand Language & CMF Analysis Matrix",
        aspectClass: "aspect-[16/6]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "OPPORTUNITY MAPPING",
        title: "Ergonomic Pain Points Mind Map & Market Positioning",
        desc: "Mapped user personas (DIY enthusiasts, electronics crafters) against functional requirements: preventing burn hazards, dual grip modes, thermal indication, and anti-drool protection.",
        imageId: "glue-gun-ergonomic-pain-points",
        caption: "Slide 49: Extensive Mind Map Connecting Functionality, CMF & Ergonomics",
        aspectClass: "aspect-[16/8] md:aspect-[20/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PROBLEM IDENTIFICATION",
        title: "5 Critical Hot-Glue Gun Pain Points",
        desc: "1. Not meant for precision micro-work. 2. Some controls need two hands. 3. Not knowing when it's ready. 4. Frequent turning on/off. 5. Molten adhesive drools during idle rests.",
        imageId: "glue-gun-problem-breakdown",
        caption: "Slide 50: Step-by-Step Problem Identification & Hand Interaction Studies",
        aspectClass: "aspect-[21/8] md:aspect-[26/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "KINEMATICS: MILD TO WILD",
        title: "Attach, Bend, and Twist Architectures",
        desc: "Explored 3 mechanism architectures: Concept 1 'Attach' (swappable handles), Concept 2 'Bend' (single-plane hinge), and Concept 3 'Twist' (twist-and-lock detent joint). Concept 3 was selected for internal wire protection and tactile locking.",
        imageId: "glue-gun-kinematic-architectures",
        caption: "Sketching 3 Concepts for 3 Architecture",
        aspectClass: "aspect-[21/8] md:aspect-[26/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "FORM EVOLUTION",
        title: "Form Exploration Across Articulations",
        desc: "Iterated handle proportions across straight-line, 45-degree, and 90-degree angles to ensure natural thumb indexing in both pencil and pistol configurations.",
        imageId: "glue-gun-form-evolution-ergonomics",
        caption: "Ergonomics Testing: Button Placement",
        aspectClass: "aspect-[21/8] md:aspect-[26/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "CONCEPT REFINEMENT",
        title: "Haptic Detents, Rocker Switches & USB-C",
        desc: "Integrated an internal PTC ceramic heating core, analog rocker switch with color dot feedback, internal USB-C fast charging, and an anti-drool food-grade silicone nozzle shroud.",
        imageId: "glue-gun-schematics-haptic-detent",
        caption: "Basic Schematics of the Glue Gun",
        aspectClass: "aspect-[16/9] md:aspect-[18/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-cmf-inspiration-board",
        caption: "CMF Inspiration Board",
        aspectClass: "aspect-[16/9] md:aspect-[21/10]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-pen-mode-render",
        caption: "Pen Mode",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-gun-mode-render",
        caption: "Gun Mode",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-interaction-point-closeup",
        caption: "Closeup View of Interaction Point",
        aspectClass: "aspect-[16/9] md:aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-context-render",
        caption: "Context Render",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "glue-gun-pistol-grip-render",
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
  },

  /* 2. TOY DESIGN */
  {
    slug: "coordinate-war",
    title: "Coordinate War",
    tagline: "Interactive STEAM tabletop educational toy teaching 2D Cartesian coordinate indexing.",
    client: "Webby Toys Pvt Ltd (Design Internship)",
    timeline: "2 Months",
    date: "2023",
    category: "Toy Design",
    badge: "TOY ARCHITECTURE / LOW-CAPEX DFM",
    thumbId: "thumb-coordinate-war-toy",
    heroId: "coordinate-war-hero",
    heroAspectClass: "aspect-[16/9] md:aspect-[21/9.5] lg:aspect-[21/9.5]",
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
        imageId: "coordinate-war-steam-opportunity-tree",
        caption: "Slide 21: Opportunity Tree Across Science, Math & Spatial Reasoning",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_left_image_right",
        tag: "CONCEPT IDEATION",
        title: "Mechanism Explorations & Trajectory Linkages",
        desc: "Explored 3 concepts: Concept #1 Slider linkages, Concept #2 Light ray angles, and Concept #3 Rotating Turret Linkages. Concept #3 was selected for its direct tactile feedback.",
        imageId: "coordinate-war-mechanism-ideation",
        caption: "Slide 23: Mechanism Ideation Sheets & Aiming Detent Concepts",
        aspectClass: "aspect-[4/3]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "RAPID PROTOTYPING",
        title: "Prototype Evolution & Structural Assembly",
        desc: "Iterated through 4 functional working mockups to test friction fit tab-and-slot joints, 180° rotational turret tolerances, and consistent marble launch trajectories.",
        imageId: "coordinate-war-prototype-assembly",
        caption: "Slide 25: Production Laser-Cut Assembly & Integrated Score Board",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "COORDINATE INDEXING",
        title: "Plan View Coordinate Grid: (X, Y) Numerical Trajectory Layout",
        desc: "Calculated layout of 16 precision drop holes marked with discrete Cartesian indices (1,1 to 4,4), calibrated directly to dice roll probability matrices.",
        imageId: "coordinate-war-grid-plan-view",
        caption: "Slide 27: Top-Down Plan View Numerical Grid Map",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-contain bg-neutral-900"
      },
      {
        type: "text_top_image_bottom",
        tag: "HOW TO PLAY",
        title: "Play! Throw the Dice, Aim & Shoot, Record Score",
        desc: "Step 1: Throw the coordinate dice -> Step 2: Calculate the coordinate intersection, orient the mechanical turret angle, aim & shoot -> Step 3: Record score on friction-fit sliding markers.",
        imageId: "coordinate-war-gameplay-steps",
        caption: "Slide 28: Interactive Gameplay Flow & Tactile Scoring Steps",
        aspectClass: "aspect-[16/8] md:aspect-[21/8]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "coordinate-war-turret-pivot-detail",
        caption: "Kinematic Turret Pivot Detailing & Pinion Teeth Fitment",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "coordinate-war-die-cut-packaging",
        caption: "Die-Cut Flat Packaging Nesting Simulation",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "coordinate-war-assembly-elevation",
        caption: "Elevation View Assembly & Marble Feed Clearance",
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

  /* 3. LAMP DESIGN */
  {
    slug: "moodi",
    title: "MOODI Lamp",
    tagline: "Algorithmic Lighting & Tooling DFM Exploration",
    client: "Skill Demonstration Project",
    timeline: "Independent Build",
    date: "2024",
    category: "Computational Design",
    badge: "COMPUTATIONAL ID / AM + INJECTION",
    thumbId: "thumb-moodi-algorithmic-lamp",
    heroId: "moodi-lamp-hero",
    heroAspectClass: "aspect-[16/9] md:aspect-[21/10] lg:aspect-[21/10]",
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
        imageId: "moodi-lamp-silhouette-iterations",
        caption: "Slide 31: 20+ Silhouette Explorations Balancing Base and Diffuser Ratios",
        aspectClass: "aspect-[21/9] md:aspect-[26/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "EVALUATION & PARTING LINES",
        title: "Concept Evaluation & Parting Line Innovation",
        desc: "Evaluated 3 concepts. Chose the split configuration with angled dial bosses, designing a non-planar 3D parting line to demold the bosses without costly side-actions.",
        imageId: "moodi-lamp-parting-line-study",
        caption: "Slide 32: Evaluating Form, Affordance & Line-of-Draw Demold Constraints",
        aspectClass: "aspect-[21/9] md:aspect-[26/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "DFM SECTION DRAFT",
        title: "Development Sketch & Tooling Architecture",
        desc: "Engineered single-wall spiral vase mode for the shade, quick-draw threads, and draft angles for injection molding.",
        imageId: "moodi-lamp-dfm-cross-section",
        caption: "Slide 33: Cross-Sectional DFM Architecture for Injection & Additive Manufacturing",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "NATURAL INSPIRATION",
        title: "Form Cues: Curls, Curves & Geometric Fluting",
        desc: "Extracted surface wave mathematics from spiraling shells, cream swirls, and architectural facade ribbing.",
        imageId: "moodi-lamp-moodboard-fluting",
        caption: "Slide 34: Visual Moodboard Guiding the Parametric Mathematical Toolpaths",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "thin_horizontal_strip",
        tag: "COMPUTATIONAL DESIGN",
        title: "Grasshopper Parametric Wave Algorithm",
        desc: "Formulated a custom Grasshopper script that translates mathematical wave sweeps into continuous single-line G-code toolpaths.",
        imageId: "moodi-lamp-grasshopper-toolpath",
        caption: "Slide 35: Grasshopper Visual Script for Continuous Toolpath Wave Modulation",
        aspectClass: "aspect-[21/7] md:aspect-[28/7]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PROTOTYPING & WORKSHOP",
        title: "Visual Optical Testing & Firmware Breadboards",
        desc: "Printed test shades at varied frequencies to eliminate LED glare, paired with an Arduino circuit controlling PWM dimming and warm-to-cold CCT balance.",
        imageId: "moodi-lamp-optical-shade-testing",
        caption: "Slide 36: Optical Shade Testing Samples Array",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-nonplanar-parting-line",
        caption: "Slide 38: DFM Line-of-Draw Exploration: Non-Planar Parting Line CAD",
        aspectClass: "aspect-[16/9] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "PHYSICAL BUILD",
        title: "Ender 3 Continuous Printing & Base Post-Processing",
        desc: "Fabricated functional working models using continuous spiral PETG printing, hand-sprayed fine texture ABS bases, and turned knobs.",
        imageId: "moodi-lamp-workshop-production",
        caption: "Slide 41: Workshop Production: 3D Printing, Enclosure Sanding & Internal Soldering",
        aspectClass: "aspect-[21/8] md:aspect-[24/8]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-domestic-setting",
        caption: "Slide 44: Final Working Model in Illuminated Domestic Setting",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-cct-illumination-detail",
        caption: "Warm CCT Illumination Detail & Translucent Optical Ripple",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-knurled-potentiometer",
        caption: "Turned Knurled Potentiometer Detailing & Undercut-Free Split Base",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-diffuser-caustic-shadow",
        caption: "Diffuser Optical Caustic Shadow Cast Simulation",
        aspectClass: "aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "moodi-lamp-exploded-electronics",
        caption: "Exploded Internal Electronics Bay & Soldered Potentiometer Wire Loom",
        aspectClass: "aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]",
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

  /* 4. TAPE DISPENSER */
  {
    slug: "scotch",
    title: "One Hand Scotch Dispenser",
    tagline: "An alternative variant of Tape Dispenser by Scotch which only needs one hand to operate.",
    client: "Group Brainstorming / Individual Studio Project",
    timeline: "9 Weeks",
    date: "2024",
    category: "Industrial Design",
    badge: "CONSUMER HARDWARE / KINEMATICS",
    thumbId: "thumb-scotch-tape-dispenser",
    heroId: "scotch-tape-hero",
    heroAspectClass: "aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]",
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
        imageId: "scotch-two-hand-bottleneck",
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
        imageId: "scotch-analogous-benchmarking",
        caption: "Slide 06: Benchmarking Existing & Analogous Physical Mechanisms",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "IDEATION & EVALUATION",
        title: "Generating Variety of Ideas",
        desc: "Brainstormed 6 functional categories: Cutting Wheel, Stack Sticky-Note Style, Earbuds with Blade on Cap, Mechanical Suction, and Foot Tether.",
        imageId: "scotch-ideation-matrix",
        caption: "Slide 07: 6-Column Brainstorming Matrix Evaluating Functionality & Part Counts",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
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
        imageId: "scotch-slide-to-hinge-architecture",
        caption: "Slide 09: Slide-to-Hinge Kinematic Conversion & Notching Tool Architecture",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "USABILITY SKETCHES",
        title: "Tabletop vs Handheld Dual-Mode Walkthrough",
        desc: "Tabletop Mode: Hold tape end -> Pull tape -> Press Notch Hinge -> Twist tape to tear off. Handheld Mode: Hold dispenser -> Roll tape directly on surface -> Press Notch Hinge -> Twist dispenser to tear off.",
        imageId: "scotch-usability-desktop-handheld",
        caption: "Slide 10: 4-Step Interaction Sequences Comparing Desktop and Handheld Usability",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "text_top_image_bottom",
        tag: "BRAND ANALYSIS",
        title: "Brand Language & Core Value Analysis",
        desc: "Resourcefulness is a core value at Scotch: 'Resourcefulness is about adapting, making do and doing more with what you've got. It's not about using less, but using smarter.'",
        imageId: "scotch-brand-language-study",
        caption: "Slide 11: Deconstructing Packaging Variants, Color Architecture & Price Points",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "thin_horizontal_strip",
        tag: "FORM DEVELOPMENT",
        title: "Form — Making It Look More Scotch",
        desc: "Integrated functional silhouettes: contoured thumb notch hinge, finger rest grooves, and an anti-rollover base lip that anchors horizontal pull forces.",
        imageId: "scotch-form-evolution",
        caption: "Slide 12: Form Iterations & Functional Feature Integration Array",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      },
      {
        type: "pure_render_spread",
        imageId: "scotch-dual-mode-hero-render",
        caption: "Slide 14: Dual-Mode Functional Hero Render",
        aspectClass: "aspect-[16/12] md:aspect-[21/10]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "scotch-translucent-finish-render",
        caption: "Slide 16: Final Production Model in Translucent Optical Finish",
        aspectClass: "aspect-[16/9] md:aspect-[21/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "scotch-exploded-cmf-spool",
        caption: "Exploded CMF & Internal Spool Fitment Render",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "pure_render_spread",
        imageId: "scotch-high-gloss-perspective",
        caption: "High-Gloss Studio Perspective View",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "success_verification",
        tag: "EVALUATION",
        title: "Did I hit the mark?",
        desc: "Verified against the kickoff success criteria: single-hand operation, true adherence to brand resourcefulness, and iconic Scotch visual transparency.",
        imageId: "scotch-success-verification",
        caption: "Slide 17: Previously Set Success Criteria Confirmed Hit",
        aspectClass: "aspect-[16/10] md:aspect-[16/9]",
        fitMode: "object-contain bg-white"
      }
    ],
    specs: {
      material: "Optical-grade Polycarbonate (PC) + High-Tack Overmoulded TPE Grip",
      finish: "SPI-A2 High Polish Body with VDI 24 Textured Thumb Indents",
      tooling: "2-plate injection mould with dual mechanical slide lifters for core spool hub",
      software: "SolidWorks, Blender (Ideation & Rendering), KeyShot Studio, Rapid 3D Mockups"
    }
  }
];

export const ALL_PROJECTS = [...FLAGSHIP_2026_PROJECTS, ...ARCHIVE_PROJECTS];
