// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />}>
        </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
