import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
// eslint-disable-next-line
import Message from "./components/Message";
import Function from "./components/Function";
import ClassClick from "./components/ClassClick";


class App extends Component{
    render() {
      return(
       <div className="App">
          <ClassClick/>
          <Function/>
         {/*<Message/>*/}
        {/* <Greet name="ronaldo" hero="Bad Man"/>*/}
        {/*   <Greet name="Chan"/>*/}
        {/*   <button>Push</button>*/}
        {/*    <Greet/>*/}
        {/*   <Greet name="Eda"/>*/}

        {/*<Welcome name="Matthew"/>*/}
        {/*<Welcome name="ronaldo"/>*/}
       </div>
      );
    }
}

export default App;