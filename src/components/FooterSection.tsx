"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import instagramIcon from "@/assets/1.png";
import behanceIcon from "@/assets/2.png";
import linkedinIcon from "@/assets/3.png";
import skullImage from "@/assets/skull.png";
import popupImage from "@/assets/popup.png";
import redBackground from "@/assets/coba duulu.png";

export default function FooterSection() {
  return (
    <section 
      className="relative h-auto overflow-hidden mt-[-200] sm:mt-40 md:mt-[-400] lg:mt-10"
      style={{ 
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
      }}
      suppressHydrationWarning
    >
      {/* Footer Background - Full width */}
      <div 
        className="absolute w-full h-full z-[1] -mt-15 sm:-mt-40 md:-mt-46 lg:-mt-120"
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
        className="absolute bottom-0 right-[-10] sm:bottom-18 sm:right-[-20] md:bottom-0 md:right-0 z-[2]"
        initial={{ opacity: 0, x: 50, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative w-30 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto">
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
      <div className="relative z-[3] flex flex-col items-center justify-center py-8 sm:py-16 md:py-20 pb-8 sm:pb-28 md:pb-32">
        <div className="relative mb-6 sm:mb-8 md:mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 30 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h2
              className="font-blank-river text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-normal whitespace-nowrap italic"
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
                WebkitTextStroke: "3px #000",
                paintOrder: "stroke fill",
              }}
            >
              CONTACT ME!
            </h2>
          </motion.div>

          {/* Popup Graphic - Near CONTACT ME! text */}
          <motion.div
            className="absolute top-10 sm:top-10 md:top-12 right-8 sm:right-20 md:right-24 lg:right-28 -mt-2 sm:-mt-3 md:-mt-4 scale-[2.5] sm:scale-[5]"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
          >
            <div className="relative w-6 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-auto">
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
          className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8"
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
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
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
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
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
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
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
          className="px-4 mt-[-4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 6 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="mailto:zmazizah22004@gmail.com"
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-recording-artist font-normal hover:underline transition-opacity hover:opacity-80"
          >
            zmazizah22004@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}


