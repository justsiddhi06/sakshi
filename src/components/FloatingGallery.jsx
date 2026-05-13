import React from 'react';
import { motion } from 'framer-motion';

const baseUrl = import.meta.env.BASE_URL;
const images = [
  { src: `${baseUrl}assets/media__1778652276600.jpg`, rotate: 0 },
  { src: `${baseUrl}assets/media__1778652293196.jpg`, rotate: 0 },
  { src: `${baseUrl}assets/Snapchat-1863478550.jpg`, rotate: -90, scale: 1.7, shiftX: 20 },
  { src: `${baseUrl}assets/Snapchat-792192220.jpg`, rotate: -90, scale: 1.8, shiftX: 30 }
];

const FloatingGallery = () => {
  return (
    <section>
      <h2 className="section-title">Floating Memories</h2>
      <div className="gallery-container">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-item glass-panel"
            style={{
              width: '250px',
              height: '350px',
              overflow: 'hidden',
              background: '#111',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 2 }
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              boxShadow: '0 0 30px var(--primary-glow)',
              borderColor: 'var(--primary-glow)',
              zIndex: 10
            }}
          >
            <motion.img 
              src={img.src} 
              alt={`Memory ${idx + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              initial={{ rotate: img.rotate, scale: img.scale || 1, x: img.shiftX || 0 }}
              whileHover={{ scale: (img.scale || 1) * 1.1, x: img.shiftX || 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingGallery;
