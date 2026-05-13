import React, { useState, useRef, useEffect } from 'react';
import AntiGravityBackground from './components/AntiGravityBackground';
import Hero from './components/Hero';
import FloatingGallery from './components/FloatingGallery';
import MessageCard from './components/MessageCard';
import UniverseSection from './components/UniverseSection';
import SurpriseModal from './components/SurpriseModal';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("Autoplay prevented. Waiting for interaction.");
        });
      }
    };
    
    // Attempt auto-play
    playAudio();

    // Play on first interaction if autoplay failed
    document.addEventListener("click", playAudio, { once: true });
    
    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [isPlaying]);

  const ensureMusicPlaying = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={`${import.meta.env.BASE_URL}assets/hbd.mp3`}
        loop
      />
      
      <AntiGravityBackground />
      
      <main style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        gap: '15vh'
      }}>
        <Hero />
        
        <FloatingGallery />
        
        <MessageCard />
        
        <UniverseSection />
        
        <SurpriseModal onOpenModal={ensureMusicPlaying} />
      </main>
    </>
  );
}

export default App;
