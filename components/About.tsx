import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento_Grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function About() {
  return (
    <div className="mt-16 md:mt-24" id="contact">
      <BentoGrid className="max-w-4xl mx-7 md:mx-auto md:auto-rows-[20rem] my-7">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
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
    title: "Tanay Hingane",
    header: (
      <img
        src={"/tpp.jpg"}
        className="object-cover w-full h-[90%] rounded-xl"
      ></img>
    ),
    className: "md:col-span-1 md:row-span-2 h-[500px]",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1 h-[300px]",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1 md:row-span-1 h-[160px] ",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
