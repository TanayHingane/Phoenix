"use client";
import { About } from "@/components/About";
import { Footer } from "@/components/ui/Footer";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Bookshelf from "@/components/Books";

const page = () => {
  return (
    <div>
      <div className="my-24">
        <About />
      </div>
      <Suspense fallback={<div>Loading gallery...</div>}>
        {/* <Board /> */}
        <Bookshelf />
      </Suspense>

      <div className="p-5 px-5 md:px-44 bg-white">
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
