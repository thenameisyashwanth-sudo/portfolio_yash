import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SECTION_SELECTORS = ['#about', '#projects', '#experience', '#contact']

export default function ScrollRevealEffects() {
  useEffect(() => {
    SECTION_SELECTORS.forEach((selector) => {
      const el = document.querySelector(selector)
      if (!el) return
      const heading = el.querySelector('h2') || el.querySelector('.mb-16')
      if (!heading) return
      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return null
}
