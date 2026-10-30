import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags } from '../hooks/useSEO';
import { ALL_PROJECTS } from '../data/projectsData';

const STATIC_ROUTE_META = {
  '/': {
    title: 'Sahitya Kashyap | Industrial Designer & CAD Specialist',
    description: 'Portfolio of Sahitya Kashyap, Industrial Designer at Future Factory. Specializing in consumer appliances, SolidWorks CAD, toolmaking DFM, and CMF.',
    canonical: '/'
  },
  '/about': {
    title: 'About Sahitya Kashyap | Industrial Designer & Toolmaker',
    description: 'Industrial Designer with a DTU B.Des, 4 years of Tool & Die craftsmanship, CSWP certification, and mass-market appliance experience at Future Factory.',
    canonical: '/about'
  },
  '/commercial': {
    title: 'Commercial Hardware & Mass Production | Sahitya Kashyap',
    description: 'Confidential commercial programs spanning floor-standing water purifiers, institutional hardware, and battery enclosures designed for mass production.',
    canonical: '/commercial'
  },
  '/commercial-nda': {
    title: 'Commercial Hardware & Mass Production | Sahitya Kashyap',
    description: 'Confidential commercial programs spanning floor-standing water purifiers, institutional hardware, and battery enclosures designed for mass production.',
    canonical: '/commercial'
  },
  '/playground': {
    title: 'Design Playground & Visual CAD Lab | Sahitya Kashyap',
    description: 'Visual archive of unconstrained Blender CAD experiments, clay ergonomic models, rapid CMF studies, and generative Grasshopper iterations by Sahitya.',
    canonical: '/playground'
  },
  '/personal': {
    title: 'Design Playground & Visual CAD Lab | Sahitya Kashyap',
    description: 'Visual archive of unconstrained Blender CAD experiments, clay ergonomic models, rapid CMF studies, and generative Grasshopper iterations by Sahitya.',
    canonical: '/playground'
  },
  '/experiments': {
    title: 'Workflow Experiments & ID RenderFlo | Sahitya Kashyap',
    description: 'Industrial design workflows and ID RenderFlo — published official Blender extension for native Rhino/STEP CAD import, procedural HDRI, and studios.',
    canonical: '/experiments'
  }
};

const PROJECT_ROUTE_META = {
  'joseph-joseph': {
    title: 'Joseph Joseph Glue Gun — Kinematics | Sahitya Kashyap',
    description: 'Dual-mode hot glue gun concept redesign featuring rotating kinematic transformation, functional material ergonomics, and Joseph Joseph houseware CMF.'
  },
  'coordinate-war': {
    title: 'Coordinate War — Mechanical Toy Game | Sahitya Kashyap',
    description: 'Mechanical tabletop game featuring rack-and-pinion turret kinematics, spring projectile firing, and DFM sheet-metal nesting by Sahitya Kashyap.'
  },
  'moodi': {
    title: 'MOODI Lamp — Algorithmic Lighting | Sahitya Kashyap',
    description: 'Domestic ambient luminaire with Grasshopper fluting, non-planar injection mold parting lines, and tactile knurled potentiometer control.'
  },
  'scotch': {
    title: 'One Hand Scotch Tape Dispenser — CMF | Sahitya Kashyap',
    description: 'Dual-mode handheld and desktop tape dispenser featuring slide-to-hinge spool mechanics, high-gloss CMF specularity, and one-hand cut ergonomics.'
  }
};

export default function MetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // Check static routes
    if (STATIC_ROUTE_META[pathname]) {
      updateMetaTags(STATIC_ROUTE_META[pathname]);
      return;
    }

    // Check project detail routes /project/:slug
    if (pathname.startsWith('/project/')) {
      const slug = pathname.replace('/project/', '').trim();
      
      if (PROJECT_ROUTE_META[slug]) {
        updateMetaTags({
          ...PROJECT_ROUTE_META[slug],
          canonical: `/project/${slug}`,
          ogType: 'article'
        });
        return;
      }

      const project = ALL_PROJECTS.find(p => p.slug === slug);
      if (project) {
        updateMetaTags({
          title: `${project.title.slice(0, 32)} | Sahitya Kashyap`,
          description: (project.tagline || `Industrial design case study on ${project.title} by Sahitya Kashyap, focusing on DFM, CAD, and CMF engineering.`).slice(0, 155),
          canonical: `/project/${slug}`,
          ogType: 'article'
        });
        return;
      }
    }

    // Fallback
    updateMetaTags(STATIC_ROUTE_META['/']);
  }, [location.pathname]);

  return null;
}
