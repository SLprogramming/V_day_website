import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lock from './components/Lock'
import ClickSpark from './components/ClickSpark'
import MainPage from './MainPage'
import Loading from './components/Loading'

const App = () => {
  // phases: 'lock' | 'loading' | 'unlocked'
  const [phase, setPhase] = useState('lock'); // Default back to lock for security

  // Framer Motion Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let expiredIn = localStorage.getItem('expiredIn');
    if (expiredIn && Date.now() < parseInt(expiredIn)) {
      setPhase('unlocked');
    }
  }, [])

  const handleUnlock = async () => {
    setPhase('loading');
    
    // Wait for the loading animation (3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    setPhase('unlocked');
    localStorage.setItem('expiredIn', Date.now() + 5 * 60 * 1000); 
  }

  return (
    <ClickSpark
      sparkColor='#BDE0FE'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative min-h-screen w-full bg-[#F8F0FB] overflow-hidden">
        
        {/* 1. TOP PROGRESS BAR - Only visible when unlocked */}
        {phase === 'unlocked' && (
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
            style={{ 
              scaleX, 
              background: 'linear-gradient(to right, var(--secondary-accent), var(--primary-accent))',
              boxShadow: '0 2px 10px rgba(255, 133, 161, 0.3)'
            }}
          />
        )}

        {/* LOCK SCREEN */}
        {phase === 'lock' && (
          <div className="animate-in fade-in duration-700">
            <Lock onUnlockSuccess={handleUnlock} />
          </div>
        )}

        {/* LOADING SCREEN */}
        {phase === 'loading' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F0FB] animate-in fade-in duration-500">
            <Loading />
          </div>
        )}

        {/* MAIN PAGE */}
        {phase === 'unlocked' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <MainPage />
          </motion.div>
        )}

      </div>
    </ClickSpark>
  )
}

export default App