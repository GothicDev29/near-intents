'use client';

import { useEffect, useRef } from 'react';

const COUNT = 40;

const configs = Array.from({ length: COUNT }, () => ({
  freq: 0.2 + Math.random() * 0.6,
  phase: Math.random() * Math.PI * 2,
  minH: 2,
  maxH: 10 + Math.random() * 8,
}));

export function TickWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ticks = Array.from(container.children) as HTMLElement[];
    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      ticks.forEach((el, i) => {
        const { freq, phase, minH, maxH } = configs[i];
        const h = minH + (maxH - minH) * (0.5 + 0.5 * Math.sin(t * freq * Math.PI * 2 + phase));
        el.style.height = `${h.toFixed(1)}px`;
      });
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} className="flex gap-[3px] items-end mt-auto h-[20px]">
      {Array.from({ length: COUNT }).map((_, i) => (
        <div key={i} className="w-px bg-[#FDEB8F]/60" style={{ height: '4px' }} />
      ))}
    </div>
  );
}
