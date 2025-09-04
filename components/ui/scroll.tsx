"use client";
import { useState } from "react";
import SectionHeader from "./SectionHead";
import CustomCursor from "./CustomCursor";
import Image from "next/image";

const Board = () => {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const items = [
    {
      type: "text",
      content:
        "My Love for travel\nI’m a good designer & a good observer. When I travel, I explore the world, gain new experiences, and document.",
    },
    {
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c1.jpg",
      text: "Shegoan, Maharashtra",
    },
    {
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c2.jpg",
      text: "Aundh, Maharashtra",
    },
    {
      type: "video",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c3.mp4?v=1",
      text: "Lonavala, Maharashtra",
    },
    {
      type: "video",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c4.mp4?v=2",
      text: "Ashoka Adventure, Nashik",
    },
    {
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c5.jpg",
      text: "Solapur, Maharashtra",
    },
    {
      type: "video",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c6.mp4?v=3",
      text: "Karad, Maharashtra",
    },
    {
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c8.jpg",
      text: "KKWP, Nashik",
    },
    {
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/TanayHingane/Phoenix@main/public/clicks/c9.jpg",
      text: "Kalaram Temple, Nashik",
    },
    // { type: "image", src: "/clicks/c10.jpg", text: "Pune, Maharashtra" },
  ];

  return (
    <div className="relative px-4 md:-mt-28 max-w-2xl mx-4 md:mx-auto">
      <SectionHeader title="My Clicks" description="Watch my clicks :)" />
      <CustomCursor visible={cursorVisible} text={cursorText} />

      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 mt-14">
        {items.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            {item.type === "text" ? (
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow">
                <p className="text-lg font-semibold text-blue-600">
                  {item.content?.split("\n")[0]}
                </p>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {item.content?.split("\n").slice(1).join("\n")}
                </p>
              </div>
            ) : item.type === "image" ? (
              // <img
              //   src={item.src}
              //   alt={`Image ${index}`}
              //   className="w-full rounded-lg shadow"
              //   onMouseEnter={() => {
              //     setCursorText(item.text!);
              //     setCursorVisible(true);
              //   }}
              //   onMouseLeave={() => {
              //     setCursorVisible(false);
              //   }}
              // />
              <Image
                src={item.src!}
                alt={`Image ${index}`}
                width={400}
                height={300}
                className="w-full rounded-lg shadow"
                loading="lazy"
                onMouseEnter={() => {
                  setCursorText(item.text!);
                  setCursorVisible(true);
                }}
                onMouseLeave={() => {
                  setCursorVisible(false);
                }}
              />
            ) : (
              <video
                className="w-full rounded-lg shadow"
                autoPlay
                loop
                muted
                playsInline
                onMouseEnter={() => {
                  setCursorText(item.text!);
                  setCursorVisible(true);
                }}
                onMouseLeave={() => {
                  setCursorVisible(false);
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
