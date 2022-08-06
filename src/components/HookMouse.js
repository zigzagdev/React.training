import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const f = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(() => {
    console.log('moving~~~~')
    window.addEventListener('mousemove', f);
    return () => {
      console.log('$$$$$$$$$$$');
      window.removeEventListener('mousemove', f);
    }
  }, [])
  return(
    <div>
      Hooks - {x} {y}
    </div>
  )
}
export default HookMouse;

// Firstly,clientX and clientY is a javascript method which is used for MouseEvent and provides the horizontal
// coordinate within the application's viewport .So, can't alternative other word.

// useEffect function