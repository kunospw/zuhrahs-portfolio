"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import background from "@/assets/background.png";
import lari1 from "@/assets/lari 1.png";
import lari2 from "@/assets/lari 2.png";

export default function LoadingSpinner() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const frames = [lari1, lari2];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 75); // Change frame every 75ms for smooth animation

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" suppressHydrationWarning>
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={background}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      {/* Spinner */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-150 md:h-150">
          <Image
            src={isMounted ? frames[currentFrame] : frames[0]}
            alt="Loading..."
            fill
            className="object-contain animate-pulse"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

