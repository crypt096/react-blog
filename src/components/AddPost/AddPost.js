import React from "react";

import "./addpost.scss";

function AddPost() {
  return (
    <div className="row no-gutters btn-wrapper">
      <button
        type="button"
        className="add-post"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add post
      </button>
    </div>
  );
}

export default AddPost;
