import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
// eslint-disable-next-line
import Message from "./components/Message";
import Function from "./components/Function";
import ClassClick from "./components/ClassClick";
import  BindingHandler from "./components/BindingHandler"
// import Parent from "./components/Parent";
// import ChildrenComponent from "./components/Children";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";


class App extends Component{
    render() {
      return(
       <div className="App">
           <NameList/>
           {/*<BindingHandler/>*/}
           {/*<UserGreeting/>*/}
           {/*<Parent/>*/}
           {/*<ChildrenComponent/>*/}
          {/*<ClassClick/>*/}
          {/*<Function/>*/}
         {/*<Message/>*/}
        {/* <Greet name="ronaldo" hero="Bad Man"/>*/}
        {/*   <Greet name="Chan"/>*/}
        {/*   <button>Push</button>*/}
        {/*    <Greet/>*/}
        {/*   <Greet name="Eda"/>*/}

        {/*<Welcome name="Matthew"/>*/}
        {/*<Welcome name="ronaldo"/>*/}
       </div>
      );
    }
}

export default App;