'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import { reviews } from '../json/about';

function Card() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4500,
    autoplaySpeed: 2000,
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
    <div className="p-2 bg-gray-50 pb-5 my-3">
      <p className="font-bold  mb-3">Client Reviews</p>
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <div className="bg-green-100 mx-1  rounded-sm  px-4 py-5  min-h-[200px]">
                <p className="flex items-start gap-2">
                  <span>
                    <FaQuoteLeft className="text-green-500" />
                  </span>
                  {review.paragraph}
                </p>
                <div></div>
                <div className="ml-6">
                  <p className="text-green-500">{review.name}</p>
                  <p className="bg-green-200 w-fit px-3">{review.country}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Card;
