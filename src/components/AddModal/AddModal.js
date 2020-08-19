import React, { useState } from "react";
import axios from "axios";

import "./add-modal.scss";

function AddModal() {
  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  const onInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPost.title === "" || newPost.text === "") {
      console.log("One of fields is empty!");
    } else {
      await axios.post(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts",
        newPost
      );
      window.location.href = "/";
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">
                Add/Edit blog post
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row no-gutters title-wrapper">
                <span className="modal-blog-title-label">Title</span>
                <input
                  className="modal-blog-input-title"
                  type="text"
                  name="title"
                  placeholder="Title of the post"
                  onChange={(e) => onInputChange(e)}
                />
                <span className="required">*</span>
              </div>
              <div className="row no-gutters">
                <span className="modal-blog-text-label">Text</span>
                <textarea
                  className="modal-blog-textarea-content"
                  name="text"
                  id="modal-blog-text"
                  placeholder="Text of the post"
                  onChange={(e) => onInputChange(e)}
                ></textarea>
                <span className="required">*</span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modal-btn post-btn"
                onClick={onSubmit}
              >
                Post
              </button>
              <button
                type="button"
                className="modal-btn cancel-btn"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
