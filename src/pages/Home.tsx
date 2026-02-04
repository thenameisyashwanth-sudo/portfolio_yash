import Navigation from '@/components/portfolio/Navigation'
import Hero from '@/components/portfolio/Hero'
import ScrollRevealEffects from '@/components/portfolio/ScrollRevealEffects'
import About from '@/components/portfolio/About'
import Projects from '@/components/portfolio/Projects'
import ThreeDMarqueeSection from '@/components/portfolio/ThreeDMarqueeSection'
import Experience from '@/components/portfolio/Experience'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollRevealEffects />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ThreeDMarqueeSection />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
