import React, { useEffect, useState } from 'react'
import "./App.css"
const useTheme = () => {
    const [theme, setTheme]= useState("light")
    const handleTheme=(value)=>{
        setTheme(value)
        
    }
    useEffect(()=>{
       if(theme==="dark"){
        document.body.style.backgroundColor="Black"
       }else{
        document.body.style.backgroundColor="green"
       }
    },[theme])
  return {
      handleTheme
  }
}

export default useTheme