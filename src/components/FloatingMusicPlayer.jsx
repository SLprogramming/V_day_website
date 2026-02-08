import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";

const SONG_LIST = [
    {
    title: "Every Breath You Take",
    artist: "The Police",
    src: "/songs/Every Breath You Take.mp3",
    cover:
      "/songs/albumPic/everybreathyoutake.jpg",
  },
   {
    title: "Rewrite The Stars",
    artist: "Anne-Marie & James Arthur",
    src: "/songs/Rewrite The Stars.mp3",
    cover:
      "/songs/albumPic/rewritethestars.jpg",
  },
  {
    title: "About You",
    artist: "The 1975",
    src: "/songs/About You.mp3",
    cover:
      "/songs/albumPic/aboutyou.jpg",
  },
  {
    title: "To The Bone",
    artist: "Pamungkas",
    src: "/songs/To The Bone.mp3",
    cover:
      "/songs/albumPic/tothebone.jpg",
  },
  {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    src: "/songs/Until I Found You.mp3",
    cover:
      "/songs/albumPic/untilifoundyou.webp",
  },
 

];

const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = SONG_LIST[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);



  const togglePlay = () => setIsPlaying(!isPlaying);
  const handlePrev = () =>
    setCurrentSongIndex((prev) =>
      prev === 0 ? SONG_LIST.length - 1 : prev - 1,
    );
  const handleNext = () =>
    setCurrentSongIndex((prev) =>
      prev === SONG_LIST.length - 1 ? 0 : prev + 1,
    );

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setProgress((current / (total || 1)) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex items-center">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={handleNext}
      />

      <div className="relative flex items-center">
        {/* 1. THE TOGGLE BUTTON (Kept as requested) */}
        <motion.button
          onClick={() => setShowControls(!showControls)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-100 z-50"
        >
          {showControls ? (
            <X className="w-6 h-6 text-pink-400" />
          ) : (
            <Music
              className={`w-6 h-6 ${isPlaying ? "text-pink-400" : "text-gray-400"}`}
            />
          )}

          {/* Subtle pulse if playing but closed */}
          {isPlaying && !showControls && (
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-pink-200 -z-10"
            />
          )}
        </motion.button>

        {/* 2. THE PLAYER CARD (Disc is now INSIDE here) */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 10, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="bg-white/90 backdrop-blur-xl pl-8 pr-6 py-4 rounded-[2.5rem] shadow-2xl border border-white flex items-center gap-5 min-w-[350px]"
            >
              {/* SPINNING DISC INSIDE THE CARD */}
              <div className="relative flex-shrink-0">
                <motion.div
                  className="w-26 h-26 rounded-full border-4 border-white shadow-lg overflow-hidden relative"
                  style={{
                    // 1. Apply the rotation animation via standard CSS/Inline
                    animation: "spin 6s linear infinite",
                    // 2. This is the magic line: it freezes the animation exactly where it is
                    animationPlayState: isPlaying ? "running" : "paused",
                  }}
                >
                  <img
                    src={currentSong.cover}
                    alt="art"
                    className="w-full h-full object-cover"
                  />

                  {/* Vinyl Hole decoration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CONTROLS AND INFO */}
              <div className="flex flex-col flex-grow gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-pink-500 font-bold">
                    Now Playing
                  </span>
                  <span className="text-sm text-gray-800 font-bold leading-tight truncate max-w-[150px]">
                    {currentSong.title}
                  </span>
                </div>

                {/* Main Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <SkipBack className="w-4 h-4 fill-current" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 text-white shadow-md shadow-pink-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <SkipForward className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Progress Bar */}
                {/* Progress Bar with Dynamic Passed Range Color */}
                <div className="w-full flex flex-col gap-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={isNaN(progress) ? 0 : progress}
                    onChange={handleSeek}
                    style={{
                      background: `linear-gradient(to right, #ec4899 ${progress}%, #fbcfe8 ${progress}%)`,
                    }}
                    className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-pink-600 transition-all"
                  />
                  <div className="flex justify-between text-[8px] text-gray-400 font-medium">
                    <span>{formatTime(audioRef.current?.currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. FANTASY NOTES */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <FloatingNote delay={0} x={-30} />
              <FloatingNote delay={1.5} x={30} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const FloatingNote = ({ delay, x }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: -60, opacity: [0, 1, 0], x: x }}
    transition={{ duration: 3, repeat: Infinity, delay: delay }}
    className="absolute top-0 left-7 text-pink-300 pointer-events-none text-xl"
  >
    ♫
  </motion.div>
);

export default FloatingMusicPlayer;
