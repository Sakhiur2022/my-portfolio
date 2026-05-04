'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 pb-20">
        {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#ff5aa8]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#00e8f5]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-[#b855ff]/10 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div
          variants={floatingVariants}
          className="mb-10 flex justify-center"
        >
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-[#ff5aa8] shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(255, 90, 168, 0.6), inset 0 0 40px rgba(0, 232, 245, 0.1)',
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(255, 90, 168, 0.6), inset 0 0 40px rgba(0, 232, 245, 0.1)',
                '0 0 60px rgba(255, 90, 168, 0.8), inset 0 0 40px rgba(0, 232, 245, 0.2)',
                '0 0 40px rgba(255, 90, 168, 0.6), inset 0 0 40px rgba(0, 232, 245, 0.1)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <motion.img
              src="/images/profile.jpg"
              alt="Sakhiur Rahman"
              className="w-full h-full object-cover brightness-85 contrast-110"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Subtle neon tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5aa8]/10 via-transparent to-[#00e8f5]/10 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={floatingVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-[#00e8f5]/30 bg-[#00e8f5]/10 text-[#00e8f5] text-sm font-medium">
            Welcome to my digital realm
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ff5aa8] via-[#e8ecff] to-[#00e8f5] bg-clip-text text-transparent"
        >
          Sakhiur Rahman
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#00e8f5] mb-4 font-light">
          Full-Stack Web Developer & AI Systems Builder
        </motion.p>

        {/* Location */}
        <motion.p variants={itemVariants} className="text-lg text-[#8b95b3] mb-8">
          CSE Student | Based in <span className="text-[#ff5aa8] font-semibold">Bangladesh</span>
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-[#e8ecff]/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          End-to-end systems builder specializing in Next.js, Supabase, and AI/LLM integration. I focus on understanding how systems work in practice—building complete projects, breaking things, and refining through hands-on experimentation.
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-sm text-[#8b95b3] mb-4 uppercase tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'LLMs', 'n8n'].map((tech, idx) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-lg border border-[#ff5aa8]/30 bg-[#ff5aa8]/5 text-[#ff5aa8] text-sm font-medium hover:bg-[#ff5aa8]/15 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          <motion.a
            href="https://github.com/sakhiur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#00e8f5]/50 bg-[#00e8f5]/15 text-[#00e8f5] neon-glow-blue hover:bg-[#00e8f5]/25 transition-all"
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 232, 245, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sakhiur-rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#ff5aa8]/50 bg-[#ff5aa8]/15 text-[#ff5aa8] neon-glow-pink hover:bg-[#ff5aa8]/25 transition-all"
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 90, 168, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] text-white font-semibold hover:shadow-lg transition-all neon-glow-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="text-[#00d9ff] opacity-60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
