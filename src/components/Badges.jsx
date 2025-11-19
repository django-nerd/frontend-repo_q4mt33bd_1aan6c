function Badges() {
  const items = [
    'OSCP', 'CISSP', 'AWS Solutions Architect', 'CKA', 'SLSA', 'OWASP', 'GDPR/ISO‑27001', 'SOC2'
  ]
  return (
    <section className="relative py-12 bg-[#0b1a12]">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2">
          {items.map((b, i) => (
            <span key={i} className="text-[11px] px-3 py-1.5 rounded-full border border-amber-400/20 text-amber-200/80 bg-black/10">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Badges
