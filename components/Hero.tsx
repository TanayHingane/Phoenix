import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-pink-100 to-cyan-100 mt-24 gap-10 mb-4 rounded-2xl flex flex-col justify-center items-center h-[500px] max-w-[1000] max-h-[500px] lg:min-w-[1000px] xl:min-w-[1200px]">
        <div className=" mb-2 mx-5 justify-center items-center flex flex-col">
          <h1 className="text-4xl font-sans font-light text-black font-stretch-condensed">
            Build Awesome Websites with
          </h1>
          <h1 className="text-4xl font-pre  text-blue-500">Tanay Hingane</h1>
        </div>
        <div className="mt-3 mb-3 grid grid-cols-3 gap-7 mx-5 h-[120]">
          <div className="shadow-md w-[160] h-[190] rounded-xl">
            <img
              src={"tpp.jpg"}
              className="object-cover w-full h-full rounded-xl"
            ></img>
          </div>
          <div className="bg-white shadow-md rounded-xl">2</div>
          <div className="bg-white shadow-md rounded-xl">3</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
