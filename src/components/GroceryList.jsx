import React from "react";

export default function GroceryList() {
  //making a list:
  const items = [
    { id: 1, name: "Chicken" },
    { id: 2, name: "Vegetable" },
    { id: 3, name: "Eggs" },
  ];
  return (
    <div style={{ padding: 30 }}>
      <h1>Grocery List</h1>
      {/* render list 
        key for id 
         */}
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.name}</li>
        ))}
      </ul>
    </div>
  );
}
