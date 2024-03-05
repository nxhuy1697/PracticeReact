import { memo } from "react";

function Text({onIncrease}) {
    console.log('re-render')

  return (
    <>
    
      <h2>hello text</h2>

      <button onClick={onIncrease}> Click me! </button>
    </>
  );
}

export default memo(Text);
