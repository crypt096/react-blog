import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./blog-items.scss";
import EditModal from "../EditModal/EditModal";

function BlogItems({ searchTerm }) {
  const [blogPostToEdit, setBlogPostToEdit] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadBlogItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const loadBlogItems = async () => {
    const res = await axios.get(
      "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts"
    );
    const results = res.data.resultData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.text.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  const deletePost = async (id) => {
    await axios.delete(
      `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`
    );
    loadBlogItems();
  };

  return (
    <div>
      {searchResults.map((item, index) => {
        const postedTime = moment(item.updatedAt).format("D.M.YYYY HH:mm");
        const dateOfPost = postedTime.split(" ")[0];
        const timeOfPost = postedTime.split(" ")[1];
        return (
          <div className="blog-items-wrapper" key={item.id}>
            <div className="row no-gutters">
              <div className="image-wrapper">
                <img
                  className="blog-item-avatar"
                  src="https://i.picsum.photos/id/454/80/80.jpg?hmac=lHlKkUsxK0B6KymVYwr7iMd-VQeoP4XvY0IQKEJ4zXY"
                  alt="Blog img"
                />
              </div>
              <div className="blog-item-info-wrapper">
                <h5 className="blog-item-title">{item.title}</h5>
                <p className="blog-item-details">
                  Posted date: {dateOfPost} at {timeOfPost} by Some person{" "}
                  {index}
                </p>
              </div>
              <div className="blog-item-btn-wrapper">
                <button
                  type="button"
                  className="blog-item-btn edit-btn"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  onMouseDown={() => setBlogPostToEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="blog-item-btn delete-btn"
                  onClick={() => deletePost(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="row no-gutters">
              <p className="blog-post-content">{item.text}</p>
            </div>
            <div className="row no-gutters">
              <div className="blog-post-images-wrapper">
                <img
                  src="https://i.picsum.photos/id/109/100/100.jpg?hmac=LeINYGZbnzwgFSznadxHjdAq1Mi13ARh3urcQf0H_LA"
                  alt=""
                  className="blog-post-image"
                />
                <img
                  src="https://i.picsum.photos/id/195/100/100.jpg?hmac=vRu_NpzSS_L4oZCg-OfhAeRweDc_RHC5UccZxQ6rTLk"
                  alt=""
                  className="blog-post-image"
                />
                <img
                  src="https://i.picsum.photos/id/140/100/100.jpg?hmac=4Skh7lTq0bdRmnXi_Pkq6odpzJruyj3UDBQWGHkCO-o"
                  alt=""
                  className="blog-post-image"
                />
              </div>
            </div>
          </div>
        );
      })}
      <EditModal id={blogPostToEdit} />
    </div>
  );
}

export default BlogItems;
