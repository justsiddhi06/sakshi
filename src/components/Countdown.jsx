import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    // Set to 7 days from now as a default
    const bdayDate = new Date();
    bdayDate.setDate(bdayDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = bdayDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        mins: minutes.toString().padStart(2, '0'),
        secs: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <h2 className="section-title">Time Until Celebration</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Object.entries(timeLeft).map(([label, val], idx) => (
          <motion.div
            key={label}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '120px',
              border: '1px solid var(--secondary-glow)',
              boxShadow: '0 0 20px rgba(32, 224, 224, 0.2)'
            }}
            variants={timeBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(32, 224, 224, 0.5)' }}
          >
            <span className="neon-text" style={{ fontSize: '3rem', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 10px #fff, 0 0 20px var(--secondary-glow)' }}>
              {val}
            </span>
            <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>
              {label === 'mins' ? 'Minutes' : label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
