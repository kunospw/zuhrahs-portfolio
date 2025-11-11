"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import layer6 from "@/assets/Layer 6.png";
import kertas from "@/assets/kertas 2.png";
import tandaSeru from "@/assets/tanda seru.png";

export default function EducationExperienceSection() {
  return (
    <section className="relative w-full min-h-screen -mt-120 sm:-mt-40 md:-mt-180 lg:mt-0 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20" suppressHydrationWarning>
      <div className="relative w-full max-w-7xl mx-auto min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1100px] xl:min-h-[1200px] 2xl:min-h-[1300px]">
        {/* Education Section - Left */}

        {/* Yellow Starburst behind Education Title */}
        <motion.div
          className="absolute left-0 top-0 z-[1] ml-[20%] sm:ml-[24%] md:ml-[26%] lg:ml-[28%] xl:ml-[28%] 2xl:ml-[28%] mt-[1%] sm:mt-[1.5%] md:mt-[2%] lg:mt-[2%] xl:mt-[2%] 2xl:mt-[2%]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 2 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative ml-6 -mt-2 sm:-ml-6 sm:-mt-6 md:ml-2 md:-mt-8 lg:-ml-8 lg:-mt-8 xl:-ml-8 xl:-mt-8 2xl:-ml-8 2xl:-mt-8">
            <Image
              src={layer6}
              alt="Starburst"
              width={140}
              height={140}
              className="object-contain w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36"
              quality={100}
            />
          </div>
        </motion.div>

        {/* Education Title */}
        <motion.div
          className="absolute left-0 top-0 z-[2] ml-[2%] sm:ml-[2%] md:ml-[1%] lg:ml-0 xl:ml-0 2xl:ml-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2
            className="font-blank-river text-white text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal whitespace-nowrap"
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
          className="absolute left-[-2%] top-20 sm:top-24 md:top-32 lg:top-32 xl:top-36 2xl:top-40 z-[3] ml-[2%] sm:ml-[2%] md:ml-[2%] lg:ml-[2%] xl:ml-[2%] 2xl:ml-[2%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
            <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-1">●</span>
            <div className="flex flex-col">
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                SEKOLAH AL-FALAH BCCT
              </p>
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                (2011-2023)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Entry 2 */}
        <motion.div
          className="absolute left-[-2%] top-36 sm:top-48 md:top-56 lg:top-56 xl:top-60 2xl:top-64 z-[3] ml-[2%] sm:ml-[2%] md:ml-[2%] lg:ml-[2%] xl:ml-[2%] 2xl:ml-[2%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
            <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-1">●</span>
            <div className="flex flex-col">
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                BINUS UNIVERSITY
              </p>
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-recording-artist font-bold leading-tight tracking-widest">
                (2023-PRESENT)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience Section - Right */}

        {/* Experience Title */}
        <motion.div
          className="absolute right-0 top-0 z-[2] flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 mr-[4%] sm:mr-[4%] md:mr-[5%] lg:mr-[5%] xl:mr-[5%] 2xl:mr-[5%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2
            className="font-blank-river text-white text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal whitespace-nowrap"
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
          <div className="relative -mt-[76%] -mr-[78%] sm:-mt-[48%] sm:-mr-[52%] md:-mt-[56%] md:-mr-[45%] lg:-mt-[45%] xl:-mt-[45%] lg:-mr-[48%] xl:-mt-[45%] xl:-mr-[50%] 2xl:-mt-[56%] 2xl:-mr-[45%]">
            <Image
              src={kertas}
              alt="Decorative Paper"
              width={2800}
              height={2800}
              className="object-contain w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] md:w-[44rem] md:h-[44rem] lg:w-[52rem] lg:h-[52rem] xl:w-[60rem] xl:h-[60rem] 2xl:w-[68rem] 2xl:h-[68rem]"
              quality={100}
            />
          </div>
        </motion.div>

        {/* Red Exclamation Mark */}
        <motion.div
          className="absolute right-0 top-6 sm:top-7 md:top-10 lg:top-8 xl:top-8 2xl:top-8 z-[3] flex items-start justify-end -mr-[6%] sm:-mr-[7%] md:-mr-[8%] lg:-mr-[8%] xl:-mr-[8%] 2xl:-mr-[8%]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 3 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative -mt-3 sm:-mt-1.5 md:-mt-5 lg:-mt-2 xl:-mt-2 2xl:-mt-2 mr-0.5 sm:mr-6 md:mr-5.5 lg:mr-10 xl:mr-12 2xl:mr-12">
            <Image
              src={tandaSeru}
              alt="Exclamation Mark"
              width={70}
              height={70}
              className="object-contain w-8 h-8 sm:w-14 sm:h-12 md:w-16 md:h-14 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20"
              quality={100}
            />
          </div>
        </motion.div>

        {/* Experience Entry 1 */}
        <motion.div
          className="absolute right-0 top-14 sm:top-24 md:top-20 lg:top-[7.5rem] xl:top-32 2xl:top-32 z-[3] text-left w-[50%] sm:w-[48%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl -mr-[8%] sm:-mr-[13%] md:-mr-[10%] lg:-mr-[15%] xl:-mr-[15%] 2xl:-mr-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="text-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-recording-artist font-normal leading-tight space-y-0.5 sm:space-y-0.5 md:space-y-0.5 tracking-wide">
            <p>CREATIVE DIVISION STAFF OF PLAZA DESAIN</p>
            <p>HIMDKV BINUS</p>
            <p>2024</p>
          </div>
        </motion.div>

        {/* Experience Entry 2 */}
        <motion.div
          className="absolute right-0 top-34 sm:top-44 md:top-44 lg:top-[13.5rem] xl:top-56 2xl:top-56 z-[3] text-left w-[48%] sm:w-[48%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl -mr-[6%] sm:-mr-[13%] md:-mr-[10%] lg:-mr-[15%] xl:-mr-[15%] 2xl:-mr-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-recording-artist font-normal leading-tight space-y-0.5 sm:space-y-0.5 md:space-y-0.5 tracking-wide">
            <p>SOCIAL MEDIA TEAM OF KREATOR POOL</p>
            <p>BINUS UNIVERSITY</p>
            <p>2025</p>
          </div>
        </motion.div>

        {/* Experience Entry 3 */}
        <motion.div
          className="absolute right-0 top-54 sm:top-64 md:top-68 lg:top-[19rem] xl:top-80 2xl:top-80 z-[3] text-left w-[45%] sm:w-[48%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl -mr-[3%] sm:-mr-[13%] md:-mr-[10%] lg:-mr-[15%] xl:-mr-[15%] 2xl:-mr-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <div className="text-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-recording-artist font-normal leading-tight space-y-0.5 sm:space-y-0.5 md:space-y-0.5 tracking-wide">
            <p>PART TIME ART COACH AT "ARTLABS"</p>
            <p>LABSCHOOL KEBAYORAN HIGHSCHOOL</p>
            <p>2025</p>
          </div>
        </motion.div>

        {/* Experience Entry 4 */}
        <motion.div
          className="absolute right-0 top-78 sm:top-[21rem] md:top-92 lg:top-[25rem] xl:top-[26rem] 2xl:top-[26rem] z-[3] text-left w-[48%] sm:w-[48%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl -mr-[6%] sm:-mr-[13%] md:-mr-[10%] lg:-mr-[15%] xl:-mr-[15%] 2xl:-mr-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="text-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-recording-artist font-normal leading-tight space-y-0.5 sm:space-y-0.5 md:space-y-0.5 tracking-wide">
            <p>PART TIME DRAWING TEACHER AT "RUANG GAMBAR"</p>
            <p>2025</p>
          </div>
        </motion.div>

        {/* Experience Entry 5 */}
        <motion.div
          className="absolute right-0 top-94 sm:top-[26rem] md:top-110 lg:top-[29.5rem] xl:top-[30.5rem] 2xl:top-[30.5rem] z-[3] text-left w-[48%] sm:w-[48%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl -mr-[6%] sm:-mr-[13%] md:-mr-[10%] lg:-mr-[15%] xl:-mr-[15%] 2xl:-mr-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="text-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-recording-artist font-normal leading-tight space-y-0.5 sm:space-y-0.5 md:space-y-0.5 tracking-wide">
            <p>PUBLICATION AND DOCUMENTATION COORDINATOR OF</p>
            <p>"IMAGINATION DAY"</p>
            <p>HIMDKV BINUS</p>
            <p>2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

