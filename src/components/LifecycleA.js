import  React, { Component } from 'react'
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component{
    constructor(props) {
     super(props)
      this.state = {
         name: 'Buffon'
       }
     console.log('LifecycleA constructor')
    }
     static getDerivedStateFromProps(props, state) {
       console.log('LifecycleA getDerivedStateFromProps')
      return "Ronaldo"
     }

     componentDidMount() {
       console.log('LifecycleA componentDidMount')
     }

     shouldComponentUpdate() {
       console.log('LifecycleA shouldComponentUpdate')
        return true
     }

     getSnapshotBeforeUpdate() {
        console.log('LifecycleA  getSnapshotBeforeUpdate')
         return null
     }

     componentDidUpdate() {
         console.log('LifecycleA componentDidUpdate')
     }

     changeState = ()  => {
        this.setState({
            name: 'Fuckin Jesus!!'
        })
     }

    render() {
      return(
        <div>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>Change state</button>
             <h1>Fuck you!!!!! Buffon</h1>
              <LifecycleB/>
        </div>
      )
    }
}

export default LifecycleA ;