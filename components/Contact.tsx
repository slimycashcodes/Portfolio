'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahul@example.com',
      href: 'mailto:rahul@example.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'slimycashcodes',
      href: 'https://github.com/slimycashcodes',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rahulsuresh210',
      href: 'https://linkedin.com/in/rahulsuresh210',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-secondary/20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded mx-auto mb-4" />
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you&apos;d like to collaborate!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              </div>

              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:bg-gradient-to-r hover:from-accent/10 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-accent/20 border border-accent/30 group-hover:border-accent/60 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{link.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-accent ml-auto transition-colors" />
                  </motion.a>
                );
              })}

              {/* Availability */}
              <motion.div className="mt-8 p-6 rounded-2xl bg-accent/20 border border-accent/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <p className="font-semibold text-accent">Currently Available</p>
                </div>
                <p className="text-foreground/70">
                  Open to internships, full-time roles, and exciting projects. 
                  Let&apos;s build something amazing together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-foreground/70">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-foreground/40"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-foreground/40"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-foreground/40 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
