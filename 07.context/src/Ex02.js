import React, { useState } from 'react'
import Page from './pages/Page'
import { ThemeContext } from './context/ThemeContext'

const Ex02 = () => {

    const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        <div>
            <Page/>
        </div>
    </ThemeContext.Provider>
  )
}

export default Ex02