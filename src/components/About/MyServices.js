import React from "react";
import ServicesCard from "./ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { IoServer } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { DiScrum } from "react-icons/di";

const MyServices = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <ServicesCard
          icons={<BiCodeAlt />}
          title="UI Engineering"
          subTitle="Creating responsive and interactive user interfaces."
        />
        <ServicesCard
          icons={<IoServer />}
          title="Server-Side"
          subTitle="Building and maintaining server-side logic and databases."
        />
        <ServicesCard
          icons={<FaProjectDiagram />}
          title="Agile PJM"
          subTitle="Efficiently managing projects using agile methodologies."
        />
        <ServicesCard
          icons={<DiScrum />}
          title="Scrum"
          subTitle="Facilitating agile development and ensuring team efficiency."
        />
      </div>
    </div>
  );
};

export default MyServices;
