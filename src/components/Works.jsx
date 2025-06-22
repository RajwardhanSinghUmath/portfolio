import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {(tags || []).map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto mt-20 flex flex-wrap justify-center gap-7">
        {Array.isArray(projects) &&
          projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
      </div>
    </div>
  );
};

export default Works;
