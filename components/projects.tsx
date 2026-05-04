'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ummah Connect',
    description: 'Emotion-based Islamic social media platform focused on women\'s cyber safety. A research-oriented project exploring emotion-aware interactions and safer online environments.',
    tags: ['Next.js', 'Supabase', 'AI/LLMs', 'Security'],
    gradient: 'from-[#ff5aa8] to-[#b855ff]',
    link: 'https://ummah-connect-asr.vercel.app',
    github: '#',
  },
  {
    id: 2,
    title: 'Friendora',
    description: 'Anime-inspired social media platform designed for Gen Z users. Focused on product experience, branding, and real social-media-style workflows with modern design.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind'],
    gradient: 'from-[#00e8f5] to-[#ff5aa8]',
    link: 'https://friendora.atwebpages.com',
    github: '#',
  },
  {
    id: 3,
    title: 'Resources-21',
    description: 'Official website for a medical equipment supplier company. Built as a real-world company project with practical business requirements and constraints.',
    tags: ['Next.js', 'TypeScript', 'E-Commerce', 'SEO'],
    gradient: 'from-[#b855ff] to-[#00e8f5]',
    link: 'https://r21.com.bd',
    github: '#',
  },
  {
    id: 4,
    title: 'LangChain AI Projects',
    description: 'Experimentation with LangChain and LLMs for intelligent application building. Focus on practical AI integration and automation workflows with n8n.',
    tags: ['LangChain', 'LLMs', 'Python', 'n8n'],
    gradient: 'from-[#ff5aa8] to-[#00e8f5]',
    link: '#',
    github: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-[#b855ff]/15 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#ff5aa8] to-[#00e8f5] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-[#8b95b3]">End-to-end systems and complete implementations</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5aa8]/50 via-[#00e8f5]/50 to-[#b855ff]/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card content */}
              <div className="relative bg-[#0f1729]/80 backdrop-blur-sm rounded-xl p-8 border border-[#1f2a42] group-hover:border-[#00e8f5]/50 transition-all">
                {/* Project header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}></div>
                  <h3 className="text-2xl font-bold text-[#e8ecff] mb-2">{project.title}</h3>
                  <p className="text-[#8b95b3] leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#1f2a42] text-[#00e8f5] border border-[#00e8f5]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[#1f2a42]">
                  <motion.a
                    href={project.link}
                    className="flex items-center gap-2 text-[#ff5aa8] hover:text-[#ff5aa8] font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-[#00e8f5] hover:text-[#00e8f5] font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>GitHub</span>
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-[#00e8f5] text-[#00e8f5] font-medium hover:bg-[#00e8f5]/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
