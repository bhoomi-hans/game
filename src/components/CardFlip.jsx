import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SpaceCity from "../assets/1.jpg";
import SpaceCity1 from "../assets/2.jpg";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef(null);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const handleMouseMove = (e) => {
    if (isAnimating) return;
    
    const card = frameRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      transformPerspective: 1000,
      ease: "power1.out"
    });
  };

  const handleMouseLeave = () => {
    if (isAnimating) return;
    
    gsap.to(frameRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div className="min-h-dvh w-full bg-gradient-to-br from-gray-900 to-black text-blue-50 overflow-hidden flex flex-col items-center justify-center">
      {/* Floating particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animation: `pulse ${Math.random() * 6 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Title */}
      <div className="relative z-10 mb-10 text-center">
        <p className="font-general text-sm uppercase tracking-widest text-purple-300">
          Unlock The Power Of Multiversal Creativity
        </p>
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Story Of <b className="text-purple-500">Re</b>alms
        </motion.h2>
      </div>

      {/* Flip Card */}
      <div 
        className="relative z-10 cursor-pointer mb-12"
        onClick={handleFlip}
      >
        <motion.div
          className="relative w-[600px] h-[360px]"
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={false}
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
            scale: isAnimating ? 1.05 : 1 
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ transformStyle: "preserve-3d" }}
        >
           
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20 backface-hidden"
            style={{ 
              backgroundImage: `url(${SpaceCity})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h1 className="text-2xl font-bold text-white">Heavens</h1>
              <p className="text-purple-200 mt-1">Beyond The Clouds: A Journey To Light</p>
              <div className="absolute top-0 right-0 m-4 bg-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                Front
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl" />
          </div>

           
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/20 backface-hidden"
            style={{ 
              backgroundImage: `url(${SpaceCity1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h1 className="text-2xl font-bold text-white">Hell</h1>
              <p className="text-red-600 mt-1">Lost Souls: A Descent To Hell</p>
              <div className="absolute top-0 right-0 m-4 bg-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                Back
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl" />
          </div>
        </motion.div>
      </div>

       
      <p className="text-purple-300 text-sm font-semibold mb-10">
        {isFlipped ? "Click to return to Sky view" : "Click to explore Earth view"}
      </p>
      <p className="text-purple-200 mt-1">
        In the Heart of Convergence: Explore Edilion,<br />
        the Limitless Pillar of Secrets, and<br />
         Craft Your Fate Amidst Infinite Horizons<br />
      </p>

      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold uppercase text-sm tracking-wider hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
        whileHover={{ 
          scale: 1.05,
          background: "linear-gradient(to right, #8B5CF6, #3B82F6)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Discover More
      </motion.button>
      
       
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(1); }
          100% { opacity: 0.4; transform: scale(1.5); }
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default CardFlip;