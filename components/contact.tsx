'use client';

import React from "react"

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[#00e8f5]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#ff5aa8]/15 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#ff5aa8] via-[#e8ecff] to-[#00e8f5] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-[#8b95b3] max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Email */}
            <motion.div
              className="mb-8 p-6 rounded-xl border border-[#1f2a42] bg-[#0f1729]/50 backdrop-blur-sm hover:border-[#ff5aa8]/50 transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#e8ecff] mb-2">Email</h3>
              <p className="text-[#00e8f5] text-sm">sakhiur.rahman.cse@gmail.com</p>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              className="mb-8 p-6 rounded-xl border border-[#1f2a42] bg-[#0f1729]/50 backdrop-blur-sm hover:border-[#00e8f5]/50 transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00e8f5] to-[#ff5aa8] flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#e8ecff] mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/sakhiur-rahman" target="_blank" rel="noopener noreferrer" className="text-[#ff5aa8] text-sm hover:underline">
                linkedin.com/in/sakhiur-rahman
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="p-6 rounded-xl border border-[#1f2a42] bg-[#0f1729]/50 backdrop-blur-sm hover:border-[#b855ff]/50 transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b855ff] to-[#00e8f5] flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#e8ecff] mb-2">Location</h3>
              <p className="text-[#00e8f5] text-sm">Dhaka, Bangladesh</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-8 rounded-xl border border-[#1f2a42] bg-[#0f1729]/50 backdrop-blur-sm"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#e8ecff] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#050707] border border-[#1f2a42] text-[#e8ecff] placeholder-[#8b95b3] focus:border-[#00e8f5] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#e8ecff] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#050707] border border-[#1f2a42] text-[#e8ecff] placeholder-[#8b95b3] focus:border-[#ff5aa8] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#e8ecff] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#050707] border border-[#1f2a42] text-[#e8ecff] placeholder-[#8b95b3] focus:border-[#b855ff] focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff5aa8] to-[#b855ff] text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Message Sent!
                  </motion.span>
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Social Links Footer */}
        <motion.div variants={itemVariants} className="text-center pt-8 border-t border-[#1f2a42]">
          <p className="text-[#8b95b3] mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'GitHub', url: 'https://github.com/sakhiur' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/sakhiur-rahman' },
              { name: 'Twitter', url: 'https://twitter.com' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e8f5] hover:text-[#ff5aa8] font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
