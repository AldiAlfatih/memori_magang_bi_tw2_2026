"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './grid-motion.css';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);

  // Double the items for seamless looping
  // Double the items for seamless looping and shuffle them for random placement
  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const baseItems = items.length > 0 ? [...items].sort(() => Math.random() - 0.5).slice(0, totalItems) : defaultItems;
  
  // We'll render 4 rows, each with 7 unique items, but doubled to 14 for looping
  const rows = [
    baseItems.slice(0, 7),
    baseItems.slice(7, 14),
    baseItems.slice(14, 21),
    baseItems.slice(21, 28)
  ].map(rowItems => [...rowItems, ...rowItems]);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];
      
      // Linear continuous drift
      const speed = 0.5; // Constant speed
      const autoDrift = (gsap.ticker.time * 50);

      rowRefs.current.forEach((row, index) => {
        if (row) {
          // Row 1 (index 0) Left (-1), Row 2 (index 1) Right (1), etc.
          const direction = index % 2 === 0 ? -1 : 1;
          const mouseMoveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2);
          
          // Loop logic: width of 7 items. 
          // Since it's doubled, we wrap after 7 items.
          const rowWidth = row.offsetWidth / 2;
          
          if (rowWidth <= 0) return;

          const totalMove = (mouseMoveAmount + autoDrift) * direction;
          
          // Use gsap.utils.wrap to handle seamless looping in both directions
          const wrappedMove = gsap.utils.wrap(-rowWidth, 0, totalMove);

          gsap.set(row, {
            x: wrappedMove,
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div className="gridMotion-container">
          {rows.map((rowItems, rowIndex) => (
            <div key={rowIndex} className="row" ref={el => { rowRefs.current[rowIndex] = el; }}>
              {rowItems.map((content, itemIndex) => {
                const isImage = typeof content === 'string' && (content.startsWith('http') || content.startsWith('/') || content.includes('.jpg') || content.includes('.jpeg') || content.includes('.png'));
                
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                      {isImage ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url("${encodeURI(content as string)}")`
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
