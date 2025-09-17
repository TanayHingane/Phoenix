"use client";
import React from "react";
import { NameCard, ProjectCard } from "./ui/namecard";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-pink-100 to-cyan-100 mt-20 md:mt-28 gap-7 md:gap-10 mb-20 md:mb-4 rounded-2xl flex flex-col justify-center items-center h-[500px] md:h-[700px] max-w-[1000] max-h-[600px] min-w-[350px] md:min-w-7xl">
        <div className=" mb-2 mx-5 justify-center items-center flex flex-col">
          <h1 className="text-lg md:text-5xl font-sans font-light text-black font-stretch-condensed">
            Build Awesome Websites with
          </h1>
          <h1 className="text-base md:text-5xl font-pre  text-blue-500">
            Tanay Hingane
          </h1>
        </div>
        <div className="mt-3 mb-3 grid grid-cols-1 md:grid-cols-3 gap-7 mx-3 h-[190] hover:cursor-pointer">
          {/* 1stDiv */}
          <div className="bg-white hidden sm:block md:w-[220] md:h-[270] rounded-xl">
            <a href="#contact">
              <NameCard />
            </a>
          </div>

          {/* 2ndDiv */}
          <div
            className="shadow-md items-center justify-center w-[220] h-[270] rounded-xl"
            onContextMenu={(e) => e.preventDefault()}
          >
            <a href="/about">
              <img
                src={"tpf.jpg"}
                className="object-cover w-full h-full rounded-xl"
                alt="Tanay Hingane"
                draggable={false}
              ></img>
            </a>
          </div>

          {/* 3rdDiv */}
          <div className="bg-white hidden sm:block w-[220] h-[270] rounded-xl">
            <a href="#projects">
              <ProjectCard />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
