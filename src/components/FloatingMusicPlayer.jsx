import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, Volume2 } from 'lucide-react';

const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex items-center">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="/music/your-fav-song.mp3" 
        loop 
      />

      <div className="relative flex items-center">
        {/* 1. The Floating Action Button (The "Vinyl") */}
        <motion.button
          onClick={() => setShowControls(!showControls)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-100 z-50"
        >
          {/* Spinning Vinyl Effect when playing */}
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-1 rounded-full border-2 border-dashed border-pink-200 ${isPlaying ? 'opacity-100' : 'opacity-30'}`}
          />
          <Music className={`w-6 h-6 ${isPlaying ? 'text-pink-400' : 'text-gray-400'}`} />
        </motion.button>

        {/* 2. The Sliding Player Card */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 10, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="bg-white/80 backdrop-blur-md pl-12 pr-6 py-2 rounded-full shadow-lg border border-white flex items-center gap-4"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">Now Playing</span>
                <span className="text-xs text-gray-600 font-medium whitespace-nowrap">Our Favorite Song ✨</span>
              </div>

              <button 
                onClick={togglePlay}
                className="p-2 bg-pink-50 rounded-full hover:bg-pink-100 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-pink-500 fill-pink-500" />
                ) : (
                  <Play className="w-4 h-4 text-pink-500 fill-pink-500 ml-0.5" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Fantasy Decoration: Floating Notes */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <FloatingNote delay={0} x={-20} />
              <FloatingNote delay={1.5} x={20} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Sub-component for the "Fantasy" floating notes
const FloatingNote = ({ delay, x }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: -50, opacity: [0, 1, 0], x: x }}
    transition={{ duration: 3, repeat: Infinity, delay: delay }}
    className="absolute top-0 left-1/2 text-pink-300 pointer-events-none"
  >
    ♫
  </motion.div>
);

export default FloatingMusicPlayer;