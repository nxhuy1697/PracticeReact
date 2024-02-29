import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    <App />

    {/* <Comp1 /> */}
    {/* <Profile /> */}
    {/* <ExampleComponent /> */}
    {/* <Lifecycle/> */}
    {/* <Counter /> */}
    {/* <AgeChecker/>
    <GroceryList />
    <Form /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
