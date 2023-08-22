import React from 'react'
import LoginSuccess from './components/LoginSuccess'
import LoginFail from './components/LoginFail'

/* 
    1. 사용자로부터 id, pw를 입력받는다. (prompt() 활용)
    2. 성공여부에 따라 다른 화면을 출력한다.
        성공시) LoginSuccess.jsx 출력 => "환영합니다~"
        실패시) LoginFail.jsx 출력 => "아이디 또는 패스워드가 틀렸습니다.."
*/

const AppSample = () => {

    let id = prompt("아이디를 입력하세요")
    let pw = prompt("비밀번호를 입력하세요")
    let isLogin = false
    let what = ""

    if(id == "임휘훈"){
        if(pw == "123"){
            // 로그인 성공
            isLogin = true
        }
        else{
            // 비밀번호 틀림
            what = "비밀번호"
        }
    }
    else{
        // 아이디 틀림
        what = "아이디"
    }

  return (
    <div>
        {isLogin ? <LoginSuccess id={id}/> : <LoginFail what={what}/>}
    </div>
  )
}

export default AppSample