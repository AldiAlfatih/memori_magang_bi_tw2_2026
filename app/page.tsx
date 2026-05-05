'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import SquadGallery from '@/components/sections/SquadGallery'
import MomentGallery from '@/components/sections/MomentGallery'
import Timeline from '@/components/sections/Timeline'
import Guestbook from '@/components/sections/Guestbook'
import CustomCursor from '@/components/ui/custom-cursor'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-accent selection:text-white">
      <CustomCursor />
      <HeroSection />
      <Timeline />
      <SquadGallery />
      <MomentGallery />
      <Guestbook />
    </main>
  )
}
