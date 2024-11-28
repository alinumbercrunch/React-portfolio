import React from "react";
import ShoppiSheep from "../../assets/ShoppiSheep.jpg";
import RailsSake from "../../assets/RailsSake.jpg";
import Lemonade from "../../assets/Lemonade.jpg";
import Guided from "../../assets/Guided.jpg";
import dun from "../../assets/Dun.png";
import ProjectCard from "./ProjectCard";
import Title from "../About/Title";

const Project = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6 justify-center items-center">
          <a
            href="https://github.com/alinumbercrunch/rails-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="ShoppiSheep"
              category="Rails based EC-Website"
              image={ShoppiSheep}
            />
          </a>
          <a
            href="https://github.com/alinumbercrunch/react-sake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="RailsSake"
              category="Explore Sake locations in Japan"
              image={RailsSake}
            />
          </a>
          <a
            href="https://github.com/alinumbercrunch/guided-escapes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="Guided escape"
              category="Rails based Airbnb Experiences clone"
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
              title="Lemonade Stand"
              category="Point-of-Sale System for Vendors in Flea/Craft Markets"
              image={Lemonade}
            />
          </a>
          <a
            href="https://cpuabuse.github.io/dungeon-together/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="Dunjean Together"
              category={`Multiplayer Dungeon Game
                TypeScript
                WebGL
                Vue
                Mobile Support`}
              image={dun}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
