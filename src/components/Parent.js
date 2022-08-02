import React, { useState } from 'react'
import Children from "./Children";

const Parent = () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <button onClick={() => setValue((v) => v +1)}>+1</button>
      <button onClick={() => setValue((v) => v -1)}>-1</button>
      <button onClick={() => setValue(0)}>0</button>
      <Children/>
    </div>
  );
}
export default Parent;


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