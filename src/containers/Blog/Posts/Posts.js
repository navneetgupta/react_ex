import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 6).map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: posts });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postselectedHandler = id => {
    // this.props.history.push({ pathname: "/" + id });
    this.props.history.push("/" + id);
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={`/${post.id}`} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postselectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return <section className="Posts"> {posts}</section>;
  }
}

export default Posts;
