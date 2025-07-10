"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHead";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: "/avatars/memoji-avatar-1.png",
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: "/avatars/memoji-avatar-2.png",
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: "/avatars/memoji-avatar-3.png",
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: "/avatars/memoji-avatar-4.png",
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
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

        <div className="mt-12 lg:py-4 overflow-hidden relative">
          <div className="flex gap-8 scroll-left w-max pr-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={`${testimonial.name}-${index}`}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300 hover:cursor-pointer"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
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
