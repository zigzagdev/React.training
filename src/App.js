import React, {useReducer} from 'react'
import './App.css'
import Greet from './components/Greet'
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
// import Welcome from "./components/Welcome";
// import Count from "./components/Counter"
// import Counter from "./components/Counter";
// import CounterTwo from "./components/CounterTwo";

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, change) => {
    switch (change) {
        case 'first':
            return state + 5
        case  'second':
            return state - 5
        case  'reset' :
            return initialState
        default:
            return state
    }
}
const App = () => {
    const [count, dispatch] =useReducer(reducer, initialState)
    return (
        <CountContext.Provider value = {{ countState: count, countDispatch: dispatch}}>
            <div className="App">
                <Greet name="Fuck you" age="45"/>
                {/*<Welcome/>*/}
                {/*<Count/>*/}
                {/*<CounterTwo/>*/}
                Count - {count}
                <ComponentA/>
                <ComponentB/>
                <ComponentC/>
            </div>
        </CountContext.Provider>
  )
}
export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。