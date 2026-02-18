import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTAButton } from '@/components/shared/CTAButton';
import { User, FileText, Activity, CheckCircle, Network, Box } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How <span className="text-orange-600">Intents</span> Work
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              NEAR Intents enable seamless cross-chain transactions through a
              sophisticated off-chain and on-chain architecture.
            </p>
            <CTAButton text="Technical Documentation" variant="ghost" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="border border-white/10 rounded-2xl p-8 sm:p-12 bg-black/30 backdrop-blur-sm dot-pattern">
            <div className="grid md:grid-cols-2 gap-12">
              {/* OFF-CHAIN */}
              <div>
                <div className="inline-block px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full text-orange-600 font-mono text-sm mb-6">
                  OFF-CHAIN
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center border border-orange-600/30">
                      <User size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">User Agent</h3>
                      <p className="text-sm text-white/60">
                        User submits intent via agent interface
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 border-l-2 border-orange-600/30 pl-4 py-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full -ml-5" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center border border-orange-600/30">
                      <FileText size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Market Maker</h3>
                      <p className="text-sm text-white/60">
                        Intent routed to optimal market maker
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 border-l-2 border-orange-600/30 pl-4 py-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full -ml-5" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center border border-orange-600/30">
                      <Activity size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Quote Generation</h3>
                      <p className="text-sm text-white/60">
                        Best execution quote calculated
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ON-CHAIN */}
              <div>
                <div className="inline-block px-4 py-2 bg-green-600/10 border border-green-600/30 rounded-full text-green-600 font-mono text-sm mb-6">
                  ON-CHAIN
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center border border-green-600/30">
                      <CheckCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Smart Contract</h3>
                      <p className="text-sm text-white/60">
                        Transaction executed on source chain
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 border-l-2 border-green-600/30 pl-4 py-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full -ml-5" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center border border-green-600/30">
                      <Network size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Omnibridge</h3>
                      <p className="text-sm text-white/60">
                        Cross-chain message relayed
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 border-l-2 border-green-600/30 pl-4 py-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full -ml-5" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center border border-green-600/30">
                      <Box size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Settlement</h3>
                      <p className="text-sm text-white/60">
                        Assets delivered to destination
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
