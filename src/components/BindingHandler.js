import React, { Component } from 'react'

export class BindingHandler extends Component{
    constructor(props) {
      super(props)

      this.state={
          message: 'shut fuck up !'
      }
     //
     //    #1
     //    this.clickHandler= this.clickHandler.bind(this)
    }
     //
     // #2
    //
    // clickHandler() {
     //    this.setState({
     //       message: 'Joe Cola'
     //    })
     //   console.log(this)
     // }

       // #3
         clickHandler = () => {
          this.setState({
            message: 'fuck off!'
        })
       }

    render() {
     return(
        <div>
            <div>{this.state.message}</div>
            {/*<button onClick={() => this.clickHandler()}>Push</button>*/}
            <button onClick={this.clickHandler}>Push</button>
        </div>
     )
    }
}

export default BindingHandler ;