import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=ais"
              alt="logo"
              width={70}
            />
          </a>
          <p>Me learning reactjs</p>
        </div>
        <div className="navbar">

            <a href="/">Home</a>

            <a href="/blog">Blogs</a>

            <a href="/contact">Contacts</a>

        </div>
      </div>
    </header>
  );
}
