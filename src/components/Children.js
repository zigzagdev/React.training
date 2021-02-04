import React from 'react'

function ChildrenComponent(props) {
    return(
      <div>
        <button onClick={() => props.greetHandler('child')}>Greet parent</button>
      </div>
    )
}

export default ChildrenComponent;