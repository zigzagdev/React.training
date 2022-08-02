import React, { useState, useMemo } from 'react'
import Children from "./Children";

const Parent = () => {
  const [time, setTime] = useState(0);
  const [word, setWord] = useState("fuck you !");
  return (
    <div>
      <button onClick={() => setTime((v) => v +1)}>+1</button>
      <button onClick={() => setTime((v) => v -1)}>-1</button>
      <button onClick={() => setTime(0)}>0</button>
      <Children word={word} time={time}/>
      <button onClick={() => setWord("changed !")}>Click here</button>
      <button onClick={() => setWord("fuck you !")}>Click here</button>
    </div>
  );
}
export default Parent;

//In l.13, Parent component is passing the value to Child component.
//The curly braces which tie the value will pass it to child component And, Child component will inherit form Parent's as a props.


// class Parent extends Component{
//     constructor(props) {
//       super(props)
//         this.state= {
//           parentName: 'Parent'
//         }
//
//         this.greetParent= this.greetParent.bind(this)
//     }
//
//
//     greetParent (childName) {
//         alert(`Bonjour ${this.state.parentName} from ${childName}`)
//     }
//
//     render() {
//       return(
//           <div>
//            <ChildrenComponent greetHandler={this.greetParent}/>
//           </div>
//       )
//     }
// }
//
// export default Parent