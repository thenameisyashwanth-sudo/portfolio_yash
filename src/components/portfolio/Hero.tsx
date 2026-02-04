import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Hero3DBackground from './Hero3DBackground'

const socials = [
  { icon: Github, href: 'https://github.com/thenameisyashwanth-sudo', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yashwanth-s-iiitk', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/thenameisyashwanthh', label: 'Instagram' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Three.js 3D background */}
      <Hero3DBackground />
      {/* Floating blur circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: '20%', left: '10%' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        style={{ bottom: '20%', right: '10%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Yashwanth <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">S</span>
          </motion.h1>

          <motion.p
            className="text-2xl text-slate-400 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack & Machine Learning Engineer
          </motion.p>

          <motion.p
            className="text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            B.Tech student at IIIT Kottayam. Building scalable web applications with React
            and full-stack technologies. Passionate about clean code and continuous learning.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white rounded-full px-8"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo in tilted frame with accent */}
        <motion.div
          className="flex-shrink-0 order-1 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <div className="relative">
            {/* Orange accent strip (bottom-right) */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-4 border-orange-500/80 bg-transparent pointer-events-none"
              style={{ borderRadius: '1.5rem' }}
            />
            <motion.div
              className="relative overflow-hidden rounded-3xl border-2 border-slate-700/50 bg-slate-800/30 shadow-2xl shadow-black/40 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
              style={{ transform: 'rotate(-6deg)' }}
              whileHover={{ rotate: -3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src="/profile.jpeg"
                alt="Yashwanth S"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        aria-label="Scroll to about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.a>
    </section>
  )
}
