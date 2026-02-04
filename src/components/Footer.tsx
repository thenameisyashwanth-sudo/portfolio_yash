export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-700/50 bg-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Your Name. Built with React, Vite & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href="#hero" className="text-slate-500 hover:text-accent text-sm transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
