import React, {useState, useMemo} from 'react';

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


   const isEven =  useMemo(() => {
        let i = 0
        while (i < 1000) i ++
       console.log('worthlessRendering')
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <button onClick={incrementOne}>incrementOne{counterOne}</button><br/>
            <span> {isEven ? 'even': 'odd'}</span>
            <button onClick={incrementTwo}>incrementTwo{counterTwo}</button><br/>
            <button></button>
        </div>
    );
};

export default Counter;