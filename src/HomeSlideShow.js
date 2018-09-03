
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

const imgUrl = '../files/slideshow/';

class HomeSlideShow extends Component {
	render() {
 
    const images = [
      {
        original: imgUrl+'unicorn_1.jpg',
        originalAlt: 'licorne_1'
      },
      {
        original: imgUrl+'unicorn_2.jpg',
        originalAlt: 'licorne_2'
      },
      {
        original: imgUrl+'unicorn_3.jpg',
        originalAlt: 'licorne_3'
      }
    ]
 
    return (
      <ImageGallery className="slideshow"
                    autoPlay={true}
                    items= {images}
                    showNav= {false}
                    showFullscreenButton= {false}
                    showPlayButton= {false}
                    showThumbnails= {false}
      				      slideDuration= {700}
                    style={{height: "25px"}} />
    );
  }
}

export default HomeSlideShow;