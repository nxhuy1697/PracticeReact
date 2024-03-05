import React from "react";
import Header from "../components/Header";
import UseEffecto from "../components/UseEffecto";
import UseCallback from "../components/UseCallback";

export default function Layout() {
  return (
    <>
      <div>
        <Header />
        <h1 style={{ padding: 30 }}>Thực hành useEffect</h1>
        <UseEffecto />
      </div>

      <div style={{ padding: 30 }}>
        <h1> Thực hành useCallback</h1>
        <UseCallback />
      </div>
    </>
  );
}
