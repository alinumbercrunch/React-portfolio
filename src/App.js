import React from "react";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";

function App() {
  return (
    <div className=" w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
