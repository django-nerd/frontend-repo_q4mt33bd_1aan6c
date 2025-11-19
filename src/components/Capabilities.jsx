import { Shield, Cpu, Code2, Cloud, Landmark } from 'lucide-react'

function Capabilities() {
  const items = [
    {
      icon: Code2,
      title: 'Software Platforms',
      points: [
        'Product‑minded engineering for web, mobile, and APIs',
        'Event‑driven and microservice architectures',
        'Performance, reliability, and graceful degradation'
      ]
    },
    {
      icon: Shield,
      title: 'Security Engineering',
      points: [
        'Threat modeling, secure SDLC, and code signing',
        'Zero‑trust, secrets governance, and policy‑as‑code',
        'Red/blue exercises, detection engineering, incident prep'
      ]
    },
    {
      icon: Cpu,
      title: 'AI / ML Systems',
      points: [
        'LLM apps with retrieval, guardrails, and evaluation',
        'ML pipelines, model ops, and responsible deployment',
        'Privacy, governance, and auditability by default'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & SRE',
      points: [
        'Scalable infra: Kubernetes, Terraform, service meshes',
        'Observability: tracing, metrics, chaos testing',
        'Cost‑aware capacity planning and performance tuning'
      ]
    },
    {
      icon: Landmark,
      title: 'Leadership & Advisory',
      points: [
        'Roadmapping, org design, and technical due diligence',
        'Mentorship, hiring loops, and engineering culture',
        'Executive briefings and stakeholder alignment'
      ]
    }
  ]

  return (
    <section className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-50 tracking-tight">Capabilities</h2>
          <p className="text-amber-100/70 mt-2">Hands‑on execution with executive‑level clarity. Built to ship, built to last.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div key={i} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-5">
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5 text-amber-300" />
                <h3 className="text-amber-50 font-medium tracking-tight">{c.title}</h3>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-amber-100/80 text-sm">
                {c.points.map((p, pi) => (
                  <li key={pi}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
