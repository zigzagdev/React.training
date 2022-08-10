import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import ComponentC from "./components/ComponentC";
// import ComponentE from "./components/ComponentE";
// import ComponentF from "./components/ComponentF";

export const Context = React.createContext()
export const Channel = React.createContext()

class App extends Component{
    render() {
      return(
       <div className="App">
         <Greet name="Fuck you" age="45"/>
         <Welcome title="hey you"/>
         <Context.Provider value={"fuckin jesus"}>
           <Channel.Provider value={"ooooooo shit !!!!"}>
             <ComponentC/>
           </Channel.Provider>
         </Context.Provider>
       </div>
      );
    }
}

export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。