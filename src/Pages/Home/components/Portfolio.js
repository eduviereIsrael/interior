import React, { Component } from "react";
import Slider from "react-slick";
import './portfolio.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



class Portfolio extends Component {
  render() {

    const img = [
      {
        url: 'assets/images/work1.png'
      },
      {
        url: 'assets/images/work2.png'
      },
      {
        url: 'assets/images/work3.png'
      },
      {
        url: 'assets/images/work3.png'
      },
      {
        url: 'assets/images/work3.png'
      },
      {
        url: 'assets/images/work3.png'
      },
      {
        url: 'assets/images/work3.png'
      },
    ]

    const NextArrow = ({onClick}) => {
      return (
        <div className='arrow next' onClick={onClick}>
          <FaArrowRight />
        </div>
      )
    }
  
    const PrevArrow = ({onClick}) => {
      return (
        <div className='arrow prev' onClick={onClick}>
          <FaArrowLeft />
        </div>
      )
    }

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      swipeToSlide: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
    };
    return (
      <div className="portfolio-slide section">
        <div className="inner-port-sect">
        <h2>OUR <br /> WORK</h2>
        <div className="portfolio-slider">
        <Slider {...settings}>
            {img.map((img, idx) => (
                  <div className = 'imagediv' key={idx}>
                    <img src={img.url} alt="portfolio" />
                  </div>

                ))}
        </Slider>
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio