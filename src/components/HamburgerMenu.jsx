import React from 'react';

export default class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        showMenu: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)
    }
  
  toggleMenu = () =>{
    this.setState( state => ({
      showMenu: !state.showMenu
    }));
  }
  
    render(){
      return(
        <div className='hamburger-menu'>
          <button onClick={this.toggleMenu} className='menu-button'>
            <span className='menu-line' />
            <span className='menu-line' />
            <span className='menu-line' />
          </button>
          <ul className={`menu-items ${this.state.showMenu === true ? 'visible' : 'hidden'} font-weight-thin`}>
            <li>
              <a href='#intro-section' className='menu-link home-logo-row'>
                <img className='menu-link home-logo fas fa-home' alt='home' />
              </a>
            </li>
            <li>
              <a className='menu-link'  href='#about-section'>About</a>
            </li>
            <li>
              <a className='menu-link'  href='#our-work-section'>Our Work</a>
            </li>
            <li>
              <a className='menu-link'  href='#about-section'>Get Involved</a>
            </li>
          </ul>
        </div>
      )
    }
  }