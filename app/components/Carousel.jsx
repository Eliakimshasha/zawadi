'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image2 from '@/assets/images/sesameseeds.jpg';
import image3 from '@/assets/images/spices.jpg';
import image from '@/assets/images/img11.jpg';
import Image from 'next/image';
import styles from './Carousel.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { GiTreeBranch } from "react-icons/gi";

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
      image: image2,
      title: 'leading merchant exporter',
      desc: 'we supply high quality agro-products in large volume to our customers supply high quality agro-products',
      path: '#start',
    },
    {
      image: image,
      title: 'leading merchant exporter',
      desc: 'we supply high quality agro-products in large volume to our customers supply high quality agro-products2',
      path: '#start',
    },
    {
      image: image3,
      title: 'leading merchant exporter',
      desc: 'we supply high quality agro-products in large volume to our customers supply high quality agro-products3',
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
    <div className='w-[98vw]'>
      <Slider {...settings}>
        {datas.map((data, index) => {
          return (
            <div
              className="carousel-item lg:h-[98vh] max-w-full h-[93vh] relative overflow-hidden "
              key={index}
            >
              <div className="w-[100%]">
                <Image
                  src={data.image}
                  alt="Image for carousel"
                  layout="fill"
                  objectFit="cover"
                  className="h-auto w-full"
                />
              </div>

              <div id={styles.home} style={{ zIndex: '1000' }}>
                  <GiTreeBranch className=" text-green-600 opacity-65 absolute -z-10 left-[43%] -top-10" size={100}/>
                <TypeAnimation
                  sequence={[`${data.title}`, 1000]}
                  wrapper="h2"
                  speed={25}
                  cursor={false}
                  repeat={Infinity}
                  style={{ textShadow: '1px 1px 1px black' }}
                  className="tangerine-regular text-center  ml-3 font-semibold text-2xl lg:text-7xl capitalize text-white"
                />
                <p className="tangerine-bold mx-4 text-center  text-2xl text-white lg:text-2xl">
                  {data.desc}
                </p>
                <Link href={data.path}>
                  <div className=" pl-4 justify-center items-center w-full flex">
                    <button className="bg-green-50 mt-5 font-semibold  text-green-900 py-1 px-8 lg:text-xl lg:px-20 lg:py-2">
                      Get Started
                    </button>
                  </div>
                </Link>
                <div className="flex items-center justify-center gap-2 w-full mt-5 py-2 lg:hidden">
                  <FaXTwitter
                    className="text-green-200"
                    size={20}
                    style={{ textShadow: '1px 1px 1px black' }}
                  />
                  <SlSocialFacebook
                    className="text-green-200"
                    size={20}
                    style={{ textShadow: '1px 1px 1px black' }}
                  />
                  <FaInstagram
                    className="text-green-200"
                    size={20}
                    style={{ textShadow: '1px 1px 1px black' }}
                  />
                  <SlSocialLinkedin
                    className="text-green-200"
                    size={20}
                    style={{ textShadow: '1px 1px 1px black' }}
                  />
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
