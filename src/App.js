import React from 'react'
import './App.css'
import ParentComponent from "./components/ParentComponent";

const App = () => {
  return(
    <div className="App">
        Hello world !!
        <ParentComponent/>
    </div>
  )
}
export default App;

// How To fetch remote branch.

// 1. use command git branch -a and checkout to what you want.
// 2. use command git checkout -b (first argument is your local branch name and second one is remote branch )
