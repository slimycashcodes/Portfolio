'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      
      const totalScroll = documentHeight - windowHeight;
      const scrollPercent = (scrolled / totalScroll) * 100;
      
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent via-emerald-400 to-cyan-400 origin-left z-40"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.2 }}
    />
  );
}
