import React, { useState } from "react";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import AppMessages from "./components/AppMessages/AppMessages";
import AddPost from "./components/AddPost/AddPost";
import BlogCategories from "./components/BlogCategories/BlogCategories";
import BlogItems from "./components/BlogItems/BlogItems";
import AddModal from "./components/AddModal/AddModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div className="container-fluid pr-0 pl-0">
        <Navbar handleChange={handleChange} />
        <AppMessages />
        <AddPost />
        <div className="row no-gutters">
          <div className="col-md-2 col-sm-12 px-2 py-2">
            <BlogCategories />
          </div>
          <div className="col-md-10 col-sm-12 px-2 py-2">
            <BlogItems searchTerm={searchTerm} />
          </div>
        </div>
        <AddModal />
      </div>
    </div>
  );
}

export default App;
