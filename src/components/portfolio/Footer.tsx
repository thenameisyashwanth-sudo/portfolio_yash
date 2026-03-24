import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="text-xl font-bold text-white"
            >
              Yashwanth<span className="text-orange-500">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">
              Full-Stack Developer building reliable and scalable web products.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>

          <motion.div whileHover={{ y: -4 }}>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-white hover:bg-slate-800 rounded-full"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-sm text-slate-500">
          (c) {currentYear} Yashwanth S. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
