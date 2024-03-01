import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Home from './pages/Home';
// import AgeChecker from './components/AgeChecker';
// import GroceryList from './components/GroceryList';
// import Form from './components/Form';
// import Comp1 from './components/Comp1';
// import Profile from './props/Profile';
// import ExampleComponent from './props/ExampleComponent';
// import Lifecycle from './props/Lifecycle';
// import Counter from './state/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
