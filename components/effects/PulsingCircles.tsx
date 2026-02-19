'use client';

import { useEffect, useRef } from 'react';

export function PulsingCircles() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const freq1  = 0.3;                        // lento
    const freq2  = 1.0;                        // rápido (~3x)
    const phase1 = Math.random() * Math.PI * 2;
    const phase2 = Math.random() * Math.PI * 2;

    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;

      if (ref1.current) {
        const s = 0.8 + 0.4 * (0.5 + 0.5 * Math.sin(t * freq1 * Math.PI * 2 + phase1));
        ref1.current.style.transform = `scale(${s.toFixed(3)})`;
      }
      if (ref2.current) {
        const s = 0.7 + 0.5 * (0.5 + 0.5 * Math.sin(t * freq2 * Math.PI * 2 + phase2));
        ref2.current.style.transform = `scale(${s.toFixed(3)})`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative flex items-center justify-center w-[90px] h-[90px]">
        {/* Círculo exterior — lento, max 90px */}
        <div ref={ref1} className="absolute w-[75px] h-[75px] rounded-full border border-[#FDEB8F]/40" />
        {/* Círculo interior — rápido */}
        <div ref={ref2} className="absolute w-[42px] h-[42px] rounded-full border border-[#FDEB8F]/70" />
      </div>
    </div>
  );
}
