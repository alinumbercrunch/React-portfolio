import React from "react";
import SideNavTitel from "./SideNavTitel";

const SideNav = () => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <SideNavTitel title="Menu" />
      <ul>
        <li className="sideNavLi">About Me</li>
        <li className="sideNavLi">Projects</li>
        <li className="sideNavLi">Blog Page</li>
        <li className="sideNavLi">Coding music</li>
        <li className="sideNavLi">Resume</li>
        <SideNavTitel title="P" subTitle="rojects" />
      </ul>
      <ul>
        <li className="sideNavLi">ShoppiSheep</li>
        <li className="sideNavLi">Lemonade Stand</li>
        <li className="sideNavLi">RailsSake</li>
        <li className="sideNavLi">Dunjean Together</li>
        <li className="sideNavLi">Guided Escape</li>
        <li className="sideNavLi">My New React Project </li>
      </ul>
    </div>
  );
};

export default SideNav;
