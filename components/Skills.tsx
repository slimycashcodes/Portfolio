'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'Java', proficiency: 80 },
        { name: 'C++', proficiency: 75 },
        { name: 'SQL', proficiency: 85 },
        { name: 'HTML/CSS', proficiency: 90 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', proficiency: 88 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Vue.js', proficiency: 75 },
        { name: 'Framer Motion', proficiency: 80 },
        { name: 'Next.js', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', proficiency: 82 },
        { name: 'REST APIs', proficiency: 85 },
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express.js', proficiency: 78 },
        { name: 'Python Flask', proficiency: 75 },
        { name: 'Microservices', proficiency: 75 },
      ],
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', proficiency: 82 },
        { name: 'MySQL', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 80 },
        { name: 'AWS', proficiency: 78 },
        { name: 'Git/GitHub', proficiency: 88 },
        { name: 'Docker', proficiency: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillCard = ({ skill, index }: { skill: { name: string; proficiency: number }; index: number }) => (
    <motion.div
      key={skill.name}
      variants={itemVariants}
      custom={index}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-foreground/60">{skill.proficiency}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-emerald-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <h3 className="text-2xl font-bold text-accent mb-8">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <SkillCard key={skill.name} skill={skill} index={idx} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Software Engineering Concepts</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Object-Oriented Programming',
                'Design Patterns',
                'SOLID Principles',
                'RESTful Architecture',
                'System Design',
                'Agile/Scrum',
                'CI/CD Pipelines',
                'Testing & Debugging',
                'Code Review',
                'Version Control',
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-emerald-400/20 border border-accent/50 text-accent font-medium cursor-pointer hover:border-accent transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
