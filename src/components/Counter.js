import React, {useReducer} from "react";

const initialState = 0;
const reducer = (state, change) => {
  switch(change) {
      case 'first':
          return state + 5
      case  'second':
          return state - 5
      case  'reset' :
          return  initialState
      default:
          return state
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
      <div>
          <div>Count  {count}</div>
        <button onClick={() => dispatch('first')}>First Button</button>
        <button onClick={() => dispatch('second')}>Second Button</button>
        <button onClick={() => dispatch('reset')}>reset</button>
      </div>
  );
}

export default Counter;