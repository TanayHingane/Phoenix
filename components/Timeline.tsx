"use client";

import React, { useState } from "react";
import SectionHeader from "./ui/SectionHead";
import { Modal } from "./ui/Modal";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

// 1. TYPE DEFINITION FOR A TIMELINE EVENT
interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
  primaryButton?: {
    text: string;
    images: string[];
  };
  secondaryButton?: {
    text: string;
    images: string[];
  };
}

// 2. DATA FOR THE TIMELINE
const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "Full-Stack Development Projects",
    institution: "Personal Portfolio",
    description:
      "Developed and deployed multiple full-stack applications like 'SafeBeam' and 'SmartBalance' using Next.js, React, Appwrite, and Tailwind CSS.",
    // primaryButton: {
    //   text: 'View Projects',
    //   images: ['/portfolio.png', '/safebeam03.png', '/smartbalance.png'],
    // },
    // secondaryButton: {
    //   text: 'View Code',
    //   images: ['/snk.png', '/snakess.png'],
    // },
  },
  {
    year: "2025",
    title: "Industrial Training in Machine Learning",
    institution: "R3 Systems, Nashik",
    description:
      "Completed an intensive training program focused on machine learning and AI, culminating in the development of 'NutriGenius AI,' a meal recommendation engine.",
    primaryButton: {
      text: "View Images",
      images: ["/itr/img1.jpeg", "/itr/img2.jpeg", "/itr/img3.jpeg"],
    },
    secondaryButton: {
      text: "View Certificate",
      images: ["/itr/certificate.jpg"],
    },
  },
];

// 3. MAIN TIMELINE COMPONENT
export const Timeline: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const openModal = (images: string[]) => {
    setModalImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  return (
    <section className="py-16 lg:py-24 bg-white" id="timeline">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Journey"
          description="A brief timeline of my academic and professional milestones."
        />

        <div className="relative mt-12 max-w-2xl mx-auto">
          <div className="absolute left-3 top-3 h-full w-px bg-slate-200"></div>

          <div className="space-y-12">
            {timelineData.map((event, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-500">
                    {event.year}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-blue-600">
                    {event.institution}
                  </p>
                  <p className="mt-2 text-slate-600">{event.description}</p>
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-1 space-y-2 sm:space-y-0">
                    {event.primaryButton && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                            {event.primaryButton.text}
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {event.primaryButton.images.map((src, idx) => (
                              <img
                                key={idx}
                                src={src}
                                alt={`Modal image ${idx + 1}`}
                                className={`w-full h-auto rounded-lg object-contain ${
                                  event.primaryButton!.images.length === 1
                                    ? "md:col-span-2"
                                    : ""
                                }`}
                              />
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {event.secondaryButton && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="md:ml-2 ml-0 inline-block rounded border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 ">
                            {event.secondaryButton.text}
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {event.secondaryButton.images.map((src, idx) => (
                              <img
                                key={idx}
                                src={src}
                                alt={`Modal image ${idx + 1}`}
                                className={`w-full h-auto rounded-lg object-contain ${
                                  event.secondaryButton!.images.length === 1
                                    ? "md:col-span-2"
                                    : ""
                                }`}
                              />
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modalImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Modal image ${index + 1}`}
              className={`w-full h-auto rounded-lg object-contain ${
                modalImages.length === 1 ? "md:col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </Modal>
    </section>
  );
};
