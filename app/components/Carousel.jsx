'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image2 from '@/assets/images/cocoa.webp';
import image3 from '@/assets/images/coc.png';
import image4 from '@/assets/images/dragon1.png';
import image5 from '@/assets/images/bean.png';
import image from '@/assets/images/banner.webp';
import Image from 'next/image';
import styles from './Carousel.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { GiTreeBranch } from 'react-icons/gi';
import { FaSquareFull } from 'react-icons/fa';

import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';

function CarouselPlugin() {
  useEffect(() => {
    AOS.init();
  }, []);
  const datas = [
    {
      id: 'image1',
      bg: '#7c2d12',
      image: image5,
      title: 'Cocoa Bean',
      desc: ' Leader in Supply Raw Cashew Nuts, Cashew Kernels, Coconut, Cocoa Beans and Gum Arabic',
      path: '#start',
    },
    {
      id: 'image2',
      bg: '#2563eb',

      image: image,
      title: 'Cashew Nuts',
      desc: ' Leader in Supply Raw Cashew Nuts, Cashew Kernels, Coconut, Cocoa Beans and Gum Arabic',
      path: '#start',
    },
    {
      id: 'image3',
      bg: '#134e4a',
      image: image3,
      title: 'Coconut',
      desc: ' Leader in Supply Raw Cashew Nuts, Cashew Kernels, Coconut, Cocoa Beans and Gum Arabic',
      path: '#start',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="">
      <Slider {...settings}>
        {datas.map((data) => {
          return (
            <div className="carousel-item" key={data.id}>
              <div
                style={{ backgroundColor: data.bg }}
                className="h-[100vh] flex justify-center items-center"
              >
                <div className="flex lg:flex-row lg:justify-between px-9 relative lg:px-16 w-full h-[70vh] lg:h-[60%] lg:gap-2 items-center flex-col">
                  <div className="lg:w-[50%] ">
                    <div className="flex items-end">
                      <h1 className="font-bold text-4xl lg:text-7xl text-white font-title">
                        {data.title}
                      </h1>
                      {/* <span className="pb-[1.5px]">
                        <FaSquareFull color="white" size={12} />
                      </span> */}
                    </div>
                    <p className="text-white py-3 lg:py-6 lg:text-xl ">
                      {data.desc}
                    </p>
                    <div
                      className="lg:px-14 py-1 px-9 lg:py-3 rounded-2xl lg:rounded-full w-fit lg:relative absolute bottom-24 lg:bottom-0"
                      style={{ border: '2px solid white' }}
                    >
                      <p className="text-white font-semibold">
                        Get Latest Cashew nut Price
                      </p>
                    </div>
                  </div>
                  <div className="h-[50%]  lg:h-[100%] lg:w-[50%]  overflow-hidden flex justify-between w-full lg:justify-center">
                    <Image
                      src={data.image}
                      alt="Image for carousel"
                      className="h-full w-auto"
                    />
                    <div className="pl-5 flex flex-col items-center absolute right-6 top-4 lg:hidden">
                      <div className="w-[150px] h-[1px] bg-white"></div>
                    </div>
                    <div className="pl-5 flex flex-col items-center absolute right-6 top-3  h-full lg:hidden">
                      <div className="w-[8px] rounded-full h-[8px] bg-white"></div>
                      <div className="w-[1px] h-[105px] bg-white"></div>
                      <div className="w-[8px] rounded-full h-[8px] bg-white"></div>
                      <div className="w-[1px] h-[105px] bg-white"></div>
                      <div className="w-[8px] rounded-full h-[8px] bg-white"></div>
                      <div className="w-[1px] h-[105px] bg-white"></div>
                      <div className="w-[8px] rounded-full h-[8px] bg-white"></div>
                      <div className="w-[1px] h-[105px] bg-white"></div>{' '}
                      <div className="w-[8px] rounded-full h-[8px] bg-white"></div>
                    </div>
                  </div>

                  <div className="pl-5 lg:flex flex-col items-center  h-full hidden">
                    <div className="w-[12px] rounded-full h-[12px] bg-white"></div>
                    <div className="w-[1px] h-[100px] bg-white"></div>
                    <div className="w-[12px] rounded-full h-[12px] bg-white"></div>
                    <div className="w-[1px] h-[100px] bg-white"></div>
                    <div className="w-[12px] rounded-full h-[12px] bg-white"></div>
                    <div className="w-[1px] h-[100px] bg-white"></div>
                    <div className="w-[12px] rounded-full h-[12px] bg-white"></div>
                    <div className="w-[1px] h-[100px] bg-white"></div>
                    <div className="w-[12px] rounded-full h-[12px] bg-white"></div>
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

export default CarouselPlugin;
