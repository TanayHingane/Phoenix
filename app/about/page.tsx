import { About } from "@/components/About";
import { Footer } from "@/components/ui/Footer";
import Board from "@/components/ui/scroll";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="my-24">
        <About />
      </div>
      <Board />
      <div className="p-5 px-5 md:px-44 bg-white">
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
