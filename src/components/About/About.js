import React from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import FunFact from "./FunFact";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Area of Expertise" />
      <MyServices />
      <FunFact />
      <Title title="Fun" subTitle="Fact" />
    </section>
  );
};

export default About;
