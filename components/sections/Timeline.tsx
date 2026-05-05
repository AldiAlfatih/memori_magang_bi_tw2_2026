"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    month: "April",
    title: "Orientasi & Onboarding",
    description: "Mengenal lingkungan kerja Bank Indonesia dan tim mentor.",
  },
  {
    month: "Mei",
    title: "Deep Dive Projects",
    description: "Mulai berkontribusi dalam proyek strategis divisi masing-masing.",
  },
  {
    month: "Juni",
    title: "Q2 Legacy Finalization",
    description: "Momen puncak pengumpulan data dan pembuatan memorial website ini.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-foreground">
            Our Journey
          </h2>
          <p className="text-accent text-lg font-light">
            Kilas balik perjalanan magang Triwulan 2
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent/20" />

          {timelineData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full md:w-auto px-4">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl"
                >
                  <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">
                    {item.month}
                  </span>
                  <h3 className="text-2xl font-display mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center my-6 md:my-0 shadow-lg shadow-accent/20">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
