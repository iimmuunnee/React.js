import React, { useState } from 'react'
import { ColorContext } from './context/ColorContext'
import ColorList from './components/ColorList'
import ColorResult from './components/ColorResult'
import "./App.css"

const Ex01 = () => {

    const [color, setColor] = useState(null)

  return (
        <ColorContext.Provider value={{color, setColor}}>
            <div id='color-main'>
                <ColorList/>
                <hr/>
                <ColorResult/>
            </div>
        </ColorContext.Provider>
  )
}

export default Ex01