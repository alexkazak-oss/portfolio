'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IntroSectionProps {
  title: React.ReactNode
  subtitle: string
	highlights: string[]
	highlightedText?: string
  buttonLabel: string
  backgroundImage: StaticImageData | string
}

export const IntroSection = ({
  title,
  subtitle,
	highlights,
  buttonLabel,
  backgroundImage,
}: IntroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      <Image
        src={backgroundImage}
        fill
        alt="background stars"
        className="object-cover object-center z-0 opacity-30"
        priority
      />



      <div className="relative max-w-7xl px-6 lg:mx-12 mx-auto flex flex-col gap-6 text-left">
        <h1 className="text-3xl md:text-5xl max-w-[700px] font-bold leading-tight">
          {title}
        </h1>

        <p className="text-gray-300 max-w-2xl text-base md:text-lg">{subtitle}</p>

        <div className="h-px w-full bg-gray-700 my-4" />

        <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base text-gray-400">
          {highlights.map((line, i) => (
            <p key={i} className="max-w-md">{line}</p>
          ))}
        </div>

        <div className="mt-6">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-full text-sm uppercase font-semibold tracking-wide hover:bg-cyan-300 transition">
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
