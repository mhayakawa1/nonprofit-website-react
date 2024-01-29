import React from 'react';
import image1 from '../images/carousel-images/carousel-image-1.jpeg';
import image2 from '../images/carousel-images/carousel-image-2.jpg';
import image3 from '../images/carousel-images/carousel-image-3.jpeg';
import image4 from '../images/carousel-images/carousel-image-4.jpg';
import image5 from '../images/carousel-images/carousel-image-5.jpg';
import image6 from '../images/carousel-images/carousel-image-6.jpg';
import image7 from '../images/carousel-images/carousel-image-7.jpg';
import image8 from '../images/carousel-images/carousel-image-8.jpg';
import image9 from '../images/carousel-images/carousel-image-9.jpg';
const images = require.context('../images/carousel-images', true);
const imageList = images.keys().map(image => images(image));

export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageNumber: 0,
      dotClasses: ['dot', 'dot translucent', 'dot translucent'],
      imageNumArr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      imagesArr: [image1, image2, image3, image4, image5, image6, image7, image8, image9],
      captionsArr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla mi, suscipit sed leo sit amet, facilisis fringilla nulla.',
        'Sed ultrices nec elit quis egestas. Donec mauris nisi, convallis vitae enim vel, auctor convallis risus. In lorem libero, gravida.',
        'Aenean tempus accumsan sem, ac varius nulla laoreet ac. Pellentesque luctus ante in mauris sodales, facilisis tempor ex.',
        'Cursus euismod quis viverra nibh cras. Lobortis elementum nibh tellus molestie nunc non.',
        'Nec nam aliquam sem et tortor consequat id porta. Sit amet luctus venenatis lectus. Consectetur purus ut faucibus pulvinar.',
        'Non sodales neque sodales ut. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Sapien faucibus et molestie ac feugiat sed lectus. Metus vulputate eu scelerisque felis imperdiet proin.',
        'Morbi tristique senectus et netus et malesuada. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.'
      ],
      image: '',
      caption: '',
      fadeIn: 'fade-in'
    }
    this.switchImage = this.switchImage.bind(this);
    this.getDots = this.getDots.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  //used when carousel buttons are clicked
  switchImage(direction){
    
    if(direction === "right"){ //if direction is right, move 1st number in imageNumArr to end
      this.state.imageNumArr.push(this.state.imageNumArr.shift());
      this.state.dotClasses.unshift(this.state.dotClasses.pop());
      this.state.imagesArr.push(this.state.imagesArr.shift());
      this.state.captionsArr.push(this.state.captionsArr.shift());
    }else if(direction === "left"){ //if direction is left, most last number in imageNumArr to beginning
      this.state.imageNumArr.unshift(this.state.imageNumArr.pop());
      this.state.dotClasses.push(this.state.dotClasses.shift());
      this.state.imagesArr.unshift(this.state.imagesArr.pop());
      this.state.captionsArr.push(this.state.captionsArr.shift());
    }
    
    //set imageNumber to 1st element in imageNumArr
    this.setState({
      imagesArr: this.state.imagesArr,
      imageNumArr: this.state.imageNumArr,
      imageNumber: this.state.imageNumArr[0],
      dotClasses: this.state.dotClasses,
      fadeIn: this.state.fadeIn
    })
  }

  getDots(){
    const dotsArr = [];
    //if i doesn't align with image that is displayed, make the corresponding dot translucent
    //if it does, the dot is at full opacity
    for(let i = 0; i < this.state.imageNumArr.length; i++){
      if(i === this.state.imageNumber){
        dotsArr.push(
          <span key={i} className='dot'></span>
        )
      }else{
        dotsArr.push(
          <span key={i} className='dot translucent'></span>
        )
      }
    }
    return dotsArr;
  }

  renderImage = () =>{
    const arr = [];
    for(let i = 0; i < this.state.imagesArr.length; i++){
      if(this.state.imagesArr.indexOf(this.state.imagesArr[i]) === this.state.imageNumber){
        arr.push(
          <div key={i} id='slide-img-container'>
            <figure className='slide fade-in'>
              <img className='slide-img' alt={`${this.state.captionsArr[0]}`} src={this.state.imagesArr[0]} />              
              <figcaption className='caption font-size-small font-weight-thin text-white'>
                {this.state.captionsArr[0]}
              </figcaption>
            </figure>
            <div id="gallery-btns">
              <button id="btn-1" className="carousel-btn fade-in" 
                onClick={() => this.switchImage("left")}>◀</button>
              <button id="btn-2" className="carousel-btn fade-in" 
                onClick={() => this.switchImage("right")}>▶</button>
            </div>
          </div>
        )
      }
    }
    return arr;
  }
  
  render(){
    return(
      //when carousel buttons are clicked, pass switchImage with direction
      <div id="gallery-container">
        {this.renderImage()}
        <div id="dots" className="fade-in">
          {this.getDots()}
        </div>
      </div>
    )
  }
}
  