import React, { Component } from 'react'


// class Welcome extends Component {
//     render(){
//      return(
//       <h2>
//         Welcome {this.props.name} to {this.props.name}
//       </h2>
//      )
//     }
// }

const Welcome = (props) => {
  console.log(props);
  return <h2> Welcome {props.name} to {props.hero}</h2>
}

export default Welcome;


//基本的に関数コンポでの書くことが多い。(thisやbindを使う必要性がない為。同時にシンプルな構文での作成が可能になる)
// 故に上二つの書き方は全く同じである。