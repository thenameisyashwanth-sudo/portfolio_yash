const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Your University Name',
    period: '2022 – Present',
    description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Databases, Software Engineering.',
  },
  {
    degree: 'High School',
    school: 'Your School Name',
    period: '2018 – 2022',
    description: 'Science stream with focus on Mathematics and Computer Science.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans mb-4">
          Education <span className="text-accent">& Learning</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12" />
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="p-6 rounded-xl bg-slate-900 border border-slate-700/50 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white font-sans">
                  {item.degree}
                </h3>
                <span className="text-sm text-accent font-mono">{item.period}</span>
              </div>
              <p className="text-accent/90 font-medium mb-2">{item.school}</p>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
