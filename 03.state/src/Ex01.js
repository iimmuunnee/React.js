import React from 'react'
import imgSrc from './img/moon.jpg'
import Like from './components/Like'

/*

    실습문제 1) 좋아요 기능을 가진 페이지 구현
    STEP1) 빈 하트를 클릭 시, 꽉찬 하트로 만들어주기 ❤
    STEP2) 빈 하트를 클릭 시, 좋아요 1개로 변경해주기!
    STEP3) 좋아요가 눌린 상태에서 다시 클릭 시, 되돌리기

*/

const Ex01 = () => {
  return (
    <div>
        <img src={imgSrc}></img>
        <Like/>
    </div>
  )
}

export default Ex01