import React, {useState, useEffect} from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log('you fuck you asshole !!')
    document.title = `You clicked ${count} times`
  }, [count])
  return(
    <div>
      <input onChange={e => setName(e.target.value)} type="text" value={name}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times!</button>
      <button onClick={() => setCount(count - 1)}>Click {count} times!</button>
    </div>
  )
}
export default HookCounterOne;