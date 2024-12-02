import React from "react";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";
import Home from "./Home";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";
import "./i18n"; // Ensure this import is correct

const lngs = {
  en: { nativeName: "English" },
  jp: { nativeName: "日本語" },
};

function App() {
  const { t } = useTranslation();
  console.log("Current Language:", i18next.language); // Debugging

  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
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
