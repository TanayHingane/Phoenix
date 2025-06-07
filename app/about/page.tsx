import { About } from "@/components/About";
import Board from "@/components/ui/scroll";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="my-24">
        <About />
      </div>
      <Board />
    </div>
  );
};

export default page;
