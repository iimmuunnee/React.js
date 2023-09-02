import React, { useState } from 'react'
// eslint-disable-next-line

const Random = () => {
  const [myNum, setMyNum] = useState()
  const [randomState, setRanNum] = useState()
  const [answer, setAnswer] = useState("")
  
  const handleNum = (e) => {
      let my_number = e.target.innerText
      let randNum = Math.floor(Math.random()*3 + 1)
      setMyNum(my_number)
      console.log(myNum);
      setRanNum(randNum)
      console.log(randomState);
      if (my_number == randNum){
        setAnswer("정답입니다~") 
      }
      else{
        setAnswer("오답입니다~") 
      }
  }   


  return (
    <div style={{margin : "10px"}}>
        <button onClick={handleNum} style={{backgroundColor : "red"}}>1</button>
        <button onClick={handleNum} style={{backgroundColor : "orange"}}>2</button>
        <button onClick={handleNum} style={{backgroundColor : "green"}}>3</button>
        <div>내가 입력한 숫자 : {myNum}</div>
        <div>랜덤한 숫자 : {randomState}</div>
        {answer}
    </div>
  )
}

export default Random