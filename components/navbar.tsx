'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#1f2a42]/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-[#ff5aa8] to-[#00e8f5] bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          SR
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[#e8ecff] hover:text-[#00e8f5] transition-colors relative group"
              whileHover={{ x: 2 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff5aa8] to-[#00e8f5] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] text-white font-medium hover:shadow-lg transition-all neon-glow-pink"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00e8f5] hover:text-[#ff5aa8] transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-background border-t border-[#1f2a42]/50"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#e8ecff] hover:text-[#00e8f5] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] text-white font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
