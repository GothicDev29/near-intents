'use client';

import { useEffect, useRef } from 'react';

export function SlidingBars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line2Ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Medición síncrona — disponible desde el primer frame
    const travel = Math.max(0, container.clientWidth - 56 - 8 - 56 - 32);

    let rafId: number;
    const duration = 4000;
    const start = performance.now();

    const tick = (now: number) => {
      const t = ((now - start) % duration) / duration; // 0 → 1

      // sin² suaviza los extremos: acelera y desacelera gradualmente
      const ease = Math.pow(Math.sin(t * Math.PI), 2);
      const x = travel * (1 - ease);

      if (line2Ref.current) {
        line2Ref.current.style.transform = `translateX(${x.toFixed(1)}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-14 h-[2px] bg-[#FDEB8F]/60 shrink-0" />
        <div ref={line2Ref} className="w-14 h-[2px] bg-[#FDEB8F]/60 shrink-0" />
      </div>
      <span className="text-[#FDEB8F]/60 font-mono text-lg">)</span>
    </div>
  );
}
