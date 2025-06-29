'use client'

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/brajkiholi.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay (optional dark overlay for contrast) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">
          Jai Shri Krishna
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
          Welcome to the divine world of Braj Ki Holi – experience the colors, devotion, and joy.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
