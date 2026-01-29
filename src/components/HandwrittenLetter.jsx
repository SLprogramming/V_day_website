import React from 'react';
import { motion } from 'framer-motion';

const HandwrittenLetter = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-[var(--primary-bg)]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-2xl"
      >
        {/* The Paper Component */}
        <div 
          className="relative bg-[#fffdfa] p-12 md:p-20 shadow-xl border border-stone-200 rounded-sm overflow-hidden"
          style={{
            "--row-height": "2.5rem", 
            backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px)`,
            backgroundSize: `100% var(--row-height)`,
            lineHeight: "var(--row-height)",
            paddingTop: "calc(var(--row-height) * 2.1)" 
          }}
        >
          {/* Margin Line */}
          <div className="absolute top-0 left-12 md:left-20 w-[1px] h-full bg-pink-200 opacity-40" />

          {/* Letter Content */}
          <div className="relative z-10 font-['Caveat'] text-gray-800 text-2xl md:text-3xl">
            <div className="absolute -top-12 right-0 opacity-50 text-xl italic">
              Feb 14, 2026
            </div>
            
            <div className="space-y-0">
              <p>I was just thinking back to where it all started at the office.</p>
              <p>It’s funny how a simple job brought me to the person</p>
              <p>I feel so perfectly paired with.</p>
              
              <div style={{ height: "var(--row-height)" }} />
              
              <p>I still love those late nights when our work day ended,</p>
              <p>but our conversations never did. Even at the office, my</p>
              <p>favorite part was always testing new apps mostly</p>
              <p>because it gave me a reason to ask for your help.</p>

              <div style={{ height: "var(--row-height)" }} />
              
              <p>Sitting face-to-face with you is the best part of my day.</p>
              <p>I hope you didn't notice, but I’ve spent so many hours</p>
              <p>watching your face from behind my monitor, just enjoying</p>
              <p>the quiet magic of being close to you.</p>

              <div style={{ height: "var(--row-height)" }} />
              
              <p>I'm so glad we are in this together.</p>
              
              {/* Anniversary & Valentine Highlight */}
              <div style={{ height: "var(--row-height)" }} />
              <p className="text-(--primary-accent) text-3xl">
                Happy 1st Anniversary & Happy Valentine's Day! ❤️
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 flex flex-col items-end pr-4 transform -rotate-2">
              <p className="text-2xl opacity-80">Always yours,</p>
              <p className="text-4xl text-(--primary-accent) mt-1">Taing Linn Maung</p>
              
              <motion.img 
                src="/Tgs/heart.png" 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 mt-2 opacity-80" 
                alt="" 
              />
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        </div>

        {/* Tape decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/20 backdrop-blur-sm border border-white/30 -rotate-1 shadow-sm" />
      </motion.div>
    </section>
  );
};

export default HandwrittenLetter;