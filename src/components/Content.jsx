
import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
export default function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setTypes] = useState("posts");

  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setTypes(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {" "}
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
