import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerImg } from "../../src/assets/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import i18next from "i18next";
import "../i18n";

const lngs = { en: { nativeName: "English" }, jp: { nativeName: "日本語" } };
const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Consultant"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-md shadow-testShadow">
      {" "}
      <div className="w-full h-3/5">
        {" "}
        <div>
          {" "}
          <img
            className="w-full h-full object-cover rounded-md"
            src={bannerImg}
            alt="bannerImage"
            loading="priority"
          />{" "}
          <div className="w-full h-2/5">
            {" "}
            <div className="flex flex-col items-center gap-2 py-10">
              {" "}
              <h1 className="text textColor text-4xl font-semibold">
                {" "}
                Ali Haddi{" "}
              </h1>{" "}
              <p className="text-base text-designColor tracking-wide font-semibold">
                {" "}
                {text} <Cursor cursorBlinking="false" cursorStyle="|" />{" "}
              </p>{" "}
              <div className="flex justify-center gap-2 mt-2">
                {" "}
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  {" "}
                  <a
                    href="https://github.com/alinumbercrunch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithub />{" "}
                  </a>{" "}
                </span>{" "}
                <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                  {" "}
                  <a
                    href="https://www.linkedin.com/notifications/?filter=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>{" "}
                </span>{" "}
              </div>{" "}
              <div className="flex justify-center gap-2 mt-4">
                {" "}
                {Object.keys(lngs).map((lng) => (
                  <button
                    type="button"
                    key={lng}
                    onClick={() => i18next.changeLanguage(lng)}
                    disabled={i18next.language === lng}
                    className="px-3 py-1 border rounded text-gray-600 hover:text-designColor transition-colors"
                  >
                    {" "}
                    {lngs[lng].nativeName}{" "}
                  </button>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Left;
