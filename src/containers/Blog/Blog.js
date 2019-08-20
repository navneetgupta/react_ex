import React, { Component } from "react";
import axios from "../../axios";
import { Route, NavLink } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header className="Post_hdr">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="my_active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/blog/create",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                  activeClassName="my_active"
                  activeStyle={{ color: "#2f35df" }}
                >
                  Write Blog
                </NavLink>
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
