function Experience() {
  const items = [
    {
      role: 'Senior Software Engineer',
      org: 'Confidential Client',
      period: '2021 — Present',
      bullets: [
        'Led architecture for platform used by millions; 99.95% uptime.',
        'Introduced security engineering practices: threat modeling, code signing, SBOM.',
        'Mentored engineers across backend, cloud, and AI integrations.'
      ]
    },
    {
      role: 'Security Engineer',
      org: 'Fintech',
      period: '2019 — 2021',
      bullets: [
        'Built red/blue exercise frameworks and automated detections.',
        'Drove least‑privilege & zero‑trust rollout across services.'
      ]
    },
    {
      role: 'AI Research Engineer',
      org: 'R&D Lab',
      period: '2017 — 2019',
      bullets: [
        'Developed ML pipelines and evaluation harnesses for NLP systems.',
        'Published internal whitepapers on responsible model deployment.'
      ]
    }
  ]

  return (
    <section className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.05),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-50 tracking-tight">Experience</h2>
          <p className="text-amber-100/70 mt-2">A brief selection. Full résumé available upon request.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((e, i) => (
            <div key={i} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="text-amber-50 font-medium tracking-tight">{e.role}</h3>
                <span className="text-[11px] text-amber-200/60">{e.period}</span>
              </div>
              <p className="text-amber-200/80 text-sm">{e.org}</p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-amber-100/80 text-sm">
                {e.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
