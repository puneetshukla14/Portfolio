'use client'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.3]"
        src="/videos/brajkiholi.webm"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}

export default HeroSection
