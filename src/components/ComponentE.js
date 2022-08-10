import React, {useContext} from "react";
import {Context, Channel} from "../App";

const ComponentE = () => {
  
  const first = useContext(Context)
  const second = useContext(Channel)
  return(
    <div>
      {first} vs {second}
    </div>
  )
}
export default ComponentE;

// this is not nesting the Context pt. Usually this useContext pattern is used.