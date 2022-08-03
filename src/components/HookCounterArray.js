import React, { useState } from "react";

const HookCounterArray = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items,{
      id: items.length,
      value: "fuck you !!!!!!!!!!!"
    }])
    console.log(items);
  }
  return(
    <div>
      <button onClick={addItem}>Add a Item</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default HookCounterArray;

// If u click the button, state will be created and array will be created. But it doesn't contain the first id:0.
//Because state updated will be counted as a first event, so first items array doesn't contain any values.