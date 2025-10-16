import React from 'react'
import './Navpc.css'
import navicon1 from '../assets/navicon1.png'
import {Link} from 'react-router-dom'

const Navpc = () => {
  return (
    <div className='navmain'>
      <div className='navicon'>
        <img src={navicon1} alt="" />
      </div>
      <div className='navsub1'>
          <Link  to={"/"}>
          HOME
          </Link>

          <Link to={"/Contact"}>
          CONTACT
          </Link>

          <Link to={"/about"}>
          ABOUT
          </Link>

          <Link>
          HELP
          </Link>

          <Link>
          BLOG
          </Link>
      </div>
      <div className='navbut'>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Navpc