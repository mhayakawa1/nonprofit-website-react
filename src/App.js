import React from 'react';
import './App.css';
import Video from './components/Video';
import NavbarMenu from './components/NavbarMenu';
import HamburgerMenu from './components/HamburgerMenu';
import Carousel from './components/Carousel';
import DonateButtons from './components/DonateButtons';
import SearchEvents from './components/SearchEvents';

import logo from './images/hand-planting-logo.svg';

import videoAltImg from './images/video-alt-image.jpg';

import aboutImage from './images/about-image.jpg';

import owBackground from './images/our-work-background.jpeg';
import giBackground from './images/get-involved-images/get-involved-background.jpg'

import giImage1 from './images/get-involved-images/get-involved-image-1.jpeg';
import giImage2 from './images/get-involved-images/get-involved-image-2.jpg';
import giImage3 from './images/get-involved-images/get-involved-image-3.jpg';
import giImage4 from './images/get-involved-images/get-involved-image-4.jpg';
import giImage5 from './images/get-involved-images/get-involved-image-5.jpg';
import giImage6 from './images/get-involved-images/get-involved-image-6.jpg';
import giImage7 from './images/get-involved-images/get-involved-image-7.jpg';
import giImage8 from './images/get-involved-images/get-involved-image-8.jpg';

class App extends React.Component {
  render(){
    return(
      <main>        
        <NavbarMenu />
        <HamburgerMenu />
        <section className='intro-section'>
          <img className='video' src={videoAltImg} />
          <Video />          
          
          <div className='intro-items'>
            <div className='intro-logo-container'> 
              <img className='intro-logo' alt='New Canopy\s logo' src={logo}/>
            </div>         
          
            <div className='intro-headings'>
              <h1 className='title-headings text-white'>New <br/>Canopy</h1>
              <h2 className='text-white font-weight-thin'>Tree Foundation</h2>
            </div>
          </div>

          <p className='font-size-small font-weight-thin'>Join us in our mission to plant hope, one tree at a time,
             as we cultivate a greener, healthier, and more sustainable future for generations to come.</p>
        </section>

        <section className='about-section'>
          
          <img className='about-photo' alt='Group of volunteers posing in the forest with tree saplings' 
            src={aboutImage} />
        
          <div className='heading-text'>
            <h2 className='title-headings text-white about-heading'>About</h2>
            <p className='text-white font-size-small font-weight-thin half-border-text-box'>At New Canopy Tree Foundation, our mission is to 
            rejuvenate and safeguard the natural world by planting trees, nurturing forests, and fostering a sustainable future. We 
            are driven by a deep commitment to the environment and a belief that every tree planted is a step toward a healthier planet.</p>
          </div>
        </section>

        <section className='our-work-section'>
          <img className='our-work-background' src={owBackground} />
          <div className='our-work-container'>
            <div className='heading-text'>
              <h2 className='title-headings text-white our-work-heading'>Our Work</h2>
              <p className='text-white font-size-small font-weight-thin half-border-text-box'>Our unwavering dedication to reforestation has 
                transformed landscapes, communities, and the future of our planet. For years, we have rolled up our sleeves and tirelessly 
                worked toward the reclamation of nature, one tree at a time.</p>
            </div>                      
            <div className='text-white tree-counter'>
              <p className='tree-number'>2,248</p>
              <p className='trees-planted'>Trees Planted</p>
            </div>
          </div>
          
          <div className='gallery'>
            <Carousel />
          </div>

        </section>

        <section className='get-involved-section'>
          <img className='get-involved-background' src={giBackground} />
          
          <h2 className='title-headings text-white get-involved-heading'>Get Involved</h2>

            <div className='make-donation'>
              <h3>Make a donation</h3>              
              <p className='donate-text font-size-small font-weight-thin'>Every dollar you contribute goes directly 
              to our reforestation efforts. No amount is too small, and every tree planted makes a difference.</p>              
              <DonateButtons />
              <button className='donate-continue font-weight-thin'>Continue</button>              
            </div>

          <h3 className='find-event-heading text-white'>Find an event near you</h3>

          <SearchEvents />

          <div className='get-involved-images'>
            <img className='get-involved-image' src={giImage1} alt='Woman holding tray of potted saplings'/>
            <img className='get-involved-image' src={giImage2} alt='Adult and child planting sapling'/> 
            <img className='get-involved-image' src={giImage3} alt='Close up of person with gloves planting sapling'/>
            <img className='get-involved-image' src={giImage4} alt='Child holding two potted saplings in both hands'/>
            <img className='get-involved-image' src={giImage5} alt='Close up of two people preparing to plant a sapling with a trowel'/>
            <img className='get-involved-image' src={giImage6} alt='Smiling man posing with a young evergreen tree on a cart'/>
            <img className='get-involved-image' src={giImage7} alt='Two adults and two children planting a young tree with a shovel'/>
            <img className='get-involved-image' src={giImage8} alt='Mangrove saplings in shallow water at the beach'/>
          </div>

          <div className='email-signup'>
            <h3 className='text-white'>Sign up for our newsletter</h3>
            <p className='text-white font-size-small font-weight-thin'>Stay informed and be part of our mission by 
            signing up for our newsletter today – together, we can make a positive difference</p>
            <div className='email-input-container'>
              <input className='font-weight-thin' type='email' placeholder='Enter your email'></input>
              <button className='font-weight-thin' type='submit'>Sign Up</button>
            </div>
          </div>          
        </section>

        <footer className='text-white'>
          <div className='footer-container'>
            <div className='footer-logo-container'>
              <img className='footer-logo' alt='New Canopy\s logo' src={logo}/>
            </div>          

            <div className='contact-info'>
              <p className='footer-headings'>Contact</p>
              <p className='font-size-small font-weight-thin'>(012) 345-6789</p>
              <p className='font-size-small font-weight-thin'>
              Dolor Sit Amet<br/>
	            Lorem Ipsum Org.<br/>
	            123 Sonsectetur St.<br/>
	            Adipiscing Alit 12345
              </p>
            </div>
          
            <div className='social-media'>
              <p className='footer-headings'>Social Media</p>
              <div className='sm-links'>
                <a href='#social-media'>
                  <i className='sm-icon fab fa-facebook' alt='Facebook logo'></i>
                </a>
                <a href='#social-media'>
                  <i className='sm-icon fab fa-twitter' alt='X/Twitter logo'></i>
                </a>
                <a href='#social-media'>
                  <i className='sm-icon fab fa-instagram' alt='Instagram logo'></i>
                </a>
              </div>
            </div>

            <div className='legal-info'>
              <p className='footer-headings'>Legal</p>
              <p><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Privacy Policy</a></p>
              <p><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Terms of Use</a></p>
            </div>
          </div>

          <p className='font-weight-thin copyright-info'>Copyright © 2022 New Canopy Tree Foundation. All rights reserved.</p>
        </footer>
      </main>
    )
  }
}
export default App