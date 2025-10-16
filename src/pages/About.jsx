import React, { useState } from 'react'
import Navpc from '../component/Navpc'
import { Link } from 'react-router-dom'
import playbut from '../assets/playbut.png'
import StatsCounter from '../component/StatsCounter'
import Specialists from '../component/Specialists'
import Welldone from '../component/Welldone'
import Home  from '../assets/Home.png'
import navicon1 from '../assets/navicon1.png'
import twitter from '../assets/twitter.png'
import twitter1 from '../assets/twitter1.png'
import facebook from '../assets/facebook.png'
import facebook1 from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import instagram1 from '../assets/instagram1.png'
import linkedin from '../assets/linkedin.png'
import linkedin1 from '../assets/linkedin1.png'
import piggybank from '../assets/piggy-bank.png'
import security from '../assets/security.png'
import moneybag from '../assets/money-bag.png'
import money from '../assets/money.png'
import Mainfooter from '../component/Mainfooter'

const About = () => {
  const [ted,setTed]=useState(true)
  const [ted1,setTed1]=useState(true)
  const [ted2,setTed2]=useState(true)
  const [ted3,setTed3]=useState(true)


  return (
    <div>
      <Navpc/>
      <div className='condiv1'>
        <div className='cond1a'>
          <h1>About us</h1>
        </div>
        <div className='cond1b'>
          <div className='cond1b1'>
            <Link to={"/"}>
            <div className='homebut'>
              <img src={Home} alt="" />
            </div>
          </Link>
          </div>
          <div className='cond1b2'>
            <p>{">"} About Us</p>
          </div>
        </div>
      </div>

      <div className='abosec1'>
        <div className='abos1head'>
          <div className='abos1h1'><h2>We Made</h2> <h1>Plan</h1></div>
          <div className='abos1h1'><h2>And We Do</h2></div>
          <div className='abos1h2'><h2>Success</h2></div>
        </div>
        <div className='abos1body'>
          <div className='abos1b1'><p>
            A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership. It typically does not exist in physical form  and is typically not issued by a central authority.
            </p></div>

            <div className='abos1b2'>
              <div className='abos1b2a'>
               <div className='abos1b2aimg'><img src={piggybank} alt="" /></div>
                <p>Profitable Investment</p>
              </div>

               <div className='abos1b2a'>
               <div className='abos1b2aimg'><img src={moneybag} alt="" /></div>
                <p>Future financial transactions</p>
              </div>

               <div className='abos1b2a'>
               <div className='abos1b2aimg'><img src={money} alt="" /></div>
                <p>Best secure Money</p>
              </div>

               <div className='abos1b2a'>
               <div className='abos1b2aimg'><img src={security} alt="" /></div>
                <p>Very low risk of hacking</p>
              </div>
            </div>
        </div>
      </div>

      <div className='abosec2'>
        <StatsCounter/>
      </div>

      <div className='abosec3'>
        <Welldone/>
        <div className='abos3a'>
         <div className='abosec3a1'><div className='abos3a1'></div></div> 
         <div className='abosec3a1'><div className='abos3a2'></div></div>
         <div className='abosec3a1'><div className='abos3a3'></div></div>
        <div className='abosec3a1'><div className='abos3a4'></div></div>
        </div>
      </div>

      <div className='abosec4'>

        <div className='abos4text'>
          <div className='abos4head'>
            <h2>Run Your</h2>
            <h3>Ico</h3>
            <h2>From Anywhere</h2>
          </div>
          <div className='abos4body'>We are Giving you A Chance to you</div>
        </div>
        
        <div className='abos4sub'>
          <div className='abos4a'>Buy Tokens</div>
        <div className='abos4b'> OR</div>
        <div className='abos4c'>Read FAQs</div>
        </div>
      </div>

      <div className='sec8'>
        <div className='s8head'>
          <div className='s8hbigs'>
            <div className='s8hb1'><h2>XTRA</h2></div>
            <div className='s8hb2'><h2>ICO</h2></div>
            <div className='s8hb3'><h2>Roadmap</h2></div>
          </div>
          <div className='s8hsmalls'><p>From concept to launch public</p></div>
        </div>

        <div className='s8body'>
          <div className='s8subbody'>
           <div className='s8b1'><h3>Xtra Concept</h3></div>
           <div className='s8b2'><p>Feb 2018</p></div>
           <div className='s8b3'></div>
          </div>

           <div className='s8subbody1'>
           <div className='s8b1'><h3>Legal Review</h3></div>
           <div className='s8b2'><p>Apr 2018</p></div>
           <div className='s8b3'></div>
          </div>

           <div className='s8subbody2'>
           <div className='s8b1'><h3>Ico Design</h3></div>
           <div className='s8b2'><p>Jul 2018</p></div>
           <div className='s8b3'></div>
          </div>

           <div className='s8subbody3'>
           <div className='s8b1'><h3>Private Tokens</h3></div>
           <div className='s8b2'><p>Jan 2019</p></div>
           <div className='s8b3'></div>
          </div>

           <div className='s8subbody4'>
           <div className='s8b1'><h3>Public Release</h3></div>
           <div className='s8b2'><p>Oct 2019</p></div>
           <div className='s8b3'></div>
          </div>
          
        </div>
      </div>

       {/* <div className='sec10'>
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
      
            </div> */}

            <div>
              <Mainfooter/>
            </div>

    </div>
  )
}

export default About