"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import photoshopLogo from "@/assets/1 (1).png";
import capcutLogo from "@/assets/2 (1).png";
import canvaLogo from "@/assets/3 (1).png";
import ibispaintLogo from "@/assets/4.png";
import afterEffectsLogo from "@/assets/5.png";
import illustratorLogo from "@/assets/6.png";
import clipStudioLogo from "@/assets/7.png";
import bintang from "@/assets/bintang.png";

export default function SkillsSection() {
  return (
    <div className="relative w-full -mt-[850px] sm:-mt-[1000px] md:-mt-[1200px] lg:-mt-[1350px] px-4 sm:px-8 md:px-12 lg:px-20 pointer-events-none" suppressHydrationWarning>
      <div className="relative w-full max-w-7xl mx-auto min-h-[900px] sm:min-h-[1000px] md:min-h-[1100px] lg:min-h-[1200px] xl:min-h-[700px]">
        {/* Skills Section - Dark Red Background */}
        <motion.div
          className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-20 top-40 sm:top-60 md:top-100 lg:top-[340px] w-[58%] sm:w-[75%] md:w-[62%] lg:w-2/3 max-w-[90%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[66%] bg-[#8B0000] p-4 sm:p-6 md:p-8 lg:p-16 z-[4] pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-6 lg:gap-8">
            {/* Titles - Mobile: Stack vertically, Tablet+: Side by side */}
            <motion.div
              className="flex flex-col sm:flex-row md:flex-row items-start sm:items-center md:items-center gap-2 sm:gap-4 md:gap-12 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* SOFTWARE SKILLS Title - Always at top */}
              <h3 className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-recording-artist font-bold tracking-wider sm:tracking-widest md:tracking-widest lg:tracking-widest whitespace-nowrap">
                SOFTWARE SKILLS:
              </h3>
              {/* LANGUAGE SKILLS Title - Hidden on mobile, shown on tablet+ */}
              <h3 className="hidden sm:block text-white text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-recording-artist font-bold md:ml-12 lg:ml-[12%] tracking-wider sm:tracking-widest md:tracking-widest lg:tracking-widest whitespace-nowrap">
                LANGUAGE SKILLS:
              </h3>
            </motion.div>

            {/* Content Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-2 gap-6 md:gap-8 lg:gap-8">
              {/* Software Skills */}
              <div className="relative">
                {/* Software Logos Grid */}
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 relative max-w-[280px] sm:max-w-none md:max-w-none">
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
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
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
                      quality={100}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Language Skills */}
              <div className="relative">
                {/* LANGUAGE SKILLS Title - Mobile only, shown above language content */}
                <motion.h3
                  className="sm:hidden text-white text-lg font-recording-artist font-bold tracking-wider whitespace-nowrap mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  LANGUAGE SKILLS:
                </motion.h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Indonesian */}
                  <motion.div
                    className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-recording-artist font-normal whitespace-nowrap">INDONESIAN</span>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src={bintang}
                          alt="Star"
                          width={24}
                          height={24}
                          className="object-contain w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          quality={100}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* English */}
                  <motion.div
                    className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  >
                    <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-recording-artist font-normal whitespace-nowrap">ENGLISH</span>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Image
                          key={i}
                          src={bintang}
                          alt="Star"
                          width={24}
                          height={24}
                          className="object-contain w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
    </div>
  );
}