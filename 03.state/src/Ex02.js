
import Random from './components/Random'

/* 
    실습문제 2) 랜덤 숫자 맞추는 페이지 구현
    STEP1) 랜덤 숫자를 생성한다. 범위 1 ~ 3
    STEP2) 사용자가 누른 버튼의 숫자를 가져온다.
    STEP3) 누른 버튼의 숫자와 랜덤 숫자 비교
           - 두 숫자가 동일할 경우 : "정답입니다~"
           - 두 숫자가 불일치할 경우 : "오답입니다~"

*/


const Ex02 = () => {

  return (
    <div style={{margin : "10px"}}>
        <Random/>
    </div>
  )
}

export default Ex02