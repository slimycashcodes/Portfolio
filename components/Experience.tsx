'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Code, Users } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      organization: 'SSN Coding Club',
      role: 'Core Committee Member',
      period: 'Ongoing',
      description: 'Leading technical initiatives and mentoring community members',
      highlights: [
        'Open-source project development and contributions',
        'Full-stack engineering workshops and tutorials',
        'Community mentorship and technical guidance',
        'Event organization and technical talks',
      ],
      icon: Code,
      color: 'from-emerald-400/20 to-cyan-400/20',
      borderColor: 'border-emerald-400/30',
    },
    {
      organization: 'Computer Society of India (CSI)',
      role: 'Technical Team Member – Software Development',
      period: 'Ongoing',
      description: 'Contributing to software development and event management systems',
      highlights: [
        'Event management system development and deployment',
        'Debugging, testing, and code review processes',
        'CI/CD pipeline setup and optimization',
        'Technical documentation and best practices',
      ],
      icon: Users,
      color: 'from-cyan-400/20 to-blue-400/20',
      borderColor: 'border-cyan-400/30',
    },
  ];

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
    <section id="experience" ref={ref} className="py-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Leadership & Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent rounded" />

                  {/* Content */}
                  <div className={`ml-8 p-8 rounded-2xl border-2 ${exp.borderColor} bg-gradient-to-br ${exp.color} transition-all duration-300 hover:border-accent/50`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-accent/20 border border-accent/30">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">
                          {exp.organization}
                        </h3>
                        <p className="text-accent font-semibold mb-2">
                          {exp.role}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground/60">
                        Key Contributions
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-foreground/70"
                          >
                            <span className="text-accent text-lg leading-none mt-0.5">
                              →
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 p-8 rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">
                  Technical Leadership
                </h4>
                <p className="text-foreground/70">
                  Team lead for Smart India Hackathon finalist project with focus 
                  on scalability, product quality, and team collaboration.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">
                  Community Impact
                </h4>
                <p className="text-foreground/70">
                  Active contributor to open-source initiatives and mentor to 
                  aspiring developers in the CSE community.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">
                  Engineering Excellence
                </h4>
                <p className="text-foreground/70">
                  Advocate for clean code, best practices, and continuous 
                  improvement through code reviews and documentation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
