import React from 'react';

class NavbarMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showMenu: false
        }
    }

    render(){
        return(
            <nav>
                <ul className='navbar-list'>
                    <li className='nav-link nav-home'>
                        <a href='#intro-section' className='font-size-small' >
                        <i className='nav-link home-logo fas fa-home' alt='home'></i>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href='#about-section' className='font-size-small font-weight-thin'>About</a>
                    </li>
                    <li className='nav-link'>
                        <a href='#our-work-section' className='font-size-small font-weight-thin'>Our Work</a>
                    </li>
                    <li className='nav-link'>
                        <a href='#get-involved-section' className='font-size-small font-weight-thin'>Get Involved</a>
                    </li>                  
                </ul>
            </nav>
        )
    }
}
export default NavbarMenu;