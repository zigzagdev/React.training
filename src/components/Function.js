import React from 'react'

function Function() {
    function clickHandler() {
        console.log('Push')
    }
    return(
        <div>
         <button onClick= {clickHandler('')}>Click</button>
        </div>
    )
}

export default Function;