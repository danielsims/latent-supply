import { Reveal, ScrollReveal } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Smartphone, Globe, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
        <Reveal
          variant="fade"
          delay={0.1}
          className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
        >
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-900 dark:text-neutral-100">
            Latent Supply
          </span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:admin@latentsupply.com"
              className="text-xs tracking-wide text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </Reveal>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70svh] flex flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
            <h1 className="text-7xl sm:text-8xl md:text-[7rem] lg:text-[9rem] font-extralight tracking-tight uppercase leading-[0.85] text-neutral-900 dark:text-white">
              <Reveal delay={0.25}>Latent</Reveal>
              <Reveal delay={0.4}>Supply</Reveal>
            </h1>
            <div className="md:pb-2">
              <Reveal variant="line" delay={0.6} className="w-8 h-px bg-neutral-200 dark:bg-neutral-700 mb-6" />
              <Reveal delay={0.7}>
                <p className="text-base sm:text-lg font-light text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  A product studio building applications and experiences at the
                  edge of what new technology makes possible.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 sm:py-32 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-12 gap-6 md:gap-16">
              <div className="md:col-span-3">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600">
                  About
                </span>
              </div>
              <div className="md:col-span-9 space-y-6">
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200">
                  Every wave of technology opens up product categories that
                  couldn&apos;t have existed before. AI is doing this at a pace
                  and scale the market hasn&apos;t caught up to yet.
                </p>
                <p className="text-base font-light leading-relaxed text-neutral-400 dark:text-neutral-500">
                  Latent Supply is a product studio that identifies these
                  emerging opportunities and ships the applications, tools, and
                  experiences that bring them to life. We build across web and
                  mobile, with a focus on quality engineering and thoughtful
                  design.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 sm:py-32 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-3">
              <ScrollReveal>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600">
                  What we do
                </span>
              </ScrollReveal>
            </div>
            <div className="md:col-span-9">
              <ScrollReveal>
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200 mb-12">
                  We design, build, and ship software products. From concept
                  through to launch and beyond.
                </p>
              </ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-10">
                <ScrollReveal delay={0}>
                  <div>
                    <Smartphone
                      className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mb-4"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm font-normal text-neutral-900 dark:text-neutral-100 mb-1.5">
                      Mobile applications
                    </p>
                    <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 leading-relaxed">
                      Native experiences for iOS and Android, designed and
                      engineered with care.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <div>
                    <Globe
                      className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mb-4"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm font-normal text-neutral-900 dark:text-neutral-100 mb-1.5">
                      Web platforms
                    </p>
                    <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 leading-relaxed">
                      Modern web applications and tools built to perform at
                      scale.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div>
                    <Terminal
                      className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mb-4"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm font-normal text-neutral-900 dark:text-neutral-100 mb-1.5">
                      Developer tools
                    </p>
                    <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 leading-relaxed">
                      Infrastructure and tooling built for the AI era.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 mb-16 sm:mb-20 block">
              How we think
            </span>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-base font-normal mb-4 text-neutral-900 dark:text-neutral-100">
                  Ship and iterate
                </h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400 dark:text-neutral-500">
                  We believe in getting products into the world quickly. Real
                  feedback from real users is worth more than months of
                  speculation. We ship early, measure what matters, and improve
                  relentlessly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-base font-normal mb-4 text-neutral-900 dark:text-neutral-100">
                  Technology as leverage
                </h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400 dark:text-neutral-500">
                  AI and emerging technology aren&apos;t features to add at the
                  end. They&apos;re the starting point for entirely new product
                  categories. We build from this foundation up, creating
                  experiences that genuinely couldn&apos;t have existed before.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-base font-normal mb-4 text-neutral-900 dark:text-neutral-100">
                  Quality by default
                </h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400 dark:text-neutral-500">
                  Moving fast doesn&apos;t mean cutting corners. We care about
                  design, engineering, and the details that separate products
                  people tolerate from products people love.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 sm:py-32 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="max-w-lg">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 mb-8 block">
                Get in touch
              </span>
              <p className="text-base font-light leading-relaxed text-neutral-400 dark:text-neutral-500 mb-8">
                Interested in what we&apos;re building, or want to explore
                working together? We&apos;d love to hear from you.
              </p>
              <a
                href="mailto:admin@latentsupply.com"
                className="inline-block text-sm font-normal text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-1 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300"
              >
                admin@latentsupply.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="space-y-1.5">
                <p className="text-xs font-medium tracking-[0.1em] uppercase text-neutral-900 dark:text-neutral-100">
                  Latent Supply Pty Ltd
                </p>
                <p className="text-xs font-light text-neutral-300 dark:text-neutral-600">
                  ABN 38 694 551 490
                </p>
              </div>
              <div className="text-xs font-light text-neutral-300 dark:text-neutral-600">
                <span>&copy; {new Date().getFullYear()} Latent Supply</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  );
}
