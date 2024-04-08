import React, { useState } from 'react'
import useTheme from './useTheme'
const App = () => {
  const [theme, setTheme]=useState("light")
  const {handleTheme} = useTheme()
  const changeMode=()=>{
    if(theme==="light"){
      setTheme("dark")
      handleTheme("dark")
    }else if(theme === "dark"){
      setTheme("light")
      handleTheme("light")
    }
  }
  return (
    <>
    <button onClick={changeMode}>Change Theme</button>
    </>
  )
}

export default App