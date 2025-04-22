'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './style.module.css'

interface CurveProps {
  isOpen: boolean
}

export default function Curve({ isOpen }: CurveProps) {
  const height = typeof window !== 'undefined' ? window.innerHeight : 1000

  const initialPath = `M0 0 L0 ${height} Q-200 ${height / 2} 0 0`
  const targetPath = `M0 0 L0 ${height} Q0 ${height / 2} 0 0`

  const curve = {
    initial: { d: initialPath },
    open: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  )
}
