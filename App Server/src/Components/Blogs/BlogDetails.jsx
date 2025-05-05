import React from "react";
import { useParams } from "react-router-dom";
import newsArticles from "./newsArticles";

import './BlogDetails.css'

const BlogDetails = () => {
  const { id } = useParams();
  const article = newsArticles.find((item) => item.id === id);

  
  if (!article) {
    return (
      <div className="blog-detail">
        <h2>Article not found.</h2>
      </div>
    );
  }

  const paragraphs = article.fullContent
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  return (
    <>
    
    <div className="blog-detail">
    <h1>{article.title}</h1>
    <p className="date">{article.date}</p>
        <img src={article.image} alt={article.title} />
        
        

        {/* Render each paragraph separately */}
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </>
  );
};

export default BlogDetails;
