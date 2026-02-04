import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const projects = [
  {
    title: 'MovieHunt',
    description: 'Movie discovery web app built using React and APIs. Browse and explore movies with a clean, responsive interface.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
    tags: ['React', 'APIs'],
    github: 'https://github.com/thenameisyashwanth-sudo',
    live: null,
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="bg-slate-950 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-500 font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.title)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <Card className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-orange-500/50 transition-colors overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/90 text-white hover:bg-orange-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800/90 text-white hover:bg-orange-500 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                        hoveredId === project.title ? 'translate-x-1 -translate-y-1' : ''
                      }`}
                    />
                  </div>
                  <p className="text-slate-400 text-sm mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-slate-700 text-slate-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white rounded-full px-8"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
