"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
  onClick?: () => void;
}

export default function VariableProximity({
  label,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 900",
  containerRef,
  radius = 200,
  falloff = "linear",
  className,
  onClick,
}: VariableProximityProps) {
  const words = useMemo(() => label.split(" "), [label]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    letterRefs.current.forEach((letter) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(mouseX - letterX, 2) + Math.pow(mouseY - letterY, 2)
      );

      if (distance < radius) {
        const proximity = 1 - distance / radius;
        // This is a simplified version, real variable fonts need specific settings
        letter.style.fontWeight = `${400 + proximity * 500}`;
      } else {
        letter.style.fontWeight = "400";
      }
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn("inline-block cursor-default", className)}
      onClick={onClick}
    >
      {label.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (letterRefs.current[index] = el)}
          className="inline-block transition-all duration-200 ease-out"
          style={{ fontVariationSettings: fromFontVariationSettings }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
