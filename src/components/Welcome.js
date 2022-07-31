import React from 'react'

const Welcome = (props) => {
  console.log(props);
  return <h2> Welcome {props.name} to {props.hero}</h2>
}

export default Welcome;


//基本的に関数コンポでの書くことが多い。(thisやbindを使う必要性がない為。同時にシンプルな構文での作成が可能になる)