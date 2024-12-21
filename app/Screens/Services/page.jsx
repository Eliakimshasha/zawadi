import React from 'react';
import styles from './service.module.css';
import CarouselPlugin from './Carousel';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import ServiceCard from '../../components/Service/serviceCard';
import { cardArray } from '@/app/components/json/services';
import Accordition from '@/app/components/Service/Accordition';
import { accordition } from '@/app/components/json/accordition';
import Quote from '@/app/components/Footer/Quote';

export default function page() {
  return (
    <div>
      <div
        className="h-[50vh] flex flex-col justify-center items-center relative"
        id={styles.bg}
      >
        <div className="" id={styles.slider}>
          <CarouselPlugin />
          <div className="flex gap-2 text-white mt-5 items-center justify-center">
            <p
              className="rounded-full p-2"
              style={{ border: '1px dotted white' }}
            >
              <FaXTwitter />
            </p>
            <p
              className="rounded-full p-2"
              style={{ border: '1px dotted white' }}
            >
              <SlSocialFacebook />
            </p>
            <p
              className="rounded-full p-2"
              style={{ border: '1px dotted white' }}
            >
              <FaInstagram />
            </p>
            <p
              className="rounded-full p-2"
              style={{ border: '1px dotted white' }}
            >
              <SlSocialLinkedin />
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div>
          <h1 className="text-center font-bold text-lg mb-2">
            Welcome to Our Zawadi-AgriFood Services
          </h1>
          <p className="text-center text-gray-700 mb-3">
            At Zawadi-AgriFood, we specialize in providing high-quality
            solutions for agro-food crops. Our services are designed to help
            farmers and agribusinesses maximize their crop yield, improve
            sustainability, and enhance productivity
          </p>
        </div>
        {cardArray.map((card) => (
          <div className="py-4" key={card.id}>
            <ServiceCard
              image={card.image}
              title={card.heading}
              desc={card.desc}
            />
          </div>
        ))}
        <div>
          <div className="my-4">
            <h1 className="text-center font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-center font-bold">FAQ's</p>
          </div>
          {accordition.map((item) => (
            <div key={item.id}>
              <Accordition title={item.heading} desc={item.para} />
            </div>
          ))}
        </div>
      </div>
     <Quote/>

      <Footer />
    </div>
  );
}
