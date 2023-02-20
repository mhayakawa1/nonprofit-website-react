import React from 'react';

class NavbarMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showMenu: false
        }
    }

    render(){
        {/* Building Objectives
        - Horizontal menu
        - home on left with bootstrap logo
        - rest of items of right
        - black to transparent gradient background
        */}
        return(
            <div id='navbar'>
                <ul className='navbar-list'>
                    <div className='nav-left'>
                        <li className='nav-link nav-home'>
                            <a href='#intro-section' className='nav-item navbar-home font-size-small' >
                            <img className='nav-link home-logo' src='https://i.imgur.com/tkaM5kN.png' />
                            </a>
                        </li>
                    </div>
                    <div className='nav-right'>
                        <li className='nav-link nav-section'>
                        <a href='#about-section' className='font-size-small font-weight-thin'>About</a>
                    </li>
                    <li className='nav-link nav-section'>
                        <a href='#our-work-section' className='font-size-small font-weight-thin'>Our Work</a>
                    </li>
                    <li className='nav-link nav-section'>
                        <a href='#get-involved-section' className='font-size-small font-weight-thin'>Get Involved</a>
                    </li>
                    </div>
                    
                </ul>
            </div>
        )
    }
}
export default NavbarMenu;