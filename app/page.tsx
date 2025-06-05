import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 px-32 bg-white ">
      <Hero />
      <Projects />
      <Testimonial />
    </div>
  );
}
