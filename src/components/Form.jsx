import React, { useState } from "react";

export default function Form() {
  const [inputs, setInput] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput (values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }
  return (
    <div style={{ padding: 30 }}>
      <h1>I'm learning React Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="1">Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="1"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
         <label htmlFor="2">Address: </label>
        <input
          type="text"
          placeholder="Enter your address"
          id="2"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
