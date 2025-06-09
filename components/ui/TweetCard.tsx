import React from "react";
import { ArrowRight, Twitter } from "lucide-react";

export default function TweetCard() {
  return (
    <div className="max-w-full h-full p-7 rounded-2xl bg-gray-50 shadow-sm border border-gray-200 text-sm font-sans space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-lg">
          <p className="font-semibold text-gray-800">Tanay Hingane</p>
          <p className="text-gray-500">t.hingane</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
          {/* Replace with your logo if needed */}
          <Twitter className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Message Card */}
      <p className="text-gray-800 text-lg my-7 leading-relaxed">
        i get computers ‘puting ✹<br />
        ai design{" "}
        <a href="#" className="text-blue-500 hover:underline">
          @figma
        </a>{" "}
        ✹ prev{" "}
        <a href="#" className="text-blue-500 hover:underline">
          @diagram
        </a>
      </p>

      {/* CTA Button */}
      <button className="cursor-pointer w-full flex items-center justify-center border border-gray-300 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
        <span className="text-sm font-medium">DM ME</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}
