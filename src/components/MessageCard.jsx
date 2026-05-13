import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MessageCard = () => {
  const fullMessage = "Who knew that a random bench partner in 2017 would become the anchor of my life? Through every changing season, every breakdown, and every triumph, you've been my unwavering constant. You're the one person who truly understands my silence and my chaos. Thank you for making my world brighter just by being in it. Cheers to endless more core memories together! Happy Birthday, Sakshi! 🌸✨🤍";
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const hasTyped = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasTyped.current) {
      hasTyped.current = true;
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullMessage.substring(0, i + 1));
        i++;
        if (i >= fullMessage.length) {
          clearInterval(interval);
        }
      }, 8);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <motion.div 
        ref={ref}
        className="glass-panel"
        style={{ padding: '3rem' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="neon-text-small">To My Star,</h2>
        <div style={{ fontSize: '1.2rem', lineHeight: 1.8, minHeight: '150px' }}>
          {displayedText}
          <span className="cursor">|</span>
        </div>
      </motion.div>
    </section>
  );
};

export default MessageCard;
