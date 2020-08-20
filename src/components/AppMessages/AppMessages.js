import React from "react";
import "./app-messages.scss";

function AppMessages() {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-md-10 col-sm-12 px-2 py-2 ml-auto">
          <div className="messages-wrapper">
            <h3 className="blog-title">Welcome to My Blog</h3>
            <div className="msg-container">
              <p className="msg">Container for showing application messages</p>
              <i className="fas fa-times close-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMessages;
