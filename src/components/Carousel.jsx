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

const CarouselButton = ({ direction, switchImage, text }) => {
  return <button className={`${direction ? 'right' : 'left'}-button carousel-button fade-in`} onClick={() => switchImage(direction)}>
    {text}
  </button>
}

const Image = ({ number, caption, image, switchImage }) => {
  return (
    <div key={number} className='slide-img-container'>
      <figure className='slide fade-in'>
        <img className='slide-img' alt={`${caption}`} src={image} />
        <figcaption className='caption font-size-small font-weight-thin text-white'>
          {caption}
        </figcaption>
      </figure>
      <div className='gallery-btns'>
        <CarouselButton direction={false} switchImage={switchImage} text='◀' />
        <CarouselButton direction={true} switchImage={switchImage} text='▶' />
      </div>
    </div>
  )
}

const Dot = ({ index, number }) => {
  return <span key={index} className={`dot ${index !== number  && 'translucent'}`}></span>
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    }
    this.switchImage = this.switchImage.bind(this);
    this.renderDots = this.renderDots.bind(this);
  }

  switchImage(direction) {
    const { imagesInfo } = this.state;

    if (direction) {
      imagesInfo.push(imagesInfo.shift());
    } else {
      imagesInfo.unshift(imagesInfo.pop());
    }
    this.setState({
      imagesInfo: imagesInfo
    })
  }

  renderDots() {
    const dotsArr = [];
    for (let i = 1; i <= 9; i++) {
      dotsArr.push(
        <Dot key={i} index={i} number={this.state.imagesInfo[0].number} />
      )
    }

    return dotsArr;
  }

  render() {
    const { caption, image, number } = this.state.imagesInfo[0];
    return (
      <div className='gallery-container'>
        <Image caption={caption} image={image} number={number} switchImage={this.switchImage} />
        <div className='dots fade-in'>
          {this.renderDots()}
        </div>
      </div>
    )
  }
}
