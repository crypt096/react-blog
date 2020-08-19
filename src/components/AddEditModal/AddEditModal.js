import React from "react";

import "./add-edit-modal.scss";

function AddEditModal() {
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
                  placeholder="Title of the post"
                />
                <span className="required">*</span>
              </div>
              <div className="row no-gutters">
                <span className="modal-blog-text-label">Text</span>
                <textarea
                  className="modal-blog-textarea-content"
                  name="modal-blog-text"
                  id="modal-blog-text"
                  placeholder="Text of the post"
                ></textarea>
                <span className="required">*</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-btn post-btn">
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

export default AddEditModal;
