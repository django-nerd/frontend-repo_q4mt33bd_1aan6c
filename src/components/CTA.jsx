function CTA() {
  return (
    <section className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.1),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-amber-400/25 bg-gradient-to-br from-black/30 to-black/10 p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-50 tracking-tight">Ready when you are.</h3>
          <p className="text-amber-100/70 mt-2 max-w-2xl mx-auto">If you’re building something consequential — where reliability, security, and pace matter — I can help you ship with confidence.</p>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 text-black font-medium px-6 py-3 hover:bg-amber-300 transition">Start a conversation</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
