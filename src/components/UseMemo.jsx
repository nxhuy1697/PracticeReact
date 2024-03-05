import React, { useMemo, useRef, useState } from "react";

export default function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef ();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prods) => {
      console.log("tính toán lại");
      return result + prods.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <div style={{ padding: "50px 30px", margin: "20px 0" }}>
        <h1>Thực hành useMemo</h1>
        <input
            ref={nameRef}
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          value={price}
          placeholder="Enter your price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleSubmit}>Add</button>
        <h3>Total: {total}</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
