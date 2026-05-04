'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const skills = [
  {
    icon: Code2,
    title: 'End-to-End Systems',
    description: 'Building complete projects from conception to deployment. I focus on understanding system behavior in practice through hands-on experimentation.',
  },
  {
    icon: Zap,
    title: 'AI & LLM Integration',
    description: 'Leveraging LangChain and modern AI tools to build intelligent, adaptive applications. Project-based experimentation with real-world implementations.',
  },
  {
    icon: Target,
    title: 'Fundamentals First',
    description: 'Strong grasp of computer architecture, assembly language, and database design. Engineering practices grounded in foundational knowledge.',
  },
];

export function About() {
  return (
    <section id="about" className="relative w-full py-20 px-6 overflow-hidden">
        {/* Background effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-[#ff5aa8]/15 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00e8f5] to-[#ff5aa8] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-[#e8ecff]/80 leading-relaxed">
            I'm a final-year CSE student passionate about building complete systems end-to-end. I learn best by experimenting fast, breaking things, and refining my understanding through hands-on work. My focus is on understanding how systems behave in practice—not just making features work. With expertise in Next.js, Supabase, AI/LLMs, and systems fundamentals, I build projects that matter.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-xl border border-[#2d3a5c] bg-gradient-to-br from-[#1a1f3a]/50 to-[#0f1424]/50 backdrop-blur-sm hover:border-[#ff006e]/50 transition-all"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] flex items-center justify-center">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#e8ecff] mb-3">{skill.title}</h3>
                <p className="text-[#8b95b3]">{skill.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="p-8 rounded-xl border border-[#1f2a42] bg-[#0f1729]/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-[#e8ecff] mb-6">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'LangChain', 'n8n'].map((tech) => (
              <motion.div
                key={tech}
                className="px-4 py-3 rounded-lg border border-[#00e8f5]/30 bg-[#00e8f5]/5 text-[#00e8f5] text-center text-sm font-medium hover:bg-[#00e8f5]/15 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
