"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { GALLERY_MOMENTS, GALLERY_FILTERS } from "@/src/constants";
import Magnetic from "@/components/ui/magnetic";

export default function MomentGallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredMoments = selectedFilter === "All"
    ? GALLERY_MOMENTS
    : GALLERY_MOMENTS.filter(moment => 
        moment.division === selectedFilter || 
        moment.category === selectedFilter
      );

  const initialLimit = 6;
  const displayMoments = showAll ? filteredMoments : filteredMoments.slice(0, initialLimit);

  const cards = displayMoments.map((moment) => ({
    id: moment.id,
    content: <MomentContent moment={moment} />,
    className: "col-span-1",
    thumbnail: moment.image,
  }));

  return (
    <section className="py-24 bg-background">
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
            Moment Gallery
          </h2>
          <p className="text-accent text-lg md:text-xl font-light">
            Setiap sudut cerita yang tak terlupakan
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {GALLERY_FILTERS.map((filter) => (
            <Magnetic key={filter} strength={0.2}>
              <button
                onClick={() => {
                  setSelectedFilter(filter);
                  setShowAll(false);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-500 border ${
                  selectedFilter === filter
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "bg-white/50 text-foreground/60 border-border hover:border-accent hover:text-accent"
                }`}
              >
                {filter}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Layout Grid */}
        <div className={`${showAll ? 'h-[180vh]' : 'h-[50vh]'} w-full transition-all duration-700`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedFilter}-${showAll}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              {displayMoments.length > 0 ? (
                <LayoutGrid cards={cards} />
              ) : (
                <div className="flex items-center justify-center h-full text-foreground/40 italic">
                  Belum ada momen untuk divisi ini...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {!showAll && filteredMoments.length > initialLimit && (
          <div className="flex justify-center mt-12">
            <Magnetic strength={0.2}>
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 rounded-full bg-accent text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20"
              >
                Lihat Lebih Banyak
              </button>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}

const MomentContent = ({ moment }: { moment: any }) => {
  return (
    <div className="p-4">
      <span className="inline-block px-3 py-1 rounded-full bg-accent text-[10px] font-bold text-white uppercase tracking-widest">
        {moment.category}
      </span>
    </div>
  );
};
