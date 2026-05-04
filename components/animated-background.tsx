'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Background image with fade-in */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src="/images/background-image.jpg"
          alt="Cyberpunk cityscape neon aesthetic"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay with gradient for readability */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 backdrop-blur-[0.5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Pulsing overlay gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070f]/20 to-[#05070f]/60"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Scan lines effect - subtle and continuous */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          backgroundPosition: ['0px 0px', '0px 100px'],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0, 232, 245, 0.05) 0px, rgba(0, 232, 245, 0.05) 1px, transparent 1px, transparent 3px)',
          backgroundSize: '100% 3px',
          willChange: 'background-position',
        }}
      />

      {/* Neon accent lines with smooth glow */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {/* Pink vertical line */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-screen"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(to bottom, #ff5aa8, transparent)',
            boxShadow: '0 0 25px rgba(255, 90, 168, 0.7), 0 0 50px rgba(255, 90, 168, 0.3)',
            filter: 'blur(1px)',
            willChange: 'opacity, box-shadow',
          }}
        />

        {/* Cyan vertical line */}
        <motion.div
          className="absolute top-0 right-1/4 w-px h-screen"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(to bottom, #00e8f5, transparent)',
            boxShadow: '0 0 25px rgba(0, 232, 245, 0.7), 0 0 50px rgba(0, 232, 245, 0.3)',
            filter: 'blur(1px)',
            willChange: 'opacity, box-shadow',
          }}
        />
      </motion.div>

      {/* Floating particle effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 20%, #ff5aa8, transparent),
            radial-gradient(2px 2px at 60% 70%, #00e8f5, transparent),
            radial-gradient(1px 1px at 50% 50%, #b855ff, transparent)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          opacity: 0.1,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      />
    </div>
  );
}
