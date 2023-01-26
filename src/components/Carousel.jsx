import React from 'react';
import image1 from '../images/carousel-image-1.jpeg';
import image2 from '../images/carousel-image-2.jpg';
import image3 from '../images/carousel-image-3.jpeg';

//consts for images and captions for image carousel
const Image1 = () =>{
    return(
      <div>
        <div id="image1" className="slide fade-in"><img className="slide-img" src={image1} />
        </div>
        <p id="image1-text" className="slide-text font-size-small font-weight-thin text-white fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla mi, suscipit sed leo sit amet, facilisis fringilla nulla. Donec malesuada orci et pulvinar tempor.</p>
      </div>
    )
  }
   
  const Image2 = () =>{
    return(
      <div>
        <div id="image2" className="slide fade-in"><img className="slide-img" src={image2} />
      </div>
      <p id="image2-text" className="slide-text font-size-small font-weight-thin text-white fade-in">
        Sed ultrices nec elit quis egestas. Donec mauris nisi, convallis vitae enim vel, auctor convallis risus. In lorem libero, gravida quis commodo ut, feugiat non nulla.</p>
      </div>
      
    )
  }
  
  const Image3 = () =>{
    return(
      <div>
        <div id="image3" className="slide fade-in"><img className="slide-img" src={image3} />
        </div>
        <p id="image3-text" className="slide-text font-size-small font-weight-thin text-white fade-in">
          Aenean tempus accumsan sem, ac varius nulla laoreet ac. Pellentesque luctus ante in mauris sodales, facilisis tempor ex posuere. Sed auctor purus sit amet est consequat pulvinar eu ac nisl. </p>
      </div>
      
    )
  }
  
  //let imageNumArr = [1, 2, 3]; //array to cycle through images
  export default class Carousel extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          imageNumber: 0,
          dotClasses: ["dot", "dot translucent", "dot translucent"],
          imageNumArr: [0, 1, 2],
        }
        this.switchImage = this.switchImage.bind(this)
      }
    
    //used when carousel buttons are clicked
    switchImage(event, direction){
      
      if(direction === "right"){ //if direction is right, move 1st number in imageNumArr to end
        this.state.imageNumArr.push(this.state.imageNumArr.shift());
        this.state.dotClasses.unshift(this.state.dotClasses.pop());
      }else if(direction === "left"){ //if direction is left, most last number in imageNumArr to beginning
        this.state.imageNumArr.unshift(this.state.imageNumArr.pop());
        this.state.dotClasses.push(this.state.dotClasses.shift());
      }
      
      //set imageNumber to 1st element in imageNumArr
      this.setState({
        imageNumArr: this.state.imageNumArr,
        imageNumber: this.state.imageNumArr[0],
        dotClasses: this.state.dotClasses
      })
      console.log(this.state.dotClasses)
    }
   
    render(){
      let showImage;
      let caption;
      
      if(this.state.imageNumber === 0){
        showImage = <Image1 />
      }else if(this.state.imageNumber === 1){
        showImage = <Image2 />
      }else if(this.state.imageNumber === 2){
        showImage = <Image3 />
      }      
   
      return(
        //when carousel buttons are clicked, pass switchImage with direction
        <div id="gallery-container">
          <button id="btn-1" className="carousel-btn fade-in" onClick={event => this.switchImage(event, "left")}>◀</button>
          
          {showImage}          

          <button id="btn-2" className="carousel-btn fade-in" onClick={event => this.switchImage(event, "right")}>▶</button>
   
          <div id="caption" className="fade-in text-white font-weight-thin">
          {caption}
          </div>
  
          <div id="dots" className="fade-in">
            <span id="dot1" className={this.state.dotClasses[0]}></span>
            <span id="dot2" className={this.state.dotClasses[1]}></span>
            <span id="dot3" className={this.state.dotClasses[2]}></span>
          </div>
        </div>
      )
    }
  }
  