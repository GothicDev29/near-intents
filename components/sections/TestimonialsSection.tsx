import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const TESTIMONIALS = [
  {
    quote:
      'NEAR Intents represents a paradigm shift in how we think about cross-chain liquidity and execution.',
    author: 'Charles Hoskinson',
    role: 'Founder, Cardano',
    decoration: '/',
  },
  {
    quote:
      'The unified liquidity model is exactly what DeFi needs to reach the next billion users.',
    author: 'Dan Smith',
    role: 'CTO, Polygon Labs',
    decoration: '+',
  },
  {
    quote:
      'NEAR Intents solved our biggest challenge: seamless multi-chain user experience.',
    author: 'Christian Thompson',
    role: 'Head of Product, Avalanche',
    decoration: '|',
  },
  {
    quote:
      'The execution guarantees and instant finality make this a game-changer for institutional adoption.',
    author: 'Jed Watson',
    role: 'Managing Director, Digital Asset Capital',
    decoration: '/',
  },
];

const ORANGE_CARDS = [
  'INSTANT EXECUTION',
  'VERIFIABLE INFRASTRUCTURE',
  'UNIFIED LIQUIDITY',
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="border border-white/10 rounded-2xl p-8 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all duration-300 relative">
                <div className="absolute top-4 right-4 text-orange-600 text-4xl font-mono opacity-20">
                  {testimonial.decoration}
                </div>
                <p className="text-lg text-white/90 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Orange Cards */}
        <RevealOnScroll delay={0.4}>
          <div className="grid md:grid-cols-3 gap-6">
            {ORANGE_CARDS.map((text, index) => (
              <div
                key={index}
                className="bg-orange-600 rounded-2xl p-8 text-center hover:bg-orange-700 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-black tracking-wide">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
