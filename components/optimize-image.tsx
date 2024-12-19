'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  style?: React.CSSProperties
  className?: string
  sizes?: string
  onMouseMove?: (e: React.MouseEvent) => void
  priority?: boolean
}

type ConnectionSpeed = 'slow' | 'good' | 'fast'

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className, style, sizes, onMouseMove, priority = false }) => {
  const [isLoading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const connectionSpeedRef = useRef<ConnectionSpeed>('good')
  const baseUrl = 'http://178.128.113.232/'
  const fallbackImage = '/fallback-image.jpg'
  const adjustedSizeRef = useRef({ width, height })
  const srcSetRef = useRef<string>('')

  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

    if (connection) {
      const updateConnectionSpeed = () => {
        if (connection.downlink < 1) {
          connectionSpeedRef.current = 'slow'
        } else if (connection.downlink >= 1 && connection.downlink < 5) {
          connectionSpeedRef.current = 'good'
        } else {
          connectionSpeedRef.current = 'fast'
        }
        adjustSize()
      }

      updateConnectionSpeed()
      connection.addEventListener('change', updateConnectionSpeed)

      return () => {
        connection.removeEventListener('change', updateConnectionSpeed)
      }
    }
  }, [])

  useEffect(() => {
    if (!imageRef.current || priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(imageRef.current)

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [priority])

  const adjustSize = () => {
    const getImageSize = (originalSize: number) => {
      switch (connectionSpeedRef.current) {
        case 'slow':
          return Math.round(originalSize * 0.5)
        case 'good':
          return originalSize
        case 'fast':
          return Math.round(originalSize * 1.5)
        default:
          return originalSize
      }
    }

    adjustedSizeRef.current = {
      width: getImageSize(width),
      height: getImageSize(height),
    }
  }

  useEffect(() => {
    adjustSize()
    const imageSource = src.startsWith('http') ? src : `${baseUrl}${src}`
    const generateSrcSet = () => {
      const widths = [0.5, 1, 1.5, 2].map((scale) => Math.round(adjustedSizeRef.current.width * scale))
      return widths.map((w) => `${imageSource}?w=${w} ${w}w`).join(', ')
    }
    srcSetRef.current = generateSrcSet()

    if (priority) {
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      //@ts-expect-error
      const img = new Image()
      img.src = imageSource
    }
  }, [src, width, height, priority])

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

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imageRef}>
      {(isVisible || priority) && (
        <Image
          src={src.startsWith('http') ? src : `${baseUrl}${src}`}
          alt={alt}
          width={adjustedSizeRef.current.width}
          height={adjustedSizeRef.current.height}
          style={style}
          sizes={sizes || `(max-width: 768px) 100vw, ${adjustedSizeRef.current.width}px`}
          onMouseMove={onMouseMove}
          className={`duration-700 ease-in-out ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${className || ''}`}
          onLoadingComplete={() => setLoading(false)}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = fallbackImage
            setLoading(false)
          }}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(adjustedSizeRef.current.width, adjustedSizeRef.current.height))}`}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          //@ts-expect-error
          srcSet={srcSetRef.current}
        />
      )}
    </div>
  )
}

export default OptimizedImage
