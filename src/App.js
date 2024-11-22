import React from 'react';
import './App.css';
import Video from './components/Video';
import NavbarMenu from './components/NavbarMenu';
import HamburgerMenu from './components/HamburgerMenu';
import Carousel from './components/Carousel';
import DonateButtons from './components/DonateButtons';
import SearchEvents from './components/SearchEvents';
import GetInvolvedImages from './components/GetInvolvedImages';
import Footer from './components/Footer';

import videoAltImg from './images/video-alt-image.jpg';
import aboutImage from './images/about-image.jpg';
import owBackground from './images/our-work-background.jpeg';
import logo from './images/hand-planting-logo.svg';

import giBackground from './images/get-involved-images/get-involved-bg.jpg'

class App extends React.Component {
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

          <GetInvolvedImages />

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
        <Footer />
      </main >
    )
  }
}
export default App