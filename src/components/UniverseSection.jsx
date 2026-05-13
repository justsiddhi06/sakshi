import React from 'react';
import { motion } from 'framer-motion';

const UniverseSection = () => {
  return (
    <section>
      <h2 className="section-title">You Mean The Universe To Me</h2>
      <div className="orbit-container">
        <motion.div 
          style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 50px var(--primary-glow)', position: 'relative', zIndex: 10, background: '#000' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={`${import.meta.env.BASE_URL}assets/Snapchat-1360584719.jpg`} alt="Center" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'rotate(-90deg) scale(1.5)' }} />
        </motion.div>
        <div className="orbit" style={{ width: '200px', height: '200px', animationDuration: '10s' }}>
          <div className="orbit-card" style={{ animation: 'counter-spin 10s linear infinite' }}>Joy</div>
        </div>
        <div className="orbit" style={{ width: '300px', height: '300px', animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className="orbit-card" style={{ animation: 'counter-spin-reverse 15s linear infinite' }}>Peace</div>
        </div>
        <div className="orbit" style={{ width: '400px', height: '400px', animationDuration: '20s' }}>
          <div className="orbit-card" style={{ animation: 'counter-spin 20s linear infinite' }}>Love</div>
        </div>
      </div>
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default UniverseSection;
