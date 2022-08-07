import React, { useState, useEffect } from "react";

const InterHookCounter = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prevcount => prevcount + 1)
  }
  useEffect(() => {
    const intel = setInterval(tick, 1000);
    return () => {
      clearInterval(intel);
    }
  }, [])
  return(
    <div>
      {count}
    </div>
  )
}
export default InterHookCounter;

// In useEffect method, this method can set two arguments. And setting a first argument, you can return
// clean up function for making unmounting state. This method can be used for like setting a timer or count
// something. Whether setting a second argument or not is depending on first argument and if it needed, set
// a square brackets as a second argument.