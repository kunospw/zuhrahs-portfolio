"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import background from "@/assets/background.png";
import layer1 from "@/assets/Layer 1.png";
import layer10 from "@/assets/Layer 10.png";
import layer11 from "@/assets/Layer 11.png";
import kertas from "@/assets/kertas 2.png";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure images are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show spinner for at least 1 second

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f5f5dc]">
      {/* Loading Spinner - shown when isLoading is true */}
      {isLoading && <LoadingSpinner />}
      
      {/* Container for all layers */}
      {!isLoading && (
        <div className="relative w-full h-full">
          {/* Background Layer (Bottom Layer) */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={background}
              alt="Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>

          {/* Layer 1 - Cover the whole page */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={layer1}
              alt="Layer 1"
              fill
              sizes="100vw"
              className="object-cover"
              quality={100}
            />
          </motion.div>

          {/* Layer 11 - PORTFOLIO Text (Centered, large, positioned in middle) */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-[2] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full h-full ml-[18%] max-w-5xl">
              <Image
                src={layer11}
                alt="PORTFOLIO Text"
                fill
                sizes="(max-width: 768px) 90vw, 60vw"
                className="object-contain object-center"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Zuhrah's Text (Smaller, positioned above and left of PORTFOLIO) */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-[3] flex items-center justify-center"
            initial={{ opacity: 0, x: -50, y: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative -mt-[16%] ml-[45%]">
              <h2 
                className="font-blank-river text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] font-normal whitespace-nowrap"
                style={{
                  textShadow: `
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px 1px 0 #000,
                    1px 1px 0 #000
                  `,
                  WebkitTextStroke: "3px #000",
                  paintOrder: "stroke fill",
                }}
              >
                ZUHRAH'S
              </h2>
            </div>
          </motion.div>

          {/* Layer 10 - Character with Green Jacket (Left side, overlapping PORTFOLIO, bottom-aligned) */}
          <motion.div 
            className="absolute inset-0 w-full h-[103%] z-[4] flex items-end justify-start"
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <div className="relative w-full h-full max-w-2xl ml-[1%]">
              <Image
                src={layer10}
                alt="Character Layer"
                fill
                sizes="(max-width: 768px) 70vw, 65vw"
                className="object-contain object-left-bottom"
                quality={100}
              />
            </div>
          </motion.div>

          {/* kertas layer */}
          <motion.div 
            className="absolute inset-0 w-full h-[157%] z-[5] flex items-end justify-start"
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <div className="relative w-full h-full max-w-6xl -ml-[22%]">
              <Image
                src={kertas}
                alt="Kertas Layer"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-contain object-left-bottom"
                quality={100}
              />
            </div>
          </motion.div>

          {/* kertas layer - Top right */}
          <motion.div 
            className="absolute inset-0 w-full h-[160%] z-[5] flex items-start justify-end"
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <div className="relative w-full h-full max-w-6xl -mr-[40%] -mt-[15%]">
              <Image
                src={kertas}
                alt="Kertas Layer Top Right"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-contain object-right-top"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Illustrator and Graphic Designer Text - Bottom right */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-[6] flex items-end justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <div className="relative mb-[5%] mr-[20%] text-left">
              <p 
                className="font-adventure-magazine text-black text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl italic leading-tight"
                style={{
                  fontStyle: "italic",
                }}
              >
                illustrator and graphic designer<br />
                based in jakarta, indonesia
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
