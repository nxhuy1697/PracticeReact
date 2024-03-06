import React, { useReducer} from "react";

//b1: init state
const initState = 0;

//b2: action
const PLUS_ACTION = 'plus';
const MINUS_ACTION = 'minus';

// reducer
const reducer = (state, action) => {
    console.log('running')
    switch (action){
        case PLUS_ACTION:
            return state + 1;
        case MINUS_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid Action')
    }
}

export default function UseReducer() {
  const [count, dispatch ] = useReducer(reducer, initState);
  const handlePlus = () => {
    dispatch(PLUS_ACTION);
  };
  const handleMinus = () => {
    dispatch(MINUS_ACTION);
  };

  return (
    <div style={{ padding: 30 }}>
      <button onClick={handleMinus}>-</button>
      <span style={{ margin: "0px 20px" }}>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
