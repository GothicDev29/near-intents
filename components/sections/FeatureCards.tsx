import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

export function FeatureCards() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: SWAP */}
          <RevealOnScroll delay={0}>
            <div className="relative group border border-orange-600/30 rounded-2xl p-8 bg-black/50 backdrop-blur-sm feature-card-gradient overflow-hidden hover:border-orange-600/60 transition-all duration-300">
              {/* Cyber Spin Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 border-2 border-orange-600/20 rounded-full animate-cyber-spin" />

              {/* Equalizer Bars */}
              <div className="absolute top-8 right-8 flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-orange-600/50 rounded-full animate-equalizer"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: '30px',
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-orange-600 font-mono text-sm mb-4">
                  &#123; 01 SWAP &#125;
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  One-Click Cross-Chain Swaps
                </h3>
                <p className="text-white/70">
                  Execute seamless token swaps across 35+ blockchains with
                  instant settlement and best execution pricing.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2: LIQUIDITY */}
          <RevealOnScroll delay={0.1}>
            <div className="relative group border border-orange-600/30 rounded-2xl p-8 bg-black/50 backdrop-blur-sm feature-card-gradient overflow-hidden hover:border-orange-600/60 transition-all duration-300">
              {/* Blinking Dots */}
              <div className="absolute top-8 right-8 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-orange-600 rounded-full animate-blink"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>

              {/* Diagonal Float */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-orange-600/20 rounded-lg animate-float-diagonal" />

              <div className="relative z-10">
                <div className="text-orange-600 font-mono text-sm mb-4">
                  &#123; 02 LIQUIDITY &#125;
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Unified Liquidity Pool
                </h3>
                <p className="text-white/70">
                  Access deep liquidity aggregated from DEXs, market makers,
                  and liquidity providers across all chains.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: EXECUTE */}
          <RevealOnScroll delay={0.2}>
            <div className="relative group border border-orange-600/30 rounded-2xl p-8 bg-black/50 backdrop-blur-sm feature-card-gradient overflow-hidden hover:border-orange-600/60 transition-all duration-300">
              {/* Cyber Scan Line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-cyber-scan" />
              </div>

              {/* Blinking Parenthesis */}
              <div className="absolute top-4 right-4 text-orange-600/50 text-4xl font-mono animate-blink">
                ( )
              </div>

              <div className="relative z-10">
                <div className="text-orange-600 font-mono text-sm mb-4">
                  &#123; 03 EXECUTE &#125;
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Universal Execution
                </h3>
                <p className="text-white/70">
                  Execute complex multi-chain strategies with guaranteed
                  atomicity and instant finality.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
