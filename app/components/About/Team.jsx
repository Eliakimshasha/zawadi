import React from 'react';
import Image1 from '@/assets/images/kim.png';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';

const members = [
  {
    id: 111,
    image: '',
    title: 'Founder & Operation Manager',
    name: 'Ezekiel William Shasha',
  },
  {
    id: 112,
    image: '',
    title: 'Software Developer',
    name: 'Eliakim William Shasha',
  },
  {
    id: 113,
    image: '',
    title: 'Data Analyst',
    name: 'Kelvin Venance Massawe',
  }
];

function Team() {
  return (
    <div className="bg-blue-50 p-4">
      {members.map((member) => {
        return (
          <div
            key={member.id}
            className="flex my-4 gap-2 bg-white shadow-md py-5 px-2"
          >
            <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden">
              <Image src={Image1} alt="Our Team" className="h-fit w-auto" />
            </div>
            <div className='pl-3'>
              <div>
                <h1 className="font-bold text-lg font-title">
                  {member.title}
                </h1>
                <span className="text-sm text-teal-800">
                  {member.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-teal-800 p-1 mt-2 rounded-sm">
                  <FaXTwitter className="text-white text-sm" />
                </p>
                <p className="bg-teal-800 p-1 mt-2 rounded-sm">
                  <SlSocialFacebook className="text-white text-sm" />
                </p>
                <p className="bg-teal-800 p-1 mt-2 rounded-sm">
                  <FaInstagram className="text-white text-sm" />
                </p>
                <p className="bg-teal-800 p-1 mt-2 rounded-sm">
                  <SlSocialLinkedin className="text-white text-sm" />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
