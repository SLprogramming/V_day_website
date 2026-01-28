import React from 'react';
import { motion } from 'framer-motion';

const MemoryChat = () => {
  const conversations = [
    { id: 1, sender: 'them', text: "ပြင်ဆင်နေတာ", time: '8:31 PM' },
    { id: 2, sender: 'me', text: "အော်", time: '8:31 PM' },
    { id: 3, sender: 'me', text: "မစားရသေးဘူးလား", time: '8:31 PM' },
    { id: 4, sender: 'me', text: "အာ့ဆိုပြီးမှပြောတော့မယ်", time: '8:31 PM' },
    { id: 5, sender: 'them', text: "အခု ပြောရတယ်လို", time: '8:31 PM' },
    { id: 6, sender: 'me', text: "ပြီးမှပြောမယ်လို", time: '8:32 PM' },
    { id: 7, sender: 'them', text: "ဘာလဲလို", time: '8:32 PM' },
    { id: 8, sender: 'them', text: "အကြမ်းပြော", time: '8:32 PM' },
    { id: 9, sender: 'me', text: "အကြမ်းပြောရင်သိသွားမှာပေါ့", time: 'edited 8:32 PM' },
    { id: 10, sender: 'them', text: "ပြော အားတယ်လို", time: '8:33 PM' },
    { id: 11, sender: 'me', text: "မပြောဘူးလို", time: '8:33 PM' },
    { id: 12, sender: 'me', text: "ပြီးမှလို", time: '8:33 PM' },
    { id: 13, sender: 'me', text: "အားလားမေးကြည့်တာ", time: '8:33 PM' },
    { id: 14, sender: 'them', text: "ဘာဖစ်နေတာလဲ", time: '8:33 PM' },
    { id: 15, sender: 'me', text: "နန်းကြီးသုပ်ဖိုပြင်နေတာဆိုတော့", time: '8:34 PM' },
    { id: 16, sender: 'me', text: "အားတယ်မခေါ်ဘူး", time: '8:34 PM' },
    { id: 17, sender: 'them', text: "အားတယ် မခေါ်ဘူး", time: '8:34 PM' },
    { id: 18, sender: 'them', text: "မနက်ဖြန် သုပ်မလို", time: '8:35 PM' },
    { id: 19, sender: 'them', text: "ပြော", time: '8:35 PM' },
    { id: 20, sender: 'them', text: "ပြောတော့လို ရပီး", time: '9:08 PM' },
    { id: 21, sender: 'me', text: "အားပြီပေါ့", time: '9:09 PM' },
    { id: 22, sender: 'them', text: "အင်း", time: '9:09 PM' },
    { id: 23, sender: 'them', text: "ဘာပြောမလိုလဲ", time: '9:09 PM' },
    { id: 24, sender: 'them', text: "ဟယ်", time: '9:09 PM' },
    { id: 25, sender: 'them', text: "ဘာဖစ်နေတာလဲ", time: '9:10 PM' },
    { id: 26, sender: 'me', text: "ပြောမယ်", time: '9:10 PM' },
    { id: 27, sender: 'them', text: "ပြော", time: '9:10 PM' },
    { id: 28, sender: 'me', text: "ဘေးမှာအမေရှိလား", time: '9:10 PM' },
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
    { id: 39, sender: 'me', text: "အမကိုကျွန်တော်ချစ်လို", time: '9:11 PM' ,reaction: '👀' },
    { id: 40, sender: 'them', text: "အန်", time: '9:11 PM'  },
    { id: 41, sender: 'them', text: "နောက်နေတာလား", time: '9:12 PM'  },
    { id: 42, sender: 'me', text: "မတိုင်နဲ့နော်", time: '9:12 PM'  },
    { id: 43, sender: 'me', text: "နောက်စရာလား", time: '9:12 PM'  },
    { id: 44, sender: 'them', text: "နင်ဟာကလဲ", time: '9:12 PM'  },
    { id: 45, sender: 'them', text: "ဘာတုန်း", time: '9:12 PM'  },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-10 font-sans shadow-2xl mb-20 rounded-2xl overflow-hidden border border-(--secondary-accent)/20">
      
      {/* Chat Header - Fixed */}
      <div className="bg-(--secondary-accent) p-3 md:p-4 flex items-center gap-3 border-b border-(--primary-accent)/20 shadow-sm relative z-20">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-(--primary-accent) overflow-hidden flex items-center justify-center text-white font-bold shadow-inner text-sm md:text-base">
          <img src="/public/photos/supyae.jpg" alt="" />
        </div>
        <div>
          <h3 className="text-(--primary-bg) font-bold text-xs md:text-sm leading-none">Ma Su Pyae</h3>
          <span className="text-[9px] md:text-[10px] text-(--primary-bg)/70">last seen recently</span>
        </div>
      </div>

      {/* Chat Body - SCROLLABLE & NO SCROLLBAR */}
      <div className="bg-white/60 backdrop-blur-md p-4 md:p-6 flex flex-col gap-1 md:gap-3 h-[450px] overflow-y-auto scroll-smooth 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {conversations.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={`flex flex-col relative ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            {/* Message Bubble */}
            <div
              className={`relative max-w-[85%] md:max-w-[80%] px-3 py-2 md:px-4 md:py-2 rounded-2xl text-xs md:text-sm shadow-sm leading-relaxed ${
                msg.sender === 'me'
                  ? ' bg-(--highlight-color) text-gray-700 rounded-tr-none'
                  : ' bg-(--primary-accent) text-white rounded-tl-none'
              }`}
            >
              {msg.text}

              {/* Emoji Reaction with Bounce Animation */}
              {msg.reaction && (
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 260, 
                    damping: 20, 
                    delay: 0.6 
                  }}
                  className={`absolute -bottom-3 ${msg.sender === 'me' ? '-left-2' : '-right-2'} bg-white border border-pink-100 rounded-full px-1.5 py-0.5 text-[10px] md:text-xs shadow-md cursor-default select-none flex items-center justify-center`}
                >
                  {msg.reaction}
                </motion.div>
              )}
            </div>

            {/* Timestamp */}
            <span className="text-[8px] md:text-[9px] text-gray-400 mt-1 px-1">{msg.time}</span>
          </motion.div>
        ))}
        
        <div className="pt-2" />
      </div>

      {/* Chat Footer */}
      <div className="bg-white/80 p-3 px-4 border-t border-pink-50 flex items-center justify-between">
        <span className="text-gray-300 text-[11px] md:text-xs italic font-serif">A beautiful beginning...</span>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-(--primary-accent) opacity-80 cursor-pointer"
        >
          ❤️
        </motion.div>
      </div>
    </div>
  );
};

export default MemoryChat;