export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans mb-4">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Computer Science student with a strong interest in web development,
              software engineering, and open-source. I enjoy turning ideas into real
              applications and constantly exploring new frameworks and tools.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              When I'm not coding, you'll find me contributing to side projects,
              reading tech blogs, or experimenting with new APIs and libraries.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full">
                Currently studying
              </span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full">
                Open to internships
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years coding', value: '2+' },
              { label: 'Projects built', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Coffee cups', value: '∞' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <p className="text-2xl font-bold text-accent font-sans">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
