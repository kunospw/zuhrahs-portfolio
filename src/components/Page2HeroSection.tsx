"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import skullHero from "@/assets/Page2skullhero.png";
import starHero from "@/assets/Page2starhero.png";
import exclamationHero from "@/assets/Page2exclamationhero.png";
import myWorksText from "@/assets/MY WORKS.png";
import kertas from "@/assets/kertas 2.png";

interface Page2HeroSectionProps {
  isMounted: boolean;
}

export default function Page2HeroSection({ isMounted }: Page2HeroSectionProps) {
  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-0 sm:pb-0 md:pb-2 lg:pb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      suppressHydrationWarning
    >
      {/* Skull Background - Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10"
        initial={{ opacity: 0, x: -50, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          {/* Large sketch skull background */}
          <div className="absolute top-[2%] sm:top-[5%] left-[-2%] sm:left-[8%] md:left-[7%] lg:left-[12%] w-[65%] sm:w-[60%] md:w-[55%] lg:w-[50%] h-[60%] sm:h-[65%] md:h-[70%] lg:h-[75%] mt-59 sm:mt-62 md:mt-74 lg:mt-0 opacity-100">
            <Image
              src={skullHero}
              alt="Skull Background"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 35vw"
              className="object-contain object-left-top"
              quality={100}
            />
          </div>
        </div>
      </motion.div>

      {/* All Stars Composite Image - Larger, covering all star positions */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-30 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          rotate: -1
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.4,
          ease: "easeOut"
        }}
      >
        <div className="relative w-[100%] sm:w-[85%] md:w-[80%] lg:w-[68%] h-[90%] sm:h-[85%] md:h-[90%] lg:h-[88%] mt-18 sm:mt-20 md:mt-28 lg:mt-36 ml-5 sm:ml-12 md:ml-8 lg:ml-15">
          <Image
            src={starHero}
            alt="Stars"
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 75vw, (max-width: 1024px) 70vw, 65vw"
            className="object-contain"
            quality={100}
          />
        </div>
      </motion.div>

      {/* Main "MY WORKS!!" Text Image - Centered */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, scale: 0.7, y: 50, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-[280px] h-[140px] sm:w-[400px] sm:h-[200px] md:w-[550px] md:h-[275px] lg:w-[700px] lg:h-[350px] xl:w-[850px] xl:h-[425px]">
          <Image
            src={myWorksText}
            alt="MY WORKS!!"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 550px, 850px"
            className="object-contain"
            priority
            quality={100}
            style={{
              filter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
      </motion.div>

      {/* All Exclamation Marks Composite Image - Larger, positioned to the right of "WORKS" */}
      <motion.div
        className="absolute top-[46%] sm:top-[32%] md:top-[44.5%] lg:top-[36%] right-[-5%] sm:right-[8%] md:right-[3%] lg:right-[12%] w-[75px] h-[100px] sm:w-[115px] sm:h-[155px] md:w-[140px] md:h-[175px] lg:w-[175px] lg:h-[230px] xl:w-[205px] xl:h-[270px] z-40"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          rotate: -8
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.6, 
          ease: "backOut",
          type: "spring",
          stiffness: 200
        }}
      >
        <Image
          src={exclamationHero}
          alt="Exclamation Marks"
          fill
          sizes="(max-width: 640px) 95px, (max-width: 768px) 115px, (max-width: 1024px) 145px, 205px"
          className="object-contain"
          quality={100}
          style={{
            filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.25))",
          }}
        />
      </motion.div>

      {/* kertas layer - Top right */}
      <motion.div
        className="absolute inset-0 w-full h-[170%] sm:h-[165%] md:h-[170%] lg:h-[170%] z-[5] flex items-start sm:items-start justify-end"
        initial={{ opacity: 0, x: 100, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative w-full h-full max-w-[2000%] sm:max-w-7xl md:max-w-7xl lg:max-w-8xl xl:max-w-8xl -mr-[55%] sm:-mr-[60%] md:-mr-[55%] lg:-mr-[25%] xl:-mr-[30%] mt-48 sm:-mt-[2%] md:mt-[25%] lg:-mt-[18%] xl:-mt-[18%]">
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
    </motion.div>
  );
}