'use client'
import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'

interface IntroProps {
	image: StaticImageData | string
	className?: string
}

export default function Intro({ image, className = '' }: IntroProps) {
	const container = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

	return (
		<div ref={container} className={`h-screen overflow-hidden ${className}`}>
			<motion.div style={{ y }} className="relative h-full">
				<Image
					src={image}
					fill
					alt="background"
					style={{ objectFit: 'cover' }}
					priority
				/>
			</motion.div>
		</div>
	)
}
