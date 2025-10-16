import React from 'react'
import Navpc from '../component/Navpc'
import { Link } from 'react-router-dom'
import playbut from  '../assets/playbut.png'
import navicon1 from '../assets/navicon1.png'
import Home  from '../assets/Home.png'
import twitter from '../assets/twitter.png'
import twitter1 from '../assets/twitter1.png'
import facebook from '../assets/facebook.png'
import facebook1 from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import instagram1 from '../assets/instagram1.png'
import linkedin from '../assets/linkedin.png'
import linkedin1 from '../assets/linkedin1.png'
import Mainfooter from '../component/Mainfooter'
import Footer from '../component/footer'

const Contact = () => {
  return (
    <div>
      <Navpc/>

      <div className='condiv1'>
        <div className='cond1a'>
          <h1>Contact Us</h1>
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
            <p>{">"} Contact Us</p>
          </div>
        </div>
      </div>

      <div className='condiv2'>
        <div className='cond2text'>
          <h2>Get in</h2>
          <h3>touch</h3>
          <h2>with us</h2>
        </div>
      </div>

      <div className='condiv3'>
        <div className='cond3a'>
          <div className='cond3a1'>
            <div className='cond3a1a'>
              <img src={playbut} alt="" />
            </div>
            <div className='cond3a1b'>
              <div className='cond3a1ba'> <h2>Email:</h2></div>
              <div className='cond3a1bb'></div>
              <div className='cond3a1bc'><p>@gmail.com</p></div>
            </div>
          </div>

           <div className='cond3a1'>
            <div className='cond3a1a'>
              <img src={playbut} alt="" />
            </div>
            <div className='cond3a1b'>
              <div className='cond3a1ba'> <h2>Phone:</h2></div>
              <div className='cond3a1bb'></div>
              <div className='cond3a1bc'><p>+1 (801) 333 45 64</p></div>
            </div>
          </div>

           <div className='cond3a1'>
            <div className='cond3a1a'>
              <img src={playbut} alt="" />
            </div>
            <div className='cond3a1b'>
              <div className='cond3a1ba'> <h2>Address:</h2></div>
              <div className='cond3a1bb'></div>
              <div className='cond3a1bc'><p>121 King Street, New York - USA</p></div>
            </div>
          </div>
        </div>

        <div className='cond3b'>

        </div>
      </div>

      <div className='condiv4'>
        Feel Free To Contact Us
      </div>

      <div className='condiv5'>
        <div className='condiv5sub'>
          <div className='cond5inp'>
            <div className='cond5inpa'>
              <div className='cond5inpa1'><input type="text"  placeholder='Your Name (*)'/></div>
              <div className='cond5inpa2'><input type="Email" placeholder='Your Email (*)'/></div>
              <div className='cond5inpa1'><input type="subject"  placeholder='subject'/></div>
              <div className='cond5inpa2'><input type="Email" placeholder='Department'/></div>
            </div>
            <div className='cond5inpb'>
              <textarea name="text" id="" placeholder='Your Message'></textarea>
            </div>
          </div>
          <div className='cond5but'><button>Send Message</button></div>
        </div>
      </div>

      <div className='sec10'>
      <Mainfooter/>     
      </div>


      {/* <div>
        <Footer/>
      </div> */}
      








    </div>
  )
}

export default Contact