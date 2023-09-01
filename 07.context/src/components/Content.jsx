import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {

    const {isDark} = useContext(ThemeContext)

    let dark = isDark ? {backgroundColor : "black", color : "white"} : {backgroundColor : "white", color : "black"}
    let comment = isDark ? "되지마 🙂" : "OOO님, 좋은하루 되고싶으세요? 🎈"

  return (
    <div className='content' style={dark}>
        {comment}
    </div>
  )
}

export default Content