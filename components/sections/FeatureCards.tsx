import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

export function FeatureCards() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: SWAP */}
        <RevealOnScroll delay={0}>
          <div className="bg-[#1E1E1E] border border-white/10 p-8 rounded-[16px] h-full relative group hover:border-[#FDEB8F]/30 transition-all shadow-lg min-h-[320px] flex flex-col overflow-hidden">
            <span className="text-[10px] font-mono text-[#FDEB8F] mb-8 block">{`{ 01 SWAP`}</span>
            <div className="absolute top-8 right-8">
              <div className="w-12 h-12 rounded-full border border-[#FDEB8F]/50 flex items-center justify-center relative animate-cyber-spin">
                <div className="w-1 h-1 bg-[#FDEB8F] rounded-full absolute -right-1 top-1/2"></div>
              </div>
              <div className="h-px w-8 bg-[#FDEB8F]/30 absolute top-1/2 left-full"></div>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFF] leading-tight">
                Cross-chain,<br />
                simplified
              </h3>
              <p className="text-[10px] text-[#FFFFFF] font-mono leading-relaxed uppercase tracking-wider mb-8">
                NO MANUAL GAS JUGGLING OR<br />
                BRIDGE MANAGEMENT REQUIRED.<br />
                EXCHANGE-GRADE EXECUTION,<br />
                WITHOUT GIVING UP CONTROL<br />
                OF YOUR WALLET
              </p>
              <div className="flex gap-1 h-4 items-end">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-px bg-[#FDEB8F]/50 animate-equalizer"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: `${Math.random() * 10 + 4}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 2: EARN */}
        <RevealOnScroll delay={0}>
          <div className="bg-[#1E1E1E] border border-white/10 p-8 rounded-[16px] h-full relative group hover:border-[#FDEB8F]/30 transition-all shadow-lg min-h-[320px] flex flex-col overflow-hidden">
            <span className="text-[10px] font-mono text-[#FDEB8F] mb-8 block">{`{ 02 EARN`}</span>
            <div className="absolute top-12 right-12">
              <div className="w-2 h-2 border border-[#FDEB8F] rounded-full animate-blink"></div>
              <div className="w-px h-16 bg-[#FDEB8F]/30 rotate-45 absolute -top-4 -right-4 animate-float-diagonal"></div>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFF] leading-tight">
                Idle assets?<br />
                Put them to work.
              </h3>
              <p className="text-[10px] text-[#FFFFFF] font-mono leading-relaxed uppercase tracking-wider mb-8">
                ACCESS ONCHAIN YIELD ACROSS<br />
                SUPPORTED TOKENS AND CHAINS-<br />
                BUILT AROUND YOUR CONTROL.
              </p>
              <div className="flex gap-1 items-center w-full overflow-hidden">
                <div className="w-full h-px border-b border-[#FDEB8F]/30 border-dotted animate-marquee"></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 3: CONFIDENTIAL */}
        <RevealOnScroll delay={0}>
          <div className="bg-[#1E1E1E] border border-white/10 p-8 rounded-[16px] h-full relative group hover:border-[#FDEB8F]/30 transition-all shadow-lg min-h-[320px] flex flex-col overflow-hidden">
            <span className="text-[10px] font-mono text-[#FDEB8F] mb-8 block">{`{ 03 CONFIDENTIAL`}</span>
            <div className="absolute top-10 right-10 flex gap-1 text-[#FDEB8F] font-mono text-xs">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="animate-blink" style={{ animationDelay: `${i * 0.2}s` }}>
                  +
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFF] leading-tight">
                Your transactions.<br />
                Your business.
              </h3>
              <p className="text-[10px] text-[#FFFFFF] font-mono leading-relaxed uppercase tracking-wider mb-8">
                KEEP TRANSACTIONS OUT OF<br />
                PUBLIC VIEW AND PROTECT<br />
                YOUR CROSS-CHAIN POSITIONS.
              </p>
              <div className="relative w-full h-px bg-white/10 mt-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-full bg-[#FDEB8F] animate-cyber-scan"></div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[#FDEB8F] font-mono text-xs animate-blink">)</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
