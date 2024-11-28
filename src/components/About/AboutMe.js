import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
          <div className="py-6">
            <h2 className="font-semibold mb-1 text-lg">Hi there! I'm Ali</h2>
            <p className="text-base leading-6">
              Full Stack Developer and consultant. I love creating web
              applications from the ground up. <br />
              My goal is to keep things simple, smooth, and efficient. Whether
              it's the frontend or backend, I make sure everything works nicely
              and looks great.
            </p>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <ul>
            <li className="aboutRightLi">
              <span className="aboutRightLiSpan">Residence: </span>
              Japan
            </li>
            <li className="aboutRightLi">
              <span className="aboutRightLiSpan">Address: </span>
              Tokyo
            </li>
            <li className="aboutRightLi">
              <span className="aboutRightLiSpan">Available for work: </span>
              yes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
