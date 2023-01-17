import React from  'react'
import Son from "./Son";

const Greet = () => {
    return(
        <div>
            {/*<h1>Hello {props.name} ! </h1>*/}
            {/*<Son name="funk"/>*/}
            {/*<h2>test {props.name}</h2>*/}
        </div>
    )
}

export default Greet;

// 親クラス(App.js)で定義された変数(プロパティ)を子(Componentsファイル群にて)で継承をする。
// その際,{props.children}と定義してあげることで不確定要素等を全て親ファイルからの継承で呼び出しが可能になる。
// (そうする場合は必ず<>タグにてラッピングしてあげないとエラるから注意, => <div></div> {props._children}とはならない)