import React from 'react'

const outStyle={
  width:'70%',
  height:'30px',
  marginBottom:'10px',
  marginTop:'5px'
}
const btnStyle={
  width:'100%',
  height:'100%',
  borderRadius:'7px',
  background:'rgba(255,100,0,0.5)',
  color:'white',
  fontFamily:'Roboto sans-serif',
  fontSize:'15px'
}

export default function Button({ button_title,onClick }) {
  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={onClick}/>
    </div>
  )
}
