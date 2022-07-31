import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount( count + 1);
  }
  const addfive = () => {
    setCount( count + 5);
  }
  const reset = () => {
    setCount(0);
  }
  // useState()の引数には、最初に設定したい内容のものをもってくる。
  return(
    <div>
      <button onClick={add}>fuck</button>
      <button onClick={addfive}>fuck</button>
      <button onClick={reset}>fuck</button>
      <div>Count {count}</div>
    </div>
  )
}

export default Counter;