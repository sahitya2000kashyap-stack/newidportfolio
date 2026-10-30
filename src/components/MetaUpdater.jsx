import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags } from '../hooks/useSEO';
import { ALL_PROJECTS } from '../data/projectsData';

const STATIC_ROUTE_META = {
  '/': {
    title: 'Sahitya Kashyap — Industrial Designer | Hardware, DFM & CAD Specialist (CSWP)',
    description: 'Portfolio of Sahitya Kashyap — Industrial Designer at Future Factory, Mumbai. B.Des DTU, CSWP SolidWorks Certified, specializing in mass-market consumer appliances, toolmaking DFM, CMF, and Blender 3D visualization.',
    canonical: '/'
  },
  '/about': {
    title: 'About Sahitya Kashyap | Industrial Designer & Toolmaker (CSWP)',
    description: 'Design education at DTU & Offsite Pro Chicago, 4 years of Tool & Die craftsmanship, CSWP SolidWorks Certified, and mass-market appliance experience at Future Factory.',
    canonical: '/about'
  },
  '/commercial': {
    title: 'Commercial Hardware & Mass-Production | Sahitya Kashyap',
    description: 'Confidential commercial programs spanning domestic floor-standing purifiers, institutional appliances, and heavy-duty battery housings engineered for high-volume manufacturing.',
    canonical: '/commercial'
  },
  '/commercial-nda': {
    title: 'Commercial Hardware & Mass-Production | Sahitya Kashyap',
    description: 'Confidential commercial programs spanning domestic floor-standing purifiers, institutional appliances, and heavy-duty battery housings engineered for high-volume manufacturing.',
    canonical: '/commercial'
  },
  '/playground': {
    title: 'Visual Lab & CAD Playground | Sahitya Kashyap',
    description: 'Visual archive of unconstrained Blender CAD experiments, clay models, rapid CMF studies, and generative Grasshopper iterations by Sahitya Kashyap.',
    canonical: '/playground'
  },
  '/personal': {
    title: 'Visual Lab & CAD Playground | Sahitya Kashyap',
    description: 'Visual archive of unconstrained Blender CAD experiments, clay models, rapid CMF studies, and generative Grasshopper iterations by Sahitya Kashyap.',
    canonical: '/playground'
  },
  '/experiments': {
    title: 'Experiments & ID RenderFlo Pipeline | Sahitya Kashyap',
    description: 'Industrial design automation workflows and ID RenderFlo — published official Blender extension for native Rhino/STEP CAD import, procedural HDRI lighting, and studio management.',
    canonical: '/experiments'
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
      const project = ALL_PROJECTS.find(p => p.slug === slug);

      if (project) {
        updateMetaTags({
          title: `${project.title} — ${project.category} | Sahitya Kashyap`,
          description: project.tagline || `Case study on ${project.title} by Industrial Designer Sahitya Kashyap. Detailed DFM, CAD modeling, and CMF engineering.`,
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

