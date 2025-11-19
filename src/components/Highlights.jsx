function Highlights() {
  const stats = [
    { k: '99.95%', v: 'Platform Uptime', d: 'Across multi‑region deployments' },
    { k: '→0 Sev‑1', v: 'Critical Incidents', d: 'Hardened pipelines and runbooks' },
    { k: '–38%', v: 'Cloud Spend', d: 'Through profiling and right‑sizing' },
    { k: '7M+', v: 'End Users', d: 'Impacted by shipped features' }
  ]

  return (
    <section className="relative py-16 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.05),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-5 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-amber-100">{s.k}</div>
              <div className="text-amber-200/80 text-sm mt-1">{s.v}</div>
              <div className="text-amber-100/60 text-xs mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
