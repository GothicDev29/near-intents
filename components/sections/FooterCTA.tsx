import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTAButton } from '@/components/shared/CTAButton';
import { Github, Twitter, Send, Youtube } from 'lucide-react';

export function FooterCTA() {
  return (
    <footer className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Integrate and swap with
              <br />
              <span className="text-orange-600">Intents</span> today
            </h2>

            {/* Orange horizontal line */}
            <div className="w-full h-1 bg-orange-600 mb-12" />

            <CTAButton text="Talk with the team" variant="solid" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col items-center gap-8 pt-16 border-t border-white/10">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white/50">
              © 2024 NEAR Foundation.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
