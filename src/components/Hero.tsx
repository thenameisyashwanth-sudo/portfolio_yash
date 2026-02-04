export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
          Student & Developer
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-sans mb-6">
          Hi, I'm{' '}
          <span className="text-accent">Your Name</span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Computer Science student passionate about building clean, user-friendly applications
          and learning new technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-600 text-slate-300 hover:border-accent hover:text-accent rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="text-slate-500 hover:text-accent transition-colors"
          aria-label="Scroll to about"
        >
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
