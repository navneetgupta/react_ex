import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
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
                <NavLink to="/posts" exact activeClassName="my_active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/blog",
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
        <Switch>
          <Route path="/blog" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>

        {/*<Route path="/" render={() => <h1>HOME</h1>} />*/}
      </div>
    );
  }
}

export default Blog;
