import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/AsyncComponent";
import "./Blog.css";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
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
          {this.state.auth ? (
            <Route path="/blog" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/*This also handles 404 Not found*/}
          {/*<Route component={Posts} />*/}
          {/*This also handles 404 Not found*/}
          {/*<Redirect from="/" to="/posts" />*/}{" "}
          {/*This also handles 404 Not found*/}
        </Switch>

        {/*<Route path="/" render={() => <h1>HOME</h1>} />*/}
      </div>
    );
  }
}

export default Blog;
