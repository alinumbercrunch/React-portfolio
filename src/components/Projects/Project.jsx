import React from "react";
import ShoppiSheep from "../../assets/ShoppiSheep.jpg";
import RailsSake from "../../assets/RailsSake.jpg";
import Lemonade from "../../assets/Lemonade.jpg";
import Guided from "../../assets/Guided.jpg";
import dun from "../../assets/Dun.png";
import ProjectCard from "./ProjectCard";
import Title from "../About/Title";
import ReactP from "../../assets/ReactP.png";
import { Trans } from "react-i18next";

const Project = () => {
  return (
    <div>
      <Title
        title={<Trans i18nKey="RecentTitle">Recent</Trans>}
        subTitle={<Trans i18nKey="ProjectsTitle">Projects</Trans>}
      />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6 justify-center items-center">
          <a
            href="https://github.com/alinumbercrunch/rails-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={<Trans i18nKey="ShoppiSheepTitle">ShoppiSheep</Trans>}
              category={
                <Trans i18nKey="ShoppiSheepCategory">
                  Rails based EC-Website
                </Trans>
              }
              image={ShoppiSheep}
            />
          </a>
          <a
            href="https://github.com/alinumbercrunch/react-sake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={<Trans i18nKey="RailsSakeTitle">RailsSake</Trans>}
              category={
                <Trans i18nKey="RailsSakeCategory">
                  Explore Sake locations in Japan
                </Trans>
              }
              image={RailsSake}
            />
          </a>
          <a
            href="https://github.com/alinumbercrunch/guided-escapes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={<Trans i18nKey="GuidedEscapeTitle">Guided Escape</Trans>}
              category={
                <Trans i18nKey="GuidedEscapeCategory">
                  Rails based Airbnb Experiences clone
                </Trans>
              }
              image={Guided}
            />
          </a>
        </div>
        <div className="px-6">
          <a
            href="https://github.com/alinumbercrunch/lemonade-stand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={<Trans i18nKey="LemonadeStandTitle">Lemonade Stand</Trans>}
              category={
                <Trans i18nKey="LemonadeStandCategory">
                  Point-of-Sale System for Vendors in Flea/Craft Markets
                </Trans>
              }
              image={Lemonade}
            />
          </a>
          <a
            href="https://cpuabuse.github.io/dungeon-together/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={
                <Trans i18nKey="DunjeanTogetherTitle">Dunjean Together</Trans>
              }
              category={
                <Trans i18nKey="DunjeanTogetherCategory">
                  Multiplayer Dungeon Game, TypeScript, WebGL, Vue, Mobile
                  Support
                </Trans>
              }
              image={dun}
            />
          </a>
          <a
            href="https://github.com/alinumbercrunch/React-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={
                <Trans i18nKey="ReactPortfolioTitle">
                  My New React Portfolio
                </Trans>
              }
              category={
                <Trans i18nKey="ReactPortfolioCategory">
                  A personal portfolio website built using React and deployed on
                  AWS with HTTPS security.
                </Trans>
              }
              image={ReactP}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
