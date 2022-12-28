//import { render } from "@testing-library/react";
//import { useState } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import Video from './components/Main'

{/*BUILDING OBJECTIVES
https://www.schemecolor.com/navy-blue-and-mint.php
https://www.schemecolor.com/beige-and-navy-blue.php
https://www.pexels.com/photo/aerial-shot-of-forest-3923721/
https://www.pexels.com/photo/multicolored-trees-growing-in-autumn-woods-in-daytime-5580658/
https://www.pexels.com/photo/breathtaking-landscape-of-lush-autumn-forest-in-highlands-against-cloudy-sundown-sky-4593369/

https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

- Basic page layout, no CSS X
- Intro - hamburger menu, logo, h1, p X
- About - p X
- Our Work - graph, image carousel, p
- Get Involved - images, search for events
- Contact - Name, Email, Subject, Message, submit
- Footer - logo, contact info, social media, copyright, site terms, privacy policy

TASKS FOR TODAY
- Style search results
- 
*/}

class Menu extends React.Component {
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
    const menuHidden =
      <ul className='menu-items hidden font-weight-thin'>
        <a href='#' className='menu-link home-logo-row' ><img className='menu-link home-logo' src='https://i.imgur.com/tkaM5kN.png' /></a>
        <a href='#about-section'><li className='menu-link'>About</li></a>
        <a href='#our-work-section'><li className='menu-link'>Our Work</li></a>
        <a href='#get-involved-section'><li className='menu-link last-link'>Get Involved</li></a>
      </ul>
    const menuVisible =
      <ul className='menu-items visible font-weight-thin'>
        <a href='#intro-section' className='menu-link home-logo-row' ><img className='menu-link home-logo' src='https://i.imgur.com/tkaM5kN.png' /></a>
        <a href='#about-section'><li className='menu-link'>About</li></a>
        <a href='#our-work-section'><li className='menu-link'>Our Work</li></a>
        <a href='#get-involved-section'><li className='menu-link last-link'>Get Involved</li></a>
      </ul>
    return(
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

const Image1 = () =>{
  return(
    <div id="image1" className="slide fade-in"><img className="slide-img" src='https://images.pexels.com/photos/5029929/pexels-photo-5029929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
    </div>
  )
}
 
const Caption1 = () =>{
  return(
    <p id="image1-text" className="slide-text font-size-small fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla mi, suscipit sed leo sit amet, facilisis fringilla nulla. Donec malesuada orci et pulvinar tempor.</p>
  )
}
 
const Image2 = () =>{
  return(
    <div id="image2" className="slide fade-in"><img className="slide-img" src='https://img.freepik.com/free-photo/planting-trees-as-part-reforestation-process_23-2149409981.jpg?w=996&t=st=1671158831~exp=1671159431~hmac=9821facfeb53ddcf8d77aa1257e19570857f639f931b1c769dc0b2ad270a8224' />
    </div>
  )
}
 
const Caption2 = () =>{
  return(
    <p id="image2-text" className="slide-text font-size-small fade-in">Sed ultrices nec elit quis egestas. Donec mauris nisi, convallis vitae enim vel, auctor convallis risus. In lorem libero, gravida quis commodo ut, feugiat non nulla.</p>
  )
}
const Image3 = () =>{
  return(
    <div id="image3" className="slide fade-in"><img className="slide-img" src='https://cdn.create.vista.com/api/media/medium/540180070/stock-photo-spruce-tree-nursery-for-reforestation?token=' />
    </div>
  )
}
 
const Caption3 = () =>{
  return(
    <p id="image3-text" className="slide-text font-size-small fade-in">Aenean tempus accumsan sem, ac varius nulla laoreet ac. Pellentesque luctus ante in mauris sodales, facilisis tempor ex posuere. Sed auctor purus sit amet est consequat pulvinar eu ac nisl. </p>
  )
}

let imageNumArr = [1, 2, 3];
class Carousel extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        imageNumber: 1,
      }
      this.switchImage = this.switchImage.bind(this)
    }
 
  switchImage(event, direction){
    if(direction === "right"){
      imageNumArr.push(imageNumArr.shift());
    }else if(direction === "left"){
      imageNumArr.unshift(imageNumArr.pop());
    }
 
    this.setState({
      imageNumber: imageNumArr[0]
    })
  }
 
  render(){
    let image;
    let caption;
    let dots;
    if(this.state.imageNumber === 1){
      image = <Image1 />
      caption = <Caption1 />
      dots = <div id="dots" className="fade-in">
                <span id="dot1" className="dot"></span>
                <span id="dot2" className="dot translucent"></span>
                <span id="dot3" className="dot translucent"></span>
              </div>
    }else if(this.state.imageNumber === 2){
      image = <Image2 />
      caption = <Caption2 />
      dots = <div id="dots" className="fade-in">
                <span id="dot1" className="dot translucent"></span>
                <span id="dot2" className="dot"></span>
                <span id="dot3" className="dot translucent"></span>
              </div>
    }else if(this.state.imageNumber === 3){
      image = <Image3 />
      caption = <Caption3 />
      dots = <div id="dots" className="fade-in">
                <span id="dot1" className="dot translucent"></span>
                <span id="dot2" className="dot translucent"></span>
                <span id="dot3" className="dot"></span>
              </div>
    }
 
    return(
      <div id="gallery-container">
        <button id="btn-1" className="carousel-btn fade-in" onClick={event => this.switchImage(event, "left")}>◀</button>
       
        {image}
        <button id="btn-2" className="carousel-btn fade-in" onClick={event => this.switchImage(event, "right")}>▶</button>
 
        <div id="caption" className="fade-in text-white font-weight-thin">
          {caption}
        </div>
 
        {dots}
 
      </div>
    )
  }
}

class DonateButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected5: false,
      selected10: false,
      selected25: false,
      selected50: false,
      selected100: false
    }
    this.toggleButtons = this.toggleButtons.bind(this)
  }

  toggleButtons(event, value){
    console.log(value)
    switch(value){
      case 5:
        this.setState( state => ({
          selected5: !state.selected5,
          selected10: false,
          selected25: false,
          selected50: false,
          selected100: false
        }));
        break;
      case 10:
        this.setState( state => ({
          selected5: false,
          selected10: !state.selected10,
          selected25: false,
          selected50: false,
          selected100: false
        }));
        break;
      case 25:
        this.setState( state => ({
          selected5: false,
          selected10: false,
          selected25: !state.selected25,
          selected50: false,
          selected100: false
        }));
        break;
      case 50:
        this.setState( state => ({
          selected5: false,
          selected10: false,
          selected25: false,
          selected50: !state.selected50,
          selected100: false
        }));
        break;
      case 100:
        this.setState( state => ({
          selected5: false,
          selected10: false,
          selected25: false,
          selected50: false,
          selected100: !state.selected100
        }));
    }
  }

  render(){

    return( 
      <div id='donate-selection'>
        <div id='donate-buttons'>
          {this.state.selected5 === false ? 
            <button onClick={event => this.toggleButtons(event, 5)} className='donate-amount'>$5</button>
            : <button onClick={event => this.toggleButtons(event, 5)} className='donate-amount donate-amount-selected'>$5</button>}
      
          {this.state.selected10 === false ? 
            <button onClick={event => this.toggleButtons(event, 10)} className='donate-amount'>$10</button>
            : <button onClick={event => this.toggleButtons(event, 10)} className='donate-amount donate-amount-selected'>$10</button>}
      
          {this.state.selected25 === false ? 
            <button onClick={event => this.toggleButtons(event, 25)} className='donate-amount'>$25</button>
            : <button onClick={event => this.toggleButtons(event, 25)} className='donate-amount donate-amount-selected'>$25</button>}

          {this.state.selected50 === false ? 
            <button onClick={event => this.toggleButtons(event, 50)} className='donate-amount'>$50</button>
            : <button onClick={event => this.toggleButtons(event, 50)} className='donate-amount donate-amount-selected'>$50</button>}
      
          {this.state.selected100 === false ? 
            <button onClick={event => this.toggleButtons(event, 100)} className='donate-amount'>$100</button>
            : <button onClick={event => this.toggleButtons(event, 100)} className='donate-amount donate-amount-selected'>$100</button>}

        </div>

        <div id='donate-custom'>
          <label id='dollar-label'>$</label>
          <input id='custom-input' type='number' min='0' placeholder='Custom' />
        </div>
      </div>
    )
  }
}

class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      object: {
        1: {
          tags: ['arizona', 'az', 'phoenix', 'fundraiser', 'saturday', 'sat', 'april'],
          title: 'Lorem ipsum dolor sit amet',
          city: 'Phoenix, AZ',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Fundraiser',
          dateTime: 'SAT APR 29 2023, 4PM-5PM',
          description:'Urna nunc id cursus metus aliquam eleifend mi in nulla. Nunc id cursus metus aliquam eleifend.'
        },
        2: {
          tags: ['arizona', 'az', 'prescott', 'tree', 'planting', 'wednesday', 'wed', 'march'],
          title: 'consectetur adipiscing elit',
          city: 'Prescott, AZ',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'WED MAR 1 2023, 9AM-11AM',
          description:'Lectus arcu bibendum at varius. Non nisi est sit amet facilisis magna etiam.'
        },
        3: {
          tags: ['california', 'ca', 'greenfield', 'tree', 'planting', 'sunday', 'sun', 'may'],
          title: 'sed do eiusmod tempor incididunt ut',
          city: 'Greenfield, CA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'SUN MAY 21 2023, 10PM-12PM',
          description:'Amet tellus cras adipiscing enim eu turpis egestas pretium. Elementum nibh tellus molestie nunc.'
        },
        4: {
          tags: ['california', 'ca', 'los angeles', 'la', 'fundraiser', 'thursday', 'thurs', 'may'],
          title: 'labore et dolore magna aliqua',
          city: 'Los Angeles, CA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Fundraiser',
          dateTime: 'THURS MAY 11 2023, 5PM-6PM',
          description:'Luctus venenatis lectus magna fringilla urna porttitor rhoncus.'
        },
        5: {
          tags: ['california', 'ca', 'redding', 'workshop', 'monday', 'mon', 'may'],
          title: 'Ut enim ad minim veniam',
          city: 'Redding, CA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Workshop',
          dateTime: 'MON MAY 1 2023, 4PM-5PM',
          description:'Viverra maecenas accumsan lacus vel facilisis volutpat est.'
        },
        6: {
          tags: ['california', 'ca', 'san diego', 'lecture', 'friday', 'fri', 'april'],
          title: 'quis nostrud exercitation ullamco',
          city: 'San Diego, CA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Lecture',
          dateTime: 'FRI APR 14 2023, 3PM-4PM',
          description:'Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.'
        },
        7: {
          tags: ['california', 'ca', 'santa barbara', 'tree', 'planting', 'wednesday', 'wed', 'april'],
          title: 'laboris nisi ut aliquip ex ea',
          city: 'Santa Barbara, CA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'WED APR 5 2023, 1PM-3PM',
          description:'Aliquam etiam erat velit scelerisque in dictum non consectetur a.'
        },
        8: {
          tags: ['colorado', 'co', 'springs', 'tree', 'planting', 'saturday', 'sat', 'july'],
          title: 'commodo consequat duis aute',
          city: 'Colorado Springs, CO',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'SAT JUL 1 2023, 9AM-11AM',
          description:'Vivamus arcu felis bibendum ut. Nunc non blandit massa enim nec.'
        },
        9: {
          tags: ['colorado', 'co', 'denver', 'lecture', 'wednesday', 'wed', 'may'],
          title: 'irure dolor in reprehenderit',
          city: 'Denver, CO',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'WED MAY 17 2023, 2PM-4PM',
          description:'Viverra aliquet eget sit amet. Est placerat in egestas erat.'
        },
        10: {
          tags: ['colorado', 'co', 'pueblo', 'workshop', 'thursday', 'thurs', 'april'],
          title: 'in voluptate velit esse cillum',
          city: 'Pueblo, CO',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Workshop',
          dateTime: 'THURS APR 27 2023, 4PM-5PM',
          description:'Id diam maecenas ultricies mi eget mauris. Integer malesuada nunc vel risus commodo.'
        },
        11: {
          tags: ['idaho', 'io', 'boise', 'fundraiser', 'wednesday', 'wed', 'april'],
          title: 'dolore eu fugiat nulla pariatur',
          city: 'Boise, IO',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Fundraiser',
          dateTime: 'WED APR 26 2023, 12PM-1PM',
          description:'Duis at consectetur lorem donec massa. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit.'
        },
        12: {
          tags: ['idaho', 'io', 'twin falls', 'tree', 'planting', 'monday', 'mon', 'april'],
          title: 'Excepteur sint occaecat',
          city: 'Twin Falls, IO',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'MON APR 10 2023, 10AM-12PM',
          description:'Dictum fusce ut placerat orci. Eu nisl nunc mi ipsum faucibus.'
        },
        13: {
          tags: ['minnesota', 'mn', 'duluth', 'tree', 'planting', 'tuesday', 'tues', 'march'],
          title: 'cupidatat non proident sunt',
          city: 'Minnesota, MN',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'TUES MAR 21 2023, 9AM-11AM',
          description:'Erat nam at lectus urna duis. Diam ut venenatis tellus in metus vulputate eu scelerisque.'
        },
        14: {
          tags: ['nevada', 'nv', 'reno', 'workshop', 'sunday', 'sun', 'march'],
          title: 'in culpa qui officia deserunt',
          city: 'Reno, NV',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Workshop',
          dateTime: 'SUN MAR 19 2023, 9AM-10AM',
          description:'Ullamcorper a lacus vestibulum sed arcu non odio euismod. Tellus mauris a diam maecenas sed enim ut sem.'
        },
        15: {
          tags: ['new mexico', 'nm', 'apache', 'lecture', 'friday', 'fri', 'june'],
          title: 'mollit anim id est laborum',
          city: 'Apache, NM',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Lecture',
          dateTime: 'FRI JUN 9 2023, 3PM-4PM',
          description:'At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.'
        },
        16: {
          tags: ['oregon', 'or', 'baker city', 'tree', 'planting', 'monday', 'mon', 'march'],
          title: 'Nibh tellus molestie nunc non',
          city: 'Baker City, OR',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'MON MAR 20 2023, 9AM-11AM',
          description:'Non arcu risus quis varius quam. Justo eget magna fermentum iaculis eu.'
        },
        17: {
          tags: ['oregon', 'or', 'eugene', 'lecture', 'saturday', 'sat', 'march'],
          title: 'Nunc pulvinar sapien et ligula',
          city: 'Eugene, OR',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Lecture',
          dateTime: 'SAT MAR 11 2023, 10AM-11AM',
          description:'Mi in nulla posuere sollicitudin aliquam. Non nisi est sit amet facilisis magna.'
        },
        18: {
          tags: ['oregon', 'or', 'portland', 'lecture', 'tuesday', 'tues', 'february'],
          title: 'ullamcorper malesuada proin libero',
          city: 'Portland, OR',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Lecture',
          dateTime: 'TUES FEB 28 2023, 2PM-3PM',
          description:'In pellentesque massa placerat duis ultricies. Aliquet nec ullamcorper sit amet risus.'
        },
        19: {
          tags: ['washington', 'wa', 'colville', 'tree', 'planting', 'saturday', 'sat', 'may'],
          title: 'Nullam ac tortor vitae purus',
          city: 'Colville, WA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'SAT MAY 6 2023, 1PM-3PM',
          description:'Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Viverra accumsan in nisl nisi scelerisque.'
        },
        20: {
          tags: ['washington', 'wa', 'wenatchee', 'tree', 'planting', 'wednesday', 'wed', 'april'],
          title: 'faucibus ornare suspendisse sed nisi',
          city: 'Wenatchee, WA',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'WED APR 26 2023, 2PM-4PM',
          description:'At quis risus sed vulputate odio ut. Ac felis donec et odio pellentesque diam.'
        },
        21: {
          tags: ['wyoming', 'wy', 'cheyenne', 'fundraiser', 'wednesday', 'wed', 'april'],
          title: 'Semper viverra nam libero justo',
          city: 'Cheyenne, WY',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Fundraiser',
          dateTime: 'WED APR 12 2023, 1PM-2PM',
          description:'Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Turpis tincidunt id aliquet risus feugiat.'
        },
        22: {
          tags: ['wyoming', 'wy', 'douglas', 'tree', 'planting', 'monday', 'mon', 'may'],
          title: 'laoreet sit amet cursus',
          city: 'Douglas, WY',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Tree Planting',
          dateTime: 'MON MAY 15 2023, 12PM-2PM',
          description:'Arcu vitae elementum curabitur vitae nunc. Ipsum consequat nisl vel pretium lectus quam id leo.'
        },
        23: {
          tags: ['wyoming', 'wy', 'sheridan', 'workshop', 'saturday', 'sat', 'february'],
          title: 'Volutpat sed cras ornare',
          city: 'Sheridan, WY',
          address: 'Lorem Ipsum Dolor Sit',
          eventType: 'Workshop',
          dateTime: 'SAT FEB 18 2023, 10AM-11AM',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        }
      },
      inputArr: [], //for input text split into array of individual words
      searchedTags: [], //for all search terms in inputArr that will yield results
      renderProperties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], //for all properties in object that should be rendered
      output: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
 
  handleChange = (event) =>{
    this.setState({
      input: event.target.value
    }, () => {
    })
    
  }
 
  handleKeyDown(event){
  this.setState({
        inputArr: [],
        searchedTags: [],
        renderProperties: []
      })
    //if 'Enter' is pressed, execute the following
    if (event.keyCode === 13){ //13 is keyCode for ‘Enter’
      if(this.state.input.length === 0){
        this.setState({
          renderProperties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        }, () => {
        })
      }else{
        //get all input text split into array of individual words
        this.state.inputArr = this.state.input.toLowerCase().split(' ')
        this.setState({
          inputArr: this.state.inputArr
        })
 
        for(let i = 1; i <= Object.keys(this.state.object).length; i++){
       
          for(let j = 0; j < this.state.object[i].tags.length; j++){
            if(this.state.inputArr.includes(this.state.object[i].tags[j]) === true
              && this.state.renderProperties.includes(i) === false){
              this.state.searchedTags.push(this.state.object[i].tags[j])
              this.state.renderProperties.push(i)
            }else if(this.state.inputArr.includes(this.state.object[i].tags[j]) === true
              && this.state.renderProperties.includes(i) === true){
              this.state.searchedTags.push(this.state.object[i].tags[j])
            }
          }
          this.setState({
            searchedTags: this.state.searchedTags,
            renderProperties: this.state.renderProperties
          })
        }
      }  
    }
  }
  render(){
    //map thru renderProperties and create a div containing the string of each item
    const results = this.state.renderProperties.map((item, index) =>
      <div className='search-result' key={index}>
        <div>
          <p className='result-date-time font-size-small font-weight-thin'>{this.state.object[item].dateTime}</p>
          <p className='result-title'>{this.state.object[item].title.toUpperCase()}</p>
          <p className='result-type-location font-size-small'>{this.state.object[item].eventType} @{this.state.object[item].address}, {this.state.object[item].city}</p>
          <p className='result-description font-size-small font-weight-thin'>{this.state.object[item].description}</p>
        </div>
        
        <div className='result-buttons'>
          <button className='result-button font-size-small font-weight-thin'>Learn More</button>
          <button className='result-button font-size-small font-weight-thin'>Add to Calendar</button>
        </div>
        
      </div>)
 
    return(
      <div id='find-event' >
        <input id='search-input' className='font-weight-thin'
          placeholder='Search time, location, etc.' type='text'
          value={this.state.input} onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
 
        <div id='search-results'>
          {results}
          <i aria-hidden='true'></i>
        </div>
      </div>
    )
  }

}

class App extends React.Component {
  render(){
    return(
      <div id='page'>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <Menu />
        {/*INTRO SECTION STARTS HERE*/}
        <section id='intro-section'>
          
          {/*
          <span id='video-placeholder' />
          */}
          <Video />
                    
          <span id='video-cover' />
          
          
          
          <div id='intro-items'>
            <div id='intro-logo-container'> 
              <img id='intro-logo'
              src='https://img.icons8.com/ios-filled/512/hand-planting.png'/>
            </div>
           
          
            <div id='h1-h2'>
              <h1 className='title-headings text-white'>Lorem <br/>Ipsum</h1>
              <h2 className='text-white font-weight-thin'>Tree Foundation</h2>
            </div>
          </div>
          
          <p id='intro-p' className='font-size-small font-weight-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        {/*ABOUT SECTION STARTS HERE*/}
        <section id='about-section'>
          
          <img id='about-photo'
            src='https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500864.jpg?w=996&t=st=1671158778~exp=1671159378~hmac=8f7911633b52df769a4491234eb62793ea2807bde58743e492fff2a65f8073e1' />
        
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
        <img id='our-work-background' src='https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <div id='our-work-col-1'>
            <h2 className='title-headings text-white' id='our-work-heading'>Our Work</h2>
            <p className='text-white font-size-small font-weight-thin' id='our-work-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
            <div className='text-white' id='tree-counter'>
              <p id='tree-number'>2,248</p>
              <p id='trees-planted'>Trees Planted</p>
            </div>
          </div>
          
          {/*
          <p className='font-weight-thin' id='placeholder-caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className='gallery-photo' alt='gallery-placeholder'
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
           */}
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
              
              {/*<div id='donate-custom'>
                <label id='dollar-label'>$</label>
                <input id='custom-input' type='number' min='0' placeholder='Custom' />
              </div>*/}

              <button id='donate-continue' className='font-weight-thin'>Continue</button>
              
            </div>

          <h3 id='find-event-heading' className='text-white'>Find an event near you</h3>

          <SearchEvents />

          <div id='get-involved-images'>
            <img className='get-involved-image' src='https://images.pexels.com/photos/5487071/pexels-photo-5487071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            <img className='get-involved-image' src='https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/> 
            <img className='get-involved-image' src='https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            <img className='get-involved-image' src='https://img.freepik.com/free-photo/child-girl-holding-seedlings-ready-be-planted-ground-little-gardener-brown-dress_1157-39059.jpg?w=996&t=st=1671422158~exp=1671422758~hmac=08c28e00f47fc28713f12b87b63dced36f286d060b04a1efb45a51d383084e35'/>
            <img className='get-involved-image' src='https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500843.jpg?w=996&t=st=1671422075~exp=1671422675~hmac=eedfd05afe2d874da75df6c24f2aaff9ee2b9205b0700904bc08d521af50d7d9'/>
            <img className='get-involved-image' src='https://images.pexels.com/photos/6285004/pexels-photo-6285004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            <img className='get-involved-image' src='https://img.freepik.com/free-photo/family-with-with-little-sons-are-planting-tree-yard_1157-37424.jpg?w=996&t=st=1671422616~exp=1671423216~hmac=ebf117b2ef8b2a306e6cbdeebad6758c9feb3fa430494fb09dabb3e1bd15025a'/>
            <img className='get-involved-image' src='https://img.freepik.com/free-photo/closeup-shot-mangrove-tree-saplings-planted-forest-trapeang-sangkae-kampot_181624-58384.jpg?w=900&t=st=1671422747~exp=1671423347~hmac=b28dca3c3998bdf917d1a017789158e17cb486e409e10b6137f7618209f90c1f'/>
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
              src='https://img.icons8.com/ios-filled/512/hand-planting.png'/>
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
              <p><a className='legal-link font-size-small font-weight-thin' href='#' target='_blank'>Privacy Policy</a></p>
              <p><a className='legal-link font-size-small font-weight-thin' href='#' target='_blank'>Terms of Use</a></p>
            </div>
          </div>

          <p className='font-weight-thin' id='copyright-info'>Copyright © 2022 Lorem ipsum dolor sit amet. All rights reserved.</p>
        </section>
      </div>
    )
  }
}
export default App