import React from  'react'


const Greet = (props) => {
    console.log(props)
    return <h2> Bonjour {props.name} to {props.hero}</h2>
    }
export default Greet;