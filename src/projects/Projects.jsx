import React from "react";
import Lms from "./../assets/Lms.png";
import Ecomerce from "./../assets/Ecomerce.png";
import spring from "./../assets/spring.png";
import ChatApplication from "./../assets/ChatApplication.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Lms,
    },
    {
      id: 2,
      src: Ecomerce,
    },
    {
      id: 3,
      src: spring,
    },
    {
      id: 4,
      src: ChatApplication,
    },
  ];
  return (
    <div
      name="projects"
      className=" bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className=" py-6">Check out some of my Projects here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="LMS"
                className=" rounded duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center ">
                <button className=" w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105 hover:text-cyan-500">
                  Demo
                </button>
                <button className=" w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105 hover:text-cyan-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
