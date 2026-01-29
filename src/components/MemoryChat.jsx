import React from 'react';
import { motion } from 'framer-motion';

const MemoryChat = () => {
const conversations = [
  { id: 1, sender: 'them', text: "ပြင်ဆင်နေတာ", time: '8:31 PM' },
  { id: 2, sender: 'me', text: "အော်", time: '8:31 PM' },
  { id: 3, sender: 'me', text: "မစားရသေးဘူးလား", time: '8:31 PM' },
  { id: 4, sender: 'me', text: "အာ့ဆိုပြီးမှပြောတော့မယ်", time: '8:31 PM', note: "I was trying to be polite! haha" },
  { id: 5, sender: 'them', text: "အခု ပြောရတယ်လို", time: '8:31 PM' },
  { id: 6, sender: 'me', text: "ပြီးမှပြောမယ်လို", time: '8:32 PM' },
  { id: 7, sender: 'them', text: "ဘာလဲလို", time: '8:32 PM' },
  { id: 8, sender: 'them', text: "အကြမ်းပြော", time: '8:32 PM' },
  { id: 9, sender: 'me', text: "အကြမ်းပြောရင်သိသွားမှာပေါ့", time: '8:32 PM', note: "The secret was almost out here... 🙊" },
  { id: 10, sender: 'them', text: "ပြော အားတယ်လို", time: '8:33 PM' },
  { id: 11, sender: 'me', text: "မပြောဘူးလို", time: '8:33 PM' },
  { id: 12, sender: 'me', text: "ပြီးမှလို", time: '8:33 PM' },
  { id: 13, sender: 'me', text: "အားလားမေးကြည့်တာ", time: '8:33 PM' },
  { id: 14, sender: 'them', text: "ဘာဖစ်နေတာလဲ", time: '8:33 PM' },
  { id: 15, sender: 'me', text: "နန်းကြီးသုပ်ဖိုပြင်နေတာဆိုတော့", time: '8:34 PM' },
  { id: 16, sender: 'me', text: "အားတယ်မခေါ်ဘူး", time: '8:34 PM' },
  { id: 17, sender: 'them', text: "အားတယ် မခေါ်ဘူး", time: '8:34 PM', reaction: '😂' },
  { id: 18, sender: 'them', text: "မနက်ဖြန် သုပ်မလို", time: '8:35 PM' },
  { id: 19, sender: 'them', text: "ပြော", time: '8:35 PM' },
  { id: 20, sender: 'them', text: "ပြောတော့လို ရပီး", time: '9:08 PM', isDivider: true, dividerText: "The Waiting Game..." },
  { id: 21, sender: 'me', text: "အားပြီပေါ့", time: '9:09 PM' },
  { id: 22, sender: 'them', text: "အင်း", time: '9:09 PM' },
  { id: 23, sender: 'them', text: "ဘာပြောမလိုလဲ", time: '9:09 PM' },
  { id: 24, sender: 'them', text: "ဟယ်", time: '9:09 PM' },
  { id: 25, sender: 'them', text: "ဘာဖစ်နေတာလဲ", time: '9:10 PM' },
  { id: 26, sender: 'me', text: "ပြောမယ်", time: '9:10 PM', note: "Taking a deep breath..." },
  { id: 27, sender: 'them', text: "ပြော", time: '9:10 PM' },
  { id: 28, sender: 'me', text: "ဘေးမှာအမေရှိလား", time: '9:10 PM', note: "I was so scared of your mom! 😂" },
  { id: 29, sender: 'them', text: "ဟဲ့", time: '9:10 PM' },
  { id: 30, sender: 'them', text: "ဘယ် အမေကရှိမှာလဲ", time: '9:10 PM' },
  { id: 31, sender: 'me', text: "ဘယ်သွားတာလဲ", time: '9:10 PM' },
  { id: 32, sender: 'them', text: "ဟဲ့", time: '9:10 PM' },
  { id: 33, sender: 'them', text: "ပြော", time: '9:10 PM' },
  { id: 34, sender: 'me', text: "အမေနဲ့တိုင်မှာဆိုးလို", time: '9:11 PM' },
  { id: 35, sender: 'them', text: "ဘာလဲ", time: '9:11 PM' },
  { id: 36, sender: 'them', text: "ငါ့စိတ်ညစ်လိုက်တာ", time: '9:11 PM' },
  { id: 37, sender: 'them', text: "ဘာတိုင်တာလဲ", time: '9:11 PM' },
  { id: 38, sender: 'them', text: "နင် မပြောဘူးလာ", time: '9:11 PM' },
  { id: 39, sender: 'me', text: "အမကိုကျွန်တော်ချစ်လို", time: '9:11 PM', reaction: '👀', note: "The moment that changed everything... ✨" },
  { id: 40, sender: 'them', text: "အန်", time: '9:11 PM' },
  { id: 41, sender: 'them', text: "နောက်နေတာလား", time: '9:12 PM' },
  { id: 42, sender: 'me', text: "မတိုင်နဲ့နော်", time: '9:12 PM' },
  { id: 43, sender: 'me', text: "နောက်စရာလား", time: '9:12 PM', note: "I was 100% serious. ❤️" },
  { id: 44, sender: 'them', text: "နင်ဟာကလဲ", time: '9:12 PM' },
  { id: 45, sender: 'them', text: "ဘာတုန်း", time: '9:12 PM', reaction: '🌸' },
];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 min-h-screen p-4 overflow-hidden">
     
      {/* 1. Main Chat Component */}
      <div className="w-full max-w-[450px] font-sans shadow-2xl rounded-3xl overflow-hidden border border-white/20 z-10 bg-white">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-(--secondary-accent) to-(--primary-accent) p-4 flex items-center gap-3 shadow-md relative z-20">
          <div className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden shadow-sm">
            <img src="/photos/supyae.jpg" alt="Su Pyae" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-white">
            <h3 className="font-bold text-sm md:text-base leading-none">Ma Su Pyae</h3>
            <span className="text-[10px] opacity-80 mt-1 italic">Our beautiful beginning</span>
          </div>
        </div>

        {/* Chat Body */}
        <div className="bg-[#FDF8FD] p-4 md:p-8 flex flex-col h-[500px] overflow-y-auto scroll-smooth 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {conversations.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col relative mb-6 ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
            >
              {/* Handwritten Note with 'InView' Animation */}
              {msg.note && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1, // Delay so the bubble appears first, then the note "scribbles" in
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className={`absolute -top-7 ${msg.sender === 'me' ? 'right-4' : 'left-4'} 
                  font-['Caveat'] text-(--primary-accent) text-base md:text-lg whitespace-nowrap drop-shadow-sm pointer-events-none`}
                >
                  {msg.note}
                </motion.span>
              )}
              <div className={`relative max-w-[85%] px-4 py-2 rounded-2xl text-xs md:text-sm shadow-sm ${msg.sender === 'me' ? 'bg-(--highlight-color) text-gray-800 rounded-tr-none' : 'bg-white border border-pink-100 text-gray-700 rounded-tl-none'}`}>
                {msg.text}
                {msg.reaction && (
                  <div className={`absolute -bottom-3 ${msg.sender === 'me' ? '-left-1' : '-right-1'} bg-white border border-pink-50 rounded-full px-1.5 py-0.5 text-xs shadow-sm`}>{msg.reaction}</div>
                )}
              </div>
              <span className="text-[9px] text-gray-400 mt-1 px-1">{msg.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Romantic Footer */}
        <div className="bg-white/90 p-3 text-center border-t border-pink-50">
          <p className="font-['Caveat'] text-(--primary-accent) text-xl italic">Everything changed here... ❤️</p>
        </div>
      </div>

      {/* 2. Side Sticky Note (Visible on Large Screens, Below on Mobile) */}
      <motion.div 
        initial={{ opacity: 0, rotate: 10, x: 50 }}
        animate={{ opacity: 1, rotate: 2, x: 0 }}
        transition={{ delay: .4, duration: 0.8 }}
        className="relative w-64 p-6 bg-[#FEF9C3] shadow-xl border-l-8 border-yellow-200"
        style={{ borderRadius: '2px 35px 5px 40px / 40px 5px 35px 2px' }} // Custom "torn" paper edges
      >
        {/* Fake "Tape" at the top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-sm -rotate-2 shadow-sm border border-white/20" />
        
        <div className="font-['Caveat'] text-gray-700 space-y-4 pt-2">
          <h4 className="text-xl font-bold border-b border-yellow-300 pb-1 text-(--primary-accent)">Memory Note ✍️</h4>
          <p className="text-lg leading-tight">
            I still remember how fast my heart was beating when I typed that message at 9:11 PM.
          </p>
          <p className="text-lg leading-tight">
            I was so worried you'd think I was joking, but you were so sweet about it.
          </p>
          <div className="text-right pt-2 font-bold text-(--primary-accent)">
            — Always Yours
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default MemoryChat;