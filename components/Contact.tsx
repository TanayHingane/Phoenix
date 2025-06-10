import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento_Grid";
import { Footer } from "./ui/Footer";
import ChatCard from "./ui/ChatCard";
import TweetCard from "./ui/TweetCard";
import LInCard from "./ui/LinkedInCard";

export function Contacts() {
  return (
    <div className="mt-16 md:mt-24" id="contact">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] my-7">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}

const items = [
  {
    // title: "The Dawn of Innovation",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <ChatCard />,
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Digital Revolution",
    // description: "Dive into the transformative power of technology.",
    header: <LInCard />,
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Art of Design",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: <TweetCard />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
