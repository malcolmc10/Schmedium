import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from 'react';
import Slider from "react-slick";

import React, { Component } from 'react'





export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
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
      return (
        <Slider {...settings}>
          <div className="" >
            <img src='https://media.harrypotterfanzone.com/philosophers-stone-teaser-poster.jpg' alt='HP1' className="h-64"></img>
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/chamber-of-secrets-theatrical-poster.jpg' alt='HP1' className="h-64"/>
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/prisoner-of-azkaban-theatrical-poster.jpg' alt='HP1' className="h-64"/>
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/goblet-of-fire-theatrical-poster-2.jpg' alt='HP1' className="h-64"/>
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/order-of-the-phoenix-theatrical-poster-2.jpg' alt='HP1' className="h-64"/>
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/half-blood-prince-theatrical-poster.jpg' alt='HP1' className="h-64"/>
          </div>
          <div>
            <img src='https://media.harrypotterfanzone.com/deathly-hallows-part-1-theatrical-poster.jpg' alt='HP!' className="h-64"/> 
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/deathly-hallows-part-2-it-all-ends-poster.jpg' alt='HP!' className="h-64"/> 
          </div>
          <div>
          <img src='https://media.harrypotterfanzone.com/fantastic-beasts-newt-poster.jpg' alt='HP!' className="h-64"/> 
          </div>
        </Slider>
      );
    }
  }

//   used the react slider library to make the carousel possible. As suggested by Scott and Christian who have used it in the past.
