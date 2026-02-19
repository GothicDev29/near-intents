'use client';

import { Globe } from 'lucide-react';
import { CTAButton } from '@/components/shared/CTAButton';
import { AuroraRing } from '@/components/effects/AuroraRing';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const LOGOS = [
  'Ethereum',
  'Solana',
  'Bitcoin',
  'NEAR',
  'Avalanche',
  'Polygon',
  'Arbitrum',
  'Optimism',
  'Base',
  'Cosmos',
  'Cardano',
  'Polkadot',
];

export function Hero() {
  const doubledLogos = [...LOGOS, ...LOGOS];
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const dist = Math.hypot(e.clientX - rect.right, e.clientY - rect.top);
      const maxDist = Math.hypot(rect.width, rect.height) * 0.65;
      const raw = Math.max(0, 1 - dist / maxDist);
      // smooth-step: ease in/out en los extremos
      target = raw * raw * (3 - 2 * raw);
    };

    const tick = () => {
      // lerp: sigue al target con inercia
      current += (target - current) * 0.06;

      if (imageWrapperRef.current) {
        if (current > 0.001) {
          const blur = current * 5;
          const spread = current * 60;
          const opacity = current * 0.55;
          imageWrapperRef.current.style.filter = `blur(${blur.toFixed(2)}px) drop-shadow(0 0 ${spread.toFixed(1)}px rgba(255, 100, 20, ${opacity.toFixed(2)}))`;
        } else {
          imageWrapperRef.current.style.filter = 'none';
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex flex-col bg-[#000]">
      {/* Aurora Effect — oculto, disponible para iterar */}
      <div className="hidden">
        <AuroraRing />
      </div>


      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={imageWrapperRef}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-right-top"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center px-8 md:px-20 relative z-10 pt-32 pb-10">
        <div className="max-w-7xl mx-auto w-full">

          {/* Top row: badge + tick marks a la misma altura */}
          <div className="relative flex items-center mb-6 text-zinc-500 text-sm">
            <span>(</span>
            <span className="text-brand-orange">+</span>
            <span>)</span>
            <div className="w-12 h-[1px] bg-zinc-800 mx-2" />
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[3px]">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="w-px h-3 bg-white/30" />
              ))}
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              The universal <br />
              liquidity protocol
            </h1>

            <div className="w-full md:w-1/2 h-px bg-gradient-to-r from-brand-orange-500 to-transparent my-6"></div>

            <p className="mt-4 text-xl text-zinc-400 max-w-xl leading-relaxed">
              NEAR Intents powers one-click cross-chain swaps, unified liquidity,
              and universal execution for onchain markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton text="Start Swapping" />
              <CTAButton text="Integrate Intents" variant="solid" />
            </div>

            {/* Decorative +++ pattern */}
            <div className="mt-12 -ml-8 md:-ml-20 font-mono text-xs text-zinc-600 tracking-[0.15em]">
              {'+'  .repeat(26)}
            </div>

            <div className="mt-12">
              <div className="text-4xl md:text-5xl font-bold text-brand-orange tracking-tight">
                $13B+
              </div>
              <div className="text-white mt-1 text-lg font-medium">
                all-time volume across <span className="text-brand-orange font-bold">35+ chains</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full pb-8">
        <div className="w-full overflow-hidden py-8 border-y border-white/5">
          <div className="animate-marquee flex items-center gap-16 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {doubledLogos.map((logo, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-default min-w-max">
                <div className="w-10 h-10 rounded-[16px] bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-brand-orange-500/50 transition-colors">
                  <Globe size={18} className="text-zinc-400 group-hover:text-brand-orange transition-colors" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
