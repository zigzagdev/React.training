import React, { useState, useCallback } from "react";
import Count from './Count';
import Button from './Button'
import Title from './Title';

function ParentComponent(props) {
    const [age, setAge] = useState(50);
    const [money, setMoney] = useState(1000);

    const incrementAge = useCallback((e) => {
        setAge(age + 1);
    }, [age])
    const incrementMoney = useCallback((e) => {
        setMoney( money + 100);
    }, [money])
    return (
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button handleClick={incrementAge}> Increment </Button>
            <Count text="money" count={money}/>
            <Button handleClick={incrementMoney}> illll </Button>
        </div>
    );
}

export default ParentComponent;