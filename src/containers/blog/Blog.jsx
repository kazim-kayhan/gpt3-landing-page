import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-content">
      <div className="gpt3__blog-content_groupA">
        <Article
          imgUrl={blog01}
          date="Jan 10, 2022"
          text="Artificial intelligence is the future. Let us explore what it is?"
        />
      </div>
      <div className="gpt3__blog-content_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 20, 2021"
          text="GPT-3 is the future. Let us explore how it is?"
        />
        <Article
          imgUrl={blog03}
          date="Oct 6, 2021"
          text="Is Machine learning the most significant part of Artificial intelligence?"
        />
        <Article
          imgUrl={blog04}
          date="Aug 2, 2021"
          text="How much important Data science is?"
        />
        <Article
          imgUrl={blog05}
          date="Jul 8, 2021"
          text="Is the bots our world terminators?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
