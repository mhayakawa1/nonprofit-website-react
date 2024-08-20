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

import giBackground from './images/get-involved-images/get-involved-bg.jpg'

import giImage1 from './images/get-involved-images/get-involved-1.jpg';
import giImage2 from './images/get-involved-images/get-involved-2.jpg';
import giImage3 from './images/get-involved-images/get-involved-3.jpg';
import giImage4 from './images/get-involved-images/get-involved-4.jpg';
import giImage5 from './images/get-involved-images/get-involved-5.jpg';
import giImage6 from './images/get-involved-images/get-involved-6.jpg';
import giImage7 from './images/get-involved-images/get-involved-7.jpg';
import giImage8 from './images/get-involved-images/get-involved-8.jpg';

class App extends React.Component {
  getInvolvedImages() {
    let images = [];
    const imagesInfo = {
      [giImage1]: 'Woman holding tray of potted saplings',
      [giImage2]: 'Adult and child planting sapling',
      [giImage3]: 'Close up of person with gloves planting sapling',
      [giImage4]: 'Child holding two potted saplings in both hands',
      [giImage5]: 'Close up of two people preparing to plant a sapling with a trowel',
      [giImage6]: 'Smiling man posing with a young evergreen tree on a cart',
      [giImage7]: 'Two adults and two children planting a young tree with a shovel',
      [giImage8]: 'Mangrove saplings in shallow water at the beach'
    }

    for (const [key, value] of Object.entries(imagesInfo)) {
      images.push(
        <img key={key} className='get-involved-image' src={key} alt={value} />
      )
    }
    return (images);
  }
  render() {
    return (
      <main>
        <NavbarMenu />
        <HamburgerMenu />
        <section id='intro-section'>
          <img className='video' src={videoAltImg} />
          <Video />

          <div className='intro-container'>
            <div className='logo-headers-container'>
              <img className='intro-logo' alt='New Canopy\s logo' src={logo} />
              <div className='intro-headings'>
                <h1 className='title-headings text-white'>New <br />Canopy</h1>
                <h2 className='text-white font-weight-thin'>Tree Foundation</h2>
              </div>
            </div>
            <p className='font-size-small font-weight-thin'>Join us in our mission to plant hope, one tree at a time,
              as we cultivate a greener, healthier, and more sustainable future for generations to come.</p>
          </div>
        </section>

        <section id='about-section'>
          <div className='about-photo'>
            <img alt='Group of volunteers posing in the forest with tree saplings'
              src={aboutImage} />
          </div>

          <div className='heading-text'>
            <h2 className='title-headings text-white about-heading'>About</h2>
            <p className='text-white font-size-small font-weight-thin half-border-text-box'>At New Canopy Tree Foundation, our mission is to
              rejuvenate and safeguard the natural world by planting trees, nurturing forests, and fostering a sustainable future. We
              are driven by a deep commitment to the environment and a belief that every tree planted is a step toward a healthier planet.</p>
          </div>
        </section>

        <section id='our-work-section'>
          <img className='our-work-background' src={owBackground} />
          <div className='our-work-container'>
            <div className='our-work-text'>
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
          </div>
        </section>

        <section id='get-involved-section'>
          <div className='get-involved-container'>
            <img className='get-involved-background'
            src={[giBackground]} 
            />
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
          </div>

          <div className='get-involved-images'>
            {this.getInvolvedImages()}
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
            <div className='footer-item footer-logo-container'>
              <img className='footer-logo' alt='New Canopy\s logo' src={logo} />
            </div>

            <div className='footer-item contact-info'>
              <div>
                <h4 className='footer-headings'>Contact</h4>
                <ul className='font-size-small font-weight-thin'>
                  <li className='phone-number'>(012) 345-6789</li>
                  <li>Dolor Sit Amet</li>
                  <li>Lorem Ipsum Org.</li>
                  <li>123 Sonsectetur St.</li>
                  <li>Adipiscing Alit 12345</li>
                </ul>
              </div>
            </div>

            <div id='follow-us' className='footer-item'>
              <h4 className='footer-headings'>Follow Us</h4>
              <div className='follow-links'>
                <a href='#follow-us'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    <desc>Facebook</desc>
                  </svg>
                </a>
                <a href='#social-media'>
                  <svg className='square-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                    <desc>Twitter X</desc>
                  </svg>
                </a>
                <a href='#social-media'>
                  <svg className='square-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    <desc>Instagram</desc>
                  </svg>
                </a>
              </div>
            </div>

            <div className='legal-info footer-item'>
              <div>
                <h4 className='footer-headings'>Legal</h4>
                <ul>
                  <li><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Privacy Policy</a></li>
                  <li><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>

          <p className='font-weight-thin copyright-info'>Copyright © 2022 New Canopy Tree Foundation. All rights reserved.</p>
        </footer>
      </main >
    )
  }
}
export default App