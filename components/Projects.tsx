import React from "react";
import SectionHeader from "./ui/SectionHead";

const proItems: { link: string; img: string }[] = [
  {
    link: "",
    img: "",
  },
];

const Projects = () => {
  return (
    <div>
      <SectionHeader title="Projects" description="My Projects" />
      {proItems.map((item) => (
        <div className="">
          <div className="">
            <a href="{item.link}">
              <img src="{item.img}" alt="" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
