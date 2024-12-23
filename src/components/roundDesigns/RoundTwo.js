import React from "react";

const RoundTwo = () => {
  return (
    <div>
      <div className="w-96 h-96 rounded-full absolute bottom-0 right-32">
        <div className="w-full h-full relative animate-spin-slow">
          <div className="w-52 h-52 rounded-full bg-designColor absolute top-0 left-12 blur-2xl"></div>
          <div className="w-24 h-24 rounded-full bg-green-600 absolute bottom-20 right-16 blur-xl"></div>
          <div className="w-28 h-28 rounded-full bg-designColor absolute top-48 right-8 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RoundTwo;
