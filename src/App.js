import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
import Message from "./components/Message";

class App extends Component{
    render() {
      return(
       <div className="App">
         {/*<Message/>*/}
         <Greet name="ronaldo" hero="Bad Man"/>
           <Greet name="Chan"/>
           <button>Push</button>
            <Greet/>
           <Greet hero="Eda"/>

        <Welcome name="Matthew"/>
        <Welcome name="ronaldo" hero="messi"/>
       </div>
      );
    }
}

export default App;