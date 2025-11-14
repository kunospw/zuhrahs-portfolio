"use client";

import { useState, useEffect } from "react";
import background from "@/assets/background.png";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationExperienceSection from "@/components/EducationExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

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
      className="relative w-full min-h-screen overflow-hidden"
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
        <Navbar />
        <HeroSection isMounted={isMounted} />
        <AboutSection />
        <EducationExperienceSection />
        <SkillsSection />
        <FooterSection />
      </div>
    </div>
  );
}
