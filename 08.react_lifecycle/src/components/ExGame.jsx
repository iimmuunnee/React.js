import React, { useEffect, useState } from 'react'

const ExGame = () => {

    let btns = ['좌측', '정면', '우측']
    
    // 나의 선택
    const [myChoice, setMy] = useState(null)
    const [myScore, setMyscore] = useState(-1)
    // 컴퓨터의 선택
    const [comChoice, setCom] = useState(null)
    const [comScore, setComscore] = useState(0)
    // 결과
    const [result, setResult] = useState(null)

    const handleClick = (e) => {
        // console.log(e.target.innerText);
        let user = e.target.innerText
        setMy(user)

        let number = Math.floor(Math.random() * 3)
        setCom(btns[number])
    }

    useEffect(()=>{
        if(myChoice === comChoice){
            console.log("승리");
            setResult("Win🤗")
            setMyscore(myScore + 1)
        }
        else{
            console.log("패배");
            setResult("Lose😜")
            setComscore(comScore + 1)
        }
    }, [myChoice, comChoice])

  return (
    <div>
        <h1>참참참 게임!</h1>
        <h2>나의 선택 : {myChoice}</h2>
        <h2>컴퓨터의 선택 : {comChoice}</h2>

        {/* 게임 결과 출력 */}
        <h3>나 {myScore} : 컴퓨터 {comScore}</h3>
        <h3>{myChoice === null ? "" : result}</h3>

        {/* 버튼 생성 */}
        {btns.map((item) => (
            <button onClick={handleClick} key={item}>{item}</button>
        ))}
    </div>
  )
}

export default ExGame