import React, {Component} from 'react'
import Slider from 'react-slick'


class SimpleSlider extends Component {
  render(){
    var settings = {
      dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
	
      return(
        <Slider {...settings}>
            {this.props.children}
      </Slider>
      );
  }
}

export default SimpleSlider