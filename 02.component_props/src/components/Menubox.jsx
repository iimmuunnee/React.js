import React from 'react'

// rafce : 함수 틀을 자동완성해주는 명령어
// 컴포넌트는 함수형태로 되어있기 때문에
// 부모 컴포넌트로부터 전달받은 데이터를 매개변수를 통해서 가져올 수 있다.
// 값의 형태 : 객체

// const Menubox = (props) => {

//     // console.log(props);
//     console.log(props.name);
//     console.log(props.price);

//     return (
//         <div>
//             <div className="menu_item">
//                 <h3>{props.name}</h3>
//                 <p>{props.price}</p>
//             </div>
//         </div>
//     )
// }

// export default Menubox


/* 
    비구조화 할당(destructuring assigment)
    - 객체 안에 있는 속성만 꺼내서 각각의 변수에 저장하는 자바스크립트 문법
    let menu = {name: "아메리카노", price : "3000"}
    let {name, price} = menu
    이름이 같으면 자동으로 할당되서 키 값을 가지고 사용할 수 있다
*/
const Menubox = ({name, price}) => {

    return (
        <div>
            <div className="menu_item">
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Menubox