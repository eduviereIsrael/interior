import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Testimonials.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/comments')
            .then(res => {
                // console.log(res)
                setPosts(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    },[])

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
        centerMode: false,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        dots: true,
        slidesPerRow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
  return (
    <div className='testimonials'>
        <div className='section'>
            <div className='comments-div'>
                {/* {posts.map((post) => (
                    <div className='comments-card' key={post.id}>
                    <h6>{post.author}</h6>
                    <p>"{post.comment}"</p>
                </div>
                ))} */}
                <Slider className='.comments-slider' {...settings}>
                {posts.slice(0, 7).map((post) => (
                <div className='comment-container' key={post.id}>
                  <div className='comments-card' >
                  <h6>{post.author}</h6>
                  <p>"{post.comment}"</p>
                </div>
              </div>

                ))}
        </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials