// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";import Blog from './pages/Blog';
import Contact from './pages/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />}>

          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

