import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementByAmount } from '../redux/reducers/counterSlice'
import {CounterReducerActions} from '../redux/reducers/counterSlice'


/*
    1. useSelector() : store에 등록된 state를 접근하기 위한 함수
        사용법 : useSelector((state) => state.등록된 reducer 속성명.state명)
        등록된 reducer 속성명 -> store의 reducer에 정의된 속성

    2. useDispatch() : state 변경에 대한 요청을 보내는 함수 
        사용법)
         const dispatch = useDispatch()
         dispatch(action) -> action에 대해 실행해줘

    3. Action : state를 변경하기 위한 명령
        ex) counterSlice의 reducers 속성에 정의된 increment, decrement
*/

const Counter = () => {

    // state : store의 reducer에 접근
    // counter : store의 reducer의 속성 접근
    // count : reducer 속성에 접근했으니 속성값으로 접근 되서 결국 counterSlice의 state로 접근
    const count = useSelector((state) => state.counter.count) 


    const dispatch = useDispatch()

    console.log("counterReducer state", count);

  return (
    <div>
        <h1>Redux Toolkit 활용 실습</h1>
        <h2>{count}</h2>
        {/* onClick(() => dispatch(명령함수 = actions)) */}
        <button onClick={() => dispatch(CounterReducerActions.increment())}>+ 1</button> 
        <button onClick={() => dispatch(CounterReducerActions.decrement())}>- 1</button>
        <button onClick={() => dispatch(CounterReducerActions.incrementByAmount({num : 2}))}>+ 2</button>
    </div>
  )
}

export default Counter