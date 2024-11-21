import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerImg } from "../../src/assets/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 30,
    deLeteSpeed: 20,
    deLaySpeed: 2000,
  });
  return (
    <div>
      <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
        <div className="w-full h-3/5">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={bannerImg}
            alt="bannerImage"
            loading="priority"
          />
          <div className="w-full h-2/5">
            <div className="flex flex-col items-center gap-2 py-10">
              <h1 className="text textColor text-4xl font-semibold">
                Ali Haddi
              </h1>
              <p className="text-base text-designColor tracking-wide font-semibold">
                {text}
                <Cursor cursorBlinking="false" cursorStyle="|" />
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  <FaGithub />
                </span>
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  <FaLinkedin />
                </span>
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  <FiMail />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
