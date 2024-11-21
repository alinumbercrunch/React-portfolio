import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 px-6 borderRight flex flex-col p-6 ">
          <h2 className="font-semibold mb-1">Hi there! I'm Ali</h2>
          <p className="text-base leading-6">
            FullStack Developer and consultant who loves creating web
            applications from the ground up. <br />
            My goal is to keep things simple, smooth, and efficient. Whether
            it's the frontend or backend, I make sure everything works nicely
            and looks great.
          </p>
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
              <span className="aboutRightLiSpan">Freelance: </span>
              Available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
