import React from "react";
import ResumeTitle from "./ResumeTitle";
import { IoLanguageSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { Trans } from "react-i18next";

const Skills = ({ title, icon }) => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Tech Stacks" icon={<FaLaptopCode />} />
        <div className="py-4">
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Front-End
            </p>{" "}
            <p className="text-sm text-[#999]">
              HTML, React.js,Tailwind, CSS, Vue.js, Bootstrap, TypeScript,
              JavaScript (ES6)
            </p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Back-End
            </p>{" "}
            <p className="text-sm text-[#999]">Ruby on Rails</p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Databases
            </p>{" "}
            <p className="text-sm text-[#999]">PostgreSQL</p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Version Control
            </p>{" "}
            <p className="text-sm text-[#999]">Git, GitHub</p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Deployment
            </p>{" "}
            <p className="text-sm text-[#999]">Heroku, Render, AWS</p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Methodologies
            </p>{" "}
            <p className="text-sm text-[#999]">Agile/ Scrum framework</p>{" "}
          </div>{" "}
          <div className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
            {" "}
            <p className="text-lg font-semibold text-[#f5f5f5] mb-2">
              Project Management tools
            </p>{" "}
            <p className="text-sm text-[#999]">Notion, Jira</p>{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex "></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle
          title={<Trans i18nKey="LanguagesTitle">Languages</Trans>}
          icon={<IoLanguageSharp />}
        />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textcolor -mb-1.5">
              <Trans i18nKey="French">French</Trans>
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textcolor -mb-1.5">
              <Trans i18nKey="German">German</Trans>
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textcolor -mb-1.5">
              <Trans i18nKey="Arabic">Arabic</Trans>
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textcolor -mb-1.5">
              <Trans i18nKey="Japanese">Japanese</Trans>
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textcolor -mb-1.5">
              <Trans i18nKey="English">English</Trans>
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
