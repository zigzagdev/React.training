// import React, { Component,PureComponent } from  'react'
// import RegComp from "./RegComp";
// import PureComp from "./PureComp";
//
// export class ParentComp extends PureComponent{
//
//    constructor(props) {
//      super(props)
//
//      this.state = {
//        name: "Buffon"
//      }
//    }
//
//    componentDidMount() {
//      setInterval(() => {
//          this.setState({
//              name: "Ronaldo"
//          })
//      },100)
//    }
//
//     render() {
//      return(
//       <div>
//         Parent Component
//         <RegComp name={this.state.name}/>
//         <ParentComp name={this.state.name}/>
//       </div>
//      )
//     }
// }
//
// export default ParentComp ;