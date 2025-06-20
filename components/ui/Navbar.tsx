"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useSound } from "use-sound";

export const FloatingNav = ({
  navItems,
  // logo,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  const [play] = useSound("/tanay.mp3", { volume: 0.5 });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto rounded-full bg-white/60 backdrop-blur-xs z-[5000] px-7 py-3 items-center justify-center space-x-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {/* {logo} */}
        <div className="fixed flex -left-4 md:-left-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 md:bg-white/70 backdrop-blur-3xl cursor-pointer border shadow items-center justify-center">
          {/* <a href="/"> */}
          <span
            className="text-blue-600 font-bold text-sm md:text-2xl"
            onClick={() => play()}
          >
            त
          </span>
          {/* </a> */}
        </div>

        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn("relative text-black items-center flex space-x-1")}
          >
            <span className="block sm:block ">{navItem.icon}</span>
            <span className="text-xs md:text-base">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
