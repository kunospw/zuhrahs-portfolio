"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import layer2 from "@/assets/Layer 2.png";
import layer3 from "@/assets/Layer 3.png";
import layer4 from "@/assets/Layer 4.png";
import layer6 from "@/assets/Layer 6.png";
import polaroidPhoto from "@/assets/WhatsApp Image 2025-10-23 at 10.32.png";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen pt-64 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 -mt-95 sm:mt-0 md:-mt-[40%] lg:mt-[2%] xl:mt-[0%]" suppressHydrationWarning>
      <div className="relative w-full h-full min-h-screen">
        {/* Layer 4 - Hello My Name Is Tag - Upper right, angled */}
        <motion.div
          className="absolute inset-0 w-full h-full z-[10] flex items-start justify-end"
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative -mt-[10%] sm:-mt-[6%] md:-mt-[2%] lg:mt-[2%] mr-[12%] sm:mr-[14%] md:mr-[20%] lg:mr-[24%] xl:mr-[20%] 2xl:mr-[34%] w-40 sm:w-56 md:w-72 lg:w-80 xl:w-[24rem] 2xl:w-[28rem] drop-shadow-lg">
            <Image
              src={layer4}
              alt="Hello My Name Is Zuhrah"
              width={400}
              height={200}
              className="object-contain drop-shadow-lg w-full h-auto"
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
          <div className="relative -mt-[4%] sm:mt-[2%] md:mt-[4%] lg:mt-[5%] xl:mt-[6%] 2xl:mt-[6%] -ml-[2%] sm:-ml-[1%] md:ml-[2%] lg:ml-[3%] xl:ml-[4%] 2xl:ml-[5%] w-20 sm:w-28 md:w-36 lg:w-38 xl:w-38 2xl:w-40">
            <Image
              src={layer2}
              alt="Skull Graphic"
              width={180}
              height={180}
              className="object-contain w-full h-auto"
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
          <div className="relative -ml-[4%] sm:-ml-[5%] md:ml-[4%] lg:ml-[5%] xl:ml-[6%] 2xl:ml-[8%] w-44 sm:w-64 md:w-80 lg:w-96 xl:w-[22rem] 2xl:w-[26rem] -mt-[168%] sm:-mt-[148%] md:-mt-[100%] lg:mt-[2%] xl:mt-[0%]">
            <Image
              src={polaroidPhoto}
              alt="Zuhrah Photo"
              width={450}
              height={560}
              className="object-contain drop-shadow-lg w-full h-auto"
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
          <div className="relative -ml-[8%] sm:ml-[2%] md:ml-0 lg:ml-[4%] xl:ml-[5%] 2xl:ml-[4%] -mt-[140%] sm:mt-[100%] md:-mt-[70%] lg:mt-[22%] xl:mt-[24%] 2xl:mt-[18%] w-20 sm:w-28 md:w-32 lg:w-36 xl:w-38 2xl:w-40">
            <Image
              src={layer6}
              alt="Starburst"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
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
          <div className="relative ml-[6%] sm:ml-[10%] md:ml-[13%] lg:ml-[16%] xl:ml-[16%] 2xl:ml-[13%] -mt-[178%] sm:-mt-[4%] md:-mt-[108%] lg:-mt-[90%] xl:-mt-[80%] 2xl:-mt-[6%] w-32 sm:w-48 md:w-58 lg:w-64 xl:w-64 2xl:w-72">
            <Image
              src={layer3}
              alt="Exclamation Mark"
              width={480}
              height={480}
              className="object-contain w-full h-auto"
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
          <div className="relative -mt-[125%] sm:mt-[15%] md:-mt-[74%] lg:mt-[14%] xl:mt-[16%] 2xl:mt-[18%] -mr-[28%] sm:mr-[6%] md:mr-[0%] lg:mr-[4%] xl:mr-[3%] 2xl:mr-[12%] max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-2xl px-19 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-black font-recording-artist">
              <p className="text-[0.65rem] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl leading-tight sm:leading-snug md:leading-normal uppercase">
                CREATING VARIOUS VISUAL WORKS HAS BEEN MY HOBBY SINCE ELEMENTARY SCHOOL. I CONTINUED TO PURSUE THIS HOBBY UNTIL I FINALLY ENTERED COLLEGE AND SERIOUSLY STUDIED THIS FIELD.
              </p>
              <p className="text-[0.65rem] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl leading-tight sm:leading-snug md:leading-normal uppercase">
                FILM AND MUSIC ARE MY INSPIRATIONS FOR MY WORK. I LEARNED ALMOST ALL OF THE BASIC KNOWLEDGE I HAVE IN THESE FIELDS ON MY OWN THROUGH THE INTERNET.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

