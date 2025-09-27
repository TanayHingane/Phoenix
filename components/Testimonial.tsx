"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import SectionHeader from "./ui/SectionHead";

// TYPE DEFINITION
interface TestimonialType {
  name: string;
  position: string;
  text: string;
  avatar: string;
}

// DATA ARRAY
const testimonials: TestimonialType[] = [
  {
    name: "Mr. A. D. Talole",
    position: "Faculty @ K.K. Wagh Polytechnic",
    text: "Tanay is a <strong>phenomenal full-stack developer</strong>. He built a complex web application for us using Next.js and React, and the results were outstanding. His problem-solving skills are top-notch.",
    avatar: "/avatars/user.jpg",
  },
  {
    name: "Mr. G. B. Katkade",
    position: "HOD @ K.K. Wagh Polytechnic",
    text: "Working with Tanay was a <strong>game-changer</strong>. He developed a real-world problem-solving project for our company, and his expertise in Tailwind CSS made the UI incredibly polished. Highly recommended!",
    avatar: "/avatars/user.jpg",
  },
  {
    name: "Mr Pravin Jadhav",
    position: "Mentor – My Source of Guidance",
    text: "Tanay has a <strong>remarkable ability to turn ideas into reality</strong>. His full-stack skills allowed us to create a truly innovative product that solves real-world problems.",
    avatar: "/avatars/user.jpg",
  },
  {
    name: "Mr Swapnil Pagare",
    position: "Technical Educator @ R3 Systems",
    text: "Tanay was instrumental in transforming our website into a <strong>powerful marketing tool</strong>. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: "/avatars/user.jpg",
  },
  {
    name: "Mr. Adarsh Tile",
    position: "Project Collaborator @ NutriGenius Ai",
    text: "Working with Tanay was a pleasure. His expertise in frontend development <strong>brought our designs to life</strong> in a way we never imagined. The website has exceeded our expectations.",
    avatar: "/avatars/user.jpg",
  },
];

// SVG UTILITY COMPONENTS
interface SvgProps {
  className?: string;
}
const QuotationMark: React.FC<SvgProps> = ({ className }) => (
  <svg
    className={`absolute ${className}`}
    width="106"
    height="80"
    viewBox="0 0 106 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.2044 79.2H2.35437L28.1044 0.799988H60.0044L48.2044 79.2ZM91.8044 79.2H45.9544L71.7044 0.799988H103.604L91.8044 79.2Z"
      fill="#EEF2FF"
    />
  </svg>
);
const Arrow: React.FC<SvgProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33203 1.16699L14.1654 7.00033L8.33203 12.8337M13.582 7.00033H0.832031"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// MAIN COMPONENT
export const Testimonial: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 lg:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:pl-32">
        {/* Main layout is now a flex container for two columns on large screens */}
        <div className="lg:flex lg:gap-8">
          {/* Column 1: Mobile Header Card */}
          <div className="mb-8 lg:mb-0 md:hidden block">
            <SectionHeader
              title="What it's like working with me"
              description="Some kind words"
            />
          </div>

          {/* Column 1: Static Header Card */}
          <div className="flex-shrink-0 lg:w-1/5 mb-8 lg:mb-0 hidden md:block">
            <div className="flex flex-col justify-between h-[380px] bg-slate-50 rounded-2xl p-8">
              <h2 className="text-4xl text-blue-600 font-serif italic">
                What it's like working with me
              </h2>
              <div>
                {/* <QuotationMark className="bottom-0 left-0 w-16 h-auto opacity-50" /> */}
                <p className="font-semibold text-slate-700">Some kind words</p>
              </div>
            </div>
          </div>

          {/* Column 2: Carousel of Testimonials */}
          <div className="lg:w-2/3 relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {/* Testimonial Slides are mapped here */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="embla__slide relative flex-[0_0_100%] md:flex-[0_0_50%] mx-4"
                  >
                    <div className="relative flex flex-col h-[380px] bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                      <QuotationMark className="top-28 left-8 w-8 h-auto" />
                      <QuotationMark className="bottom-8 right-8 w-8 h-auto transform scale-x-[-1] scale-y-[-1]" />
                      <div className="flex items-center gap-4 mb-6 z-10">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full flex-shrink-0"
                        />
                        <div>
                          <p className="font-bold text-slate-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-slate-600">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p
                        className="text-slate-700 leading-relaxed z-10 pt-9 text-base md:text-xl"
                        dangerouslySetInnerHTML={{ __html: testimonial.text }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons are positioned relative to this column */}
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous testimonial"
              className="absolute top-1/2 -translate-y-1/2 -left-5 size-9 md:hidden block rounded-full flex items-center justify-center bg-blue-600 border border-slate-200 text-white disabled:opacity-40"
            >
              <Arrow className="w-4 h-auto transform -scale-x-100" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next testimonial"
              className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-28 size-9 md:size-12 rounded-full flex items-center justify-center bg-blue-600 border border-slate-200 text-white disabled:opacity-40"
            >
              <Arrow className="w-4 h-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
