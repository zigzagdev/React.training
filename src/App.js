import React from 'react'
import './App.css'
import Focus from "./components/Focus";
import Timer from "./components/Timer";

const App = () => {
  return(
    <div className="App">
        Hello world !!
        <Focus/>
        <Timer/>
    </div>
  )
}
export default App;

// How To fetch remote branch.

// 1. use command git branch -a and checkout to what you want.
// 2. use command git checkout -b (first argument is your local branch name and second one is remote branch )
