"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarIcon from "@/assets/navbaricon.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50] p-4 sm:p-6 md:p-8 pointer-events-auto">
      <div className="flex items-center justify-between w-full">
        {/* Navbar Icon - Left side */}
        <Link href="/" className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:opacity-80 transition-opacity">
          <Image
            src={navbarIcon}
            alt="Navbar Icon"
            fill
            className="object-contain"
            quality={100}
          />
        </Link>

        {/* Navigation Links - Right side */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            href="/"
            className={`font-adventure-magazine text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide hover:opacity-80 transition-opacity ${
              pathname === "/" ? "opacity-100" : "opacity-70"
            }`}
            style={{
              textShadow: `
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff,
                0 0 2px #fff
              `,
            }}
          >
            HOME
          </Link>
          <Link
            href="/page2"
            className={`font-adventure-magazine text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide hover:opacity-80 transition-opacity ${
              pathname === "/page2" ? "opacity-100" : "opacity-70"
            }`}
            style={{
              textShadow: `
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff,
                0 0 2px #fff
              `,
            }}
          >
            GALLERY
          </Link>
        </div>
      </div>
    </nav>
  );
}

