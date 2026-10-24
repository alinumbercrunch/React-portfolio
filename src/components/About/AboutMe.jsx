import React from "react";
import { useTranslation, Trans } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation(); // Ensure hook is correctly called

  return (
    <div>
      <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
          <div className="py-6">
            <h2 className="font-semibold mb-1 text-lg">
              <Trans i18nKey="SelfIntroHeader">Hi there! I'm Ali</Trans>
            </h2>
            <p className="text-base leading-6">
              <Trans i18nKey="SelfIntro">
                Full Stack Developer and consultant. I love creating web
                applications from the ground up. <br />
                My goal is to keep things simple, smooth, and efficient. Whether
                it's the frontend or backend, I make sure everything works
                nicely and looks great.
              </Trans>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <ul>
            <li className="aboutRightLi">
              <span className="aboutRightLiSpan">
                <Trans i18nKey="Residence">Residence:</Trans>
              </span>
              <Trans i18nKey="ResidenceLocation">Japan</Trans>
            </li>
            <li className="aboutRightLi">
              <span className="aboutRightLiSpan">
                <Trans i18nKey="Address">Address:</Trans>
              </span>
              <Trans i18nKey="AddressLocation">Yokohama</Trans>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
