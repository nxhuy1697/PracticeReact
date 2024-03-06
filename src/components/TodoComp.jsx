import React, { useReducer } from "react";
//userReducer thực hành:
//b1: Init State (xác định giá trị khởi tạo)
const initState = {
  job: "",
  jobs: [],
};
//b2: Action (xác định hành động)
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = payload => {
    return {
        type : SET_JOB,
        payload
    }
}


//b3: tạo Reducer
const reducer = (state, action) => {

    switch (action.type){
        case SET_JOB :
            return {
                ...state,
                job: action.payload
            }
            default:
                throw new Error('Invalid')
    }

};
//b4: dispatch (đi kích hoạt 1 action)

export default function TodoComp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  return (
    <div style={{ padding: 30 }}>
      <h1>What we're gonna do today?</h1>
      <input
        placeholder="Enter your works need to be done here"
        style={{ width: 500 }}
        value={job}
        onChange={e => {
            dispatch(setJob(e.target.value))
        }}
      />
      <button>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}> {job} &times; </li>
        ))}
      </ul>
    </div>
  );
}
