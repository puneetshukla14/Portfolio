'use client'

import React, { useState, useEffect } from 'react'

const Loading = () => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2500)
    const timer2 = setTimeout(() => setVisible(false), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-animation text-center text-[10vw] font-bold tracking-wide leading-tight">
        PuneetShukla
      </h1>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap');

        .text-animation {
          font-family: 'Oswald', sans-serif;
          background: linear-gradient(to right, #00ffff, #3535f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: netflix_style 3s ease-out;
          white-space: nowrap;
        }

        @keyframes netflix_style {
          0% {
            text-shadow: 0px 0px transparent, 100px 100px #aaa;
            transform: scale(1.5);
            color: #f3f3f3;
          }
          10% {
            text-shadow: 1.5px 1.5px #aaa;
          }
          20% {
            color: #e90418;
            text-shadow: none;
            transform: scale(1.1);
          }
          80% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 14vw;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 16vw;
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
