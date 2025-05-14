import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://blog-hqx2.onrender.com/blog/single/${id}`
    );
    setSingleBlog(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>My single Blog</h1>
      <h1>{singleBlog?.tittle}</h1>
      <img src={singleBlog?.image} alt="" />
      <p>{singleBlog?.content}</p>
    </div>
  );
};

export default SingleBlog;
