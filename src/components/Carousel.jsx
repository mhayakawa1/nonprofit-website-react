import React from 'react';
import image1 from '../images/carousel-images/carousel-1.jpg';
import image2 from '../images/carousel-images/carousel-2.jpg';
import image3 from '../images/carousel-images/carousel-3.jpg';
import image4 from '../images/carousel-images/carousel-4.jpg';
import image5 from '../images/carousel-images/carousel-5.jpg';
import image6 from '../images/carousel-images/carousel-6.jpg';
import image7 from '../images/carousel-images/carousel-7.jpg';
import image8 from '../images/carousel-images/carousel-8.jpg';
import image9 from '../images/carousel-images/carousel-9.jpg';

export default class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //imageNumber: 1,
      dotClasses: ['dot', 'dot translucent', 'dot translucent'],
      imagesInfo: [
        {
          number: 1,
          image: image1,
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla mi, suscipit sed leo sit amet, facilisis fringilla nulla.'
        },
        {
          number: 2,
          image: image2,
          caption: 'Sed ultrices nec elit quis egestas. Donec mauris nisi, convallis vitae enim vel, auctor convallis risus. In lorem libero, gravida.'
        },
        {
          number: 3,
          image: image3,
          caption: 'Aenean tempus accumsan sem, ac varius nulla laoreet ac. Pellentesque luctus ante in mauris sodales, facilisis tempor ex.'
        },
        {
          number: 4,
          image: image4,
          caption: 'Cursus euismod quis viverra nibh cras. Lobortis elementum nibh tellus molestie nunc non.'
        },
        {
          number: 5,
          image: image5,
          caption: 'Nec nam aliquam sem et tortor consequat id porta. Sit amet luctus venenatis lectus. Consectetur purus ut faucibus pulvinar.'
        },
        {
          number: 6,
          image: image6,
          caption: 'Non sodales neque sodales ut. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor.'
        },
        {
          number: 7,
          image: image7,
          caption: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          number: 8,
          image: image8,
          caption: 'Sapien faucibus et molestie ac feugiat sed lectus. Metus vulputate eu scelerisque felis imperdiet proin.'
        },
        {
          number: 9,
          image: image9,
          caption: 'Morbi tristique senectus et netus et malesuada. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.'
        }
      ],
      imageNumArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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

  switchImage(direction) {

    if (direction === 'right') {
      this.state.imageNumArr.push(this.state.imageNumArr.shift());
      //this.state.dotClasses.unshift(this.state.dotClasses.pop());
      this.state.imagesArr.push(this.state.imagesArr.shift());
      this.state.captionsArr.push(this.state.captionsArr.shift());
    } else if (direction === 'left') {
      this.state.imageNumArr.unshift(this.state.imageNumArr.pop());
      //this.state.dotClasses.push(this.state.dotClasses.shift());
      this.state.imagesArr.unshift(this.state.imagesArr.pop());
      this.state.captionsArr.unshift(this.state.captionsArr.pop());
    }

    this.setState({
      imagesArr: this.state.imagesArr,
      imageNumArr: this.state.imageNumArr,
      //imageNumber: this.state.imageNumArr[0],
      //dotClasses: this.state.dotClasses,
      fadeIn: this.state.fadeIn
    })
  }

  getDots() {
    const dotsArr = [];
    for (let i = 1; i <= 9; i++) {
      dotsArr.push(
        <span key={i} className={`dot ${i === this.state.imageNumArr[0] ? '' : 'translucent'}`}></span>
      )
    }

    return dotsArr;
  }

  renderImage = () => {
    const arr = [];
    for (let i = 0; i < this.state.imagesArr.length; i++) {
      if (this.state.imagesArr.indexOf(this.state.imagesArr[i]) === this.state.imageNumArr[0]) {
        arr.push(
          <div key={i} className='slide-img-container'>
            <figure className='slide fade-in'>
              <img className='slide-img' alt={`${this.state.captionsArr[0]}`} src={this.state.imagesArr[0]} />
              <figcaption className='caption font-size-small font-weight-thin text-white'>
                {this.state.captionsArr[0]}
              </figcaption>
            </figure>
            <div className='gallery-btns'>
              <button className='left-button carousel-button fade-in'
                onClick={() => this.switchImage('left')}>◀</button>
              <button className='right-button carousel-button fade-in'
                onClick={() => this.switchImage('right')}>▶</button>
            </div>
          </div>
        )
      }
    }
    return arr;
  }

  render() {
    return (
      <div className='gallery-container'>
        {this.renderImage()}
        <div className='dots fade-in'>
          {this.getDots()}
        </div>
      </div>
    )
  }
}
