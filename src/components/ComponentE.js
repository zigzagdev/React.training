import React, {useContext} from 'react';
import ComponentF from "./ComponentF";
import {CountContext} from "../App";

const ComponentE = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <ComponentF/>
            E - {countContext.countState}
            <button onClick={() => countContext.countDispatch('first')}>First Button</button>
            <button onClick={() => countContext.countDispatch('second')}>Second Button</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    );
};

export default ComponentE;