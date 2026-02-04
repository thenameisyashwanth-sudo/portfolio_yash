import { useCallback, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowingEffectProps {
  spread?: number
  glow?: boolean
  disabled?: boolean
  inactiveZone?: number
  movementDuration?: number
  borderWidth?: number
  variant?: 'default' | 'white'
  className?: string
  children?: ReactNode
}

export function GlowingEffect({
  spread = 20,
  glow = false,
  disabled = true,
  inactiveZone = 0.7,
  movementDuration = 2,
  borderWidth = 2,
  variant = 'default',
  className,
  children,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const w = rect.width
      const h = rect.height
      const centerX = w / 2
      const centerY = h / 2
      const dx = (x - centerX) / w
      const dy = (y - centerY) / h
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (inactiveZone > 0 && dist < inactiveZone) {
        setMousePosition(null)
        return
      }
      setMousePosition({ x, y })
      setIsHovered(true)
    },
    [disabled, inactiveZone]
  )

  const handleMouseLeave = useCallback(() => {
    setMousePosition(null)
    setIsHovered(false)
  }, [])

  const showGlow = glow || (isHovered && mousePosition !== null)
  const mx = mousePosition?.x ?? -1000
  const my = mousePosition?.y ?? -1000
  const size = spread * 12

  const gradientStyle =
    variant === 'white'
      ? `radial-gradient(${size}px circle at ${mx}px ${my}px, rgba(255,255,255,0.2), transparent 45%)`
      : `radial-gradient(${size}px circle at ${mx}px ${my}px, rgba(251,146,60,0.4), rgba(251,146,60,0.08) 35%, transparent 55%)`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative h-full w-full rounded-2xl md:rounded-3xl', className)}
      style={{
        padding: `${borderWidth}px`,
        background: showGlow ? gradientStyle : 'transparent',
        transition: `background ${movementDuration * 0.2}s ease-out`,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl border border-slate-200/80 bg-white shadow-[0px_0px_27px_0px_rgba(0,0,0,0.06)] dark:bg-slate-900 dark:border-slate-700/50 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        {children}
      </div>
    </div>
  )
}
