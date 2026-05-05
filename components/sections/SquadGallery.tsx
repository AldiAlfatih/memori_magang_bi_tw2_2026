"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TEAM_MEMBERS, DIVISIONS } from "@/src/constants";
import VariableProximity from "@/components/ui/variable-proximity";

export default function SquadGallery() {
  const [selectedDivision, setSelectedDivision] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredMembers = selectedDivision === "All" 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(member => member.division === selectedDivision);

  const carouselItems = filteredMembers.map((member, index) => (
    <Card 
      key={member.id} 
      card={{
        src: member.image,
        title: member.name,
        category: member.division,
        content: <MemberContent member={member} />,
        link: member.instagram,
        quote: member.bio,
      }} 
      index={index} 
    />
  ));

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-foreground">
            <VariableProximity 
              label="The Squad" 
              containerRef={containerRef}
              radius={150}
            />
          </h2>
          <p className="text-accent text-lg md:text-xl font-light">
            Mengenal lebih dekat para pejuang Triwulan 2
          </p>
        </motion.div>

        {/* Division Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {DIVISIONS.map((division) => (
            <button
              key={division}
              onClick={() => setSelectedDivision(division)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 border ${
                selectedDivision === division
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                  : "bg-white/50 text-foreground/60 border-border hover:border-accent hover:text-accent"
              }`}
            >
              {division}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDivision}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-8">
              <Carousel items={carouselItems} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const MemberContent = ({ member }: { member: any }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {member.role}
        </span>{" "}
        — {member.bio}
      </p>
    </div>
  );
};
