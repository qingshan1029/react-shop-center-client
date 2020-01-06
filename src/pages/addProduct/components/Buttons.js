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
    background:'rgba(255,100,0,0)',
    color:'white',
    fontFamily:'Roboto sans-serif',
    fontSize:'15px'
}
export default props =>
  <div className='buttons fadein'>

    {/*<div className='forminput_button' style={outStyle}>*/}
      <input type='file' id='single' style={btnStyle} onChange={props.onChange} />
    {/*</div>*/}

    {/*<div className='button'>*/}
    {/*  <label htmlFor='multi'>*/}
    {/*    <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />*/}
    {/*  </label>*/}
    {/*  <input type='file' id='multi' onChange={props.onChange} multiple />*/}
    {/*</div>*/}

  </div>

// export default function Button({ button_title,onChange }) {
//     return (
//         <div className="buttons fadein" style={outStyle}>
//             <input type='file' id='single' style={btnStyle} onChange={onChange} />
//         </div>
//     )
// }
