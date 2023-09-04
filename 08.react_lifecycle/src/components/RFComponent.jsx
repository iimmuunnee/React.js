import React, { useEffect, useState } from 'react'

/*
    1. Life Cycle(생명주기)
     - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
     - Mount, Update, UnMount
     Mount : 컴포넌트가 화면에 처음 그려지는 상태 EX) API를 가져와서 사용할 때
     Update : props, state, force Update 변화가 발생했을 때 리렌더링 되는 상태
            + 부모 컴포넌트가 갱신되었을 때도 동작
            EX) 특정 state가 변경되었을 때 활용
     UnMount : 컴포넌트가 화면에서 사라진 상태
     - 함수형 컴포넌트에서는 useEffect() 사용 (클래스 컴포넌트에선 사용 불가)
*/

const RFComponent = () => {

    console.log("1. constructor 대체 => 함수 초기화");
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    const handleIncrement = () => {
        setNum(num + 1)
    }

    const handleIncrement2 = () => {
        setNum2(num2 + 1)
    }

    // 3. componentDidMount 대체 did와 update를 구분할 수 있음 => 배열의 역할
    // useEffect(() => {실행 로직}, []) : 화면이 처음 렌더링 될 때 실행
    useEffect(() => {
        console.log("3. componentDidMount 대체 => 화면 렌더링 완료!");
    }, []) // 배열은 빈배열이라면 생략 가능

    // componentDidUpdate 대체 => 배열안에 state를 넣어주기
    // useEffect(() => {실행 로직}, [변화를 감지 할 state])
    // - 특정 state가 변화할 때 실행 : 배열안에 들어있는 state가 변할 때만 실행

    // useEffect(() => {
    //     console.log("componentDidUpdate 대체 => [state] 배열안에 state 넣어주기");
    // }, [num])

    // useEffect(() => {
    //     console.log("num2 state 변화 감지");
    // }, [num2])

    useEffect(() => {
        console.log("num or num2 state 변화 감지");
    }, [num, num2])

  return (
      <div>
        {console.log("2. render 대체 => return문 안")}
        <p>
            RFComponent : {num} <br/>
            <button onClick={handleIncrement}>+1</button>
        </p>
        <p>
            RFComponent : {num2} <br/>
            <button onClick={handleIncrement2}>+1</button>
        </p>

    </div>
  )
}

export default RFComponent