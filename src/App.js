import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
// eslint-disable-next-line
import Message from "./components/Message";
import Counter from "./components/Count";


class App extends Component{
    render() {
      return(
       <div className="App">
        {/* <Message name="ronaldo" hero="Bad Man"/>*/}
        {/* <Message/>*/}
         <Greet name="ronaldo" hero="Bad Man"/>
           <Greet name="Chan"/>
           <button>Push</button>
            <Greet/>
           <Greet hero="Eda"/>
        {/*<Welcome name="Matthew"/>*/}
        {/*<Welcome name="ronaldo" hero="messi"/>*/}
         <Counter/>
       </div>
      );
    }
}

export default App;