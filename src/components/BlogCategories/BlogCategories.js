import React from "react";

import "./blog-categories.scss";

function BlogCategories() {
  return (
    <div className="blog-categories-wrapper">
      <h5 className="blog-categories-title">Blog categories</h5>
      <ul className="blog-categories-list">
        <li className="blog-categories-list-item">
          <a href="/">Category 1</a>
        </li>
        <li className="blog-categories-list-item">
          <a href="/">Category 2</a>
        </li>
        <li className="blog-categories-list-item">
          <a href="/">Category 3</a>
        </li>
      </ul>
    </div>
  );
}

export default BlogCategories;
