import React, { useState, useEffect, useRef } from 'react';

/* --- ZERO-LATENCY HARDWARE PRECISION CURSOR --- */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const lastTargetRef = useRef(null);
  const isVisibleRef = useRef(false);
  const lastCoordsRef = useRef({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const checkIsDark = (target) => {
      if (!target || target === document.body || target === document.documentElement) return false;

      // 1. Instant check for common dark background classes or attributes
      const darkParent = target.closest(
        '.bg-neutral-900, .bg-neutral-800, .bg-neutral-950, .bg-black, [class*="bg-neutral-900"], [class*="bg-neutral-800"], [class*="bg-black"], [data-theme="dark"], .dark-section, .bg-zinc-900, .bg-gray-900'
      );
      if (darkParent) return true;

      // 2. Computed background color fallback (traversing up to 3 parent levels)
      let el = target;
      let depth = 0;
      while (el && el !== document.body && depth < 3) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
          const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
          if (m) {
            const a = m[4] !== undefined ? parseFloat(m[4]) : 1;
            if (a > 0.3) {
              const r = parseInt(m[1], 10);
              const g = parseInt(m[2], 10);
              const b = parseInt(m[3], 10);
              const lum = 0.299 * r + 0.587 * g + 0.114 * b;
              return lum < 125;
            }
          }
        }
        el = el.parentElement;
        depth++;
      }
      return false;
    };

    const updateTargetState = (target) => {
      if (!target || target === lastTargetRef.current) return;
      lastTargetRef.current = target;

      const hovered = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
      setIsHovered(hovered);
      setIsDark(checkIsDark(target));
    };

    const onMouseMove = (e) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      lastCoordsRef.current.x = e.clientX;
      lastCoordsRef.current.y = e.clientY;

      // Direct hardware coordinate tracking: zero lerp, zero trailing lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      updateTargetState(e.target);
    };

    const onScroll = () => {
      const el = document.elementFromPoint(lastCoordsRef.current.x, lastCoordsRef.current.y);
      if (el) {
        updateTargetState(el);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #fafafa;
        }
        ::-webkit-scrollbar-thumb {
          background: #d4d4d4;
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #737373;
        }
        @media (pointer: fine) {
          *, *:before, *:after {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Zero-Lag Instant Precision Dot with Adaptive Dark Contrast */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full will-change-transform flex items-center justify-center transition-[width,height,margin,background-color,border-color,box-shadow] duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? isDark
              ? 'w-7 h-7 -ml-3.5 -mt-3.5 bg-white/15 border border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]'
              : 'w-7 h-7 -ml-3.5 -mt-3.5 bg-neutral-900/10 border border-neutral-900 shadow-xs'
            : isDark
              ? 'w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-white ring-1 ring-black/40 shadow-[0_0_8px_rgba(255,255,255,0.8)] border-none'
              : 'w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-neutral-900 ring-1 ring-white/70 shadow-xs border-none'
        }`}
      >
        {isHovered && (
          <span
            className={`w-1 h-1 rounded-full transition-colors duration-150 ${
              isDark ? 'bg-white shadow-[0_0_4px_rgba(255,255,255,0.9)]' : 'bg-neutral-900'
            }`}
          />
        )}
      </div>
    </>
  );
}

