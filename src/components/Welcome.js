import React, { Component } from 'react'

const Welcome = ({name, hero}) => {
  return(
    <h2>Welcome {hero} to {name}</h2>
  )
}

export default Welcome;