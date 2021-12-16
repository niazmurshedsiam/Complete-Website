import React from 'react';
import Rubel from "../../../images/Rubel.png";
import Noman from "../../../images/Noman.png";
import Farzana from "../../../images/Farzana.png";
import BlogPost from "../BlogPost/BlogPost";
import "./Blogs.css";
const Blogs = () => {
    const blogData = [
        {
          title: "Check at least a doctor in a year for your full body checkup",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.[more]        ",
          author: "Dr. Rubel",
          authorImg: Rubel,
          date: "23 April 2019",
        },
        {
          title: "The New Omicron COVID-19 Variant: How worried should we be?",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.[more]        ",
          author: "Dr. Farzana",
          authorImg: Farzana,
          date: "23 April 2019",
        },
        {
          title: "Two time brush in a day can keep you healthy",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.[more]         ",
          author: "Dr. Noman",
          authorImg: Noman,
          date: "23 April 2019",
        },
      ];
    return (
        <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="text-primary text-uppercase">our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className="card-deck mt-5">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title}></BlogPost>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Blogs;