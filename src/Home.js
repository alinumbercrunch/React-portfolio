import React, { useEffect, useRef, useState } from "react";
import Left from "./Home/Left";
import About from "./components/About/About.js";
import { FaUser } from "react-icons/fa";
import { MdOutlineClose, MdWork } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import Resume from "./components/Resume/Resume.js";
import Projects from "./components/Projects/Project.js";
import { motion } from "framer-motion";
import Blog from "./components/Blog/Blog.js";
import SideNav from "./Home/SideNav.js";

const Home = () => {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [music, setMusic] = useState(false);
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex justify-between items-start">
      <div className="w-16 h-96 bg-transparent flex flex-col">
        <div className="w-full h-80 bg-bodyColor rounded-md py-6 flex flex-col items-center justify-between">
          <span
            onClick={() => {
              setAbout(true);
              setResume(false);
              setProjects(false);
              setBlog(false);
              setMusic(false);
            }}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(true);
              setBlog(false);
              setMusic(false);
            }}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <MdWork />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-md left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(false);
              setBlog(true);
              setMusic(false);
            }}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <SiGooglechat />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-md left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </span>
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(false);
              setBlog(false);
              setMusic(true);
            }}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <a
              href="https://www.youtube.com/watch?v=4cc1cZvFBzs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-md left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Coding music
            </span>
          </span>
          <span
            onClick={() => {
              setAbout(false);
              setResume(true);
              setProjects(false);
              setBlog(false);
              setMusic(false);
            }}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <PiReadCvLogo />
            <span className="absolute text-black font-semibold text-sm uppercase bg-designColor px-4 py-[1px] rounded-md left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-200 opacity-0 group-hover:opacity-100">
              Resume
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
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <About />{" "}
              </motion.div>
            )}{" "}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <Resume />{" "}
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <Projects />{" "}
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <Blog />{" "}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
