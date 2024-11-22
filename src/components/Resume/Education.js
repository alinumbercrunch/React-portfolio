import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />

        <ResumeCard
          badge="May 2024-Present"
          title="Career Break: Software Engineer Transition"
          subTitle="LeWagon Web Development Bootcamp Tokyo"
          des={`<p>
            <strong>Intensive Coding Bootcamp:</strong> Completed a rigorous program, mastering modern Full Stack Web development technologies including Ruby on Rails, HTML5, CSS, JavaScript, PostgreSQL, and React.<br /><br />
            <strong>Project Engagement:</strong> Currently involved in 3 private projects and expanding my portfolio.
          </p>`}
        />

        <ResumeCard
          badge="April 2022-May 2024"
          title="Global Tech Talent Acquisition Consultant"
          subTitle="Rakuten Inc. Japan (Via Boyd & Moore Executive Search)"
          des={`<p>
            <strong>Stakeholder Management:</strong><br />
            Led cross-functional collaboration with HR and Tech teams in Japan and India.<br /><br />
            <strong>Project Oversight:</strong><br />
            Managed recruitment projects across 4 departments, handling 15-20 positions and over 30 headcounts.<br /><br />
            <strong>Strategic Planning:</strong><br />
            Developed and executed hiring strategies for mid-level and senior technical roles, focusing on Japanese and global markets.
          </p>`}
        />

        <ResumeCard
          badge="August 2020 – February 2022"
          title="Senior Account Executive"
          subTitle="Spotted Recruit"
          des={`<p>
            <strong>Career Progression:</strong> Advanced from Account Executive to Senior Account Executive in December 2021, reflecting strong performance and leadership skills.<br /><br />
            <strong>Client Account Management:</strong> Directed the end-to-end management of Rakuten accounts, overseeing recruitment projects for mid-to-senior engineering roles and ensuring successful candidate placements.<br /><br />
            <strong>Team Leadership:</strong> Guided and mentored junior team members, focusing on enhancing their recruitment strategies, stakeholder management, and business development skills.
          </p>`}
        />

        <ResumeCard
          badge="November 2018 – July 2020"
          title="Technical Recruiter"
          subTitle="Robert Walters Japan"
          des={`<p>
            <strong>Sector Specialization:</strong> Led talent acquisition projects focused on the insurance, InsurTech, and FinTech sectors, ensuring the alignment of candidate profiles with client needs.<br /><br />
            <strong>Full-Cycle Recruitment Management:</strong> Directed the entire recruitment lifecycle, offering tailored consultancy to both candidates and clients to achieve optimal placement outcomes.<br /><br />
            <strong>Business Development:</strong> Executed English-speaking business development initiatives within Japan’s financial industry, expanding the client base and securing new opportunities.
          </p>`}
        />

        <ResumeCard
          badge="October 2016 – October 2018"
          title="Business Coach"
          subTitle="Berlitz Business Communication Japan"
          des={`<p>
            <strong>Program Leadership:</strong> Designed and delivered cultural and language coaching programs in French, German, and Arabic for Japanese employees at major corporations.<br /><br />
            <strong>Executive Coaching:</strong> Successfully trained and coached C-level executives and senior management in Japanese and multinational companies, driving cross-cultural communication and leadership development.
          </p>`}
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex">XXX</span>
      </div>

      <div className="col-span-4"></div>
    </div>
  );
};

export default Education;
