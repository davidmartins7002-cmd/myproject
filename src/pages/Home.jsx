import React, { useState } from 'react'
import '../App.css'
import mainimg from '../assets/mainimg.png'
import mainsubimg1 from '../assets/mainsubimg1.png'
import Navpc from '../component/Navpc'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
import pro4 from '../assets/pro4.png'
import pro5 from '../assets/pro5.png'
import pro6 from '../assets/pro6.png'
import sec3pic from '../assets/sec3pic.png'
import playbut from '../assets/playbut.png'
import playbut1 from '../assets/playbut1.png'
import wallet from '../assets/wallet.png'
import comment from '../assets/comment.png'
import exchange from '../assets/exchange.png'
import nextpic from '../assets/nextpic.png'
import Welldone from '../component/Welldone'
import peoplea from '../assets/peoplea.jpg'
import Media from '../component/Media'
import mob from '../assets/mob.png'
import navicon1 from '../assets/navicon1.png'
import { Link } from 'react-router-dom'
import StatsCounter from '../component/StatsCounter'
import downarrow  from '../assets/down-arrow.png'
import uparrow from '../assets/up-arrow.png'
import twitter from '../assets/twitter.png'
import twitter1 from '../assets/twitter1.png'
import facebook from '../assets/facebook.png'
import facebook1 from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import instagram1 from '../assets/instagram1.png'
import linkedin from '../assets/linkedin.png'
import linkedin1 from '../assets/linkedin1.png'
import SidebarMenu from '../component/SidebarMenu'
import Footer from '../component/footer'
import CountdownTimer from '../component/Countdown'
import Mainfooter from '../component/Mainfooter'

const Home = () => {
const [choice,setChoice]=useState(true)
const [choice1,setChoice1]=useState(true)
const [choice2,setChoice2]=useState(true)
const [show,setShow]=useState(false)
const [show1,setShow1]=useState(false)
const [show2,setShow2]=useState(false)
const [show3,setShow3]=useState(false)
const [selec,setselec]=useState(false)
const [selec1,setselec1]=useState(true)
const [selec2,setselec2]=useState(true)
const [selec3,setselec3]=useState(true)
const [ted,setTed]=useState(true)
const [ted1,setTed1]=useState(true)
const [ted2,setTed2]=useState(true)
const [ted3,setTed3]=useState(true)





  return (
    <div className='all'>
      <div className='hamburger'>
        <SidebarMenu/>
      </div>
      <Navpc/>
      <div className='mainhome'>
        <div className='mainhome1'>
          <div className='mheading'>
            <div className='mhead1'><h1>SMART</h1></div>
            <div className='mhead2'><h1>MINING</h1></div>
            <div className='mhead3'><h1>BEST</h1></div> <br />
            <div className='mhead4'><h1>INVESTMENT</h1></div>
          </div>
          <p>A cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong cryptography to  secure financial transactions, control the creation of additional units, and verify the transfer of assets.</p>

          <div className='mainbut'>
            <div className='mbut1'><button>GET STARTED</button></div>
            <div className='mbut2'><button>LEARN MORE</button></div>
          </div>
        </div>

        <div className='mainhome2'>
          <img src={mainsubimg1} alt="" />
        </div>
      </div>

      <div className='sec1'>
        <div className='sec1a' onMouseEnter={()=> setChoice(false)} onMouseLeave={()=> setChoice(true)}>
          <div className='sec1aimg'>
           {
            choice === true ? <img onMouseEnter={()=> setChoice(!choice)} src={pro1} alt="" />
            : <img onMouseLeave={()=> setChoice(!choice)} src={pro2} alt="" />
           }
          </div>
          

          <div className='sec1atext'><h1>BEST <br /> INVESTMENT</h1></div>

        </div>
        <div className='sec1b' onMouseEnter={()=> setChoice1(false)} onMouseLeave={()=> setChoice1(true)}>
          <div className='sec1bimg'>
            {
            choice1 === true ? <img onMouseEnter={()=> setChoice1(!choice1)} src={pro3} alt="" />
            : <img onMouseLeave={()=> setChoice1(!choice1)} src={pro4} alt="" />
          }
          </div>
          

          <div className='sec1atext'><h1>BEST <br /> INVESTMENT</h1></div>
        </div>
        <div className='sec1c' onMouseEnter={()=> setChoice2(false)} onMouseLeave={()=> setChoice2(true)}>
          <div className='sec1cimg'>
            {
            choice2 === true ? <img onMouseEnter={()=> setChoice2(!choice2)} src={pro5} alt="" />
            : <img onMouseLeave={()=> setChoice2(!choice2)} src={pro6} alt="" />
            }
          </div>
          

          <div className='sec1atext'><h1>BEST <br /> INVESTMENT</h1></div>
        </div>
      </div>

      <div className='sec2'>
        <div className='sec2text'>

          <div className='sec2t1'><h2>xtra</h2></div>
          <div className='sec2text1'><h2>is the beginning of something great:</h2></div>
          <div className='sec2text1'><h2> a currency without a</h2></div>
          <div className='sec2t2'><h2>government</h2></div>
          <div className='sec2text1'><h2>,something</h2></div>
          <div className='sec2t3'><h2>necessary</h2></div>
          <div className='sec2text1'><h2>and</h2></div>
          <div className='sec2t4'><h2>imperative</h2></div>

        </div>

        <div className='sec2but'>
          <button>
            SHOP NOW
          </button>
        </div>
      </div>

      <div className='sec3'>
        <div className='sec3img'>
          <img src={sec3pic} alt="" />
        </div>

        <div className='sec3text'>
          <div className='sec3textsub'>
            <div className='sec3texthead'>
            <div className='s3head1'>
             <div className='s3head1a'><h2>New</h2></div> 
              <div className='s3head1b'><h2>ico</h2></div>
              <div className='s3head1c'><h2>is on the</h2></div>
              <div className='s3head1d'><h2>way</h2></div>
            </div>
            <div className='s3head2'><h2>The currency is new</h2></div>
            <div className='s3head3'>
              <div className='s3head3a'><h2>Economy</h2></div>
              <div className='s3head3b'><h2>Changer</h2></div>
            </div>
            </div>

            <div className='sec3textbody'>
              <p>A cryptocurrency is a digital asset designed to work as a <br /> medium of exchange that uses strong cryptography to <br /> secure financial transactions.</p>
            </div>
          </div>

          <div className='sec3watch'>
            <div className='sec3watch1'>
              <div className='watchcom1'>
                <div className='watchorg'>
                  <img src={playbut1} alt="" />
                </div>
              </div>
            </div>

            <div className='watchtext'>
              Watch Video
            </div>
          </div>
        </div>
      </div>

      <div className='sec4'>
        <div className='sec4text'>

          <div className='s4texthead'>
            <div className='s4thead1'>
              <div className='s4thead1a'><h2>Crypto</h2></div>
              <div className='s4thead1b'><h2>will do to banks</h2></div>
            </div>
            <div className='s4thead2'>
              <div className='s4thead2a'><h2>what</h2></div>
              <div className='s4thead2b'><h2>Email</h2></div>
              <div className='s4thead2c'><h2>did to the</h2></div>
            </div>
            <div className='s4thead3'>
              <div className='s4thead3a'><h2>postal</h2></div>
              <div className='s4thead3b'><h2>industry</h2></div>
            </div>
          </div>

          <div className='s4textbody'>
            <p>A cryptocurrency is a digital asset designed to work as <br /> a medium of exchange that uses strong cryptography to <br /> secure financial transactions.</p>
          </div>

          <div className='s4footer'>
            <div className='s4f1'>
              <div className='s4f1img'>
                <img src={wallet} alt="" />
              </div>
              <p>Secure Wallet</p>
            </div>

            <div className='s4f2'>
              <div className='s4f2img'>
                <img src={comment} alt="" />
              </div>
              <p>Secure Wallet</p>
            </div>

             <div className='s4f3'>
              <div className='s4f3img'>
                <img src={exchange} alt="" />
              </div>
              <p>Secure Wallet</p>
            </div>
          </div>         
        </div>

        <div className='sec4img'>
          <img src={nextpic} alt="" />
        </div>
      </div>

      <div className='sec5'>
        <div className='s5text'>
          <div className='s5ta'>
          <div className='s5ta1'><h2>XTRA</h2></div>
          <div className='s5ta2'><h2>Is Coming Soon</h2></div>
          </div>

          <p>We will launch it on 29 Dec 2020</p>
          
        </div>

         <div className='road'>
            <CountdownTimer/>
         </div>
      </div>

      <div className='sec6'>
        <div className='sec6text'>
          <div className='s6head'>
            <h2>Our</h2>
            <h3>Specialists</h3>
          </div>
          <div className='s6body'>
            <p>Teamwork is the collaborative effort of a team to</p>
              <p> achieve a common goal or to complete a task in </p>
               <p>the most effective and efficient way.</p>
          </div>
          <div className='s6but'>
            <button>View All Team</button>
          </div>
        </div>

        <div className='sec6pic'>
          <div className='s6pic1'  onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <div className='s6pimage'>
              <div style={{display:show === true?"flex":"none"}}>
                <Media/>
              </div>
              
            </div>
            <div className='s6textb'>
              <h2>Alex Hernandez </h2>
              <p>CTO</p>
            </div>
          </div>

          <div className='s6pic2' onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)}>
            <div className='s6pimage1'>
              <div style={{display:show1 === true?"flex":"none"}}>
                <Media/>
              </div>
            </div>
            <div className='s6textb'>
              <h2>Dr. Mark Henrish </h2>
              <p>Advisor</p>
            </div>
          </div>

          <div className='s6pic3' onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)}>
            <div className='s6pimage2'>
              <div style={{display:show2 === true?"flex":"none"}}>
                <Media/>
              </div>
            </div>
            <div className='s6textb'>
              <h2>Jane Hernandez</h2>
              <p>Advisor</p>
            </div>
          </div>

                    <div className='s6pic4' onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}>
            <div className='s6pimage3'>
              <div style={{display:show3 === true?"flex":"none"}}>
                <Media/>
              </div>
            </div>
            <div className='s6textb'>
              <h2>Dr. David Villa</h2>
              <p>Advisor</p>
            </div>
          </div>

        </div>

      </div>

      <div className='sec7'>
        <div className='s7div1'>
          <img src={mob} alt="" />
        </div>

        <div className='s7div2'>
          <div className='s7d2head'>
            <div className='s7d2h1'><h2>Xtra</h2></div>
            <div className='s7d2h2'><h2>Application</h2></div>
          </div>

          <div className='s7d2body'>Download and use our wallet application also <br /> mine and earn more cash.</div>
            
            <div className='s7d2but'>
              <div className='s7d2but1'><button>
                <img src={playbut} alt="" />
                <p>Download ios</p>
                </button>
                </div>
              <div className='s7d2but2'>
                <button>
                  <img src={playbut} alt="" />
                  <p>Download Android</p>
                  </button>
                  </div>
          </div>
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

      <div className='sec9'>

        <div className='s9div1'>
          <div className='s9d1head'>
            <div className='s9d1h1'>
              <h1>F</h1>
              <h2>requently</h2>
            </div>
            <div className='s9d1h2'>
              <h1>A</h1>
              <h2>sked</h2>
            </div>
            <div className='s9d1h3'>
              <h1>Q</h1>
              <h2>uestions</h2>
            </div>
          </div>

          <div className='s9d1body'>
            <p>Find your questions here or ask us</p>
          </div>

          <div className='s9d1but'>
            <button>Ask Question </button>
          </div>

        </div>
        <div className='s9div2'>

          <div className='s9div2sub'>
            <div style={{backgroundColor:selec === false ? "#ffaa00": "white", color: selec === false ? "white":"#444444"}}  onClick={()=>setselec(!selec)}  className='s9d2text'>
            <p>click me</p>
            {
              selec === false ? <img src={uparrow} alt="" />
              : <img src={downarrow} alt="" />
            }
          </div>
            {
              selec === true ? null 
              : <div className='s9activate'>text</div>
            }
          </div>

           <div className='s9div2sub'>
            
            <div style={{backgroundColor:selec1 === false ? "#ffaa00": "white", color: selec1 === false ? "white":"#444444"}} onClick={()=>setselec1(!selec1)}
            className='s9d2text'>
            <p>click me</p>
            {
              selec1 === false ? <img src={uparrow} alt="" />
              : <img src={downarrow} alt="" />
            }
          </div>
            {
              selec1 === true ? null 
              : <div className='s9activate'>text</div>
            }
          </div>

           <div style={{backgroundColor:selec2 === false ? "#ffaa00": "white", color: selec2 === false ? "white":"#444444"}}  className='s9div2sub'>
            <div onClick={()=>setselec2(!selec2)}  className='s9d2text'>
            <p>click me</p>
            {
              selec2 === false ? <img src={uparrow} alt="" />
              : <img src={downarrow} alt="" />
            }
          </div>
            {
              selec2 === true ? null 
              : <div className='s9activate'>text</div>
            }
          </div>

           <div style={{backgroundColor:selec3 === false ? "#ffaa00": "white", color: selec3 === false ? "white":"#444444"}}  className='s9div2sub'>
            <div onClick={()=>setselec3(!selec3)}  className='s9d2text'>
            <p>click me</p>
            {
              selec3 === false ? <img src={uparrow} alt="" />
              : <img src={downarrow} alt="" />
            }
          </div>
            {
              selec3 === true ? null 
              : <div className='s9activate'>text</div>
            }
          </div>
          


        </div>
      </div>
      
      <div>
        <Mainfooter/>
      </div>

    </div>

  )
}

export default Home