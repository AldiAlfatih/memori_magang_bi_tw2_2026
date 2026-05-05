'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface GalleryItemProps {
  item: {
    id: number
    title: string
    category: string
    imageUrl: string
    description: string
  }
}

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden"
      style={{
        backgroundColor: '#CBCBCB',
      }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          crossOrigin="anonymous"
        />

        {/* Ultra-low opacity overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          backgroundColor: 'rgba(119, 124, 109, 0.15)',
        }} />

        {/* Title overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-display font-semibold text-white text-lg">
            {item.title}
          </h3>
          <p className="text-sm text-white/80 mt-1">
            {item.category}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
