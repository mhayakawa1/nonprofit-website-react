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
      const menuHidden = //const for menu with className hidden
        <ul className='menu-items hidden font-weight-thin'>
          <a href='#intro-section' className='menu-link home-logo-row' ><img className='menu-link home-logo' src={homeLogo} /></a>
          <a href='#about-section'><li className='menu-link'>About</li></a>
          <a href='#our-work-section'><li className='menu-link'>Our Work</li></a>
          <a href='#get-involved-section'><li className='menu-link last-link'>Get Involved</li></a>
        </ul>
      const menuVisible = //const for menu with className visible
        <ul className='menu-items visible font-weight-thin'>
          <a href='#intro-section' className='menu-link home-logo-row' ><img className='menu-link home-logo' src={homeLogo} /></a>
          <a href='#about-section'><li className='menu-link'>About</li></a>
          <a href='#our-work-section'><li className='menu-link'>Our Work</li></a>
          <a href='#get-involved-section'><li className='menu-link last-link'>Get Involved</li></a>
        </ul>
      return( 
      //when user clicks on hamburger menu, call toggleMenu
      //if showMenu is true, menu is visible, if flalse menu is hidden
        <div id='menu'>
            <div onClick={this.toggleMenu} className='menu-lines'>
              <span className='menu-line' />
              <span className='menu-line' />
              <span className='menu-line' />
            </div>
          {this.state.showMenu === true ? menuVisible : menuHidden}
        </div>
      )
    }
  }