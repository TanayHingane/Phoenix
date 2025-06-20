import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Edu_AU_VIC_WA_NT_Hand,
  Edu_AU_VIC_WA_NT_Pre,
} from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const eduAUVICWA = Edu_AU_VIC_WA_NT_Hand({
  variable: "--font-edu-au-vic-wa-nt-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const eduAUVICWAPre = Edu_AU_VIC_WA_NT_Pre({
  variable: "--font-edu-au-vic-wa-nt-pre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tanay Hingane",
  description: "Tanay Hingane's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Resume", link: "/" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${eduAUVICWA.variable} ${eduAUVICWAPre.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}

//mantine mage react-together
