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
          <ProjectCard
            title="ShoppiSheep"
            category="Rails based EC-Website"
            image={ShoppiSheep}
          />
          <ProjectCard
            title="RailsSake"
            category="Explore Sake locations in Japan"
            image={RailsSake}
          />
          <ProjectCard
            title="Guided escape"
            category={`Rails based Airbnb Experiences clone`}
            image={Guided}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            title="Lemonade Stand"
            category="Point-of-Sale System for Vendors in Flea/Craft Markets"
            image={Lemonade}
          />
          <ProjectCard
            title="Dunjean Together"
            category={`Multiplayer Dungeon Game
              TypeScript
              WebGL
              Vue
              Mobile Support`}
            image={dun}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
