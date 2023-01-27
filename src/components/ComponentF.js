import React, {useContext} from "react";
import {Context, Channel} from "../App"

const ComponentF = () => {
    const channel = useContext(Context)
    const Test = useContext(Channel)
  return(
      <header>
          Welcome back, {channel}!
          You have {Test} notifications.
      </header>
  )
}

export default ComponentF;

// In general, useContext can pass the object through the parent component, so u need not to import every parent
// component to pass the parent value. First, write this code to parent component export const foo = React.createContext().
// Second,  wrap with <Context.Provider value={"text"}>. Third, write constant to where u want to import it and wrap with
// <Context.Consumer>. In this wrapping, u can rendering the value in there