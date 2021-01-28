import React, { Component } from 'react'
import ChildrenComponent from "./Children";


class Parent extends Component{
    constructor(props) {
      super(props)
        this.state= {
          parentName: 'Parent'
        }

        this.greetParent= this.greetParent.bind(this)
    }


    greetParent (childName) {
        alert(`Bonjour ${this.state.parentName} from ${childName}`)
    }

    render() {
      return(
          <div>
           <ChildrenComponent greetHandler={this.greetParent}/>
          </div>
      )
    }
}

export default Parent;