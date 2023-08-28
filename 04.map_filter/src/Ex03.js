import React from 'react'
import members from "./data/members.json"

const Ex03 = () => {

    /*
        filter() 함수
        - 배열 내 요소들 중 특정 조건에 해당하는 요소들만 새로운 배열로 만들어
          반환 해주는 함수
        - 조건식을 만들면 해당하는 요소만 추출
    */ 

    let new_array = members.map((member) => member.task === "Front-end")
    console.log(new_array);

    let age_27 = members.filter((member) => member.age < 27)
    // console.log(age_27);
  return (
    <div>
    </div>
  )
}

export default Ex03