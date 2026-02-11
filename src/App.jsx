import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Lock from "./components/Lock";
import ClickSpark from "./components/ClickSpark";
import MainPage from "./MainPage";
import Loading from "./components/Loading";

const App = () => {
  // phases: 'lock' | 'loading' | 'unlocked'
  const [phase, setPhase] = useState("lock"); // Default back to lock for security

  const [theme, setTheme] = useState(
    localStorage.getItem("preferred-theme") || "default",
  );
  const [isOpen, setIsOpen] = useState(false);
  const themes = [
    {
      id: "default",
      name: "Pink",
      icon: "🌸",
      color: "#FF85A1",
      highlight: "#FFC2D1",
    },
    {
      id: "forest",
      name: "Forest",
      icon: "🌲",
      color: "#386641",
      highlight: "#A7C957",
    },
    {
      id: "cool",
      name: "Cool",
      icon: "❄️",
      color: "#05668D",
      highlight: "#427AA1",
    },
    {
      id: "sunset",
      name: "Sunset",
      icon: "🌅",
      color: "#E63946",
      highlight: "#F4A261",
    },
  ];

  // 2. This runs every time the 'theme' changes
  useEffect(() => {
    // Remove all possible theme classes
    const classes = ["theme-forest", "theme-cool", "theme-sunset"];
    document.body.classList.remove(...classes);

    // If it's not default, add the current theme class
    if (theme !== "default") {
      document.body.classList.add(`theme-${theme}`);
    }

    // Save the choice for the next visit
    localStorage.setItem("preferred-theme", theme);
  }, [theme]);

  // Framer Motion Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let expiredIn = localStorage.getItem("expiredIn");
    if (expiredIn && Date.now() < parseInt(expiredIn)) {
      setPhase("unlocked");
    }
  }, []);

  const handleUnlock = async () => {
    setPhase("loading");

    // Wait for the loading animation (3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setPhase("unlocked");
    localStorage.setItem("expiredIn", Date.now() + 5 * 60 * 1000);
  };

  return (
    <ClickSpark
      sparkColor="#BDE0FE"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative min-h-screen w-full bg-[#F8F0FB] overflow-hidden">
        <div className="fixed top-10 right-10 z-51 flex items-center justify-center">
          {/* Theme Buttons Wrapper */}
          <AnimatePresence>
            {isOpen &&
              themes.map((t, i) => {
                // Logic stays the same
                const angle = i * (110 / (themes.length - 1)) + 80;
                const radius = 85;

                const x = Math.cos(angle * (Math.PI / 180)) * radius;
                const y = Math.sin(angle * (Math.PI / 180)) * radius;

                return (
                  <motion.button
                    key={t.id}
                    layout // Added to stabilize position during state changes
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{ opacity: 1, x: x, y: y, scale: 1 }}
                    exit={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0,
                      transition: { duration: 0.2 }, // Faster exit prevents the "glitchy" overlap
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: i * 0.05,
                    }}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    style={{
                      borderColor: t.color,
                      backgroundColor:
                        t.id === theme
                          ? t.highlight
                          : "rgba(255, 255, 255, 0.8)",
                      // Use a stable hex/rgba for background
                    }}
                    className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl   border-2 "
                  >
                    {t.icon}
                  </motion.button>
                );
              })}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 135 : 0 }}
            className="relative z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-2xl"
          >
            <span className="text-[var(--primary-accent)]">🎨</span>
          </motion.button>
        </div>
        {/* 1. TOP PROGRESS BAR - Only visible when unlocked */}
        {phase === "unlocked" && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
            style={{
              scaleX,
              background:
                "linear-gradient(to right, var(--secondary-accent), var(--primary-accent))",
              boxShadow: "0 2px 10px rgba(255, 133, 161, 0.3)",
            }}
          />
        )}

        {/* LOCK SCREEN */}
        {phase === "lock" && (
          <div className="animate-in fade-in duration-700">
            <Lock onUnlockSuccess={handleUnlock} />
          </div>
        )}

        {/* LOADING SCREEN */}
        {phase === "loading" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F0FB] animate-in fade-in duration-500">
            <Loading />
          </div>
        )}

        {/* MAIN PAGE */}
        {phase === "unlocked" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <MainPage />
          </motion.div>
        )}
      </div>
    </ClickSpark>
  );
};

export default App;
