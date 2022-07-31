import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
// import PortalDemp from "./components/PortalDemo";
// eslint-disable-next-line


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

export default App ;