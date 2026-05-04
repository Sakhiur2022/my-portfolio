'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-black/30 backdrop-blur-sm border-t border-[#1f2a42]/50 py-8 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <span className="text-xl font-bold bg-gradient-to-r from-[#ff5aa8] to-[#00e8f5] bg-clip-text text-transparent">
              Sakhiur Rahman
            </span>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b95b3]">
            <a href="#" className="hover:text-[#00e8f5] transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-[#ff5aa8] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#b855ff] transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#8b95b3]">
            © {currentYear} Sakhiur Rahman. All rights reserved.
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ff5aa8]/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <p className="text-center text-xs text-[#1f2a42] mt-6">
          Built with Next.js, React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
