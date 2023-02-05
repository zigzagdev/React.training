import React from 'react'
import './App.css'
import Counter from "./components/Counter";

const App =  () => {
  return(
    <div className="App">
        Here is demo page .
        <Counter/>
    </div>
  )
}

export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。