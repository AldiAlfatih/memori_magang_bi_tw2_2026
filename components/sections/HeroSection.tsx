"use client";

import { motion } from "framer-motion";
import GridMotion from "@/components/ui/grid-motion";
import TrueFocus from "@/components/ui/true-focus";
import DecryptedText from "@/components/ui/decrypted-text";
import { GALLERY_MOMENTS } from "@/src/constants";
import { Particles } from "@/components/ui/particles";

export default function HeroSection() {
  const magangPhotos = [
    "/foto_magang_bi/WhatsApp Image 2026-04-08 at 11.17.48.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-09 at 16.28.21.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-09 at 18.14.47.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 08.17.11 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 08.17.11.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 08.17.12 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 08.17.12 (2).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 08.17.12.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.15.02.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.15.03 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.15.03 (2).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.15.03.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.51.41 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.51.41 (2).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-10 at 18.51.41.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-13 at 10.25.58.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-14 at 12.00.17.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-14 at 16.10.06.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-16 at 18.04.49.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.33 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.33.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.34 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.34.jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.35 (1).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.35 (2).jpeg",
    "/foto_magang_bi/WhatsApp Image 2026-04-17 at 08.50.35.jpeg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Motion & Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40">
          <GridMotion items={magangPhotos} gradientColor="#B7B89F20" />
        </div>
        <Particles
          className="absolute inset-0 z-10"
          quantity={150}
          ease={80}
          color="#B7B89F"
          refresh
        />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* True Focus Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <TrueFocus 
            sentence="Q2 LEGACY 2026" 
            blurAmount={2}
            borderColor="#41431B"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        {/* Organic Glassmorphism Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass max-w-2xl mx-auto rounded-3xl p-8 md:p-12"
        >
          <div className="text-xl md:text-2xl font-light mb-4 tracking-tight text-primary">
            <DecryptedText 
              text="Memorial Website Magang Triwulan 2 - 2026" 
              animateOn="view"
              revealDirection="center"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-dark">
            Bank Indonesia Sulawesi Selatan
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-lg mx-auto">
            Sebuah persembahan untuk mengabadikan setiap detik kenangan, tawa, dan kerja keras selama magang
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-lg mx-auto"> di Bank Indonesia.</p> 
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
