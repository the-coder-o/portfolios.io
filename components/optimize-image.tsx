import { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className }) => {
  const [isLoading, setLoading] = useState(true)
  const baseUrl = 'https://portfolio.shohjahon1code.uz'
  const fallbackImage = '/fallback-image.jpg'

  const imageSource = src.startsWith('http') ? src : `${baseUrl}${src}`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageSource}
        alt={alt}
        width={width}
        height={height}
        className={`duration-700 ease-in-out ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className || ''} `}
        onLoadingComplete={() => setLoading(false)}
        onError={(e) => {
          ;(e.target as HTMLImageElement).src = fallbackImage
          setLoading(false)
        }}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      />
    </div>
  )
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str))

export default OptimizedImage
