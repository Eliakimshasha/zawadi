import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';
import { GiAlarmClock } from 'react-icons/gi';
import { GoArrowRight } from 'react-icons/go';

function Footer() {
  return (
    <div className="bg-green-300 text-green-800">
      <div className="pt-5 px-4">
        <div className="lg:flex">
          <h1 className="text-lg font-semibold mb-2">
            Subscribe to
            <span className="text-yellow-600"> Our Newsletter</span>
          </h1>
          <p>
            Receive company emails to take advantages of products, promotions,
            trends discounts, and more.
          </p>
          <div className="my-3">
            <form action="" className="flex pr-4">
              <input
                type="email"
                name=""
                id=""
                placeholder="E-mail address"
                className="w-full px-2 py-2 outline-none border-none text-black"
              />
              <button className="px-5 bg-yellow-500">
                <GoArrowRight color="white" size={17} />
              </button>
            </form>
          </div>
        </div>
        {/* <img src={sub2} alt="" /> */}
        <div className="">
          <p className="pb-1 mb-3" style={{ borderBottom: '1px dotted white' }}>
            Zawadi Agri-food is a premium food company that is committed to
            offering value to food chains around the world, from logistics to
            being an intermediary representative of other food companies around
            the world. We are currently based in Tanzania
          </p>
          <p
            className=" pb-3 mb-1"
            style={{ borderBottom: '1px dotted green' }}
          >
            Kenya Branch | Zawadi Agri-food Industries Ltd. Unifilters Godown No
            5 | North Airport Road, Nairobi
          </p>
          <p>
            Zawadi Agri-food UK | Northgate House, Northgate, Sleaford,
            Lincolnshire, England, NG34 7BZ
          </p>
        </div>
        <div className="">
          <h1>Our Products</h1>
        </div>
        <div className="">
          <div
            className="flex justify-between items-center py-4  px-2 text-lg"
            style={{
              borderBottom: '1px dotted white',
            }}
          >
            <h1>
              Opening
              <span className="text-yellow-600 font-semibold">Hours</span>
            </h1>
            <GiAlarmClock color="#D97706" size={25} />
          </div>
          <div
            className="flex justify-between items-center py-4  px-2"
            style={{ borderBottom: '1px dotted green' }}
          >
            <p>Monday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-4  px-2"
            style={{ borderBottom: '1px dotted green' }}
          >
            <p>Tuesday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-4  px-2"
            style={{ borderBottom: '1px dotted green' }}
          >
            <p>Wednesday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-4  px-2"
            style={{ borderBottom: '1px dotted green' }}
          >
            <p>Thursday</p>
            <p>08:00-17:00</p>
          </div>
          <div
            className="flex justify-between items-center py-4  px-2"
            style={{ borderBottom: '1px dotted green' }}
          >
            <p>Saturday</p>
            <p>08:00-12:00</p>
          </div>
          <div className="flex justify-between items-center py-4  px-2">
            <p>Sunday</p>
            <p>We are closed</p>
          </div>
        </div>
      </div>

      <div className="bg-green-300 w-full py-3">
        <div className="flex justify-center text-yellow-950 gap-2 items-center my-3 ">
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted green' }}
          >
            <FaInstagram />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted green' }}
          >
            <FaXTwitter />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted green' }}
          >
            <SlSocialFacebook />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ border: '1px dotted green' }}
          >
            <SlSocialLinkedin />
          </div>
        </div>
        <p className="text-center text-yellow-950">
          Copyright (c) 2024 Zawadi Agri-food Industries Ltd.
        </p>
        <p className="text-center text-yellow-950">
          Email: info@ZawadiAgrifood.co.tz
        </p>
        <p className="text-center text-yellow-950">Tel: +255 683 401 481</p>
      </div>
    </div>
  );
}

export default Footer;
