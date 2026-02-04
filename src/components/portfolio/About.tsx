import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Code2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const infoCards = [
  { icon: GraduationCap, title: 'Indian Institute of Information Technology (IIIT), Kottayam / B.Tech', subtitle: '' },
  { icon: Calendar, title: 'Ongoing / Expected Graduation', subtitle: '' },
  { icon: MapPin, title: 'Tamil Nadu, India / Currently Based', subtitle: '' },
  { icon: Code2, title: 'Full-Stack & ML / Focus Areas', subtitle: '' },
]

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Python', level: 88 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 80 },
  { name: 'SQL', level: 70 },
]

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL',
  'MongoDB', 'Git', 'Docker', 'AWS', 'Figma', 'Tailwind CSS',
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-500 font-medium mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Turning ideas into reality
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-4 border-orange-500 mb-8"
            >
              <p className="text-slate-600 mb-4">
                I'm a B.Tech student at IIIT Kottayam with experience in full-stack web
                development and React. I enjoy turning complex problems into elegant solutions
                and have gained hands-on experience through internships and personal projects.
              </p>
              <p className="text-slate-600">
                I'm passionate about building scalable applications, learning new technologies,
                and collaborating on meaningful work. Always open to new opportunities and
                excited to connect with fellow developers and teams.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {infoCards.map(({ icon: Icon, title }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-5">
                      <Icon className="w-6 h-6 text-orange-500 mb-2" />
                      <p className="text-sm font-medium text-slate-900">{title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Skills</h3>
              <div className="space-y-4 mb-8">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 font-medium">{name}</span>
                      <span className="text-slate-500">{level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="hover:bg-orange-100 text-slate-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
