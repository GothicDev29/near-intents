import Image from 'next/image';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTAButton } from '@/components/shared/CTAButton';

export function HowItWorks() {
  return (
    <section className="py-32 px-8 md:px-20 bg-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">How it works</h2>
            <div className="w-full h-px bg-gradient-to-r from-brand-orange-500 to-transparent my-6"></div>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-base max-w-2xl">
              NEAR Intents uses a novel transaction architecture to abstract away cross-chain complexity and maximize performance, security, and efficiency for DeFi apps, AI agents and end users.
            </p>
            <CTAButton text="Read Technical Overview" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="relative w-full rounded-[16px] border border-white/10 overflow-hidden min-h-[500px] flex items-center justify-center p-4 md:p-8">
            <Image
              src="/images/how-it-works/sketch-27 1.png"
              alt="How NEAR Intents Works"
              width={1200}
              height={600}
              quality={100}
              priority={false}
              className="w-full h-auto object-contain"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
