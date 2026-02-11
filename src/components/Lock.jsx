import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const LockUI = ({ onUnlockSuccess }) => {
    const passCode = "0201";
    const [pinInput, setPinInput] = useState([]);
    const [stateMessage, setStateMessage] = useState("Enter the code to unlock");
    const [isError, setIsError] = useState(false);
    const [isExiting, setIsExiting] = useState(false); // New state for smooth exit
    
    const controls = useAnimation();

    const submit = async () => {
        if (pinInput.join("") === passCode) {
            setIsError(false);
            setStateMessage("Access Granted ❤️");
            
            // Start the exit animation immediately
            setIsExiting(true);
            
            // Wait for the fade-out animation to finish before calling parent success
            setTimeout(() => {
                if(onUnlockSuccess) onUnlockSuccess();
            }, 300); 
        } else {
            setIsError(true);
            setStateMessage("Wrong code, try again");
            await controls.start({
                x: [-10, 10, -10, 10, 0],
                transition: { duration: 0.4 }
            });
            setPinInput([]);
        }
    };

    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => setIsError(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isError]);

    return (
        /* AnimatePresence allows us to animate the component when it's still in the DOM */
       <motion.div 
    initial={{ opacity: 1, scale: 1 }}
    animate={isExiting ? { opacity: 0, scale: 0.9, filter: "blur(10px)" } : { opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="bg-[var(--primary-bg)] h-dvh flex justify-center items-center p-6 transition-colors duration-500"
>
    {/* Main Card: Uses --new-bg for the glass effect background */}
    <div className="bg-[var(--new-bg)]/70 backdrop-blur-xl w-full max-w-3xl rounded-[3rem] flex flex-col md:flex-row items-center gap-12 p-10 shadow-2xl border border-[var(--secondary-accent)]/30">
        
        {/* Left Side: Decorative Photo Frame */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
                {/* Dynamic Gradient Glow based on theme */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--primary-accent)] to-[var(--highlight-color)] rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-[12px] border-[var(--new-bg)] shadow-xl overflow-hidden">
                    <img src="/photos/hands.jpg" alt="Memory" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* Right Side: Tactile Keypad */}
        <div className="flex-1 w-full max-w-[300px]">
            <div className="text-center mb-8">
                <h2 className="text-[var(--primary-accent)] font-serif italic text-2xl mb-2">Our Secret Date</h2>
                
                <motion.p 
                    animate={controls}
                    className={`text-xs tracking-widest uppercase transition-colors duration-300 font-bold
                        ${isError ? 'text-red-500' : 'text-[var(--text-main)] opacity-60'}`}
                >
                    {stateMessage}
                </motion.p>
            </div>

            {/* PIN Indicators */}
            <div className="flex justify-center gap-4 mb-10">
                {[1, 2, 3, 4].map((dot) => (
                    <motion.div 
                        key={dot} 
                        animate={isError && pinInput.length === 0 ? { scale: [1, 1.2, 1] } : {}}
                        className={`w-4 h-4 rounded-full border-2 border-[var(--secondary-accent)] 
                            ${pinInput?.length >= dot ? 'bg-[var(--primary-accent)] border-[var(--primary-accent)]' : 'bg-transparent'}
                            ${isError && pinInput.length === 0 ? 'border-red-400' : ''}`}
                    />
                ))}
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0, "❤️"].map((item) => (
                    <motion.div
                        key={item}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            if (isExiting) return;
                            if (item === "Clear") {
                                setPinInput([]);
                                setIsError(false);
                                setStateMessage("Enter the code to unlock");
                            } else if (item === "❤️") {
                                if (pinInput.length > 0) submit();
                            } else {
                                if (pinInput.length < 4) {
                                    setPinInput(prev => [...prev, item]);
                                    setIsError(false);
                                }
                            }
                        }}
                        className={`h-16 rounded-2xl flex items-center justify-center font-bold text-lg cursor-pointer transition-all
                            ${typeof item === 'number' 
                                ? 'bg-[var(--new-bg)] text-[var(--primary-accent)] shadow-sm border border-[var(--secondary-accent)]/50 hover:bg-[var(--highlight-color)] hover:text-[var(--text-main)]' 
                                : 'text-[var(--primary-accent)] text-sm opacity-70 hover:opacity-100'}
                        `}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
</motion.div>
    );
};

export default LockUI;