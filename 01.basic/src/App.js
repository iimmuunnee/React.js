import './App.css'

/*
  shift + alt + f : prettier 저장

  JSX문법
   - HTML 과 JS를 하나의 파일에 작성할 수 있는 문법
  
   JSX문법의 특징
   1. 반드시 부모요소가 하나여야 한다. 모든 것을 감싸는 div태그로 해결
    + 꼭 <div>가 아니어도 된다. <> </>

   2. 표현식 사용
   {변수}로 표현식
   단, if문은 사용할 수 없다..
   
   2-1. 조건식이 1개일 때 - && 연산자
   하나의 조건식을 확인할 때 A && "B"
   => A가 true이면 &&의 오른쪽이 출력된다.
   
   2-2. 조건식이 2개일 때 - 삼항연산자 활용
   2-3. 조건식이 3개일 때 - return문 위에 조건식을 만든 후 
                           결과값만 {}에 넣어준다.
   3. 기존 HTML문법과 다른 점
    3-1. class속성 -> ClassName으로 속성 적용 => Class 문법과 혼동되지 않기위함
        => 개발자도구로 검사하면 class로 들어가는 것을 볼 수 있음
    3-2. HTML문법을 사용할 때 반드시 소문자로 작성
        - 대문자로 정의하는 것은 '컴포넌트'로 인식
    3-3. HTML문법 내 내용이 없어도 끝 태그는 반드시 작성
    3-4. onclick 속성 -> onClick 속성 (대문자)
      => onClick 소괄호 내의 콜백함수 화살표함수

  4. 스타일 적용
    4-1. css 파일 내 스타일 정의
        - import로 css파일 경로 설정
    4-2. 객체형태로 정의  
        - HTML문법 내 style 속성 정의
        - style 속성 내 객체형태의 스타일 정의 {{key : value}}
*/

function App() {
  let msg = 'Hello React!'
  let isLogin = true
  let name = '임승환'

  let text = ''

  if (name === '선영표') {
    text = 'Front-end'
  } else if (name === '임승환') {
    text = 'Bakc-end'
  } else {
    text = 'DB'
  }

  // 카멜케이스로 작성하기
  const stylede_1 = {
    color: 'green',
    backgroundColor: 'black',
  }

  return (
    <div className="container">
      <div className="item" style = {stylede_1}>{msg}</div>
      <div style = {{color : "blue", fontSize : "20px"}}>스타일 객체 적용</div>

      {/* 조건부 렌더링 */}
      {/* 조건식이 하나일 때 */}
      {isLogin && '환영합니다~!'}

      {/* 조건식이 두개일 때 - 삼항연산자*/}
      {name === '임휘훈' ? <p>환영합니다~!</p> : <p>이용할 수 없습니다..</p>}

      {/* 조건식이 세개일 때 - 조건식을 만든 후 결과만 출력 */}
      <p>{text}</p>
      <p>
        <button onClick={() => console.log('클릭')}>클릭</button>
      </p>
    </div>
  )
}

export default App
