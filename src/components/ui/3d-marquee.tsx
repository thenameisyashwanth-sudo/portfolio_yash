import { cn } from '@/lib/utils'

function splitArray<T>(arr: T[], numChunks: number): T[][] {
  const chunkSize = Math.ceil(arr.length / numChunks)
  const chunks: T[][] = []
  for (let i = 0; i < numChunks; i++) {
    chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize))
  }
  return chunks
}

interface ThreeDMarqueeProps {
  images: string[]
  className?: string
  numRows?: number
}

export function ThreeDMarquee({ images, className, numRows = 4 }: ThreeDMarqueeProps) {
  const rows = splitArray(images, numRows)

  return (
    <div
      className={cn(
        'relative flex flex-col gap-4 overflow-hidden rounded-2xl',
        'perspective-[800px] [transform-style:preserve-3d]',
        className
      )}
    >
      {rows.map((rowImages, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full overflow-hidden"
          style={{
            transform: rowIndex % 2 === 0 ? 'translateZ(-60px)' : 'translateZ(60px)',
          }}
        >
          <div
            className={`flex w-max gap-4 ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}
          >
            {[1, 2].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4">
                {rowImages.map((src, i) => (
                  <div
                    key={`${rowIndex}-${copy}-${i}`}
                    className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 shadow-lg md:h-28 md:w-40"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
