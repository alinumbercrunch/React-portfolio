import React from "react";
import Left from "./Home/Left";

const Home = () => {
  return (
    <div className="w-[85%] h-[85%] bg-transparent bg-bodyColor text-white z-50 flex justify-between center-items">
      <div className="w-16 h-96 bg-bodyColor"></div>
      <div className="w-[94%] h-full bg-transparent">
        {/* Left part start */}
        {<Left />}
        {/* Right part start */}
        <div className="w-8/12 h-[95%] bg-bodyColor"></div>
      </div>
    </div>
  );
};

export default Home;
