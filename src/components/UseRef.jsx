import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log('Start -->', timerId.current);
  };
  const handleStop = () => {
    clearInterval(timerId.current);

    console.log('Stop', timerId.current);
  };

  console.log(count, prevCount)

  useEffect (() => {
    prevCount.current = count
  }, [count])
  return (
    <div style={{ padding: 30 }}>
      <h1>App bấm giờ sd useRef</h1>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}> Stop</button>
    </div>
  );
}
