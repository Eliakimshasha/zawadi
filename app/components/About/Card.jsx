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
              <div className="bg-white shadow-md mx-1  rounded-sm  px-4 py-5  min-h-[250px]">
                <div className="flex items-center text-yellow-400 py-3 pb-6">
                  <p>{review.star}</p>
                  <p>{review.star}</p>
                  <p>{review.star}</p>
                  <p>{review.star}</p>
                  <p>{review.star}</p>
                </div>
                <p className="flex items-start gap-2">
                  <span>
                    <FaQuoteLeft className="text-teal-900" />
                  </span>
                  {review.paragraph}
                </p>
                <div></div>
                <div className="flex justify-between items-center mt-3">
                  <div className='ml-4'>
                    <p className="text-teal-900">{review.name}</p>
                    <p className="bg-teal-900 text-white w-fit px-3">{review.country}</p>
                  </div>
                  <div>
                    <p>{review.icon}</p>
                  </div>
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
