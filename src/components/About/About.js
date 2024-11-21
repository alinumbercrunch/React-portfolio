import React from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
    </section>
  );
};

export default About;
