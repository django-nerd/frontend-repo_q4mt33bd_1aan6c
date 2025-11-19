function Testimonials() {
  const items = [
    {
      quote: 'Rare blend of discretion and velocity. Delivers systems that just don’t fail.',
      name: 'VP Engineering',
      org: 'Fintech Unicorn'
    },
    {
      quote: 'Turned security into an accelerator for our product, not a blocker.',
      name: 'CISO',
      org: 'Regulated SaaS'
    },
    {
      quote: 'Executive‑level clarity with sleeves‑rolled‑up execution.','name': 'CTO',
      org: 'Healthcare AI'
    }
  ]

  return (
    <section className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.05),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-50 tracking-tight">Testimonials</h2>
          <p className="text-amber-100/70 mt-2">What partners and leaders say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-5">
              <p className="text-amber-50/90 italic">“{t.quote}”</p>
              <div className="mt-4 text-sm text-amber-200/80">{t.name} · {t.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
