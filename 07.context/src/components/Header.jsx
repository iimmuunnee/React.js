import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {

    const {isDark} = useContext(ThemeContext)

    let dark = isDark ? {backgroundColor : "black", color : "white"} : {backgroundColor : "white", color : "black"}
    let comment = isDark ? "GoodBye, OOO" : "Welcome, OOO"


  return (
    <div className='header' style={dark}>
        <h1>{comment}</h1>
    </div>
  )
}

export default Header