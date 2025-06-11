"use client";
import { Mail, Send, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Avatar } from "./avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function ChatCard() {
  return (
    <div className="w-full max-w-full h-full max-h-full rounded-3xl bg-gray-100 shadow-sm border border-gray-200 p-7 mx-auto">
      {/* Chat messages */}
      <div className="flex gap-3 items-start mb-8">
        <Avatar className="w-10 h-10 rounded-full object-cover">
          <AvatarImage
            src="http://github.com/tanayhingane.png"
            alt="Marco"
            className="w-10 h-10 rounded-full object-cover"
          />
        </Avatar>
        <div>
          <p className="text-sm text-gray-500 font-semibold mb-1">
            Tanay Hingane
          </p>
          <div className="bg-gray-200 rounded-bl-[30px] rounded-r-[30px] px-4 py-2 text-sm text-black max-w-xs">
            want to work together? just send me a mail! I will be happy to help
            🤩
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-10">
        <div className="bg-blue-500 text-white rounded-br-[30px] rounded-l-[30px] px-4 py-2 text-sm max-w-[70%]">
          sounds good 🙏
        </div>
      </div>

      {/* Footer input area */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-4 px-2">
          <a href="mailto:tanayhingane03@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days.">
            <Mail className="text-gray-600 text-xl cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@Tanay.H03">
            <Youtube className="text-gray-600 text-xl cursor-pointer" />
          </a>
        </div>
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="iMessage"
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-sm text-gray-800 focus:outline-none"
          />
          <a href="mailto:tanayhingane03@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days.">
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer">
              <Send />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
