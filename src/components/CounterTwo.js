import React, {useReducer} from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

function CounterTwo() {
    const reducer = (state, change) => {
        console.log(state.firstCounter)
        switch(change.type) {
            case 'first':
                return {...state, firstCounter: state.firstCounter + change.value}
            case 'second':
                return {...state, firstCounter: state.firstCounter - change.value}
            case 'reset' :
                return  {...state, firstCounter: initialState.firstCounter}
            case 'jumpFirst':
                return {...state, secondCounter: state.secondCounter + change.value}
            case 'jumpSecond':
                return {...state, secondCounter: state.secondCounter - change.value}
            case 'jumpReset' :
                return  {...state, secondCounter: initialState.secondCounter}
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count  {count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'first', value: 1})}>First Button</button>
            <button onClick={() => dispatch({type: 'second', value: 1})}>Second Button</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            <div>Count  {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'jumpFirst', value: 1})}>First Button</button>
            <button onClick={() => dispatch({type: 'jumpSecond', value: 1})}>Second Button</button>
            <button onClick={() => dispatch({type: 'jumpReset'})}>reset</button>
        </div>
    );
}

export default CounterTwo;