'use client';
import React from 'react';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { IoHomeOutline } from 'react-icons/io5';
import { GiAlarmClock } from 'react-icons/gi';
import { FaEnvelope } from 'react-icons/fa6';
import styles from './contact.module.css';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import Footer from '@/app/components/Footer/Footer';
import zoo from '@/assets/images/zoo.png';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import BG from '@/assets/images/contact-bg.jpg';
import Link from 'next/link';

function Contact() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <div
        className=" h-[94vh] relative  flex flex-col justify-center items-center px-2 gap-2"
        id={styles.bg}
      >
        <h1 className="text-center text-white text-2xl font-semibold">
          Make an Appointment
        </h1>
        <TypeAnimation
          sequence={[
            'Zawadi Agrifood Industries Ltd supply the highest quality of preparedFood Vegetables',
            1000,
          ]}
          wrapper="h2"
          speed={25}
          repeat={Infinity}
          className="text-center text-white"
        />

        <Link href="#start">
          <span className="text-center bg-white text-sm px-10  py-1 mt-4 text-gray-500">
            GET IN TOUCH
          </span>
        </Link>
        <p className="absolute w-full text-center bottom-5 text-white">
          Feel free to call +255 710 076960 questions over the phone, or get in
          touch via our contact form below.
        </p>
      </div>
      <div
        className="pl-2 flex gap-2 items-center bg-white py-2"
        style={{ borderBottom: '1px dotted grey' }}
        id="start"
      >
        <p>Zawadi Agrifood Industries LTD</p>
        <p className="text-teal-800">Contact Us</p>
      </div>
      <div className="p-4 flex flex-col-reverse gap-3 ">
        <div className="flex flex-col ">
          <div className="bg-teal-50 mt-2 p-3 flex flex-col items-center justify-center gap-3 mb-3">
            <h1>
              Have <span className="">a Question?</span>
            </h1>

            <div className="flex flex-col items-center justify-center">
              <p>Feel free to ask any questions over the phone.</p>
              <span className="flex gap-1 items-center">
                <MdOutlineLocalPhone />
                Phone: +254 721 666 008
              </span>
            </div>
            <span className="flex gap-1 items-center">
              <AiOutlineMail />
              Email: sales@zawadiagrifood.co.tz
            </span>
          </div>

          <div className="bg-teal-50 p-3 flex flex-col items-center justify-center gap-3 mb-3">
            <div className="flex flex-col items-center justify-center">
              <IoHomeOutline size={25} className="text-black" />
              <h1>DAR ES SALAAM Branch Contact Details</h1>
            </div>
            <p className="text-center">
              Address. P.O.Box 104342 Holland House- First floor Samora Street,
              Plot 763-Block 32 Dar es salaam
            </p>
          </div>
          <div className="p-3 flex flex-col items-center justify-center gap-3 mb-3 bg-teal-50">
            <div className="flex flex-col items-center justify-center">
              <GiAlarmClock size={28} className="text-black" />
              <h1>Working Hours</h1>
            </div>
            <p className="text-center">
              Monday - Friday: 08:00 - 17:00 Saturday & Sunday: CLOSED
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="fixed z-[1000] right-0 top-[50%] bg-teal-700 p-2 flex flex-col gap-3">
                <p className="text-white">
                  <SlSocialFacebook />
                </p>
                <p className="text-white">
                  <FaXTwitter />
                </p>
                <p className="text-white">
                  <FaInstagram />
                </p>
                <p className="text-white">
                  <BiLogoLinkedinSquare />
                </p>
              </div>
              <form
                action=""
                onSubmit={submit}
                className="flex flex-col gap-3 mt-5 relative"
              >
                <div
                  id="png"
                  className="h-36 overflow-hidden absolute bottom-2 -right-2"
                >
                  <Image
                    src={zoo}
                    alt="img"
                    id={styles.png}
                    className="h-[100%] w-auto"
                  />
                </div>

                <div
                  className="flex flex-col gap-3 bg-[rgba(0, 0, 0, 0.114)] p-3"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">
                      Send Us <span className="text-teal-800">A Message</span>
                    </h1>
                    <p className="bg-teal-50 rounded-full p-2">
                      <FaEnvelope className="text-teal-900" />
                    </p>
                  </div>
                  <input
                    type="text"
                    name=""
                    className="bg-teal-50 outline-none border-none py-2 px-2 rounded-sm"
                    id={styles.input}
                    placeholder="Your Full Name"
                  />
                  <input
                    type="text"
                    name=""
                    className="bg-teal-50 outline-none border-none py-2 px-2 rounded-sm"
                    id={styles.input}
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    name=""
                    id={styles.input}
                    className="bg-teal-50 outline-none border-none py-2 px-2 rounded-sm"
                    placeholder="Subject(Optional)"
                  />
                  <textarea
                    name=""
                    id={styles.input}
                    cols="30"
                    rows="10"
                    className="bg-teal-50 outline-none border-none py-2 px-2 rounded-sm"
                    placeholder="Message: Type something..."
                  />
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="bg-teal-700 py-2 my-2 text-white border-none outline-none"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015190.816201664!2d37.02475083176839!3d-10.650521555290522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18ed43d31eab6b87%3A0x168150fe6b38930b!2sBibo%20Cashews%20Farmers%20%26%20Processors!5e0!3m2!1sen!2stz!4v1718222219929!5m2!1sen!2stz"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
