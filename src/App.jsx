import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1a12] text-amber-50">
      {/* Subtle frame */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-6 rounded-[2rem] border border-amber-400/15"></div>
      </div>

      {/* Sections */}
      <Hero />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="relative bg-[#0b1a12] py-10 border-t border-amber-400/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-100/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-amber-100/50 text-xs">Built with care — secure by design.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
