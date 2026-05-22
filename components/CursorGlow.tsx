'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none w-8 h-8 rounded-full bg-gradient-to-r from-accent/40 to-emerald-400/40 blur-xl"
          animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      )}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none w-2 h-2 rounded-full bg-accent"
          animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
