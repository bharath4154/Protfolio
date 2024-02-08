import React from "react";
import Herosection from "./../assets/Herosection.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full pt-16 md:pt-0">
          <h2 className=" text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            IT Infrastructure Enthusiast | Recent Graduate. As a recent graduate
            with a focus on IT infrastructure, I bring a solid academic
            background and a passion for designing and implementing robust
            technological ecosystems. My portfolio showcases a diverse range of
            projects, demonstrating my proficiency in network design, cloud
            computing, and cybersecurity. I am eager to contribute my skills and
            enthusiasm to the dynamic field of IT infrastructure, helping
            organizations thrive in the digital age.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className=" group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className=" ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Herosection}
            alt="MyProfile"
            className=" rounded-2xl mx-auto w-1/2 md:w-1/2 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
