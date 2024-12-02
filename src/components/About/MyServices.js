import React from "react";
import ServicesCard from "./ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { IoServer } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { Trans } from "react-i18next";

const MyServices = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <ServicesCard
          icons={<BiCodeAlt />}
          title={<Trans i18nKey="UIEngineering">UI Engineering</Trans>}
          subTitle={
            <Trans i18nKey="UIEngineeringDesc">
              Creating responsive and interactive user interfaces.
            </Trans>
          }
        />
        <ServicesCard
          icons={<IoServer />}
          title={<Trans i18nKey="ServerSide">Server-Side</Trans>}
          subTitle={
            <Trans i18nKey="ServerSideDesc">
              Building and maintaining server-side logic and databases.
            </Trans>
          }
        />
        <ServicesCard
          icons={<FaProjectDiagram />}
          title={<Trans i18nKey="AgilePJM">Agile PJM</Trans>}
          subTitle={
            <Trans i18nKey="AgilePJMDesc">
              Efficiently managing projects using agile methodologies.
            </Trans>
          }
        />
        <ServicesCard
          icons={<DiScrum />}
          title={<Trans i18nKey="Scrum">Scrum</Trans>}
          subTitle={
            <Trans i18nKey="ScrumDesc">
              Facilitating agile development and ensuring team efficiency.
            </Trans>
          }
        />
      </div>
    </div>
  );
};

export default MyServices;
