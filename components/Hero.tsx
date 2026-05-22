'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Engineer | AI & Scalable Systems';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatingIcons = [
    { icon: '⚛️', delay: 0 },
    { icon: '🔧', delay: 0.2 },
    { icon: '🤖', delay: 0.4 },
    { icon: '☁️', delay: 0.6 },
    { icon: '💾', delay: 0.8 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container text-center z-10"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Rahul Suresh
          </h1>
        </motion.div>

        {/* Typing Effect Tagline */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl sm:text-2xl h-8 text-accent font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Software Developer Intern crafting innovative full-stack solutions. 
            Passionate about AI-driven products, scalable cloud systems, and building 
            technology that solves real-world problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/slimycashcodes"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#10a85f' }}
            className="p-3 rounded-full border border-border hover:border-accent transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/rahulsuresh210"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#10a85f' }}
            className="p-3 rounded-full border border-border hover:border-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:rahul@example.com"
            whileHover={{ scale: 1.2, color: '#10a85f' }}
            className="p-3 rounded-full border border-border hover:border-accent transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/40" />
      </motion.div>
    </section>
  );
}
