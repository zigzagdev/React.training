import React from  'react'

const Greet = (props) => {
    console.log(props);
    const {name, hero} = props;
    return <h2> Bonjour {name} to {hero}</h2>
}
export default Greet;

//propsだと、オブジェクトだけの取得となるので、.をつけて値を表示させることで要素の取得が可能になる。
// 一方で{}をつけてあげてprops要素(ex.name)を渡すことでpropsを記述しなくても値を表示させることが可能になる。
//基本的には定数でpropsの値を{}内で代入してあげて、返してあげるのが良いのかも・・・