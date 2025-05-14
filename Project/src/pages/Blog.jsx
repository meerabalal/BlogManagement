import React from "react";

const Blog = () => {
  const fetchBlog = async () => {
    const response = await axios.get(
      "https://blog-hqx2.onrender.com/user/blog"
    );
    setBlogs(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchBlog();
  });
  return <div></div>;
};

export default Blog;
