import React from 'react'
import './App.css'
import Greet from './components/Greet'
// import Welcome from "./components/Welcome";
import Count from "./components/Counter"

const App = () => {
  return(
    <div className="App">
      <Greet name="Fuck you" age="45"/>
      {/*<Welcome/>*/}
      <Count/>
    </div>
  )
}
export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。