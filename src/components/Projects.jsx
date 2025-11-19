function Projects() {
  const items = [
    {
      title: 'Secure DevOps Platform',
      tags: ['Kubernetes', 'Zero Trust', 'Terraform'],
      desc: 'Hardened CI/CD with policy‑as‑code, SBOM, SLSA provenance and secrets governance.',
      link: '#'
    },
    {
      title: 'AI Incident Triage',
      tags: ['LLMs', 'RAG', 'FastAPI'],
      desc: 'On‑prem LLM assistant for SOC runbooks with audit trails and red‑team evaluation.',
      link: '#'
    },
    {
      title: 'Payments Microservices',
      tags: ['Go', 'Postgres', 'gRPC'],
      desc: 'Low‑latency settlement service with idempotent workflows and chaos testing.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-50 tracking-tight">Selected Work</h2>
          <p className="text-amber-100/70 mt-2">A few engagements highlighting engineering, security, and AI execution.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-5 hover:border-amber-300/40 transition block">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-amber-50 font-medium tracking-tight text-lg">{p.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-amber-200/60">Case</span>
              </div>
              <p className="text-amber-100/70 mt-2 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="text-[11px] px-2 py-1 rounded-full border border-amber-400/20 text-amber-200/80">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
