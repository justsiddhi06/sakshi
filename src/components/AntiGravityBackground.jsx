import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const objects = ['✨', '🌸', '🍃', '🦋', '💖', '🌼', '⭐'];
const numObjects = 25; // Reduced object count for better performance

const AntiGravityBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: numObjects }).map((_, i) => ({
      id: i,
      char: objects[Math.floor(Math.random() * objects.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 6, // Slower, smoother animation
      delay: Math.random() * 5,
      size: 0.5 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: -1, pointerEvents: 'none', overflow: 'hidden', willChange: 'transform'
    }}>
      {/* Background Image Layer */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'url("/assets/nature_bg.png") center/cover no-repeat',
        opacity: 0.4, zIndex: -2, filter: 'blur(3px)', willChange: 'opacity'
      }}></div>

      {/* Floating Particles Layer */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: p.delay },
            rotate: { duration: p.duration * 1.5, repeat: Infinity, ease: "linear" }
          }}
          style={{
            position: 'absolute',
            left: `${p.left}vw`,
            top: `${p.top}vh`,
            fontSize: `${p.size * 2}rem`,
            opacity: p.opacity,
            willChange: 'transform' // Force hardware acceleration
          }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
};

export default AntiGravityBackground;
