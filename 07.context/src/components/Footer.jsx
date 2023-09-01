import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {

    const {isDark, setIsDark} = useContext(ThemeContext)

    let dark = isDark ? {backgroundColor : "black", color : "white"} : {backgroundColor : "white", color : "black"}
    let emoji = isDark ? "🌞" : "🌛"
    
    const handleDark = () => {
        console.log("핸들다크 실행");
        if(!isDark){
            setIsDark(true)
        }
        else{
            setIsDark(false)   
        }
    }
    

  return (
    <div className='footer' style={dark}>
        <button onClick={handleDark} className='button'>{emoji}</button>
    </div>
  )
}

export default Footer