import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import Greet from './components/Greet'
// eslint-disable-next-line
import Welcome from "./components/Welcome";
// eslint-disable-next-line
// import Message from "./components/Message";
// import Function from "./components/Function";
// import ClassClick from "./components/ClassClick";
// import  BindingHandler from "./components/BindingHandler"
// import Parent from "./components/Parent";
// import ChildrenComponent from "./components/Children";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import './appStyles.css';
// import styles from  './appStyles.module.css'
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import LifecycleB from "./components/LifecycleB";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import Columns from "./components/Columns";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";









class App extends Component{
    render() {
      return(
       <div className="App">
           <ParentComp/>
           <RegComp/>
           <PureComp/>
           {/*<Columns/>*/}
           {/*<Table/>*/}
           {/*<FragmentDemo/>*/}
           {/*<h1 className='error'>Error</h1>*/}
           {/*<h1 className={styles.success}>Success</h1>*/}
           {/*<LifecycleA/>*/}
           {/*<LifecycleB/>*/}
           {/*<Form/>*/}
           {/*<Inline/>*/}
           {/*<Stylesheet primary={ false }/>*/}
           {/*<NameList/>*/}
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