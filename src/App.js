import React from "react";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import AppMessages from "./components/AppMessages/AppMessages";
import AddPost from "./components/AddPost/AddPost";
import BlogCategories from "./components/BlogCategories/BlogCategories";
import BlogItems from "./components/BlogItems/BlogItems";

function App() {
  return (
    <div className="App">
      <div className="container-fluid pr-0 pl-0">
        <Navbar />
        <AppMessages />
        <AddPost />
        <div className="row no-gutters">
          <div className="col-2 px-2 py-2">
            <BlogCategories />
          </div>
          <div className="col-10 px-2 py-2">
            <BlogItems />
            <BlogItems />
            <BlogItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
