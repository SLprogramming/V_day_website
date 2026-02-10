import React, { useState, useEffect } from 'react';

const RealTimeCounter = () => {
  // Anniversary: February 11, 2025
  const anniversaryDate = new Date(2025, 1, 11, 0, 0, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - anniversaryDate.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[var(--primary-bg)]">
      {/* Background Decorations */}
      <div className="absolute top-10 left-[10%] animate-bounce text-2xl opacity-50">✨</div>
      <div className="absolute bottom-10 right-[15%] animate-pulse text-2xl opacity-50">🌸</div>
      <div className="absolute top-1/2 left-5 text-pink-300 opacity-30 text-4xl">♥</div>

      <div className="relative z-10 w-full max-w-lg px-8 py-12 text-center transition-all bg-white/40 backdrop-blur-md rounded-[40px] border border-[var(--secondary-accent)] shadow-xl shadow-pink-100/50">
        
        <h3 className="mb-8 text-sm font-bold tracking-[0.2em] uppercase text-[var(--primary-accent)]">
          Been Together For
        </h3>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" isPadded />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Mins" isPadded />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Secs" isPadded />
        </div>

        <p className="mt-8 text-sm italic text-gray-500 font-light">
          "Every second with you is a new favorite memory."
        </p>

        {/* Progress bar representing the journey to the next milestone */}
       <div className="mt-10 w-full group">
  {/* Romance Label and Percentage */}
  <div className="flex justify-end items-end mb-2 px-1">
   
    <span className="text-[10px] font-medium text-gray-400 tabular-nums">
      {((timeLeft.hours / 24) * 100).toFixed(1)}% of today cherished
    </span>
  </div>

  {/* Progress Bar Track */}
  <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner border border-[var(--secondary-accent)]/20 relative">
    <div 
      className="h-full bg-[var(--highlight-color)] transition-all duration-1000 ease-linear relative"
      style={{ width: `${(timeLeft.hours / 24) * 100}%` }}
    >
      {/* Subtle Glow/Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
    </div>
  </div>

  {/* Romantic Caption */}
  <p className="mt-3 text-[11px] italic text-gray-400 font-light transition-opacity duration-500 group-hover:text-[var(--primary-accent)]">
    {timeLeft.hours < 12 
      ? "The day is young, and my love for you is growing... ✨" 
      : "Every hour passed is another reason to smile. 💖"}
  </p>
</div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label, isPadded = false }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl sm:text-5xl font-bold text-gray-800 tabular-nums">
      {isPadded ? String(value).padStart(2, '0') : value}
    </span>
    <span className="text-[10px] uppercase font-bold text-[var(--primary-accent)] mt-1">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <span className="text-2xl sm:text-3xl font-light text-[var(--secondary-accent)] pb-6">:</span>
);

export default RealTimeCounter;