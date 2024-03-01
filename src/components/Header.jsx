import React from "react";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <a href="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=ais"
              alt="logo"
              width={70}
            />
          </a>
          <p>Me learning reactjs</p>
        </div>
        <div className="nav-right">
          <div className="nav-item" >
            <a href="/">Home</a>
          </div>
          <div className="nav-item">
            <a href="/blog">Blogs</a>
          </div>
          <div className="nav-item">
            <a href="/contact">Contacts</a>
          </div>
        </div>
      </div>
    </header>
  );
}
