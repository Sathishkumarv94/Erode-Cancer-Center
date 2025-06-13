import React, { useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import newsArticles from "./newsArticles";


const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Erode Cancer Centre Salem Unit";
  }, []);
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news-title">Latest News & Updates</h2>
        <div className="news-grid">
          {newsArticles.map((article, index) => (
            <div key={index} className="news-card" data-aos="fade-up">
              
              <div className="news-content">
                <h4 className="news-heading">{article.title}</h4>
                <p className="news-date">{article.date}</p>
                <img src={article.image} alt={article.title} className="news-img" />
                
                <p className="news-description">{article.description}</p>
                <Link to={`/blog/${article.id}`} className="read-more">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
