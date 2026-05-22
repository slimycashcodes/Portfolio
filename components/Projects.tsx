'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, TrendingUp, Users, MapPin } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      id: 1,
      title: 'Rooftop Rainwater Harvesting & Aquifer Recharge System',
      role: 'Team Leader',
      date: 'Apr 2025',
      description:
        'Full-stack web application leveraging geolocation and environmental analysis to optimize rainwater harvesting and aquifer recharge systems.',
      impact:
        'Selected for Smart India Hackathon 2025 Grand Finale - demonstrating scalability and real-world product quality.',
      features: [
        'GIS-based location analysis',
        'Environmental impact dashboard',
        'Water resource monitoring',
        'Real-time analytics',
        'User-centric design',
        'Scalable cloud architecture',
      ],
      tech: [
        'React.js',
        'Node.js',
        'PostgreSQL',
        'AWS',
        'Leaflet Maps',
        'Machine Learning',
      ],
      metrics: [
        { label: 'Finalist Teams', value: '1 of 500+' },
        { label: 'Active Users', value: '5K+' },
        { label: 'Data Points', value: '10K+' },
      ],
      highlights: [
        'Full-stack environmental application',
        'Geospatial data analysis',
        'Customer-focused UX',
        'Production-grade scalability',
      ],
      color: 'from-emerald-400/20 to-cyan-400/20',
      borderColor: 'border-emerald-400/30',
    },
    {
      id: 2,
      title: 'MarketMind – Market Intelligence Platform',
      role: 'Developer',
      date: 'Jan 2026',
      description:
        'B2B SaaS platform providing real-time market intelligence, business signal analysis, and competitive insights for enterprises.',
      impact:
        'Engineered REST APIs, cloud deployment, and sprint-driven development with automated testing and code review processes.',
      features: [
        'Real-time signal analysis',
        'SaaS analytics dashboard',
        'Business KPI tracking',
        'API-driven architecture',
        'Automated testing pipelines',
        'Code review workflows',
      ],
      tech: [
        'React.js',
        'Spring Boot',
        'MongoDB',
        'AWS Lambda',
        'Recharts',
        'Docker',
      ],
      metrics: [
        { label: 'API Requests/sec', value: '10K+' },
        { label: 'Data Sources', value: '50+' },
        { label: 'Enterprise Clients', value: '20+' },
      ],
      highlights: [
        'Enterprise SaaS platform',
        'Real-time data processing',
        'CI/CD automation',
        'Scalable microservices',
      ],
      color: 'from-cyan-400/20 to-blue-400/20',
      borderColor: 'border-cyan-400/30',
    },
    {
      id: 3,
      title: 'NeuroCognitive AdX – Multimodal Neuromarketing Intelligence',
      role: 'Model Training Lead',
      date: 'Dec 2025',
      description:
        'AI-powered platform integrating EEG, eye-tracking, and facial expression analysis for behavioral insights and customer analytics.',
      impact:
        'Led machine learning model development for predictive customer behavior analysis with real-time neural signal processing.',
      features: [
        'Multimodal ML pipeline',
        'EEG signal processing',
        'Eye-tracking analysis',
        'Facial emotion detection',
        'Behavior prediction',
        'Real-time dashboards',
      ],
      tech: [
        'Python',
        'TensorFlow',
        'React.js',
        'Node.js',
        'AWS ML',
        'WebSocket',
      ],
      metrics: [
        { label: 'Model Accuracy', value: '94%' },
        { label: 'Signals/sec', value: '1K+' },
        { label: 'Features Extracted', value: '100+' },
      ],
      highlights: [
        'Cutting-edge AI/ML implementation',
        'Multimodal data fusion',
        'Real-time neural processing',
        'Behavioral analytics',
      ],
      color: 'from-purple-400/20 to-pink-400/20',
      borderColor: 'border-purple-400/30',
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
    <section id="projects" ref={ref} className="py-20 bg-secondary/20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded" />
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group p-8 rounded-2xl border-2 ${project.borderColor} bg-gradient-to-br ${project.color} transition-all duration-300 hover:border-accent/50`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">
                          {project.role}
                        </span>
                        <span className="text-foreground/60">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Impact Highlight */}
                <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground/80">{project.impact}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground/60 mb-3">
                    Key Features
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="mb-6 grid sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-lg bg-card border border-border"
                    >
                      <p className="text-sm text-foreground/60 mb-1">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground/60 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-sm rounded-full bg-card border border-accent/30 text-foreground/80 hover:border-accent/60 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-foreground/60 mb-3">
                    Project Highlights
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-foreground/70"
                      >
                        <span className="text-accent">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
