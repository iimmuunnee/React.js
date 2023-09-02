
import './App.css';

/*
  map() 함수
   - 배열 내 모든 요소를 각각 접근해서 원하는 형태로 변환한 후 새로운 배열로
     변환해주는 함수
     매개변수 1개만 쓰면 item이고 2번째로 오는 매개변수는 인덱스이다.
   - 문법 : 배열객체.map((item, index) => {}) return 문 위쪽
            {배열객체.map((item, index) => ())} return 문 안쪽

     item : 현재 배열 내 값
     index : 현재 배열 내 값의 인덱스
*/

function App() {
  let array = [1, 2, 3, 4, 5]
  let new_array = array.map((item) => {
    console.log(item + 1);
    return item + 1
  })
   new_array = array.map((itme) => itme+1)

  // map()에 HTML 문법을 적용해보기
  /*
    map()를 이용하여 HTML or 컴포넌트를 사용할 때
    반드시 key 속성을 정의해줘야 한다. 

    - key값은 반드시 고유해야 한다!
    
    - React에서 이전 DOM트리와 비교하는데 key를 이용해서 비교하기 때문
      key가 없으면 배열 내 추가/수정/삭제가 정상적으로 동작하지 않는다.

    * map()함수에서 index를 활용할 수 있지만, 권장하지 않는다.
      index는 순서가 불안정한 값이므로 비교시 문제가 발생된다.
  */
  // return에 중괄호를 사용해서 넣는 것처럼 여기서도 중괄호를 사용한다.
  // map()으로 태그를만들 때 각 태그마다 고유값이 필요하다.
  let new_array3 = array.map((item, index) => <p key={index}>{item}</p>)

  // map 함수는 새로운 배열을 만듦
  return (
    <div className="App">
      <p>기존배열 : {array}</p>
      <p>기존배열 : {new_array}</p>
      {new_array3}
    </div>
  );
}

export default App;
