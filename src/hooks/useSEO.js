import { useEffect } from 'react';

const BASE_URL = 'https://sahityakashyap.in';

export function updateMetaTags({ title, description, canonical, ogImage, ogType = 'website' } = {}) {
  if (typeof document === 'undefined') return;

  if (title) {
    document.title = title;
  }

  const setMeta = (attrName, attrVal, content) => {
    if (!content) return;
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  if (title) {
    setMeta('name', 'title', title);
    setMeta('property', 'og:title', title);
    setMeta('name', 'twitter:title', title);
  }

  if (description) {
    setMeta('name', 'description', description);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:description', description);
  }

  if (ogType) {
    setMeta('property', 'og:type', ogType);
  }

  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`)
    : `${BASE_URL}/`;

  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', fullCanonical);
  setMeta('property', 'og:url', fullCanonical);
  setMeta('name', 'twitter:url', fullCanonical);

  const fullImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`)
    : `${BASE_URL}/og-image.png`;

  setMeta('property', 'og:image', fullImage);
  setMeta('name', 'twitter:image', fullImage);
}

export function useSEO(options) {
  useEffect(() => {
    if (!options) return;
    updateMetaTags(options);
  }, [options?.title, options?.description, options?.canonical, options?.ogImage, options?.ogType]);
}

export default useSEO;

