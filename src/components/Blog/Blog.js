import React from "react";
import Title from "../About/Title";
import blog from "../../assets/blog/Japanese-blog.png";
import BlogCard from "./BlogCard";
import ShoppiSheep from "../../assets/ShoppiSheep.jpg";
const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-2 gap-10">
        <div className="px6">
          <BlogCard
            image={blog}
            title="My Story"
            category="Lifelong growth and challenges"
          />
        </div>
        <div className="px6">
          <BlogCard
            image={ShoppiSheep}
            title="ShoppiSheep"
            category="New Rails Ecommerce Shop for Portfolios"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
