import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blankRiver = localFont({
  src: "../assets/fonts/Blank River.ttf",
  variable: "--font-blank-river",
  display: "swap",
});

const recordingArtist = localFont({
  src: "../assets/fonts/Recording Artist JNL.otf",
  variable: "--font-recording-artist",
  display: "swap",
});

const adventureMagazine = localFont({
  src: "../assets/fonts/Adventure Magazine.otf",
  variable: "--font-adventure-magazine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zuhrah's Portfolio",
  description: "Zuhrah's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blankRiver.variable} ${recordingArtist.variable} ${adventureMagazine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
