import React from 'react';
import './App.css';
import Video from './components/Video';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import DonateButtons from './components/DonateButtons';
import SearchEvents from './components/SearchEvents';

import handLogo from './images/hand-planting.png';

import aboutImage from './images/about-image.jpg';

import owBackground from './images/our-work-background.jpeg';

import giImage1 from './images/get-involved-image-1.jpeg';
import giImage2 from './images/get-involved-image-2.jpg';
import giImage3 from './images/get-involved-image-3.jpg';
import giImage4 from './images/get-involved-image-4.jpg';
import giImage5 from './images/get-involved-image-5.jpg';
import giImage6 from './images/get-involved-image-6.jpg';
import giImage7 from './images/get-involved-image-7.jpg';
import giImage8 from './images/get-involved-image-8.jpg';
 
{/* Resources
https://www.schemecolor.com/dark-orange-green.php
*/}
{/* Updates
  - Video does not show on some devices/browsers
      - Add image under video with same CSS as an alternatice in case vid doesn't show
  
*/}

class App extends React.Component {
  render(){
    return(
      <div id='page'>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <Menu />
        {/*INTRO SECTION STARTS HERE*/}
        <section id='intro-section'>
          {/*Insert image in case video doesn't load*/}
          <Video />
          
          <div id='intro-items'>
            <div id='intro-logo-container'> 
              <img id='intro-logo'
              src={handLogo}/>
            </div>
           
          
            <div id='h1-h2'>
              <h1 className='title-headings text-white'>Lorem <br/>Ipsum</h1>
              <h2 className='text-white font-weight-thin'>Tree Foundation</h2>
            </div>
          </div>
          
          <p id='intro-p' className='font-size-small font-weight-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </section>

        {/*ABOUT SECTION STARTS HERE*/}
        <section id='about-section'>
          
          <img id='about-photo'
            src={aboutImage} />
        
          <div id='about-text'>
            <h2 className='title-headings text-white' id='about-heading'>About</h2>
            <p id='about-p' className='text-white font-size-small font-weight-thin'>Sit amet purus gravida quis blandit turpis cursus. Nulla pharetra 
            diam sit amet nisl suscipit adipiscing bibendum. Pellentesque diam 
            volutpat commodo sed egestas egestas fringilla phasellus. Fringilla 
            ut morbi tincidunt augue interdum velit euismod.</p>
          </div>
        </section>

        {/*OUR WORK SECTION STARTS HERE*/}
        <section id="our-work-section">
        <img id='our-work-background' src={owBackground} />
          <div id='our-work-col-1'>
            <h2 className='title-headings text-white' id='our-work-heading'>Our Work</h2>
            <p className='text-white font-size-small font-weight-thin' id='our-work-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
            <div className='text-white' id='tree-counter'>
              <p id='tree-number'>2,248</p>
              <p id='trees-planted'>Trees Planted</p>
            </div>
          </div>
          
          <div id='gallery'>
            <Carousel />
          </div>

        </section>

        {/*GET INVOLVED SECTION STARTS HERE*/}
        <section id='get-involved-section'>
          
          <h2 className='title-headings text-white' id='get-involved-heading'>Get Involved</h2>

            <div id='make-donation'>
              <h3 id='make-donation-heading'>Make a donation</h3>
              
              <p id='donate-text' className='font-size-small font-weight-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <DonateButtons />

              <button id='donate-continue' className='font-weight-thin'>Continue</button>
              
            </div>

          <h3 id='find-event-heading' className='text-white'>Find an event near you</h3>

          <SearchEvents />

          <div id='get-involved-images'>
            <img className='get-involved-image' src={giImage1}/>
            <img className='get-involved-image' src={giImage2}/> 
            <img className='get-involved-image' src={giImage3}/>
            <img className='get-involved-image' src={giImage4}/>
            <img className='get-involved-image' src={giImage5}/>
            <img className='get-involved-image' src={giImage6}/>
            <img className='get-involved-image' src={giImage7}/>
            <img className='get-involved-image' src={giImage8}/>
          </div>

          <div id='email-signup'>
            <h3 id='sign-up-h3' className='text-white'>Sign up for our newsletter</h3>
            <p className='text-white font-size-small font-weight-thin' id='sign-up-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magn a aliqua.</p>
            <input className='font-weight-thin' id='email-input' placeholder='Enter your email'></input>
            <button className='font-weight-thin' id='submit-email' type='submit'>Sign Up</button>
          </div>
          
        </section>

        {/*FOOTER SECTION STARTS HERE*/}
        <section className='text-white' id='footer-section'>
          <div id='footer-container'>
            <div id='footer-logo-container'>
              <img id='footer-logo'
              src={handLogo}/>
            </div>
          

            <div id='contact-info'>
              <p className='footer-headings'>Contact</p>
              <p className='font-size-small font-weight-thin'>(012) 345-6789</p>
              <p className='font-size-small font-weight-thin'>
              Dolor Sit Amet<br/>
	            Lorem Ipsum Org.<br/>
	            123 Sonsectetur St.<br/>
	            Adipiscing Alit 12345
              </p>
            </div>
          
            <div id='social-media'>
              <p className='footer-headings'>Social Media</p>
              <div id='sm-links'>
                <a href='#' target='_blank'>
                  <img className='sm-icon' id='facebook'
                  src='https://i.imgur.com/4fJVofG.png' />
                  </a>
                <a href='#' target='_blank'>
                  <img className='sm-icon' id='twitter'
                  src='https://i.imgur.com/W6y6mTj.png' />
                  </a>
                <a href='#' target='_blank'>
                  <img className='sm-icon' id='instagram'
                  src='https://i.imgur.com/lMOGBoh.png' />
                  </a>
              </div>
            </div>

            <div id='legal-info'>
              <p className='footer-headings'>Legal</p>
              <p className='legal-link' ><a className='font-size-small font-weight-thin' href='#' target='_blank'>Privacy Policy</a></p>
              <p className='legal-link' ><a className='font-size-small font-weight-thin' href='#' target='_blank'>Terms of Use</a></p>
            </div>
          </div>

          <p className='font-weight-thin' id='copyright-info'>Copyright © 2022 Lorem ipsum dolor sit amet. All rights reserved.</p>
        </section>
      </div>
    )
  }
}
export default App