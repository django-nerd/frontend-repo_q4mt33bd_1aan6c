import { Shield, Cpu, Code2, Mail, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a12] via-[#0e1f17] to-[#0b1a12]" />
      {/* Gold vignette */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_35%,rgba(234,179,8,0.12),transparent_60%)]" />
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.35\'/%3E%3C/svg%3E")'}} />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-black/10 px-3 py-1 text-amber-200/90 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span className="text-xs tracking-widest uppercase">Software • Security • AI</span>
            </div>

            <h1 className="text-4xl md:text-6xl tracking-tight font-semibold leading-tight text-amber-50">
              Crafting resilient software, securing systems, and shaping AI with discretion.
            </h1>
            <p className="mt-5 text-amber-100/80 text-lg md:text-xl max-w-2xl">
              I help organizations design trustworthy technology—elegant by design, robust in practice, and secure by default.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 text-black font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(251,191,36,0.25)_inset] hover:bg-amber-300 transition">
                <Mail className="h-4 w-4" />
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 text-amber-200 px-5 py-3 hover:bg-white/5 transition">
                View Work
              </a>
              <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/20 text-emerald-200 px-5 py-3 hover:bg-white/5 transition">
                Download Résumé
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-black/10 p-4 text-amber-100/90">
                <Code2 className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-sm font-medium">Software Engineering</p>
                  <p className="text-xs text-amber-100/60">Full‑stack systems & platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-black/10 p-4 text-amber-100/90">
                <Shield className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-sm font-medium">Cybersecurity</p>
                  <p className="text-xs text-amber-100/60">Threat modeling & hardening</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-black/10 p-4 text-amber-100/90">
                <Cpu className="h-5 w-5 text-amber-300" />
                <div>
                  <p className="text-sm font-medium">AI Development</p>
                  <p className="text-xs text-amber-100/60">ML systems & responsible AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait / Monogram */}
          <div className="w-full md:w-80 lg:w-96">
            <div className="relative aspect-square rounded-3xl border border-amber-400/20 bg-gradient-to-br from-black/30 to-black/10 p-1">
              <div className="absolute inset-0 rounded-3xl [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_70%)] bg-[conic-gradient(from_180deg,rgba(251,191,36,0.06),transparent_30%,rgba(251,191,36,0.06)_60%,transparent_90%)]" />
              <div className="relative h-full w-full rounded-[1.25rem] bg-gradient-to-br from-[#0f1f17] to-[#0a1913] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-semibold tracking-tight text-amber-200/90">{
                    '{'}Your Name{'}'}
                  </div>
                  <p className="mt-3 text-amber-100/70">Software • Security • AI</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-amber-100/50 mt-3 text-center">Add your professional headshot or keep the monogram.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
