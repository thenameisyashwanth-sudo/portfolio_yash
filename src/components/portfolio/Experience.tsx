import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Calendar, Code2, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    title: 'Summer Research Intern',
    company: 'NIT Warangal',
    location: 'Warangal, Telangana',
    period: 'May 2026 – Jul 2026',
    description:
      'Completed research internship under Prof. Manish Kumar Bajpai on dorsal hand vein biometric identification. Designed VeinFusionNet — a multi-feature fusion deep learning framework for robust cross-session identification using PyTorch.',
    skills: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Biometrics', 'OpenCV'],
    completed: true,
    workUrl: '/work/vein-fusion-net',
  },
  {
    title: 'Web Development Intern',
    company: 'VaultofCodes',
    location: 'Remote',
    period: 'Aug 2025 – Nov 2025',
    description: 'Built scalable and optimized web applications using frontend and backend technologies. Worked with React.js and designed the VaultofCodes logo.',
    skills: ['React.js', 'Frontend', 'Backend', 'Logo Design'],
    completed: false,
  },
  {
    title: 'Web Development Intern',
    company: 'National Skill Development Corporation (NSDC)',
    location: 'Tiruchirappalli, Tamil Nadu (Hybrid)',
    period: 'Jun 2025 – Jul 2025',
    description: 'Developed responsive UIs using React. Managed state and props for component-based architecture.',
    skills: ['React', 'State Management', 'Component Architecture'],
    completed: false,
  },
]

interface ExperienceCardProps {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  children?: React.ReactNode
}

function ExperienceCard({ icon, title, description, children }: ExperienceCardProps) {
  return (
    <GlowingEffect spread={40} glow={true} disabled={false} inactiveZone={0.01}>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-3">
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
  )
}

interface GridItemProps extends ExperienceCardProps {
  area: string
}

function GridItem({ area, ...props }: GridItemProps) {
  return (
    <li className={`list-none ${area}`}>
      <ExperienceCard {...props} />
    </li>
  )
}

export default function Experience() {
  const nitInternship = experiences[0]

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

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:auto-rows-auto lg:gap-4"
        >
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Building2 className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title={nitInternship.title + ' · ' + nitInternship.company}
            description={nitInternship.description}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {nitInternship.completed && (
                  <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    Completed · {nitInternship.period}
                  </Badge>
                )}
                {nitInternship.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-slate-600 dark:text-slate-400">
                    {skill}
                  </Badge>
                ))}
              </div>
              {nitInternship.workUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-fit rounded-full border-orange-500/40 text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-500/10"
                >
                  <Link to={nitInternship.workUrl}>
                    View My Work
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
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
            title={experiences[2].title + ' · ' + experiences[2].company}
            description={experiences[2].description}
          >
            <div className="flex flex-wrap gap-2">
              {experiences[2].skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-slate-600 dark:text-slate-400">
                  {skill}
                </Badge>
              ))}
            </div>
          </GridItem>

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:hidden"
            icon={<Sparkles className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title="B.Tech @ IIIT Kottayam"
            description="Indian Institute of Information Technology, Kottayam. Currently based in Tamil Nadu."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:hidden"
            icon={<Calendar className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
            title="Available for opportunities"
            description="Open to internships and full-time roles in full-stack development and ML. Get in touch via the contact form."
          />

          <li className="hidden list-none xl:flex xl:flex-col xl:gap-4 xl:[grid-area:1/8/3/13]">
            <ExperienceCard
              icon={<Sparkles className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
              title="B.Tech @ IIIT Kottayam"
              description="Indian Institute of Information Technology, Kottayam. Currently based in Tamil Nadu."
            />
            <ExperienceCard
              icon={<Calendar className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
              title="Available for opportunities"
              description="Open to internships and full-time roles in full-stack development and ML. Get in touch via the contact form."
            />
          </li>
        </motion.ul>
      </div>
    </section>
  )
}
