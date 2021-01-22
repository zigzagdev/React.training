import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";

class App extends Component{
    render() {
      return(
       <div className="App">
         <Greet name="ronaldo" hero="Bad Man"/>
           <Greet name="Chan"/>
           <button>Push</button>
            <Greet/>
           <Greet name="Eda"/>

        <Welcome name="Matthew"/>
        <Welcome name="ronaldo"/>
       </div>
      );
    }
}

export default App;