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
// import PureComp from "./components/PureComp";















class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter>
                    {(count,incrementCount) => (
                      <ClickCounterTwo count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <Counter>
                    {(count,incrementCount) => (
                        <HoverCounterTwo count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                {/*<User render={ (isLoggedIn) => isLoggedIn ? 'Buffon': 'Guest'}/>*/}
                {/*<ClickCounterTwo/>*/}
                {/*<HoverCounterTwo/>*/}
            {/*   <ErrorBoundary>*/}
            {/*    <Hero heroName={"Batman"}/>*/}
            {/*   </ErrorBoundary>*/}

            {/*   <ErrorBoundary>*/}
            {/*    <Hero heroName={"Matthew"}/>*/}
            {/*   </ErrorBoundary>*/}

            {/*   <ErrorBoundary>*/}
            {/*    <Hero heroName={"Joker"}/>*/}
            {/*   </ErrorBoundary>*/}
                {/*<PortalDemp/>*/}
                {/*<FRParentInput/>*/}
                {/*<FRInput/>*/}
                {/*<FocusInput/>*/}
                {/*<RefsDemo/>*/}
                {/*<PureComp/>*/}
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
                {/*<ClickCounter name="Matthew"/>*/}
                {/*<HoverCounter/>*/}
                {/*<Welcome name="Matthew"/>*/}
                {/*<Welcome name="ronaldo"/>*/}
            </div>
        );
    }
}

export default App ;