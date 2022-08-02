import React, { memo } from 'react';


const Children = memo((props) => {
  console.log(props);
  return(
    <div>
      Count times are {props.time} times pushed.
    </div>
  )
})
export default Children;

// Props will inherit everything  from Parent's.