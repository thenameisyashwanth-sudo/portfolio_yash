import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
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
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 fill-red-500 text-red-500 inline" /> © 2025 Yashwanth S
        </p>
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
    </footer>
  )
}
