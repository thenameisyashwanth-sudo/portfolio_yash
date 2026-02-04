const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript / TypeScript', 'Python', 'Java', 'HTML / CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express'],
  },
  {
    title: 'Tools & Other',
    items: ['Git', 'VS Code', 'Figma', 'REST APIs', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans mb-4">
          Skills & <span className="text-accent">Tech</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12" />
        <div className="grid sm:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-slate-900 border border-slate-700/50 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-accent mb-4 font-sans">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill} className="text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
