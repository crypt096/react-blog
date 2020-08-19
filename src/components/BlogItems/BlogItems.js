import React from "react";

import "./blog-items.scss";

function BlogItems() {
  return (
    <div className="blog-items-wrapper">
      <div className="row no-gutters">
        <div class="image-wrapper">
          <img
            className="blog-item-avatar"
            src="https://i.picsum.photos/id/454/80/80.jpg?hmac=lHlKkUsxK0B6KymVYwr7iMd-VQeoP4XvY0IQKEJ4zXY"
            alt="Blog img"
          />
        </div>
        <div class="blog-item-info-wrapper">
          <h5 className="blog-item-title">Blog post 1</h5>
          <p className="blog-item-details">Posted by blablah on 29.09.2020</p>
        </div>
        <div className="blog-item-btn-wrapper">
          <button type="button" className="blog-item-btn edit-btn">
            Edit
          </button>
          <button type="button" className="blog-item-btn delete-btn">
            Delete
          </button>
        </div>
      </div>
      <div className="row no-gutters">
        <p className="blog-post-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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
}

export default BlogItems;
