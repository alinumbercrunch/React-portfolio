import React from "react";

const BlogCard = ({ title, category, image }) => {
  return (
    <div>
      <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800 transition-transform transform hover:scale-105 group">
        <a
          href={"https://www.wantedly.com/users/176929662/post_articles/935377"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
            <img
              src={image}
              alt="blogImage"
              className="w-full h-auto object-cover transition-transform transform group-hover:scale-110"
            />

            <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20"></div>
          </div>
        </a>
        <a
          href={"https://www.wantedly.com/users/176929662/post_articles/937618"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center">
            <h3 className="font-titleFont text-lg font-semibold text-designColor">
              {title}
            </h3>
            <p className="text-base text-gray-400 mt-1 group-hover:text-designColor duration-300">
              {category}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;