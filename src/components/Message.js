import React, {useState} from 'react'


const Message = (props) => {
  const [message, setMessage] = useState("fuck you");
  
  return(
    <div>
      <h2> Welcome {message} to {props.hero}</h2>
      <h4>{setMessage}</h4>
      <button onClick={() => setMessage("kill me")}>fuccccccckkkk</button>
    </div>
  )
}

export default Message;

//
// this.stateにて初期値を代入する。→その後this.setStateを利用し,そのmessageを更新するようになっている。
// ただ、state自体の値はボタンを押すことで変わっている為,再度ボタンを押しても最初の値である(this.state)の状態には戻らない。

// 上記は関数コンポの一例である。
// propsにはApp.jsで定義されているオブジェクトが代入される。
// 一方のstateには初期状態(リダイレクトやリロードした際に初期状態に戻る)としてfuck youがuseStateで入っている。
// ボタンをクリックするイベントの発火タイミングでmessageが変更され、messageがsetMessageに変更されて状態がkill meに変更される。