import { motion } from 'framer-motion'
import { Building2, Calendar, Code2, Sparkles, Briefcase } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'VaultofCodes',
    location: 'Remote',
    period: 'Aug 2025 – Nov 2025',
    description: 'Built scalable and optimized web applications using frontend and backend technologies. Worked with React.js and designed the VaultofCodes logo.',
    skills: ['React.js', 'Frontend', 'Backend', 'Logo Design'],
    current: false,
  },
  {
    title: 'Web Development Intern',
    company: 'National Skill Development Corporation (NSDC)',
    location: 'Tiruchirappalli, Tamil Nadu (Hybrid)',
    period: 'Jun 2025 – Jul 2025',
    description: 'Developed responsive UIs using React. Managed state and props for component-based architecture.',
    skills: ['React', 'State Management', 'Component Architecture'],
    current: false,
  },
]

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  children?: React.ReactNode
}

function GridItem({ area, icon, title, description, children }: GridItemProps) {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        inactiveZone={0.01}
      >
        <div className="flex h-full flex-col justify-between gap-4 p-6">
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-slate-200 bg-slate-50/80 p-2 dark:border-slate-600 dark:bg-slate-800/50">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-xl font-semibold tracking-tight text-slate-900 md:text-2xl dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
          {children}
        </div>
      </GlowingEffect>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-500 font-medium mb-2">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Where I've worked
          </h2>
        </motion.div>

        {/* Glowing grid */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
        >
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Building2 className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title={experiences[0].title + ' · ' + experiences[0].company}
            description={experiences[0].description}
          >
            <div className="flex flex-wrap gap-2">
              {experiences[0].skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-slate-600 dark:text-slate-400">
                  {skill}
                </Badge>
              ))}
            </div>
          </GridItem>

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Briefcase className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title={experiences[1].title + ' · ' + experiences[1].company}
            description={experiences[1].description}
          >
            <div className="flex flex-wrap gap-2">
              {experiences[1].skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-slate-600 dark:text-slate-400">
                  {skill}
                </Badge>
              ))}
            </div>
          </GridItem>

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Code2 className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title="Full-Stack & Machine Learning"
            description="Building web applications with React, Node, and exploring ML. Focus on clean architecture and scalable solutions."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title="B.Tech @ IIIT Kottayam"
            description="Indian Institute of Information Technology, Kottayam. Currently based in Tamil Nadu."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Calendar className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title="Available for opportunities"
            description="Open to internships and full-time roles in full-stack development and ML. Get in touch via the contact form."
          />
        </motion.ul>
      </div>
    </section>
  )
}
