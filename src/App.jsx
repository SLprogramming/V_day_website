import React, { useState } from 'react'
import Lock from './components/Lock'
import ClickSpark from './components/ClickSpark'
import MainPage from './MainPage'
import Loading from './components/Loading'

const App = () => {
  // phases: 'lock' | 'loading' | 'unlocked'
  const [phase, setPhase] = useState('lock');

  const handleUnlock = async () => {
    // 1. Move to loading phase
    setPhase('loading');
    
    // 2. Wait 3 seconds for the loading animation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    // 3. Switch to main page phase
    setPhase('unlocked');
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
        
        {/* LOCK SCREEN - Visible at start */}
        {phase === 'lock' && (
          <div className="animate-in fade-in duration-700">
            <Lock onUnlockSuccess={handleUnlock} />
          </div>
        )}

        {/* LOADING SCREEN - Fades in over the lock, then stays until finished */}
        {phase === 'loading' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F0FB] animate-in fade-in duration-500">
             <Loading />
          </div>
        )}

        {/* MAIN PAGE - Fades in beautifully when loading is done */}
        {phase === 'unlocked' && (
          <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
            <MainPage />
          </div>
        )}

      </div>
    </ClickSpark>
  )
}

export default App