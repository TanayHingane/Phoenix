"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { IconBrandDiscordFilled } from "@tabler/icons-react";
import useSound from "use-sound";

export default function TweetCard() {
  const [play] = useSound("/Discord.mp3", { volume: 0.5 });
  return (
    <div className="max-w-full h-full w-full p-7 rounded-2xl bg-gray-50 shadow-sm border border-gray-200 text-sm font-sans space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-3xl">
          <p className="font-semibold text-gray-800">Victus03</p>
          <p className="text-gray-500">tanay.h03</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
          {/* Replace with your logo if needed */}
          <IconBrandDiscordFilled className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Message Card */}
      <div className="rounded-lg  bg-white  shadow-sm">
        <a
          href="https://discord.com/users/1198554997386915880"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/discord.png"
            alt="Discord post screenshot"
            className="h-29 w-full rounded-lg"
          />
        </a>
      </div>

      {/* CTA Button */}
      <a
        href="https://discord.com/users/1198554997386915880"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`cursor-pointer w-full flex items-center justify-center border border-gray-300 py-2 rounded-full hover:bg-blue-500 hover:text-white transition`}
          onMouseEnter={() => play()}
        >
          <span className="text-sm font-medium">DM ME</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </a>
    </div>
  );
}
