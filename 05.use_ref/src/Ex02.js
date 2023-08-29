import React, {useRef} from 'react'

const Ex02 = () => {

    let idRef = useRef()
    let pwRef = useRef()

    const handleClick = () => {
        if (idRef.current.value === "이미운" && pwRef.current.value === "123"){
            alert("로그인 성공")
        }
        else {
            alert("넌 나가라")
        }
    }

  return (
    <div>
        <form>
            ID : <input type='text' ref={idRef}></input>
            PW : <input type='password' ref={pwRef}></input>
            <input onClick={handleClick} type='button' value="Login"></input>
        </form>
    </div>
  )
}

export default Ex02