import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// interface SlideshowProps {
//   images: Array<{
//     url: string;
//     title: string;
//   }>;
// }

export function ProjectSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="relative mb-24 h-[500px] w-full overflow-hidden rounded-3xl">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 z-0 transform-gpu blur-3xl"
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0118] via-transparent to-[#0a0118]/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0118]/80 via-transparent to-[#0a0118]/80" />

      {/* Main image */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="group absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-[#2d1b69]/40 p-3 backdrop-blur-sm transition-all hover:bg-[#2d1b69]/60"
      >
        <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={goToNext}
        className="group absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-[#2d1b69]/40 p-3 backdrop-blur-sm transition-all hover:bg-[#2d1b69]/60"
      >
        <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-1" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-[#ff6b6b]'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center">
        <h3 className="text-shadow-lg text-2xl font-bold text-white">
          {images[currentIndex].title}
        </h3>
      </div>
    </div>
  )
}
