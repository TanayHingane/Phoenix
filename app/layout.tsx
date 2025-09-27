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
  title: "Tanay Hingane - Full Stack Developer",
  description:
    "Portfolio of Tanay Hingane, a full-stack developer specializing in Next.js, React, and TypeScript.",
  keywords: [
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
    "Tanay Hingane",
    "Tanay Hingane portfolio",
    "Tanay Hingane developer",
    "Tanay Hingane 03",
    "tanayhingane03",
    "tanayhingane",
    "hingane",
  ],
  authors: [
    { name: "Tanay Hingane", url: "https://tanayhingane03.vercel.app/" },
  ],
  openGraph: {
    title: "Tanay Hingane - Full Stack Developer",
    description:
      "Portfolio of Tanay Hingane, a full-stack developer specializing in Next.js, React, and TypeScript.",
    url: "https://tanayhingane03.vercel.app/",
    siteName: "Tanay Hingane's Portfolio",
    images: [
      {
        url: "https://tanayhingane03.vercel.app/tppp.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Tanay Hingane's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanay Hingane - Full Stack Developer",
    description:
      "Portfolio of Tanay Hingane, a full-stack developer specializing in Next.js, React, and TypeScript.",
    images: ["https://tanayhingane03.vercel.app/tpp.jpg"], // Must be an absolute URL
  },
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
        <meta
          name="google-site-verification"
          content="BbWKkb9nYRja3XHwtN7JOnQmxh4AQo1Rea5eWW1Zueo"
        />
        <style>
          {`
            img, video {
              user-select: none;
              -webkit-user-drag: none;
              pointer-events: none;
            }
            body {
              -webkit-user-select: none; /* Safari */
              -ms-user-select: none; /* IE 10 and IE 11 */
              user-select: none; /* Standard syntax */
            }
          `}
        </style>
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
