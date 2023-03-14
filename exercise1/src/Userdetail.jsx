import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Userdetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post);

  return (
    <>
      <div className="container mx-auto">
        <Link to="/">Back</Link>
        <div className="border p-5 rounded-xl shadow-xl mt-10">
          <img src={post.url} alt="" className="mb-5 rounded-lg" />
          <h1>User : {id}</h1>
          <h2>Title : {post.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Userdetail;
