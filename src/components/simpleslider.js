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
        cssEase: "linear"
      };
      return(
        <Slider {...settings}>
            {this.props.children}
      </Slider>
      );
  }
}

export default SimpleSlider