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
import tandaSeru from "@/assets/tanda seru.png";
import photoshopLogo from "@/assets/1 (1).png";
import capcutLogo from "@/assets/2 (1).png";
import canvaLogo from "@/assets/3 (1).png";
import ibispaintLogo from "@/assets/4.png";
import afterEffectsLogo from "@/assets/5.png";
import illustratorLogo from "@/assets/6.png";
import clipStudioLogo from "@/assets/7.png";
import bintang from "@/assets/bintang.png";
import LoadingSpinner from "@/components/LoadingSpinner";
import instagramIcon from "@/assets/1.png";
import behanceIcon from "@/assets/2.png";
import linkedinIcon from "@/assets/3.png";
import skullImage from "@/assets/skull.png";
import popupImage from "@/assets/popup.png";
import redBackground from "@/assets/coba duulu.png";

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
          className="relative w-full min-h-screen -mt-32 sm:mt-0"
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
            <div className="relative w-full h-full max-w-[12rem] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl -ml-[8%] sm:ml-[4%] mb-66 sm:mb-0">
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
            <div className="relative w-full h-full max-w-[2000%] sm:max-w-6xl -ml-[32%] sm:-ml-[22%] mb-138 sm:mb-0">
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
            <div className="relative w-full h-full max-w-[2000%] sm:max-w-6xl -mr-[55%] sm:-mr-[40%] mt-48 sm:-mt-[15%]">
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
            <div className="relative mb-70 sm:mb-[5%] mr-[5%] sm:mr-[20%] text-left px-4 sm:px-0">
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

        {/* About Me Section */}
        <section className="relative w-full min-h-screen pt-64 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 -mt-110 sm:mt-0" suppressHydrationWarning>
          <div className="relative w-full h-full min-h-screen">
            {/* Layer 4 - Hello My Name Is Tag - Upper right, angled */}
            <motion.div
              className="absolute inset-0 w-full h-full z-[10] flex items-start justify-end"
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative -mt-[8%] mr-[16%] sm:mr-[20%] w-40 sm:w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] drop-shadow-lg">
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
              <div className="relative -mt-[6%] -ml-[2%] sm:ml-[5%] md:ml-[2%] w-20 sm:w-36 md:w-44">
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
              className="absolute inset-0 w-full h-full z-[8] flex items-center sm:items-center justify-start"
              initial={{ opacity: 0, rotate: -8, x: -50 }}
              whileInView={{ opacity: 1, rotate: 2, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative -ml-[8%] sm:ml-[6%] md:ml-[5%] w-44 sm:w-96 md:w-[28rem] -mt-130 sm:mt-0">
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
              <div className="relative ml-[10%] sm:ml-[10%] -mt-[5%] w-32 sm:w-64 md:w-80">
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

        {/* Education, Experience, and Skills Section */}
        <section className="relative w-full min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20" suppressHydrationWarning>
          <div className="relative w-full max-w-7xl mx-auto min-h-[1200px]">
            {/* Education Section - Left */}

            {/* Yellow Starburst behind Education Title */}
            <motion.div
              className="absolute left-0 top-0 z-[1] ml-[28%] mt-[2%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 2 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative -ml-8 -mt-8">
                <Image
                  src={layer6}
                  alt="Starburst"
                  width={140}
                  height={140}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Education Title */}
            <motion.div
              className="absolute left-0 top-0 z-[2]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h2
                className="font-blank-river text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal whitespace-nowrap"
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
                EDUCATION
              </h2>
            </motion.div>

            {/* Education Entry 1 */}
            <motion.div
              className="absolute left-0 top-24 sm:top-28 md:top-36 z-[3] ml-[2%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-black text-2xl sm:text-3xl md:text-4xl mt-1">●</span>
                <div className="flex flex-col">
                  <p className="text-black text-lg sm:text-xl md:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                    SEKOLAH AL-FALAH BCCT
                  </p>
                  <p className="text-black text-lg sm:text-xl md:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                    (2011-2023)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div
              className="absolute left-0 top-48 sm:top-56 md:top-60 z-[3] ml-[2%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-black text-2xl sm:text-3xl md:text-4xl mt-1">●</span>
                <div className="flex flex-col">
                  <p className="text-black text-lg sm:text-xl md:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                    BINUS UNIVERSITY
                  </p>
                  <p className="text-black text-lg sm:text-xl md:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                    (2023-PRESENT)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Section - Right */}

            {/* Experience Title */}
            <motion.div
              className="absolute right-0 top-0 z-[2] flex items-center gap-2 md:gap-3 mr-[5%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h2
                className="font-blank-river text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal whitespace-nowrap"
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
                EXPERIENCE
              </h2>
            </motion.div>

            {/* Paper Layer - Top Right Corner */}
            <motion.div
              className="absolute right-0 top-0 z-[4] flex items-start justify-end"
              initial={{ rotate: 15, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              <div className="relative -mt-[35%] -mr-[50%]">
                <Image
                  src={kertas}
                  alt="Decorative Paper"
                  width={1200}
                  height={1200}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Red Exclamation Mark */}
            <motion.div
              className="absolute right-0 top-8 z-[3] flex items-start justify-end -mr-[8%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 3 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative -mt-2 mr-8 md:mr-12">
                <Image
                  src={tandaSeru}
                  alt="Exclamation Mark"
                  width={70}
                  height={70}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Experience Entry 1 */}
            <motion.div
              className="absolute right-0 top-24 sm:top-28 md:top-32 z-[3] text-left w-[50%] max-w-2xl -mr-[15%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="text-black text-base sm:text-lg md:text-xl font-recording-artist font-normal leading-tight space-y-0.5 tracking-wide">
                <p>CREATIVE DIVISION STAFF OF PLAZA DESAIN</p>
                <p>HIMDKV BINUS</p>
                <p>2024</p>
              </div>
            </motion.div>

            {/* Experience Entry 2 */}
            <motion.div
              className="absolute right-0 top-40 sm:top-48 md:top-56 z-[3] text-left w-[50%] max-w-2xl -mr-[15%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-black text-base sm:text-lg md:text-xl font-recording-artist font-normal leading-tight space-y-0.5 tracking-wide">
                <p>SOCIAL MEDIA TEAM OF KREATOR POOL</p>
                <p>BINUS UNIVERSITY</p>
                <p>2025</p>
              </div>
            </motion.div>

            {/* Experience Entry 3 */}
            <motion.div
              className="absolute right-0 top-56 sm:top-68 md:top-80 z-[3] text-left w-[50%] max-w-2xl -mr-[15%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <div className="text-black text-base sm:text-lg md:text-xl font-recording-artist font-normal leading-tight space-y-0.5 tracking-wide">
                <p>PART TIME ART COACH AT "ARTLABS"</p>
                <p>LABSCHOOL KEBAYORAN HIGHSCHOOL</p>
                <p>2025</p>
              </div>
            </motion.div>

            {/* Experience Entry 4 */}
            <motion.div
              className="absolute right-0 top-72 sm:top-88 md:top-104 z-[3] text-left w-[50%] max-w-2xl -mr-[15%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="text-black text-base sm:text-lg md:text-xl font-recording-artist font-normal leading-tight space-y-0.5 tracking-wide">
                <p>PART TIME DRAWING TEACHER AT "RUANG GAMBAR"</p>
                <p>2025</p>
              </div>
            </motion.div>

            {/* Experience Entry 5 */}
            <motion.div
              className="absolute right-0 top-88 sm:top-108 md:top-122 z-[3] text-left w-[50%] max-w-2xl -mr-[15%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <div className="text-black text-base sm:text-lg md:text-xl font-recording-artist font-normal leading-tight space-y-0.5 tracking-wide">
                <p>PUBLICATION AND DOCUMENTATION COORDINATOR OF</p>
                <p>"IMAGINATION DAY"</p>
                <p>HIMDKV BINUS</p>
                <p>2025</p>
              </div>
            </motion.div>

            {/* Skills Section - Dark Red Background */}
            <motion.div
              className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-20 top-80 sm:top-96 md:top-[340px] w-2/3 max-w-[66%] bg-[#8B0000] p-8 sm:p-12 md:p-16 z-[4]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Titles Inline */}
                <motion.div
                  className="flex items-center gap-4 md:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-recording-artist font-bold tracking-widest">
                    SOFTWARE SKILLS:
                  </h3>
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-recording-artist font-bold ml-[12%] tracking-widest">
                    LANGUAGE SKILLS:
                  </h3>
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Software Skills */}
                  <div className="relative">
                    {/* Software Logos Grid */}
                    <div className="grid grid-cols-4 gap-0.5 sm:gap-1 relative">
                      {/* Clip Studio Paint Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                      >
                        <Image
                          src={clipStudioLogo}
                          alt="Clip Studio Paint"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* Photoshop Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      >
                        <Image
                          src={photoshopLogo}
                          alt="Adobe Photoshop"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* Illustrator Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                      >
                        <Image
                          src={illustratorLogo}
                          alt="Adobe Illustrator"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* After Effects Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          src={afterEffectsLogo}
                          alt="Adobe After Effects"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* Canva Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                      >
                        <Image
                          src={canvaLogo}
                          alt="Canva"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* IbisPaint Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      >
                        <Image
                          src={ibispaintLogo}
                          alt="IbisPaint"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>

                      {/* CapCut Logo */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                      >
                        <Image
                          src={capcutLogo}
                          alt="CapCut"
                          width={60}
                          height={60}
                          className="object-contain"
                          quality={100}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Language Skills */}
                  <div className="relative">
                    <div className="space-y-4">
                      {/* Indonesian */}
                      <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                      >
                        <span className="text-white text-lg sm:text-xl md:text-2xl font-recording-artist font-normal">INDONESIAN</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src={bintang}
                              alt="Star"
                              width={24}
                              height={24}
                              className="object-contain"
                              quality={100}
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* English */}
                      <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                      >
                        <span className="text-white text-lg sm:text-xl md:text-2xl font-recording-artist font-normal">ENGLISH</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <Image
                              key={i}
                              src={bintang}
                              alt="Star"
                              width={24}
                              height={24}
                              className="object-contain"
                              quality={100}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer Section - Separated parts for full width */}
      <section 
        className="relative h-auto overflow-hidden"
        style={{ 
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          marginTop: '-30rem',
        }}
        suppressHydrationWarning
      >
        {/* Footer Background - Full width */}
        <div 
          className="absolute w-full h-full z-[1] -mt-120"
          style={{
            width: '145%',
            left: '-20%',
            top: 0,
            right: 'auto',
          }}
        >
          <Image
            src={redBackground}
            alt="Footer Background"
            className="object-cover"
            style={{
              objectPosition: 'center top',
            }}
            quality={100}
          />
        </div>

        {/* Skull Image - Bottom Right */}
        <motion.div
          className="absolute bottom-0 right-0 z-[2]"
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 h-auto">
            <Image
              src={skullImage}
              alt="Skull Character"
              width={400}
              height={400}
              className="object-contain"
              quality={100}
            />
          </div>
        </motion.div>

        {/* CONTACT ME! Text with Popup - Centered */}
        <div className="relative z-[3] flex flex-col items-center justify-center py-20 pb-32">
          <div className="relative mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 30 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h2
                className="font-blank-river text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal whitespace-nowrap italic"
                style={{
                  textShadow: `
                    -3px -3px 0 #000,
                    3px -3px 0 #000,
                    -3px 3px 0 #000,
                    3px 3px 0 #000,
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000
                  `,
                  WebkitTextStroke: "4px #000",
                  paintOrder: "stroke fill",
                }}
              >
                CONTACT ME!
              </h2>
            </motion.div>

            {/* Popup Graphic - Near CONTACT ME! text */}
            <motion.div
              className="absolute top-12 right-28 -mt-4"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 5, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
            >
              <div className="relative w-16 sm:w-20 md:w-24 h-auto">
                <Image
                  src={popupImage}
                  alt="Popup Graphic"
                  width={100}
                  height={100}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>

          {/* Social Media Icons */}
          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 6 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/mcscarn.png/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16">
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={64}
                  height={64}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </a>

            {/* Behance Icon */}
            <a
              href="https://www.behance.net/zuhrahmeutia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
              aria-label="Behance"
            >
              <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16">
                <Image
                  src={behanceIcon}
                  alt="Behance"
                  width={64}
                  height={64}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/zuhrah-meutia-azizah-2a432a300/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16">
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={64}
                  height={64}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </a>
          </motion.div>

          {/* Email Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 6 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <a
              href="mailto:zmazizah22004@gmail.com"
              className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-recording-artist font-normal hover:underline transition-opacity hover:opacity-80"
            >
              zmazizah22004@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
