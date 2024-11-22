import React from "react";
import Left from "./Home/Left";
import About from "./components/About/About.js";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { GiDesert } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex justify-between items-start">
      <div className="w-16 h-96 bg-transparent flex flex-col">
        <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
          <div className=" flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <FaUser />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <MdWork />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <a
              href="https://www.wantedly.com/users/176929662/post_articles/935377"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglechat />
            </a>
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <a
              href="https://www.youtube.com/watch?v=I3qwcxLIzvM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Coding music
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/* Left part start */}
        {<Left />}
        {/* Right part start */}
        <div className="w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
