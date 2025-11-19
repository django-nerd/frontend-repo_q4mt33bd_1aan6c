import { Mail, Linkedin, Github, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) setStatus('Message received. I will get back to you shortly.')
      else setStatus(data.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Unable to send at the moment.')
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-[#0b1a12]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_60%_at_50%_0%,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-50 tracking-tight">Let’s talk</h2>
          <p className="text-amber-100/70 mt-2">For collaborations, advisory, or speaking. Discretion guaranteed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-6">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-black/20 border border-amber-400/20 px-4 py-3 text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-black/20 border border-amber-400/20 px-4 py-3 text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
              <textarea name="message" rows="4" required placeholder="Your message" className="w-full rounded-lg bg-black/20 border border-amber-400/20 px-4 py-3 text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
              <button className="inline-flex justify-center rounded-lg bg-amber-400 text-black font-medium px-5 py-3 hover:bg-amber-300 transition">Send</button>
            </div>
            <p className="text-sm text-emerald-200/80 mt-3 min-h-[1.25rem]">{status}</p>
            <div className="flex items-center gap-2 text-amber-100/60 text-xs mt-3">
              <ShieldCheck className="h-4 w-4" />
              Spam is filtered. Your data is handled with care.
            </div>
          </form>

          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/20 to-black/5 p-6">
            <h3 className="text-amber-50 font-medium tracking-tight">Elsewhere</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:you@example.com" className="flex items-center gap-3 text-amber-100/80 hover:text-amber-50 transition"><Mail className="h-4 w-4"/> you@example.com</a>
              <a href="https://www.linkedin.com/" target="_blank" className="flex items-center gap-3 text-amber-100/80 hover:text-amber-50 transition"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              <a href="https://github.com/" target="_blank" className="flex items-center gap-3 text-amber-100/80 hover:text-amber-50 transition"><Github className="h-4 w-4"/> GitHub</a>
            </div>
            <div className="mt-8 text-sm text-amber-100/60">
              <p>Available for select engagements in software platforms, security advisory, and AI systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
