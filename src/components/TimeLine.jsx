import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

const memories = [
  {
    id: 1,
    date: "Jul 11, 2025",
    title: "With the new shirt that you gifted me",
    location: "Time City",
    message: "Do you Remember? we got trouble choosing this shirt together! 👕❤️",
    image: "/cartoon_pic/photo_1.jpg",
  },
  {
    id: 2,
    date: "Jul 23, 2025",
    title: "On Your Birthday",
    location: "Your Fav Wai Wai Aung",
    message: "Wai Wai Aung and Htoo Ice Cream made your birthday extra special! 🎂",
    image: "/cartoon_pic/photo_2.jpg",
  },
  {
    id: 3,
    date: "Dec 31, 2025",
    title: "Force Me to Selfie 🤪🤪",
    location: "Time City",
    message: "I'm too shy for selfies, but for you, I'll make an exception!",
    image: "/cartoon_pic/photo_3.jpg",
  },
  {
    id: 4,
    date: "Dec 31, 2025",
    title: "Waiting For JOJO",
    location: "Time City",
    message: "We are hungry and excited for JOJO! Best way to end the year together.",
    image: "/cartoon_pic/photo_4.jpg",
  }
];

const TimelineEvent = ({ event, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex w-full mb-24 items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content Card */}
      <div className="w-[45%] group perspective-1000">
        <div 
          className="bg-white rounded-3xl p-5 shadow-sm transition-all duration-500 group-hover:shadow-xl border-2"
          style={{ borderColor: 'var(--secondary-accent)' }}
        >
          <div className="flex items-center gap-2 mb-3">
             <Calendar className="w-4 h-4" style={{ color: 'var(--primary-accent)' }} />
             <span className="text-sm font-bold opacity-70" style={{ color: 'var(--primary-accent)' }}>{event.date}</span>
          </div>

          <h3 className="font-bold text-gray-800 text-xl mb-3">{event.title}</h3>
          
          <div className="relative overflow-hidden rounded-2xl cursor-heart aspect-video">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover Popup Message */}
            <div 
              className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              style={{ backgroundColor: 'rgba(255, 133, 161, 0.9)' }}
            >
              <p className="text-white text-center italic font-medium drop-shadow-md">
                "{event.message}"
              </p>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs flex items-center text-gray-400">
              <MapPin className="w-3 h-3 mr-1" /> {event.location}
            </span>
            <Heart className="w-5 h-5 transition-colors group-hover:fill-current" style={{ color: 'var(--primary-accent)' }} />
          </div>
        </div>
      </div>

      {/* Center Point - Floating in the curve */}
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-lg animate-pulse"
           style={{ backgroundColor: 'var(--highlight-color)' }}>
        <Heart className="w-6 h-6 text-white fill-white" />
      </div>

      {/* Spacer */}
      <div className="w-[45%]" />
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden" style={{ backgroundColor: 'var(--primary-bg)' }}>
      <div className="max-w-5xl mx-auto relative">
        
        <header className="text-center mb-24 relative z-10">
          <h2 className="text-5xl font-serif mb-4" style={{ color: 'var(--primary-accent)' }}>
            Our Love Story
          </h2>
          <div className="h-1.5 w-24 mx-auto rounded-full shadow-sm" style={{ backgroundColor: 'var(--secondary-accent)' }} />
        </header>

        <div className="relative">
          {/* S-Curve Path SVG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-24 pointer-events-none opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
              <path 
                d="M50,0 Q100,250 50,500 T50,1000" 
                fill="none" 
                stroke="var(--primary-accent)" 
                strokeWidth="4" 
                strokeDasharray="10,15"
                className="animate-[dash_60s_linear_infinite]"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {memories.map((memory, index) => (
              <TimelineEvent key={memory.id} event={memory} index={index} />
            ))}
          </div>
        </div>
        
        <footer className="text-center mt-20">
          <div className="inline-block p-4 rounded-full shadow-inner" style={{ backgroundColor: 'var(--secondary-accent)' }}>
             <Heart className="w-8 h-8 text-white fill-white animate-bounce" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Timeline;