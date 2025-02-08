import React, { useContext } from 'react'
import { MdMenu } from 'react-icons/md'

export default function MenuePhone({close,}) {
    
    
    const k=()=>{
setClose((close)=>{!close});
    }
    return (
        <>
            <div className={close?"fixed":"c"} style={{display:!close?"fixed":"none"}}>
        <nav className='phoneNav'>
          <MdMenu onClick={(close)=>{setClose(!close)}}/>
          <a href="#">home</a>
          <a href="#">services</a>
          <a href="#">contact</a>
          <a href="#">location</a>
        </nav>
      </div>
        </>
    )
}
