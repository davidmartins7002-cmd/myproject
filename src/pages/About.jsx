import React, { useState } from 'react'
import Navpc from '../component/Navpc'
import { Link } from 'react-router-dom'
import StatsCounter from '../component/StatsCounter'
import Welldone from '../component/Welldone'
import Home  from '../assets/home.png'
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


            <div>
              <Mainfooter/>
            </div>

    </div>
  )
}

export default About