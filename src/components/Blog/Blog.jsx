import React from "react";
import Title from "../About/Title";
import blog from "../../assets/blog/Japanese-blog.png";
import BlogCard from "./BlogCard";
import ShoppiSheep from "../../assets/ShoppiSheep.jpg";
import { Trans } from "react-i18next";

const Blog = () => {
  return (
    <div>
      <Title
        title={<Trans i18nKey="LatestTitle">Latest</Trans>}
        subTitle={<Trans i18nKey="PostsTitle">Posts</Trans>}
      />
      <div className="grid grid-cols-2 gap-10">
        <div className="px6">
          <BlogCard
            image={blog}
            title={<Trans i18nKey="MyStoryTitle">My Story</Trans>}
            category={
              <Trans i18nKey="MyStoryCategory">
                Lifelong growth and challenges
              </Trans>
            }
          />
        </div>
        <div className="px6">
          <BlogCard
            image={ShoppiSheep}
            title={<Trans i18nKey="ShoppiSheepTitle">ShoppiSheep</Trans>}
            category={
              <Trans i18nKey="ShoppiSheepCategory">
                New Rails Ecommerce Shop for Portfolios
              </Trans>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
