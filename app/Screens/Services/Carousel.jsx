'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Link from 'next/link';
import { GiTreeBranch } from 'react-icons/gi';
import { TypeAnimation } from 'react-type-animation';
import { services } from '@/app/components/json/services';

function CarouselPlugin() {
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          
        },
      },
    ],
  };

  return (
    <div className="z-10 w-[80vw] h-fit">
      <Slider {...settings}>
        {services.map((data, index) => {
          return (
            <div
              className=""
              key={index}
            >
              <div>
                <TypeAnimation
                  sequence={[`${data.heading}`, 1000]}
                  wrapper="h2"
                  speed={25}
                  cursor={false}
                  repeat={Infinity}
                  className="text-white text-center font-bold"
                />
                <p className='text-center text-white'>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselPlugin;
