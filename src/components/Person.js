import React from 'react'


function Person({person,key}) {
    return(
        <div>
            <h2>
                {key} I am {person.name}. I am {person.age}. My position is {person.skill}.
            </h2>
        </div>
    )
}

export default Person ;