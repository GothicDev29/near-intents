'use client';

import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

export function ConfidentialHowItWorks() {
  return (
    <section id="confidential-how-it-works" className="py-20 px-8 md:px-20 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>

            <div className="w-full h-px mb-6" style={{ background: 'linear-gradient(to right, #FB4D01, transparent)' }} />

            <div className="space-y-6 mb-12">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Confidential Intents runs on a dedicated NEAR private shard, operated by a decentralized set of independent permissioned validators. A TEE-based bridge connects the private shard to NEAR mainnet.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                When you activate confidential mode on near.com, your transaction executes on the private shard. Deposits and transfers execute out of public view. You retain the ability to move funds to your public NEAR Intents account or withdraw to any foreign chain at any time.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                This design eliminates client-side ZK proof generation entirely. No complex wallet setup. No state sync. Same simple UX as a public transaction, with cryptographic integrity preserved within a compliance-aware architecture.
              </p>

              <div className="bg-[#242424] border border-white/10 p-5 md:p-6 rounded-[16px] flex gap-3 items-start">
                <span className="text-brand-orange font-mono text-lg shrink-0 mt-0.5">+</span>
                <p className="text-white text-base leading-relaxed font-medium">
                  This is not a mixing service or post-hoc anonymization. It's a confidentiality layer
                  built into the execution environment itself.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
