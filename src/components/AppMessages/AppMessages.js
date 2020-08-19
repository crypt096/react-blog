import React from "react";
import "./appmesages.scss";

function AppMessages() {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-3">TEST</div>
        <div className="col-9">
          <div className="messages-wrapper">
            <h1>Welcome to my blog</h1>
            <div className="msg-container">
              <p>Container for showing application messages</p>
              <i className="fas fa-times close-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMessages;
