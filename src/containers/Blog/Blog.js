import React, { Component } from "react";
import axios from "../../axios";

import Posts from "./Posts/Posts";
// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Post_hdr">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog/create">Write Blog</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
