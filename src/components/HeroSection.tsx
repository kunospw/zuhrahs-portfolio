"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import layer1 from "@/assets/Layer 1.png";
import layer10 from "@/assets/Layer 10.png";
import layer11 from "@/assets/Layer 11.png";
import kertas from "@/assets/kertas 2.png";

interface HeroSectionProps {
  isMounted: boolean;
}

export default function HeroSection({ isMounted }: HeroSectionProps) {
  return (
    <motion.div
      className="relative w-full min-h-screen -mt-20 sm:mt-0 md:-mt-[20%] lg:mt-[2%] xl:mt-[0%]"
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
        <div className="relative -mt-[20%] ml-[52%]">
          <h2
            className="font-blank-river text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] font-normal whitespace-nowrap"
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
        className="absolute inset-0 w-full h-full sm:h-[103%] z-[4] flex items-end sm:items-end justify-start"
        initial={{ opacity: 0, x: -100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative w-full h-full max-w-[12rem] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl -ml-[8%] sm:ml-[4%] md:-ml-[12%] lg:ml-[4%] xl:ml-[4%] mb-66 sm:mb-90 md:mb-80 lg:mb-74 xl:mb-0">
          <Image
            src={layer10}
            alt="Character Layer"
            fill
            sizes="(max-width: 640px) 48vw, (max-width: 768px) 70vw, (max-width: 1024px) 65vw, 65vw"
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
        className="absolute inset-0 w-full h-[157%] z-[5] flex items-end sm:items-end justify-start"
        initial={{ opacity: 0, x: -100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative w-full h-full max-w-[2000%] sm:max-w-6xl md:max-w-6xl lg:max-w-7xl xl:max-w-8xl -ml-[38%] sm:-ml-[22%] md:-ml-[35%] lg:-ml-[15%] xl:-ml-[24%] mb-140 sm:mb-0 md:mb-170 lg:mb-0 xl:-mb-8">
          <Image
            src={kertas}
            alt="Kertas Layer"
            fill
            sizes="(max-width: 640px) 2000vw, (max-width: 768px) 100vw, 100vw"
            className="object-contain object-left-bottom"
            quality={100}
          />
        </div>
      </motion.div>

      {/* kertas layer - Top right */}
      <motion.div
        className="absolute inset-0 w-full h-[160%] z-[5] flex items-start sm:items-start justify-end"
        initial={{ opacity: 0, x: 100, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative w-full h-full max-w-[2000%] sm:max-w-6xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl -mr-[55%] sm:-mr-[60%] md:-mr-[60%] lg:-mr-[35%] xl:-mr-[44%] mt-48 sm:-mt-[2%] md:mt-[25%] lg:-mt-[18%] xl:-mt-[18%]">
          <Image
            src={kertas}
            alt="Kertas Layer Top Right"
            fill
            sizes="(max-width: 640px) 2000vw, (max-width: 768px) 100vw, 100vw"
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
        <div className="relative mb-70 sm:mb-[5%] md:mb-[45%] lg:mb-[4%] xl:mb-[4%] mr-[5%] sm:mr-[20%] md:mr-[6%] lg:mr-[15%] xl:mr-[20%] text-left px-4 sm:px-0">
          <p
            className="font-adventure-magazine text-black text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl italic leading-tight"
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
  );
}
