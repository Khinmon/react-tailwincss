import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const [posts, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl mb-5 mt-5">User Data</h1>
        <div className="grid grid-cols-4 gap-5">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="border p-5 rounded-xl"
                onClick={() => navigate(`/detail/${post.id}`)}
              >
                <img src={post.url} alt="" className="mb-5 rounded-lg" />
                {post.id} - {post.title}
                <Link
                  to={`/detail/${post.id}`}
                  className="text-green-500 ml-10"
                >
                  See More...
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default User;
