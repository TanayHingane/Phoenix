import React from "react";

export const NameCard = () => {
  return (
    <div className="relative p-6 w-full h-full bg-white rounded-xl shadow-md space-y-4">
      {/* "Know Me" pill */}
      <div className="absolute top-2 right-2">
        <span className="text-[9px] font-sans px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
          Contact
        </span>
      </div>

      {/* Name and Role */}
      <div className="pt-9 flex flex-col items-start space-y-1">
        <h1 className="text-lg font-sans font-semibold text-gray-900 leading-tight">
          Tanay H
        </h1>
        <p className="text-xs text-gray-500 leading-tight">Web Developer</p>
      </div>

      {/* Relocation Status */}
      <div className="flex items-center mt-14 gap-2 text-[9px] justify-start font-medium text-gray-800">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        Open to internships
      </div>
    </div>
  );
};

const skills = [
  "/skills/React.svg",
  "/skills/TypeScript.svg",
  "/skills/TailwindCSS.svg",
  "/skills/drizzle.svg",
  "/skills/Appwrite.svg",
  "/skills/Next.js.svg",
];

export const ProjectCard = () => {
  return (
    <div className="relative p-6 w-full h-full bg-white rounded-xl shadow-md space-y-4">
      {/* "Know Me" pill */}
      <div className="absolute top-2 right-2">
        <span className="text-[9px] font-sans px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
          Hobby Projects
        </span>
      </div>

      {/* Name and Role */}
      <div className="pt-9 flex flex-col items-start space-y-1">
        <h1 className="text-lg font-sans font-semibold text-gray-900 leading-tight">
          Recent
        </h1>
        <p className="text-xs text-gray-500 leading-tight">Budget Tracker</p>
      </div>

      {/* Relocation Status */}
      <div className="flex items-center mt-14 gap-2 text-[9px] justify-start font-medium">
        {skills.map((skill) => (
          <img src={skill} className="w-3 h-3" />
        ))}
      </div>
    </div>
  );
};
