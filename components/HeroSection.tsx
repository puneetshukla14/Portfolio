'use client'

import { useRef, useEffect, useState } from 'react'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = 1.0
      videoRef.current.play()
    }

    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    }, 30000) // reset every 30s

    return () => clearInterval(interval)
  }, [isMuted])

  const toggleSound = () => {
    setIsMuted((prev) => !prev)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.08]"
        src="/videos/brajkiholi.webm"
        autoPlay
        muted={false}
        playsInline
      />

      {/* Speaker Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-5 right-5 z-30 bg-black/50 text-white p-3 rounded-full backdrop-blur hover:bg-black/70 transition"
        aria-label="Toggle Sound"
      >
        {isMuted ? (
          <HiSpeakerXMark className="w-6 h-6" />
        ) : (
          <HiSpeakerWave className="w-6 h-6" />
        )}
      </button>
    </section>
  )
}

export default HeroSection
