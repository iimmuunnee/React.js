
import React, { useRef } from 'react'

const Ex01 = () => {

    let inputRef = useRef()

    const handleClick = () => {
        let input = document.querySelector("input[type='text']")
        console.log(input.value);
    }

    const handleClick2 = () => {
        console.log(inputRef); // ref
        console.log(inputRef.current); // input
        console.log(inputRef.current.value); // input의 value 값
    }

  return (
    <div>
        <form>
            <input type='text'/>
            <input onClick={handleClick} type='button' value="클릭"/>
        </form>
        <form>
            <input type='text' ref={inputRef}/>
            <input onClick={handleClick2} type='button' value="클릭"/>
        </form>
    </div>
  )
}

export default Ex01