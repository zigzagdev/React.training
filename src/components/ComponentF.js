import React, {useContext} from 'react';
import {CountContext} from "../App";

const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            F - {countContext.countState}
            <button onClick={() => countContext.countDispatch('first')}>First Button</button>
            <button onClick={() => countContext.countDispatch('second')}>Second Button</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    );
};

export default ComponentF;