import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const SurpriseModal = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsGiftOpened(false);
    if (onOpenModal) onOpenModal();
  };

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    
    const colors = ['#ff416c', '#ff4b2b', '#ffd700', '#ffffff', '#ff9a9e', '#00f0ff', '#ff007f'];
    
    // 1. Sparkles and Paper from all 4 corners
    const shootCorner = (x, y, angle) => {
      confetti({
        particleCount: 120, angle: angle, spread: 60,
        origin: { x, y }, startVelocity: 70, colors, zIndex: 200
      });
    };

    // Bottom Left (shoots up-right)
    shootCorner(0, 1, 45); 
    // Bottom Right (shoots up-left)
    shootCorner(1, 1, 135); 
    // Top Left (shoots down-right)
    shootCorner(0, 0, 315); 
    // Top Right (shoots down-left)
    shootCorner(1, 0, 225); 

    // Secondary massive blast from bottom corners + center
    setTimeout(() => {
      shootCorner(0, 1, 55); 
      shootCorner(1, 1, 125); 
      confetti({ particleCount: 250, spread: 360, startVelocity: 60, origin: { x: 0.5, y: 0.5 }, colors, zIndex: 200 });
    }, 400);

    // 2. Firecrackers popping in the back (continuous fireworks)
    const duration = 6000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      
      // Random firecracker explosions all over the screen
      const particleCount = 40 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors,
        shapes: ['circle', 'square']
      });
    }, 250);
  };

  const message = (
    <>
      <span style={{ fontSize: '1.8rem', fontWeight: 'bold', background: 'linear-gradient(to right, #ffd700, #ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Happy Birthday, Sakshi 🤍.....</span><br /><br />
      Sometimes I still can’t believe that a friendship which started with sharing one bench in 2017 became such an important part of my life..... Back then, we were just two girls trying to survive school days..... sharing food, laughing at the dumbest things, gossiping during classes, and creating memories without even realizing how precious they would become one day 🥹..... From sitting together every single day to now living completely different lives..... we truly grew up together..... Life kept separating us little by little — first by sections, then by subjects, and now by responsibilities, routines, and different interests..... but somehow our friendship never changed..... And honestly, having someone like you who stayed through every phase feels like the biggest blessing 🤍.....<br /><br />
      Some of my happiest memories will always have you in them..... I still laugh thinking about our Friendship Day at Puno 😂..... the chaos, the nonstop laughter, and the way we turned simple moments into unforgettable memories..... And our meetups at Govind Devji will forever be special to me..... no matter how busy life got, somehow we always found time for each other there 🫶🏻..... But one memory I can never forget is us playing ping ball with the boy who used to sit between us 😭😂..... We were so unserious back then..... and maybe that’s what made everything so beautiful..... We never realized that one day we would miss those silly school moments this much.....<br /><br />
      Sakshi..... you are not just my best friend..... you are literally a part of my childhood, my comfort place, and one of the purest people in my life 🥹🤍..... You have seen every version of me — the immature one, the emotional one, the happiest one, and even the broken one..... and somehow you stayed through all of it..... Even when we stopped talking every single day like before, our bond never felt distant..... No matter how much time passes or how different our lives become..... talking to you still feels like home.....<br /><br />
      On your birthday..... I just want to thank you for existing in my life 🤍..... Thank you for every laugh, every memory, every inside joke, and every moment that made my life brighter..... I pray that life gives you endless happiness, peace, success, and all the love you deserve..... And even if someday life takes us to completely different places..... one thing I know for sure is that our friendship will always remain special, irreplaceable, and forever..... Happy Birthday to my forever person..... No matter what changes..... it will always be us 🤍.....<br /><br />
      <span style={{ fontStyle: 'italic', color: '#ffd700', fontSize: '1.2rem' }}>Always and Forever<br />
      love, siddhi</span>
    </>
  );

  return (
    <section style={{ textAlign: 'center', paddingBottom: '4rem' }}>
      <motion.button 
        className="neon-btn"
        onClick={handleOpen}
        whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255, 65, 108, 0.8)' }}
        whileTap={{ scale: 0.95 }}
      >
        Open Your Surprise 🎁
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(5, 0, 10, 0.95)', backdropFilter: 'blur(30px)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100
            }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          >
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              
              {/* Box Body (Premium CSS) */}
              <motion.div
                style={{
                  width: '180px', height: '160px', 
                  background: 'linear-gradient(135deg, #ff4b2b, #c31432)', 
                  borderRadius: '0 0 15px 15px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'absolute', zIndex: 10,
                  boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.6), 0 20px 50px rgba(0,0,0,0.5)', 
                  display: 'flex', justifyContent: 'center'
                }}
                initial={{ y: 30, opacity: 1 }}
                animate={isGiftOpened ? { y: 600, opacity: 0 } : { y: 30, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                 {/* Gold Ribbon Body */}
                 <div style={{ width: '40px', height: '100%', background: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7)', boxShadow: '0 0 15px rgba(252, 246, 186, 0.3)' }}></div>
              </motion.div>

              {/* The Glowing Message */}
              <AnimatePresence>
                {isGiftOpened && (
                  <motion.div 
                    key="message"
                    style={{ 
                      padding: '3rem', maxWidth: '850px', width: '90%', maxHeight: '85vh', overflowY: 'auto',
                      textAlign: 'left', fontSize: '1.2rem', lineHeight: '2', 
                      background: 'linear-gradient(145deg, rgba(30, 15, 20, 0.9), rgba(15, 5, 10, 0.95))',
                      border: '1px solid rgba(255, 65, 108, 0.3)',
                      borderRadius: '20px',
                      boxShadow: '0 0 50px rgba(255, 65, 108, 0.2), inset 0 0 30px rgba(255, 215, 0, 0.05)',
                      position: 'absolute', zIndex: 15
                    }}
                    initial={{ scale: 0, y: 50, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, y: 0, opacity: 1, rotateY: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
                  >
                    <div style={{ paddingRight: '1rem', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{message}</div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                      <motion.button 
                        style={{
                          background: 'linear-gradient(45deg, #ff416c, #ff4b2b)', color: 'white',
                          border: 'none', padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '50px',
                          cursor: 'pointer', boxShadow: '0 10px 20px rgba(255, 65, 108, 0.4)'
                        }}
                        onClick={() => setIsOpen(false)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Box Lid (Premium CSS) */}
              <motion.div
                style={{
                  width: '200px', height: '60px', 
                  background: 'linear-gradient(to bottom, #ff758c, #ff4b2b)', 
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.4)',
                  position: 'absolute', zIndex: 20, cursor: isGiftOpened ? 'default' : 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6), inset 0 5px 15px rgba(255,255,255,0.3)', 
                  display: 'flex', justifyContent: 'center'
                }}
                initial={{ y: -65 }}
                animate={isGiftOpened ? { y: -600, opacity: 0, rotate: -35, scale: 1.3 } : { y: -65, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onClick={!isGiftOpened ? handleOpenGift : undefined}
                whileHover={!isGiftOpened ? { scale: 1.05, y: -70 } : {}}
              >
                {/* Gold Ribbon Lid */}
                <div style={{ width: '40px', height: '100%', background: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7)', boxShadow: '0 0 15px rgba(252, 246, 186, 0.5)' }}></div>
                
                {/* Premium Bow */}
                <div style={{ position: 'absolute', top: '-55px', fontSize: '4.5rem', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))' }}>🎀</div>
                
                {!isGiftOpened && (
                  <motion.div 
                    style={{ position: 'absolute', top: '-110px', width: '300px', textAlign: 'center' }}
                    animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <h3 style={{ color: '#ffd700', textShadow: '0 0 20px #ffd700, 0 5px 10px rgba(0,0,0,0.8)', fontSize: '1.8rem', margin: 0, fontFamily: 'cursive' }}>
                      Tap to Unbox Magic ✨
                    </h3>
                  </motion.div>
                )}
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SurpriseModal;
