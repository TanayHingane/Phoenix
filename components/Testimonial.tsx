"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHead";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Mr. A. D. Talole",
    position: "Faculty @ K.K. Wagh Polytechnic",
    text: "Tanay is a phenomenal full-stack developer. He built a complex web application for us using Next.js and React, and the results were outstanding. His problem-solving skills are top-notch.",
    avatar: "/avatars/memoji-avatar-1.png",
  },
  {
    name: "Mr. G. B. Katkade",
    position: "HOD @ K.K. Wagh Polytechnic",
    text: "Working with Tanay was a game-changer. He developed a real-world problem-solving project for our company, and his expertise in Tailwind CSS made the UI incredibly polished. Highly recommended!",
    avatar: "/avatars/memoji-avatar-5.png",
  },
  {
    name: "Mr Pravin Jadhav",
    position: "Mentor – My Source of Guidance",
    text: "Tanay has a remarkable ability to turn ideas into reality. His full-stack skills, especially with Next.js and React, allowed us to create a truly innovative product that solves real-world problems.",
    avatar: "/avatars/memoji-avatar-3.png",
  },
  {
    name: "Mr Swapnil Pagare",
    position: "Technical Educator @ R3 Systems",
    text: "Tanay was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: "/avatars/memoji-avatar-1.png",
  },
  {
    name: "Mr. Adarsh Tile",
    position: "Project Collaborator @ NutriGenius Ai",
    text: "Working with Tanay was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: "/avatars/memoji-avatar-5.png",
  },
];

export const Testimonial = () => {
  return (
    <section className="py-16 lg:py-16" id="testimonials">
      <div className="container">
        <SectionHeader
          title="Work Review"
          description="See what people say about me"
        />

        <div className="mt-12 lg:py-4 overflow-hidden relative mx-2 md:mx-14">
          <div className="flex gap-8 scroll-left w-max">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={`${testimonial.name}-${index}`}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300 hover:cursor-pointer"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-sky-700/20 rounded-full inline-flex items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full select-none pointer-events-none"
                          width={56}
                          height={56}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (hover: hover) {
          .scroll-left:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};
