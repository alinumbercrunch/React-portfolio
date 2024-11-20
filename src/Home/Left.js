import React from "react";
import { bannerImg } from "../../src/assets/index";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiMail, FiSend } from "react-icons/fi";

const Left = () => {
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
                FullStack engineer
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
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  <FiSend />
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
