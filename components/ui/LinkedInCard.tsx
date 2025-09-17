"use client";
import React from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import useSound from "use-sound";

export default function LInCard() {
  const [play] = useSound("/Linked in.mp3", { volume: 0.5 });
  return (
    <div className="pt-9 max-w-full h-full md:h-3/5 w-full p-7 rounded-2xl bg-gray-50 shadow-sm border border-gray-200 text-sm font-sans space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-3xl">
          <p className="font-semibold text-gray-800">Tanay Hingane</p>
          <p className="text-gray-500">tanayhingane</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
          {/* Replace with your logo if needed */}
          <Linkedin className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Message Card */}
      {/* <div className="rounded-lg border-l-2 border-blue-400 bg-white p-3 my-10 space-y-3 shadow-sm">
        <a
          href="https://www.linkedin.com/posts/tanayhingane_introducing-smartbalance-an-expense-activity-7324033153298219008-maqU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfxrR4Bjki8u-v0Y7BHCNZSg-IcjnPE2pY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/LIn.png" alt="LinkedIn post screenshot" />
        </a>
      </div> */}

      {/* CTA Button */}
      <a
        href="https://www.linkedin.com/in/tanayhingane/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="cursor-pointer w-full flex items-center justify-center border border-gray-300 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          onMouseEnter={() => play()}
        >
          <span className="text-sm font-medium">Connect ME</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </a>
    </div>
  );
}
