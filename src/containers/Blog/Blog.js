import React, { Component } from "react";
import axios from "../../axios";
import { Route, Link } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Post_hdr">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/blog/create",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  Write Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/blog/create" exact component={NewPost} />
        {/*<Route path="/" render={() => <h1>HOME</h1>} />*/}
      </div>
    );
  }
}

export default Blog;
