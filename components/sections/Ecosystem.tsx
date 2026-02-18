import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const FEATURED_CHAINS = [
  { name: 'Solana', color: '#14F195' },
  { name: 'Aurora', color: '#70D44B' },
  { name: 'Arbitrum', color: '#28A0F0' },
  { name: 'Avalanche', color: '#E84142' },
  { name: 'Ethereum', color: '#627EEA' },
  { name: 'Polygon', color: '#8247E5' },
];

const CHAIN_NAMES = [
  'Base',
  'Optimism',
  'BNB Chain',
  'Fantom',
  'Cosmos',
  'Polkadot',
  'Cardano',
  'Tezos',
];

export function Ecosystem() {
  // Repeat chain names to fill grid
  const allChains = Array(32)
    .fill(null)
    .map((_, i) => CHAIN_NAMES[i % CHAIN_NAMES.length]);

  return (
    <section id="ecosystem" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Intents <span className="text-orange-600">Ecosystem</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Supporting 35+ blockchains and counting
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Chains */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-20">
            {FEATURED_CHAINS.map((chain, index) => (
              <div
                key={index}
                className={`eco-circle relative ${
                  index < FEATURED_CHAINS.length - 1 ? 'plus-separator' : ''
                }`}
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-white/10 bg-black/50 backdrop-blur-sm">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: chain.color }}
                  >
                    {chain.name.slice(0, 3).toUpperCase()}
                  </div>
                </div>
                <div className="text-center mt-3 text-sm text-white/70">
                  {chain.name}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* All Chains Grid */}
        <RevealOnScroll delay={0.4}>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {allChains.map((chainName, index) => (
              <div
                key={index}
                className="logo-grayscale aspect-square rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-xs text-center text-white/70 font-medium">
                  {chainName}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
