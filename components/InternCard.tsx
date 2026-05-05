'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface InternCardProps {
  intern: {
    id: number
    name: string
    unit: string
    univ: string
    quote: string
    image: string
  }
}

export default function InternCard({ intern }: InternCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        border: '1px solid rgba(183, 184, 159, 0.15)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br" style={{
        backgroundColor: '#CBCBCB',
      }}>
        <Image
          src={intern.image}
          alt={intern.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          backgroundColor: 'rgba(119, 124, 109, 0.2)',
        }} />
      </div>

      {/* Content container */}
      <div className="p-6 space-y-3">
        <h3 className="font-display font-semibold text-xl" style={{ color: '#777C6D' }}>
          {intern.name}
        </h3>

        <div className="space-y-1 text-sm">
          <p className="font-medium" style={{ color: '#B7B89F' }}>
            {intern.unit}
          </p>
          <p className="text-xs" style={{ color: '#777C6D', opacity: 0.7 }}>
            {intern.univ}
          </p>
        </div>

        {/* Quote with ultra-low opacity panel */}
        <div
          className="mt-4 p-3 rounded-lg italic border-l-2"
          style={{
            backgroundColor: 'rgba(183, 184, 159, 0.05)',
            borderLeftColor: '#B7B89F',
            color: '#777C6D',
          }}
        >
          &ldquo;{intern.quote}&rdquo;
        </div>
      </div>
    </motion.div>
  )
}
