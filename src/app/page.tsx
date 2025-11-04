"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import background from "@/assets/background.png";
import layer1 from "@/assets/Layer 1.png";
import layer10 from "@/assets/Layer 10.png";
import layer11 from "@/assets/Layer 11.png";
import kertas from "@/assets/kertas 2.png";
import layer2 from "@/assets/Layer 2.png";
import layer3 from "@/assets/Layer 3.png";
import layer4 from "@/assets/Layer 4.png";
import layer6 from "@/assets/Layer 6.png";
import polaroidPhoto from "@/assets/WhatsApp Image 2025-10-23 at 10.32.png";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top on mount/refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    setIsMounted(true);
    // Simulate loading time and ensure images are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Ensure scroll position is at top after loading
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 1000); // Show spinner for at least 1 second

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className="relative w-full min-h-[200vh] overflow-x-hidden"
      suppressHydrationWarning
      style={{
        backgroundImage: isMounted ? `url(${background.src})` : undefined,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'local',
        backgroundColor: isMounted ? undefined : '#f5f5dc',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* Loading Spinner - shown when isLoading is true */}
      {isLoading && <LoadingSpinner />}
      
      {/* Container for all layers */}
      <div className={isLoading ? "hidden" : ""}>
        <motion.div 
          className="relative w-full min-h-screen"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          suppressHydrationWarning
        >

          {/* Layer 1 - Cover the whole page */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-[1]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0 }}
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
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
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
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
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

          Layer 10 - Character with Green Jacket (Left side, overlapping PORTFOLIO, bottom-aligned)
          <motion.div 
            className="absolute inset-0 w-full h-[103%] z-[4] flex items-end justify-start"
            initial={{ opacity: 0, x: -100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-full h-full max-w-2xl ml-[1%]">
              <Image
                src={layer10}
                alt="Character Layer"
                fill
                sizes="(max-width: 768px) 70vw, 65vw"
                className="object-contain object-left-bottom"
                style={{
                  filter: "drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.7))",
                }}
                quality={100}
              />
            </div>
          </motion.div>

          {/* kertas layer */}
          <motion.div 
            className="absolute inset-0 w-full h-[157%] z-[5] flex items-end justify-start"
            initial={{ opacity: 0, x: -100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
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
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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
        </motion.div>

        {/* About Me Section */}
        <section className="relative w-full min-h-screen pt-64 pb-20 px-4 sm:px-8 md:px-12 lg:px-20" suppressHydrationWarning>
          <div className="relative w-full h-full min-h-screen">
            {/* Layer 4 - Hello My Name Is Tag - Upper right, angled */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[10] flex items-start justify-end"
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative mt-[5%] mr-[34%] w-64 sm:w-80 md:w-96 drop-shadow-lg">
                <Image
                  src={layer4}
                  alt="Hello My Name Is Zuhrah"
                  width={400}
                  height={200}
                  className="object-contain drop-shadow-lg"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Layer 2 - Skull Graphic - Above and to left of polaroid */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[9] flex items-start justify-start"
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative mt-[10%] ml-[3%] sm:ml-[5%] md:ml-[2%] w-28 sm:w-36 md:w-44">
                <Image
                  src={layer2}
                  alt="Skull Graphic"
                  width={180}
                  height={180}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Polaroid Photo - Left side, angled */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[8] flex items-center justify-start"
              initial={{ opacity: 0, rotate: -8, x: -50 }}
              whileInView={{ opacity: 1, rotate: 2, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative ml-[8%] sm:ml-[6%] md:ml-[5%] w-72 sm:w-96 md:w-[28rem]">
                <Image
                  src={polaroidPhoto}
                  alt="Zuhrah Photo"
                  width={450}
                  height={560}
                  className="object-contain drop-shadow-lg"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Layer 6 - Yellow Starburst - Overlapping polaroid bottom left */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[9] flex items-center justify-start"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
            >
              <div className="relative ml-[2%] mt-[20%] w-28 sm:w-32 md:w-36">
                <Image
                  src={layer6}
                  alt="Starburst"
                  width={200}
                  height={200}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Layer 3 - Red Exclamation Mark - Overlapping polaroid top right */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[9] flex items-center justify-start"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "backOut" }}
            >
              <div className="relative ml-[10%] -mt-[5%] w-56 sm:w-64 md:w-80">
                <Image
                  src={layer3}
                  alt="Exclamation Mark"
                  width={480}
                  height={480}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* About Me Text */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[7] flex items-center justify-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative mt-[18%] mr-[10%] sm:mr-[8%] md:mr-[5%] max-w-2xl">
                <div className="space-y-4 sm:space-y-6 text-black font-recording-artist">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight uppercase">
                    CREATING VARIOUS VISUAL WORKS HAS BEEN MY HOBBY SINCE ELEMENTARY SCHOOL. I CONTINUED TO PURSUE THIS HOBBY UNTIL I FINALLY ENTERED COLLEGE AND SERIOUSLY STUDIED THIS FIELD.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight uppercase">
                    FILM AND MUSIC ARE MY INSPIRATIONS FOR MY WORK. I LEARNED ALMOST ALL OF THE BASIC KNOWLEDGE I HAVE IN THESE FIELDS ON MY OWN THROUGH THE INTERNET.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
    </div>
  );
}
