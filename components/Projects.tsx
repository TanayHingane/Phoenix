"use client";
import SectionHead from "@/components/ui/SectionHead";

// The data array now primarily uses title, link, and image
const portfolioProjects = [
  {
    title: "SafeBeam",
    link: "http://safebeam03.vercel.app/",
    image: "/proj/SafeBeam03pf.png",
  },
  {
    title: "SmartBalance",
    link: "https://smartbalance03.vercel.app/",
    image: "/proj/SmartBalance.png",
  },

  {
    title: "StudyStack",
    link: "https://studystack01.vercel.app/home",
    image: "/proj/StudyStack.png",
  },
  {
    title: "NutriGenius AI",
    link: "https://nutrigeniusai.vercel.app/",
    image: "/proj/NutriGenius.png",
  },
];

export const Projects = () => {
  return (
    <section
      className="py-16 lg:py-24 flex flex-col items-center justify-center -mt-9 md:-mt-0"
      id="projects"
    >
      <div className="container">
        <SectionHead
          title="Recent Projects"
          description="A showcase of my recent work in collaboration with industry partners."
        />

        {/* Responsive grid for the project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-16 px-4 md:px-0 md:mx-32">
          {portfolioProjects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-lg "
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                // The image will cover the area, and scale up on hover for a nice effect
                className="w-full h-[300] md:h-[500] object-fill transition-transform duration-300 ease-in-out"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
