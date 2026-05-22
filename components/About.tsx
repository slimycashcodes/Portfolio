'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">
                  Computer Science Engineering Student
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  At SSN College of Engineering, I&apos;m pursuing my passion for building 
                  innovative technology solutions. With a CGPA of 8.5, I&apos;ve built a strong 
                  foundation in Computer Science fundamentals while actively engaging in 
                  real-world project development.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">
                  My Focus Areas
                </h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Scalable systems architecture and distributed systems design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>AI/ML integration in full-stack applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Cloud platforms and infrastructure development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>Product-focused development with user-centric design</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">
                  What Drives Me
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  I&apos;m driven by problem-solving and the opportunity to build products 
                  that make a real impact. I believe in writing clean, maintainable code 
                  and collaborating effectively with teams to deliver scalable solutions 
                  that drive business value.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Education Card */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/50 transition-colors"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-accent mb-2">SSN College</h3>
                  <p className="text-foreground/60">of Engineering</p>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <p className="text-sm text-foreground/60 mb-2">Degree</p>
                    <p className="text-xl font-semibold">B.E. in Computer Science Engineering</p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <p className="text-sm text-foreground/60 mb-2">CGPA</p>
                    <div className="flex items-center gap-3">
                      <p className="text-3xl font-bold text-accent">8.5</p>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-emerald-400"
                          initial={{ width: 0 }}
                          animate={inView ? { width: '85%' } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/60 mb-3">Key Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures',
                        'Algorithms',
                        'DBMS',
                        'OOP',
                        'Web Development',
                        'Cloud Computing',
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent border border-accent/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
