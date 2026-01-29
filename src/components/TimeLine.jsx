import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const memories = [
  /* ... your memories data ... */
  { id: 1, date: "Jul 11, 2025", title: "With the new shirt", location: "Time City", message: "Do you Remember? we got trouble choosing this shirt together! 👕❤️", image: "/cartoon_pic/photo_1.jpg" },
  { id: 2, date: "Jul 23, 2025", title: "On Your Birthday", location: "Wai Wai Aung", message: "Wai Wai Aung and Htoo Ice Cream made your birthday extra special! 🎂", image: "/cartoon_pic/photo_2.jpg" },
  { id: 3, date: "Dec 31, 2025", title: "Force Me to Selfie 🤪", location: "Time City", message: "I'm too shy for selfies, but for you, I'll make an exception!", image: "/cartoon_pic/photo_3.jpg" },
  { id: 4, date: "Dec 31, 2025", title: "Waiting For JOJO", location: "Time City", message: "We are hungry and excited for JOJO!", image: "/cartoon_pic/photo_4.jpg" }
];

const TimelineEvent = ({ event, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex w-full mb-32 items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      
      {/* 1. Content Card with Scroll Animation */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[45%] group perspective-1000"
      >
        <div 
          className="bg-white rounded-3xl p-5 shadow-sm transition-all duration-500 group-hover:shadow-2xl border-2 relative"
          style={{ borderColor: 'var(--secondary-accent)' }}
        >
          {/* Subtle PNG decoration on the card corner */}
          <img src="/Tgs/heart.png" className="absolute -top-3 -right-3 w-8 opacity-0 group-hover:opacity-100 transition-opacity" alt="" />

          <div className="flex items-center gap-2 mb-3">
             <Calendar className="w-4 h-4" style={{ color: 'var(--primary-accent)' }} />
             <span className="text-sm font-bold opacity-70" style={{ color: 'var(--primary-accent)' }}>{event.date}</span>
          </div>

          <h3 className="font-bold text-gray-800 text-xl mb-3">{event.title}</h3>
          
          <div className="relative overflow-hidden rounded-2xl aspect-video">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ backgroundColor: 'rgba(255, 133, 161, 0.9)' }}
            >
              <p className="text-white text-center italic font-medium">"{event.message}"</p>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs flex items-center text-gray-400">
              <MapPin className="w-3 h-3 mr-1" /> {event.location}
            </span>
            <Heart className="w-5 h-5 transition-colors group-hover:fill-current" style={{ color: 'var(--primary-accent)' }} />
          </div>
        </div>
      </motion.div>

      {/* 2. Center Heart - Pops in when in view */}
      <motion.div 
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="z-10 flex items-center justify-center w-14 h-14 rounded-full border-4 border-white shadow-lg shrink-0"
        style={{ backgroundColor: 'var(--highlight-color)' }}
      >
        <Heart className="w-7 h-7 text-white fill-white" />
      </motion.div>

      {/* 3. Spacer (Dynamic for S-Curve feel) */}
      <div className="w-[45%]" />
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden bg-(--primary-bg)">
      
      {/* Background Decor */}
      <img src="/Tgs/valentines-day.png" className="absolute top-10 left-[-5%] w-64 opacity-20 pointer-events-none" alt="" />
      <img src="/Tgs/relationship.png" className="absolute bottom-20 right-[-5%] w-64 opacity-20 pointer-events-none rotate-12" alt="" />

      <div className="max-w-5xl mx-auto relative">
        <header className="text-center mb-32 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-['Caveat'] mb-4" 
            style={{ color: 'var(--primary-accent)' }}
          >
            Our Love Story
          </motion.h2>
          <div className="h-1.5 w-32 mx-auto rounded-full" style={{ backgroundColor: 'var(--secondary-accent)' }} />
        </header>

        <div className="relative">
          {/* Animated SVG Path */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-32 pointer-events-none opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
              <motion.path 
                d="M50,0 Q120,250 50,500 T50,1000" 
                fill="none" 
                stroke="var(--primary-accent)" 
                strokeWidth="4" 
                strokeDasharray="10,15"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative z-10">
            {memories.map((memory, index) => (
              <TimelineEvent key={memory.id} event={memory} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;