import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { ArrowUpRight } from 'lucide-react';

const NEWS_ITEMS = [
  {
    title: 'Unpacking NEAR Intents: A Deep Dive',
    date: 'March 15, 2024',
    excerpt:
      'Explore the technical architecture and design decisions behind NEAR Intents protocol.',
  },
  {
    title: 'Expanding NEAR Intents: Passkeys & OTC Trading Now Live',
    date: 'March 8, 2024',
    excerpt:
      'New features enable passwordless authentication and over-the-counter trading capabilities.',
  },
  {
    title:
      'Introducing NEAR Intents: A New Type of Transaction Between AI and the Real World',
    date: 'February 28, 2024',
    excerpt:
      'How NEAR Intents enables AI agents to interact seamlessly with blockchain infrastructure.',
  },
];

export function NewsSection() {
  return (
    <section id="blog" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#71717a] to-[#27272a]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              NEAR Intents <span className="text-orange-600">News</span>
            </h2>
            <a
              href="#"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 group"
            >
              <span>View all</span>
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              />
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <a
                href="#"
                className="group block relative"
              >
                {/* Black backing layer with tech grid */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-black border border-white/10 tech-grid-bg" />

                {/* White foreground card */}
                <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <div className="text-sm text-gray-500 mb-3">{news.date}</div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors duration-200">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm">
                    <span>Read more</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
