import React from "react";
import parse from "html-react-parser";

const ResumeCard = ({ badge, title, subTitle, des }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px]">
      {badge === "" ? (
        <h6 className="w-24 text-center text-sm py-[1px] text-designColor font-semibold border-[1px] border-zinc-600 rounded-sm">
          May 2024-Present
        </h6>
      ) : (
        <h6 className="w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm">
          {badge}
        </h6>
      )}

      <h2 className="text-lg font-titelFont text-gray-200 font-medium ">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p className="text-base text-[#999] font-medium pr-10">{parse(des)}</p>
    </div>
  );
};

export default ResumeCard;
