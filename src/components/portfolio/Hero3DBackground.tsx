import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Wireframe torus - elegant and lightweight
    const geometry = new THREE.TorusGeometry(1.8, 0.04, 8, 48)
    const material = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const torus = new THREE.Mesh(geometry, material)
    torus.rotation.x = Math.PI * 0.2
    scene.add(torus)

    // Second torus - smaller, offset
    const geometry2 = new THREE.TorusGeometry(1.2, 0.03, 6, 36)
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })
    const torus2 = new THREE.Mesh(geometry2, material2)
    torus2.rotation.x = Math.PI * 0.4
    torus2.rotation.y = Math.PI * 0.5
    scene.add(torus2)

    // Gentle rotation with GSAP
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(torus.rotation, { y: Math.PI * 2, duration: 24, ease: 'none' }, 0)
    tl.to(torus2.rotation, { y: Math.PI * -2, duration: 20, ease: 'none' }, 0)

    let frameId: number
    const resize = () => {
      const width = container.offsetWidth
      const height = container.offsetHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
      tl.kill()
      renderer.dispose()
      geometry.dispose()
      geometry2.dispose()
      material.dispose()
      material2.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    />
  )
}
