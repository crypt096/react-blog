import React, { useState, useEffect } from "react";

import axios from "axios";

import "./edit-modal.scss";

function EditModal({ id }) {
  const [blogItem, setBlogItem] = useState([]);

  const onInputChange = (e) => {
    setBlogItem({ ...blogItem, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBlogItem();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`,
      blogItem
    );
    window.location.href = "/";
  };

  const loadBlogItem = async () => {
    const res = await axios.get(
      `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`
    );
    setBlogItem(res.data.resultData);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel2">
                Edit blog post
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
                  defaultValue={blogItem.title}
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
                  defaultValue={blogItem.text}
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
                Update
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

export default EditModal;
