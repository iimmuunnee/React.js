import React, { useState } from 'react'
import Board from './components/Board'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/ex03.css"
// react는 public 폴더에 이미지 경로를 자동으로 public으로 맞춰준다
// public안의 어떤 폴더 안에있는지 무슨파일인지 작성만 하면 된다


/*
    실습문제) 주사위 게임 페이지 구현
    STEP1) 사용자가 "던지기" 버튼을 누른다.
    STEP2) 주사위 눈이 랜덤으로 표시된다.
     - 랜덤숫자를 이용해서 이미지 띄우기
    STEP3) 사용자의 주사위 눈과 컴퓨터의 주사위 눈을 비교한다.
           - 무승부 : alert( )를 활용하여 "무승부" 띄우기
           - 사용자 승리 : 사용자 카운트 +1
           - 컴퓨터 승리 : 컴퓨터 카운트 +1
    STEP4) "Reset" 버튼 클릭 시 모든 내용 초기화
        - 점수, 이미지

    만들어야 할 state
     - 점수
     - 주사위 숫자
     - 주사위 이미지 경로

    만들어야 할 컴포넌트
     - Board.jsx
*/

const Ex03 = () => {

    const [myDice, mySet] = useState(1)
    const [comDice, comSet] = useState(1)

    const [myScore, setMyscore] = useState(0)
    const [comScore, setComscore] = useState(0)


    const handleDice = () => {
        let myNumber = Math.floor(Math.random()*6 + 1)
        let comNumber = Math.floor(Math.random()*6 + 1)
        mySet(myNumber)
        comSet(comNumber)
        if(myNumber > comNumber){
            setMyscore(myScore + 1)
        }
        else if (myNumber < comNumber){
            setComscore(comScore + 1)
        }
        else if (myNumber == comNumber){
            alert("무승부")
        }
    }

    const reset = () => {
        mySet(1)
        comSet(1)
        setMyscore(0)
        setComscore(0)
    }

  return (
    <div className='container'>
        <div className='button-area'>
            <Button onClick={handleDice}>던지기</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
  
        <div className='board-area'>
            <Board name="나" dice={myDice} score = {myScore}/>
            <Board name="컴퓨터" comdice={comDice} comScore = {comScore}/>
        </div>
    </div>
  )
}

export default Ex03