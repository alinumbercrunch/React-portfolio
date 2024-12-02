import React from "react";
import Title from "../About/Title";
import Education from "./Education";
import Skills from "./Skills";
import { Trans } from "react-i18next";

const Resume = () => {
  return (
    <section id="resume">
      <Title
        title={<Trans i18nKey="MyTitle">My</Trans>}
        subTitle={<Trans i18nKey="SkillsTitle">Skills</Trans>}
      />

      <Skills />
      <Title
        title={<Trans i18nKey="MyTitle">My</Trans>}
        subTitle={<Trans i18nKey="ResumeTitle">Resume</Trans>}
      />

      <Education />
    </section>
  );
};

export default Resume;
