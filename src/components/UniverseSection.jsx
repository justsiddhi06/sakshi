import React from 'react';

const UniverseSection = () => {
  return (
    <section>
      <h2 className="section-title">You Mean The Universe To Me</h2>
      <div className="orbit-container">
        <div className="center-heart" style={{ 
          width: '120px', height: '120px', 
          borderRadius: '50%', overflow: 'hidden', 
          animation: 'heartbeat 1.5s infinite', 
          boxShadow: '0 0 30px var(--primary-glow)', 
          zIndex: 5,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <img src="/assets/Snapchat-1360584719.jpg" alt="Center" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'rotate(-90deg) scale(1.5)' }} />
        </div>
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
