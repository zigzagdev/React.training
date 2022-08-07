import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
// import Welcome from "./components/Welcome";
// import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import InterHookCounter from "./components/InterHookCounter";

class App extends Component{
    render() {
      return(
       <div className="App">
         <Greet name="Fuck you" age="45"/>
         {/*<Welcome/>*/}
         {/*<HookMouse/>*/}
         <MouseContainer/>
         {/*<HookCounterOne/>*/}
         <InterHookCounter/>
       </div>
      );
    }
}

export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。