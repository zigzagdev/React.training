import React, { useEffect, useState } from "react";
import axios from 'axios';

const Fetch = () => {
  const [todo, setTodo] = useState({});
  const [id, setId] = useState(1);
  const [idButton, setIdButton] =useState(1);
  const handleClick = () => {
    setIdButton(id)
  }
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${idButton}`)
      .then(res => {
        setTodo(res.data)
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, [idButton])
  return(
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {todo.title}
    </div>
  )
}
export default Fetch;

// useState takes the initial value of the state variable as an argument like {}, int and str.
//want to change the initial value, hook with some javascript method like onClick and re rendering.
// And then u can change initial value to another value.q