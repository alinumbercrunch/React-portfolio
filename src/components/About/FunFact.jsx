import React from "react";
import FunCard from "./FunCard";
import { FaTrophy } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { Trans } from "react-i18next";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-4 pb-10">
      <FunCard
        icon={<FaTrophy />}
        des={
          <Trans i18nKey="HighestGithubCommit">
            Highest Team Github Commit Bootcamp Award
          </Trans>
        }
      />
      <FunCard
        icon={<BiCodeCurly />}
        des={
          <Trans i18nKey="CodingHours">
            140 hours average coding per month
          </Trans>
        }
      />
      <FunCard
        icon={<MdFoodBank />}
        des={<Trans i18nKey="BestTagineCook">Best Tagine Cook in Town</Trans>}
      />
      <FunCard
        icon={<MdPets />}
        des={<Trans i18nKey="FamilyCats">Owner of 7 family cats</Trans>}
      />
    </div>
  );
};

export default FunFact;
