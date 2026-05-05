"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { MENTOR_MESSAGES } from "@/src/constants";
import SpotlightCard from "@/components/ui/spotlight-card";

export default function Guestbook() {
  const firstRow = MENTOR_MESSAGES.slice(0, MENTOR_MESSAGES.length / 2);
  const secondRow = MENTOR_MESSAGES.slice(MENTOR_MESSAGES.length / 2);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-foreground">
            Guestbook
          </h2>
          <p className="text-accent text-lg md:text-xl font-light">
            Untaian kata dan harapan dari para pembimbing
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-white/5 backdrop-blur-sm md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {MENTOR_MESSAGES.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {MENTOR_MESSAGES.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>

        {/* Footer Motif */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center opacity-40"
        >
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-foreground" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-12 h-[1px] bg-foreground" />
          </div>
          <p className="font-display tracking-[0.3em] uppercase text-xs">
            Q2 Legacy — Bank Indonesia Sulsel
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  name,
  role,
  message,
}: {
  name: string;
  role: string;
  message: string;
}) => {
  return (
    <SpotlightCard className="w-64 cursor-pointer p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 border-border/20">
      <blockquote className="text-sm italic text-foreground/80 mb-4 line-clamp-4">
        "{message}"
      </blockquote>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-accent">{role}</p>
        </div>
      </div>
    </SpotlightCard>
  );
};
