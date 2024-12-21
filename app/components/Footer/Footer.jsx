'use client'
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';
import { GiAlarmClock } from 'react-icons/gi';
import { GoArrowRight } from 'react-icons/go';
import Logo from '@/assets/images/zawadi.png';
import Image from 'next/image';

function Footer() {
  return (
    <div className="bg-[#134e4a] text-white pt-3">
      <div className="flex items-start justify-between px-3">
        <div className="relative overflow-hidden">
          <Image src={Logo} alt="zawadi.image" />
        </div>
        {/* <div className="w-[60%] text-teal-800 bg-white px-4 py-1 rounded-sm">
          <p>Address. P.O.Box 104342</p>
          <p>Samora Street, Plot 763</p>
          <p>Block 32 Dar es salaam</p>
          <p>Holland House- First floor</p>
        </div> */}
      </div>
      <div className="pt-5 px-4">
        <div className="lg:flex">
          <div className="flex items-center justify-between">
            <p>**********</p>
            <h1 className="text-lg font-semibold mb-2 font-title text-center">
              Subscribe to Our Newsletter
            </h1>
            <p>**********</p>
          </div>
          <p className="text-center">
            Receive company emails to take advantages of products, promotions,
            trends discounts, and more.
          </p>
          <div className="my-3 mx-auto flex justify-center items-center">
            <form action="" className="flex w-full">
              <div className='flex flex-col w-full'>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="E-mail address"
                  className="w-full px-2 py-1 rounded-sm outline-none border-none text-black"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Full Name (Optional)"
                  className="w-full my-2 px-2 py-1 rounded-sm outline-none border-none text-black"
                />
                <button className="bg-yellow-500 rounded-sm text-center py-1 cursor-pointer" onClick={(e)=>e.preventDefault()}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="">
          <div
            className="flex justify-between items-center py-4  px-2 text-lg font-bold font-title"
            style={{
              borderBottom: '1px dotted white',
            }}
          >
            <h1>
              Opening
              <span className="text-yellow-500 font-semibold">Hours</span>
            </h1>
            <GiAlarmClock className="text-yellow-500" size={25} />
          </div>
          <div
            className="flex justify-between items-center py-2  px-2"
            style={{ borderBottom: '1px dotted white' }}
          >
            <p>Monday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-2  px-2"
            style={{ borderBottom: '1px dotted white' }}
          >
            <p>Tuesday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-2  px-2"
            style={{ borderBottom: '1px dotted white' }}
          >
            <p>Wednesday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-2  px-2"
            style={{ borderBottom: '1px dotted white' }}
          >
            <p>Thursday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-2  px-2"
            style={{ borderBottom: '1px dotted white' }}
          >
            <p>Saturday</p>
            <p>08:00-12:00</p>
          </div>
          <div className="flex justify-between items-center py-2  px-2">
            <p>Sunday</p>
            <p>We are closed</p>
          </div>
        </div>
      </div>

      <div className="bg-teal-900 w-full py-3">
        <div className="flex justify-center text-white gap-2 items-center my-3 ">
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted white' }}
          >
            <FaInstagram />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted white' }}
          >
            <FaXTwitter />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted white' }}
          >
            <SlSocialFacebook />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted white' }}
          >
            <SlSocialLinkedin />
          </div>
        </div>
        <p className="text-center text-white">
          Copyright (c) 2024 Zawadi Agri-food Industries Ltd.
        </p>
        <p className="text-center text-white">
          Email: ZawadiAgrifood@gmail.com
        </p>
        <p className="text-center text-white">Tel: +255 710 076 960</p>
      </div>
    </div>
  );
}

export default Footer;
