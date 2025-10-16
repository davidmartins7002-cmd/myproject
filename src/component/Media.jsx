import React, { useState } from 'react'
import './Media.css'
import twitter from '../assets/twitter.png'
import twitter1 from '../assets/twitter1.png'
import facebook from '../assets/facebook.png'
import facebook1 from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import instagram1 from '../assets/instagram1.png'


const Media = () => {

    const [Media,setMedia]=useState(true)
    const [Media1,setMedia1]=useState(true)
    const [Media2,setMedia2]=useState(true)


  return (
    <div className='media'>
        <div className='mediapic' onMouseEnter={()=> setMedia(false)} onMouseLeave={()=> setMedia(true)}>
            {
            Media === true ? <img onMouseEnter={()=> setMedia(!Media)} src={twitter} alt="" />
            : <img onMouseLeave={()=> setMedia(!Media)} src={twitter1} alt="" />
        }
        </div>

         <div className='mediapic' onMouseEnter={()=> setMedia1(false)} onMouseLeave={()=> setMedia(true)}>
            {
            Media1 === true ? <img onMouseEnter={()=> setMedia1(!Media1)} src={facebook} alt="" />
            : <img onMouseLeave={()=> setMedia1(!Media1)} src={facebook1} alt="" />
        }
        </div>

         <div className='mediapic' onMouseEnter={()=> setMedia2(false)} onMouseLeave={()=> setMedia(true)}>
            {
            Media2 === true ? <img onMouseEnter={()=> setMedia2(!Media2)} src={instagram} alt="" />
            : <img onMouseLeave={()=> setMedia2(!Media2)} src={instagram1} alt="" />
        }
        </div>
        
    </div>
  )
}

export default Media