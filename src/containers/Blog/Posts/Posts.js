import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
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
    this.setState({
      selectedPostId: id
    });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            title={post.title}
            key={post.id}
            author={post.author}
            clicked={() => this.postselectedHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts"> {posts}</section>;
  }
}

export default Posts;
