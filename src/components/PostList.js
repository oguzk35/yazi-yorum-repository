import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => setPostList(response.data)) // title, content, created_at, id
      .catch((err) => console.log(err));
  }, []);

  return postList.map((post) => {
    return (
      <div className="ui relaxed divided list" key={post.id}>
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <Link to={`/posts/${post.id}`} className="header">
              {post.title}{" "}
            </Link>
            <div className="ui mini label">{post.created_at}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
