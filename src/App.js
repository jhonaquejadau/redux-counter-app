import React from "react";
import {legacy_createStore } from "redux";

function counterReducer(state = 0, action) {
  switch (action.type){
      case '@counter/increment':
          return state + 1
      case '@counter/decrement':
          return state - 1
      case '@counter/reset':
          return 0
      default:
          return state
  }
}

const incrementValue = {
  type: "@counter/increment",
};

const decrementValue = {
  type: "@counter/decrement",
};

const resetValue = {
  type: "@counter/reset",
};

const store = legacy_createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))

export default function App() {
  return (
    <div>
      <h1>STATE VALUE</h1>
      <h2>{store.getState()}</h2>
      <button onClick={() => store.dispatch(incrementValue)}>Add 1</button>
      <button onClick={() => store.dispatch(resetValue)}>Reset</button>
      <button onClick={() => store.dispatch(decrementValue)}>Subtract 1</button>
    </div>
  );
}
