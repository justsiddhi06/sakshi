import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ isPlaying, onToggleMusic }) => {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
      textAlign: 'center'
    }}>
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          animation: 'pulse 2s infinite alternate'
        }}
      >
        Happy Birthday Sakshi ✨
      </motion.h1>
    </section>
  );
};

export default Hero;
