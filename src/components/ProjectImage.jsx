import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

/* --- RECURSIVE SUBFOLDER DYNAMIC ASSET REGISTRY --- */
const assetFiles = import.meta.glob('../assets/**/*.{png,webp}', { eager: true });

export function getAssetUrl(id) {
  if (!id) return null;
  const searchId = String(id).trim().toLowerCase();

  // Prefer webp over png if both exist
  const webpKey = Object.keys(assetFiles).find(key => {
    const fileNameWithExt = key.split('/').pop() || '';
    const baseName = fileNameWithExt.replace(/\.(webp)$/i, '').trim().toLowerCase();
    return baseName === searchId;
  });

  if (webpKey) return assetFiles[webpKey].default;

  // Fallback to any extension match
  const matchKey = Object.keys(assetFiles).find(key => {
    const fileNameWithExt = key.split('/').pop() || '';
    const baseName = fileNameWithExt.replace(/\.(png|webp)$/i, '').trim().toLowerCase();
    return baseName === searchId;
  });

  return matchKey ? assetFiles[matchKey].default : null;
}

export default function ProjectImage({ 
  id, 
  altText, 
  className = "", 
  imgClassName = "", 
  fitMode = "object-cover", 
  withLoader = false,
  priority = false,
  loading,
  fetchPriority,
  decoding = "async",
  width = 800,
  height = 600
}) {
  const src = getAssetUrl(id);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) {
    return (
      <div className={`bg-neutral-100 flex flex-col items-center justify-center text-center p-6 w-full h-full min-h-[160px] border border-dashed border-neutral-300 rounded-xl ${className}`}>
        <ImageIcon className="w-8 h-8 text-neutral-300 mb-2 stroke-1" />
        <span className="font-mono text-[11px] text-neutral-600 font-bold tracking-wider">
          {id ? `${id}.webp` : "Render Preview"}
        </span>
        <span className="font-mono text-[9px] text-neutral-400 mt-0.5">Missing: src/assets/**/{id}</span>
      </div>
    );
  }

  const isAutoHeight = className.includes('h-auto') || fitMode.includes('h-auto');
  const computedAlt = altText || (id ? `${id.replace(/[-_]/g, ' ')} CAD and industrial design study` : 'Industrial design CAD model');
  const imageLoading = loading || (priority ? 'eager' : 'lazy');
  const imageFetchPriority = fetchPriority || (priority ? 'high' : 'auto');

  return (
    <div className={`relative w-full ${isAutoHeight ? 'h-auto' : 'h-full'} overflow-hidden ${className}`}>
      {withLoader && !isLoaded && (
        <div className="absolute inset-0 bg-neutral-100 animate-pulse flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-neutral-300 border-t-neutral-600 animate-spin" />
        </div>
      )}
      <img 
        src={src} 
        alt={computedAlt} 
        loading={imageLoading}
        fetchPriority={imageFetchPriority}
        decoding={decoding}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={`${fitMode} w-full ${isAutoHeight ? 'h-auto block' : 'h-full'} ${imgClassName} transition-all duration-700 ease-out ${
          withLoader ? (isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xs scale-102') : 'opacity-100'
        }`} 
      />
    </div>
  );
}
