import React, { Component } from "react";
import axios from "../../axios";
import { Route } from "react-router-dom";
import Posts from "./Posts/Posts";
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
        <Route path="/" exact render={() => <h1>HOME</h1>} />
        <Route path="/" render={() => <h1>HOME</h1>} />
      </div>
    );
  }
}

export default Blog;
