import React, { Component } from 'react'


class Message extends Component {
    constructor() {
        super()
        this.state= {
            message: 'fuck you!'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you!'
        })
    }

    render() {
      return(
          <div>
              <h1>{this.state.message}</h1>
              <button onClick={ ()=> this.changeMessage()}> click </button>
          </div>
      )
    }
}

export default Message;

//
// this.stateにて初期値を代入する。→その後this.setStateを利用し,そのmessageを更新するようになっている。
// ただ、state自体の値はボタンを押すことで変わっている為,再度ボタンを押しても最初の値である(this.state)の状態には戻らない。