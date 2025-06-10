// import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
// import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
// import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
// import grainImage from "@/assets/images/grain.jpg";
import SectionHead from "@/components/ui/SectionHead";
import Card from "@/components/ui/Card";
import { ArrowRightIcon, CodeXml, CircleCheck } from "lucide-react";
import BgAnimateButton from "./ui/bg-animate-button";

const portfolioProjects = [
  {
    company: "Hobby Project",
    year: "2024-25",
    title: "Snake Game",
    results: [
      { title: "Fast and smooth game experience" },
      { title: "Intuitive and engaging gameplay" },
      { title: "Keyboard supported" },
    ],
    link: "https://snakegamevictus.pages.dev/",
    src: "https://github.com/TanayHingane/snakegamevictus",
    image: "/snake.png",
  },
  {
    company: "Hobby Project",
    year: "2025",
    title: "Portfolio",
    results: [
      { title: "Built with Next.js and Tailwind CSS" },
      { title: "Fully responsive and mobile-friendly" },
      { title: "Exceptional features and animations" },
    ],
    link: "https://tanayhingane.vercel.app/",
    src: "https://github.com/TanayHingane/Victus",
    image: "/portfolio.png",
  },
  {
    company: "Hobby Project",
    year: "2025",
    title: "SmartBalance",
    results: [
      { title: "Budget management made easy" },
      { title: "Expenses tracking and analysis" },
      { title: "Real-time updates and insights" },
      { title: "Budget Reports with graphs" },
    ],
    link: "https://smartbalance03.vercel.app/",
    src: "https://github.com/TanayHingane/SmartBalance",
    image: "/smartbalance.png",
  },
];

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHead
          title="Portfolio Projects"
          description="Check out my portfolio projects"
        />
        <div className="flex flex-col mt-10 md:mt-20 md:mx-15 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              key={project.title}
              style={{
                top: `calc(64px + ${projectIndex * 50}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-sky-400 text-transparent bg-clip-text inline-flex font-poppins uppercase tracking-widest text-sm md:text-base gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-black text-4xl mt-2 md:text-4xl md:mt-4">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-gradient-to-r from-pink-100 to-cyan-100 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex text-sm md:text-base text-gray-900 gap-2"
                      >
                        <CircleCheck className="size-4 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-3 w-full text-white">
                    <a href={project.link} target="_blank">
                      <button className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white h-12 w-full md:w-auto px-5 rounded-xl font-semibold sm:hidden block items-center justify-center gap-2 mt-8">
                        <span>Live Site</span>
                      </button>
                      <BgAnimateButton
                        animation="spin-fast"
                        className="text-white font-semibold hidden sm:block items-center justify-center gap-2 mt-8"
                        rounded="xl"
                        variant="secondary"
                        gradient="ocean"
                      >
                        <span className="inline-flex">
                          Live Site
                          <ArrowRightIcon className="size-3 -rotate-45" />
                        </span>
                      </BgAnimateButton>
                    </a>
                    <a href={project.src} target="_blank">
                      <button className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white rounded-xl h-12 w-full md:w-auto px-5 font-semibold sm:hidden block items-center justify-center gap-2 md:mt-8">
                        <span>Code</span>
                      </button>
                      <BgAnimateButton
                        animation="spin-fast"
                        className="text-white font-semibold hidden sm:block items-center justify-center gap-2 mt-8"
                        rounded="xl"
                        variant="secondary"
                        gradient="ocean"
                      >
                        <span className="inline-flex">
                          Code
                          <CodeXml className="size-4" />
                        </span>
                      </BgAnimateButton>
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-2 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
