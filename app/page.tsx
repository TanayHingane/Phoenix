import { Contacts } from "@/components/Contact";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="p-5 px-5 md:px-44 bg-white ">
      <Hero />
      <Projects />
      <Testimonial />
      <Timeline />
      <Contacts />
    </div>
  );
}
