import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";
import { GiGraduateCap } from "react-icons/gi";
import { Trans, useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle
          title={<Trans i18nKey="ExperienceTitle">Experience</Trans>}
          icon={<MdWork />}
        />

        <ResumeCard
          badge=""
          title={
            <Trans i18nKey="CareerBreakTitle">
              Career Break: Software Engineer Transition
            </Trans>
          }
          subTitle={
            <Trans i18nKey="LeWagonBootcampTitle">
              LeWagon Web Development Bootcamp Tokyo
            </Trans>
          }
          des={t("LeWagonBootcampDesc")}
        />

        <ResumeCard
          badge="Apr 2022-May 2024"
          title={
            <Trans i18nKey="RakutenConsultantTitle">
              Global Tech Talent Acquisition Consultant
            </Trans>
          }
          subTitle={
            <Trans i18nKey="RakutenConsultantSubTitle">
              Rakuten Inc. Japan (Via Boyd & Moore Executive Search)
            </Trans>
          }
          des={t("RakutenConsultantDesc")}
        />

        <ResumeCard
          badge="Aug 2020 – Feb 2022"
          title={
            <Trans i18nKey="SpottedRecruitTitle">
              Senior Account Executive
            </Trans>
          }
          subTitle={
            <Trans i18nKey="SpottedRecruitSubTitle">Spotted Recruit</Trans>
          }
          des={t("SpottedRecruitDesc")}
        />

        <ResumeCard
          badge="Nov 2018 – July 2020"
          title={
            <Trans i18nKey="RobertWaltersTitle">Technical Recruiter</Trans>
          }
          subTitle={
            <Trans i18nKey="RobertWaltersSubTitle">Robert Walters Japan</Trans>
          }
          des={t("RobertWaltersDesc")}
        />

        <ResumeCard
          badge="Oct 2016 - Oct 2018"
          title={<Trans i18nKey="BerlitzTitle">Business Coach</Trans>}
          subTitle={
            <Trans i18nKey="BerlitzSubTitle">
              Berlitz Business Communication Japan
            </Trans>
          }
          des={t("BerlitzDesc")}
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      <div className="col-span-4">
        <ResumeTitle
          title={<Trans i18nKey="EducationTitle">Education</Trans>}
          icon={<GiGraduateCap />}
        />
        <ResumeCard
          badge="June 2024 - Sep 2024"
          title={
            <Trans i18nKey="LeWagonGraduateTitle">
              Full Stack Development Graduate
            </Trans>
          }
          subTitle={
            <Trans i18nKey="LeWagonGraduateSubTitle">LeWagon Tokyo</Trans>
          }
          des={t("LeWagonGraduateDesc")}
        />
        <ResumeCard
          badge="Oct 2008 - May 2016"
          title={
            <Trans i18nKey="WuppertalTitle">
              Bachelor and Master of Science
            </Trans>
          }
          subTitle={
            <Trans i18nKey="WuppertalSubTitle">University of Wuppertal</Trans>
          }
          des={t("WuppertalDesc")}
        />
      </div>
    </div>
  );
};

export default Education;
