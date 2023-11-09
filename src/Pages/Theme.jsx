import React from 'react'
import { useTheme,useThemeUpdate } from '../ThemeProvider/ThemeProvider'
const Theme = () => {
    const theme = useTheme()
    const themeUpdate = useThemeUpdate()
    const styleDiv = {
       backgroundColor:theme?'#000':'#fff',
       color:theme?'#fff':'#000',
       padding:'15px',
       textAlign:'center',
       border:'1px solid #f2f2f2',
    }
    console.log(theme)
  return (
    <>
     <button onClick={themeUpdate}>Click Here</button>
     <div style={styleDiv}>this is a box</div>
    </>
  )
}

export default Theme