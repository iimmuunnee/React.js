import { createSlice } from "@reduxjs/toolkit";

/* 
    createSlice() : state, reducer 함수를 정의하는 함수
    - state 초기화
    - state를 변경하는 함수 정의 -> reducer
*/


export const counterSlice = createSlice({
    name : 'counter',
    initialState : { // state 초기화
        count : 0,
    },
    reducers : { // 함수 정의시, 매개변수에 반드시 state 정의
        increment : (state) => { // 정의한 state는 내부에 있는 initialState를 의미한다.
            state.count += 1 // 객체 접근 방식 원래는 Action을 줘야하지만 toolkit에서는 안해도 된다.
        },
        decrement : (state) => {
            state.count -= 1
        },
        // 넘겨받은 숫자를 이용해서 state를 변경하는 함수 정의하기
        // Action -> {type, payload} 형태로 변환, 외부의 값을 받아서 사용하기 위함
        // type : 명령 타입 ex) 숫자를 증가해라 (increment) , 숫자를 감소해라 (decrement)
        // payload : 외부로부터 넘겨받은 데이터를 저장하는 속성
        incrementByAmount : (state, action) => {
            console.log("counterSlice action", action);
            // action -> {type: 'counter/incrementByAmount', payload:{num : 2}}
            state.count += action.payload.num
        } 
    }
})

// 컴포넌트에서 reducer함수를 실행할 수 있게 내보내기
// export const {increment, decrement, incrementByAmount} = counterSlice.actions
export const CounterReducerActions = counterSlice.actions
// export const {decrement} = counterSlice.actions
// export const {increment2} = counterSlice.actions

// store에서 접근할 수 있도록 내보내기
export default counterSlice.reducer