import React from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import FunFact from "./FunFact";
import { Trans } from "react-i18next";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title
        title={<Trans i18nKey="AboutTitle">About</Trans>}
        subTitle={<Trans i18nKey="MeTitle">Me</Trans>}
      />
      <AboutMe />
      <Title
        title={<Trans i18nKey="FunTitle">Fun</Trans>}
        subTitle={<Trans i18nKey="FactTitle">Fact</Trans>}
      />
      <FunFact />
      <Title
        title={<Trans i18nKey="MyTitle">My</Trans>}
        subTitle={<Trans i18nKey="ExpertiseTitle">Area of Expertise</Trans>}
      />
      <MyServices />
    </section>
  );
};

export default About;
