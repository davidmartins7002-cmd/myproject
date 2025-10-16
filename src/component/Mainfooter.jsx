import React, { useState } from 'react'
import '../App.css'
import twitter from '../assets/twitter.png'
import twitter1 from '../assets/twitter1.png'
import facebook from '../assets/facebook.png'
import facebook1 from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import instagram1 from '../assets/instagram1.png'
import linkedin from '../assets/linkedin.png'
import linkedin1 from '../assets/linkedin1.png'
import navicon1 from '../assets/navicon1.png'
import { Link } from 'react-router-dom'


const Mainfooter = () => {

    const [ted,setTed]=useState(true)
    const [ted1,setTed1]=useState(true)
    const [ted2,setTed2]=useState(true)
    const [ted3,setTed3]=useState(true)

  return (
    <div>

          <div className='sec10'>
        <div className='s10img'><img src={navicon1} alt="" /></div>

        <div className='s10div1'>
          <div className='s10links'>
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About us</Link>
          <Link>Services</Link>
          <Link>FAQ</Link>
          <Link>Shop</Link>
          <Link to={"/Contact"}>Contact us</Link>
        </div>

        <div className='s10main'>
          <div onMouseEnter={()=>setTed(false)} onMouseLeave={()=>setTed(true)} className='s10mainsub1'>
            {
               ted === false ? <img onMouseEnter={()=>setTed(ted)} src={twitter} alt="" />
              : <img onMouseLeave={()=>setTed(!ted)} src={twitter1} alt="" />
            }
          </div>

          <div onMouseEnter={()=>setTed1(false)} onMouseLeave={()=>setTed1(true)} className='s10mainsub1'>
            {
               ted1 === false ? <img onMouseEnter={()=>setTed1(ted1)} src={facebook} alt="" />
              : <img onMouseLeave={()=>setTed1(!ted1)} src={facebook1} alt="" />
            }
          </div>

          <div onMouseEnter={()=>setTed2(false)} onMouseLeave={()=>setTed2(true)} className='s10mainsub1'>
            {
               ted2 === false ? <img onMouseEnter={()=>setTed2(ted2)} src={instagram} alt="" />
              : <img onMouseLeave={()=>setTed2(!ted2)} src={instagram1} alt="" />
            }
          </div>

          <div onMouseEnter={()=>setTed3(false)} onMouseLeave={()=>setTed3(true)} className='s10mainsub1'>
            {
               ted3 === false ? <img onMouseEnter={()=>setTed3(ted3)} src={linkedin} alt="" />
              : <img onMouseLeave={()=>setTed3(!ted3)} src={linkedin1} alt="" />
            }
          </div>

          
        </div>
        </div>
        

        <div className='s10foot'>
          <p>Copyright 2025 - All Rights Reserved</p>
        </div>

      </div>

    </div>
  )
}

export default Mainfooter