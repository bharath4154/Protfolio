import React from "react";
import Html from "./../assets/skills/Html.webp";
import Css from "./../assets/skills/Css.webp";
import TailwindCss from "./../assets/skills/TailwindCsss.webp";
import JavaScript from "./../assets/skills/JavaScript.webp";
import ReactJs from "./../assets/skills/ReactJs.png";
import Java from "./../assets/skills/Java.webp";
import Spring from "./../assets/skills/Spring.png";
import SpringBoot from "./../assets/skills/SpringBoot.png";
import Hibernate from "./../assets/skills/Hibernate.png";
import Firebase from "./../assets/skills/Firebase.webp";
import MySql from "./../assets/skills/MySql.webp";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: TailwindCss,
      title: "Tailwind",
      style: "shadow-cyan-500 w-50",
    },
    {
      id: 4,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: ReactJs,
      title: "ReactJs",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: Java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: Spring,
      title: "Spring",
      style: "shadow-green-500",
    },

    {
      id: 8,
      src: MySql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="skills"
      className=" bg-gradient-to-b from-gray-800 via-gray-800 to-black w-full h-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className=" py-6">
            These are the technologies I've used in my Projects{" "}
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className=" w-20 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
