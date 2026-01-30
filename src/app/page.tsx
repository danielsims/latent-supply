export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-8">
        {/* Simple Infinity Symbol */}
        <div className="text-5xl font-extralight text-neutral-800 select-none">
          ∞
        </div>

        {/* Company Name */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-neutral-900">
            Latent Supply
          </h1>
          <p className="text-sm font-light tracking-wide text-neutral-400">
            Asymmetric opportunities
          </p>
        </div>

        {/* Subtle divider */}
        <div className="w-12 h-px bg-neutral-200" />

        {/* Footer links */}
        <div className="flex items-center space-x-6 text-xs font-light tracking-wide text-neutral-400">
          <a
            href="mailto:admin@latentsupply.com"
            className="hover:text-neutral-900 transition-colors"
          >
            Contact
          </a>
          <span className="text-neutral-200">|</span>
          <span>&copy; {new Date().getFullYear()} Latent Supply</span>
        </div>
      </div>
    </main>
  );
}
