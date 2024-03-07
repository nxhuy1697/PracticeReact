import React, { useReducer, useRef } from "react";
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

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
//b3: tạo Reducer
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      };
      break;
    default:
      throw new Error("Invalid");
  }
  console.log("new state: ", newState);
  return newState;
};
//b4: dispatch (đi kích hoạt 1 action)

export default function TodoComp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>What we're gonna do today?</h1>
      <input
        ref={inputRef}
        placeholder="Enter your works need to be done here"
        style={{ width: 500 }}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {" "}
            {job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
