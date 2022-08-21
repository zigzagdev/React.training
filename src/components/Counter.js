import React, {useMemo, useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  const increment = () => {
    setCount( count + 1);
  }
  const twoincrement = () => {
    setSecond(second +1);
  }
  const even = useMemo(() => {
    let i = 0;
    while(i<20000) i++
    return count % 2 === 0
  }, [count])
  
  return(
    <div>
      <div>
        <button onClick={increment}>Count{count}</button>
        <span>{even ? "Yes" : "No"}</span>
      </div>
      <div>
        <button onClick={twoincrement}>Pushed{second}</button>
      </div>
    </div>
  )
}

export default Counter;