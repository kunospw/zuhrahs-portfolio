"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import layer6 from "@/assets/Layer 6.png";
import kertas from "@/assets/kertas 2.png";
import parodiTrainspotting from "@/assets/illustration/parodi trainspotting.png";
import moBetterBlues from "@/assets/illustration/mo better blues.png";
import mantuStarWars from "@/assets/illustration/mantu star wars text.png";
import progressKecil from "@/assets/illustration/progress kecil2.png";
import untitledDesign from "@/assets/illustration/Untitled design (1).png";
import zuhrahConceptArt from "@/assets/illustration/ZUHRAH CONCEPT ART.png";

const illustrations = [
  { src: parodiTrainspotting, alt: "Parodi Trainspotting" },
  { src: moBetterBlues, alt: "Mo Better Blues" },
  { src: mantuStarWars, alt: "Mantu Star Wars" },
  { src: progressKecil, alt: "Progress Kecil" },
  { src: untitledDesign, alt: "Untitled Design" },
  { src: zuhrahConceptArt, alt: "Zuhrah Concept Art" },
];

export default function IllustrationSection() {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(illustrations.length / 2));
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const baseSpacing = 22; // vw units for spacing between images

  // Detect tablet size (md breakpoint: 768px to 1024px)
  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < illustrations.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Stop at the end
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Stop at the beginning
    });
  };

  // Wheel scroll handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Throttle scroll events
    scrollTimeoutRef.current = setTimeout(() => {
      if (e.deltaY > 0) {
        // Scroll down = move to next (right)
        handleNext();
      } else {
        // Scroll up = move to previous (left)
        handlePrev();
      }
    }, 50);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseStart(e.clientX);
    setMouseEnd(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!mouseStart || !mouseEnd) return;
    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      handleNext();
    }
    if (isRightDrag) {
      handlePrev();
    }
    setMouseStart(0);
    setMouseEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setMouseStart(0);
      setMouseEnd(0);
    }
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.section 
      className="relative w-full min-h-screen pt-0 sm:pt-0 md:pt-2 lg:pt-32 pb-0 sm:pb-2 md:pb-3 lg:pb-20 px-4 sm:px-8 md:px-12 lg:px-20" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      suppressHydrationWarning
    >
      <div className="relative w-full max-w-7xl mx-auto min-h-[450px] sm:min-h-[550px] md:min-h-[1300px] lg:min-h-[1100px] xl:min-h-[1200px] 2xl:min-h-[800px]">
        {/* Illustration Title with Starburst - Centered */}
        <motion.div
          className="absolute left-1/2 top-0 z-[2] transform -translate-x-1/2 mt-[1%] sm:mt-[1.5%] md:mt-[2%] lg:mt-[2%] xl:mt-[2%] 2xl:mt-[2%] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2
            className="font-blank-river text-white text-3xl sm:text-4xl md:text-[100px] lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal whitespace-nowrap relative z-[3]"
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
            ILLUSTRATION
          </h2>
          {/* Yellow Starburst - Right side of title */}
          <motion.div
            className="relative z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.8 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src={layer6}
              alt="Starburst"
              width={140}
              height={140}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-64 md:h-64 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-24 2xl:h-24 -mt-4 sm:-mt-6 md:-mt-16 lg:-mt-10 xl:-mt-12 2xl:-mt-14 ml-1 sm:ml-2 md:ml-6 lg:ml-4 xl:ml-5 2xl:-ml-4"
              quality={100}
            />
          </motion.div>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="absolute left-1/2 top-32 sm:top-40 md:-top-[15%] lg:top-14 xl:top-16 2xl:top-18 transform -translate-x-1/2 z-[3] w-full max-w-[95vw] px-4 sm:px-8">
          <motion.div 
            ref={carouselRef}
            className="relative w-full h-[350px] sm:h-[450px] md:h-[1400px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Wrapper with 3D Perspective */}
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                perspective: "1500px",
                transformStyle: "preserve-3d",
              }}
            >
              {illustrations.map((image, index) => {
                // Calculate position relative to current center
                const offset = index - currentIndex;
                
                // Position: negative = left, positive = right, 0 = center
                const pos = offset;

                // Determine which images to show based on current position
                // Show up to 2 images on each side, plus center
                const maxLeft = Math.min(currentIndex, 2); // Max 2 images to the left
                const maxRight = Math.min(illustrations.length - 1 - currentIndex, 2); // Max 2 images to the right
                
                // Only show visible images (5 total: 2 left, center, 2 right)
                const isVisible = 
                  pos === 0 || // Always show center
                  (pos < 0 && pos >= -maxLeft) || // Left side images
                  (pos > 0 && pos <= maxRight); // Right side images
                
                if (!isVisible) return null;

                const isFarLeft = pos === -2;
                const isLeft = pos === -1;
                const isCenter = pos === 0;
                const isRight = pos === 1;
                const isFarRight = pos === 2;

                // Calculate spacing for circular layout (double for tablet)
                const spacing = isTablet ? baseSpacing * 2 : baseSpacing;
                const xOffset = pos * spacing;

                // Double sizes for tablet view
                const width = isTablet
                  ? isCenter 
                    ? "clamp(400px, 48vw, 1300px)" 
                    : (isLeft || isRight)
                    ? "clamp(340px, 40vw, 1100px)" 
                    : "clamp(280px, 34vw, 900px)"
                  : isCenter 
                    ? "clamp(200px, 24vw, 650px)" 
                    : (isLeft || isRight)
                    ? "clamp(170px, 20vw, 550px)" 
                    : "clamp(140px, 17vw, 450px)";

                const height = isTablet
                  ? isCenter 
                    ? "clamp(600px, 72vw, 1900px)" 
                    : (isLeft || isRight)
                    ? "clamp(510px, 60vw, 1600px)" 
                    : "clamp(420px, 50vw, 1300px)"
                  : isCenter 
                    ? "clamp(300px, 36vw, 950px)" 
                    : (isLeft || isRight)
                    ? "clamp(255px, 30vw, 800px)" 
                    : "clamp(210px, 25vw, 650px)";

                return (
                  <motion.div
                    key={index}
                    className="absolute flex items-center justify-center"
                    initial={{
                      x: `calc(${xOffset}vw - 50%)`,
                      y: "-50%",
                      scale: isCenter ? 1 : (isLeft || isRight) ? 0.88 : 0.75,
                      rotateY: `${pos * -18}deg`,
                      opacity: 0,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      width,
                      height,
                      transformOrigin: "center center",
                    }}
                    animate={{
                      x: `calc(${xOffset}vw - 50%)`,
                      y: "-50%",
                      scale: isCenter ? 1 : (isLeft || isRight) ? 0.88 : 0.75,
                      rotateY: `${pos * -18}deg`,
                      opacity: isCenter ? 1 : (isLeft || isRight) ? 0.85 : 0.65,
                      zIndex: isCenter ? 10 : (isLeft || isRight) ? 5 : 2,
                      filter: isCenter ? "blur(0px)" : (isLeft || isRight) ? "blur(0.5px)" : "blur(0.8px)",
                    }}
                    transition={{
                      x: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
                      scale: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                      rotateY: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                      opacity: { duration: 0.2 },
                      zIndex: { duration: 0 },
                      filter: { duration: 0.3 },
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 220px, (max-width: 1024px) 650px, 460px"
                        className="object-contain"
                        quality={100}
                        priority={isCenter}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>

        {/* kertas layer - Bottom right */}
        <motion.div
          className="absolute inset-0 w-full h-[200%] sm:h-[190%] md:h-[200%] lg:h-[200%] z-[3] flex items-end sm:items-end justify-end pointer-events-none"
          initial={{ opacity: 0, x: 100, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative w-full h-full max-w-[2000%] sm:max-w-[120%] md:max-w-[120%] lg:max-w-[110%] xl:max-w-[110%] -mr-[55%] sm:-mr-[60%] md:-mr-[55%] lg:-mr-[25%] xl:-mr-[60%] -mb-24 sm:mb-[8%] md:-mb-[15%] lg:mb-[25%] xl:mb-[40%]">
            <Image
              src={kertas}
              alt="Kertas Layer Bottom Right"
              fill
              sizes="(max-width: 640px) 2000vw, (max-width: 768px) 120vw, 110vw"
              className="object-contain object-right-bottom"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
