'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoBookmarks } from 'react-icons/io5';

function ServiceCard({ image, title, desc }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <div className="overflow-hidden rounded-t-sm h-52 w-full flex items-center justify-center">
        <Image
          src={image}
          alt="image"
          className="h-auto w-full hover:h-[238px]"
        />
      </div>
      <div className="py-4 px-2">
        <div className='flex justify-between items-center'>
          <h1 className="font-bold">{title}</h1>
          <p className='bg-green-200 p-2 rounded-full'>
            <IoBookmarks  className='text-green-500'/>
          </p>
        </div>
        <p className={`${!readMore ? 'line-clamp-4' : 'line-clamp-none'}`}>
          {desc}
        </p>
        <div className="flex justify-between items-center">
          <p
            className="bg-green-200 px-5"
            onClick={() => setReadMore(!readMore)}
          >
            Read {readMore ? 'Less' : 'More'}
          </p>
          <div className="flex items-center gap-1 py-3">
            <FaXTwitter
              className="bg-green-200 p-1 hover:bg-green-200"
              size={22}
            />
            <SlSocialFacebook
              className="bg-green-200 p-1 hover:bg-green-200"
              size={22}
            />
            <FaInstagram
              className="bg-green-200 p-1 hover:bg-green-200"
              size={22}
            />
            <SlSocialLinkedin
              className="bg-green-200 p-1 hover:bg-green-200"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
