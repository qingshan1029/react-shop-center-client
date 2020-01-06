import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/fontawesome-free-brands'

const style={
  fontSize:'14px',
  marginBottom:'30px'
}

export default function footer({content}) {
  return (
      <div className="footer" style={style}>
        {content}
      </div>
  )
}

// export default function footer({content}) {
//   return (
//       //<React.fragmen>
//       <div className="footer" style={style}>
//         {content}
//       </div>
//     {/*  <footer>*/}
//     {/*  <a*/}
//     {/*// href='https://medium.com/p/cc96430eaece'*/}
//     {/*// title='Medium Article'*/}
//     {/*// className={'small-button medium'}*/}
//     {/*//     >*/}
//     {/*//     <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />*/}
//     {/*//     </a>*/}
//     {/*// <a*/}
//     {/*//     href='https://github.com/funador/react-image-upload'*/}
//     {/*//     title='Github repo'*/}
//     {/*//     className={'small-button github'}*/}
//     {/*// >*/}
//     {/*//     <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />*/}
//     {/*// </a>*/}
//     {/*</footer>*/}
//   )
// }

