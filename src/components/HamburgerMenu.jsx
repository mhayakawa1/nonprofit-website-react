import React from 'react';
import homeLogo from '../images/home-logo.png';

export default class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        showMenu: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)
    }
  
  //toggle showMenu true/false
  toggleMenu = () =>{
    this.setState( state => ({
      showMenu: !state.showMenu
    }));
  }
  
    render(){
      return( 
      //when user clicks on hamburger menu, call toggleMenu
      //if showMenu is true, menu is visible, if false menu is hidden
        <div id='menu'>
          <div onClick={this.toggleMenu} className='menu-lines'>
            <span className='menu-line' />
            <span className='menu-line' />
            <span className='menu-line' />
          </div>
          <ul className={`menu-items ${this.state.showMenu === true ? 'visible' : 'hidden'} font-weight-thin`}>
            <a href='#intro-section' className='menu-link home-logo-row' ><img className='menu-link home-logo' src={homeLogo} /></a>
            <a href='#about-section'><li className='menu-link'>About</li></a>
            <a href='#our-work-section'><li className='menu-link'>Our Work</li></a>
            <a href='#get-involved-section'><li className='menu-link last-link'>Get Involved</li></a>
          </ul>
        </div>
      )
    }
  }