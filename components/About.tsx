import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/About_Grid";
import { Command } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <div className="mt-16 md:mt-32" id="contact">
      <BentoGrid className="max-w-4xl mx-7 md:mx-auto md:auto-rows-[20rem] my-7">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description1={item.description1}
            description2={item.description2}
            description3={item.description3}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[4rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    header: (
      <Image
        src={"/tpp.png"}
        alt="TPP"
        className="object-cover w-full h-[90%] rounded-xl"
        width={500}
        height={500}
      />
    ),
    className: "md:col-span-1 md:row-span-2 h-[500px] md:h-[600px]",
  },
  {
    title: "I'm Tanay Hingane",
    description1: "I am a web developer and designer.",
    description2:
      "I create innovative and user-friendly web experiences using the latest technologies( like Next.js, React.js, TailwindCSS). I am passionate about crafting digital solutions that not only look great but also provide exceptional user experiences.",
    description3: "Let's work together. I'm always open to new opportunities!",
    // header: <Skeleton />,
    className:
      "md:col-span-1 md:row-span-1 h-[280px] md:h-[350px] border md:mt-4",
    icon: "Hello,",
  },
  {
    title: "Recent Activity",
    description1: "Currently getting training on ML using Python in R3 System.",
    className:
      "md:col-span-1 md:row-span-1 h-[127px] md:h-[145px] md:mt-12 border",
    icon: <Command className="h-4 w-4 text-neutral-500" />,
  },
];
