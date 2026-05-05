'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LightboxProps {
  item: {
    id: number
    title: string
    category: string
    imageUrl: string
    description: string
  }
  onClose: () => void
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(238, 238, 238, 0.98)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
          aria-label="Close lightbox"
        >
          <svg className="w-6 h-6" style={{ color: '#777C6D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Image */}
          <div className="flex items-center justify-center rounded-lg overflow-hidden" style={{
            backgroundColor: '#CBCBCB',
          }}>
            <div className="relative w-full h-96 md:h-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{
                  backgroundColor: 'rgba(183, 184, 159, 0.15)',
                  color: '#B7B89F',
                }}
              >
                {item.category}
              </span>
              <h2 className="font-display text-3xl font-bold mb-3" style={{ color: '#777C6D' }}>
                {item.title}
              </h2>
            </div>

            {/* Ultra-low opacity description panel */}
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: 'rgba(183, 184, 159, 0.08)',
                border: '1px solid rgba(183, 184, 159, 0.15)',
                color: '#777C6D',
              }}
            >
              <p className="leading-relaxed">
                {item.description}
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg font-medium transition-all duration-300 self-start"
              style={{
                backgroundColor: 'rgba(119, 124, 109, 0.1)',
                color: '#777C6D',
                border: '1px solid rgba(119, 124, 109, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(119, 124, 109, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(119, 124, 109, 0.1)'
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
