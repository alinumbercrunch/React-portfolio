import React from "react";
import FunCard from "./FunCard";
import { FaTrophy } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import { MdPets } from "react-icons/md";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-4 pb-10">
      <FunCard
        icon={<FaTrophy />}
        des="Hightest Team Github Commit Bootcamp Award"
      />
      <FunCard
        icon={<BiCodeCurly />}
        des="140 hours average coding per month"
      />
      <FunCard icon={<MdFoodBank />} des="Best Tagine Cook in Town" />
      <FunCard icon={<MdPets />} des="Owner of 7 family cats" />
    </div>
  );
};

export default FunFact;
