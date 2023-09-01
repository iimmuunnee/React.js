import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorList = () => {

    const {setColor} = useContext(ColorContext)

    const handleCilck = (e) => {
        // console.log(e.target.className);
        setColor(e.target.className)
    }

  return (
    <div>
        <h1>색상 선택하기</h1>
        <div className='colorList'>
            <div onClick={handleCilck} className='box color-red'></div>
            <div onClick={handleCilck} className='box color-orange'></div>
            <div onClick={handleCilck} className='box color-yellow'></div>
            <div onClick={handleCilck} className='box color-green'></div>
            <div onClick={handleCilck} className='box color-blue'></div>
        </div>
    </div>
  )
}

export default ColorList