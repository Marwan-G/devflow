import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 600 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/spaceGrotesk-VF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 600 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Stackoverflow clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
