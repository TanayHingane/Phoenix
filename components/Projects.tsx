// import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
// import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
// import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
// import Image from "next/image";
// import grainImage from "@/assets/images/grain.jpg";
import SectionHead from "@/components/ui/SectionHead";
import Card from "@/components/ui/Card";
import { ArrowRightIcon, CodeXml, CircleCheck } from "lucide-react";
// import BgAnimateButton from "./ui/bg-animate-button";

const portfolioProjects = [
  {
    company: "SBA Inc.",
    year: "2024-25",
    title: "Landing Page for Architectural Firm",
    results: [
      { title: "Comprehensive service showcase" },
      { title: "Seamless appointment booking" },
      { title: "Enhanced user engagement by 60%" },
    ],
    link: "https://www.sunilbhor.com/",
    src: "https://github.com/Arsenic-01/SBA",
    // image: tpp.JPG,
  },
  {
    company: "K.K.Wagh Polytechnic",
    year: "2025",
    title: "StudyStack",
    results: [
      { title: "Helped 300+ students access notes" },
      { title: "Enabled seamless teacher uploads" },
      { title: "Improved study efficiency for students" },
    ],
    link: "https://studystack01.vercel.app/",
    src: "https://github.com/Arsenic-01/studystack",
    // image: lightSaasLandingPage,
  },
  {
    company: "Hobby Project",
    year: "2025",
    title: "Cloudgram",
    results: [
      { title: "Unlimited 20MB file uploads" },
      { title: "Fast 2GB uploads via S3" },
      { title: "Secure Telegram integration" },
      { title: "Scalable and user-friendly" },
    ],
    link: "https://cloudgram-01.vercel.app/",
    src: "https://github.com/Arsenic-01/cloudgram",
    // image: aiStartupLandingPage,
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
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
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
                  <div className="bg-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-black text-2xl mt-2 md:text-4xl md:mt-4">
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
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Live Site</span>
                        <ArrowRightIcon className="size-4 -rotate-45" />
                      </button>
                      {/* <BgAnimateButton animation="spin-slow">
                        Live Site
                      </BgAnimateButton> */}
                    </a>
                    <a href={project.src} target="_blank">
                      <button className="bg-white text-gray-950 rounded-xl h-12 w-full md:w-auto px-5 font-semibold inline-flex items-center justify-center gap-2 md:mt-8">
                        <span>Code</span>
                        <CodeXml className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  /> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
