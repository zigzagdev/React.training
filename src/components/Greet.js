import React from  'react'


const Greet = (props) => {
    
    return <h1>  Hello {props.name} ! </h1>
}

export default Greet;

// 親クラス(App.js)で定義された変数(プロパティ)を子(Componentsファイル群にて)で継承をする。
// その際,{props.children}と定義してあげることで不確定要素等を全て親ファイルからの継承で呼び出しが可能になる。
// (そうする場合は必ず<>タグにてラッピングしてあげないとエラるから注意, => <div></div> {props._children}とはならない)
// ただ、親クラスでのformの入力を行う(Form等)ことで子に渡せると思うがどのようにしてその渡し方を行うかが重要になる。