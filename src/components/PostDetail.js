import Axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  console.log(id);

  useEffect(() => {
    Axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => setPostDetail(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ui relaxed divided list" key={postDetail.id}>
      <div className="item">
        <div className="content">
          <h2>{postDetail.title} </h2>
          <div className="description">{postDetail.content}</div>
          <div className="ui mini label">{postDetail.created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
