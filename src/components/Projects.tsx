const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack admin dashboard for managing products, orders, and analytics with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    href: '#',
    github: '#',
  },
  {
    title: 'Task Manager App',
    description: 'Collaborative task management with real-time updates, filters, and drag-and-drop.',
    tags: ['TypeScript', 'React', 'Firebase'],
    href: '#',
    github: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, Vite, and Tailwind CSS. Responsive and fast.',
    tags: ['React', 'Vite', 'Tailwind', 'TypeScript'],
    href: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/50 transition-all flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-2 font-sans group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.href}
                  className="text-sm text-accent hover:text-accent-light font-medium"
                >
                  Live demo →
                </a>
                <a
                  href={project.github}
                  className="text-sm text-slate-400 hover:text-accent font-medium"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
