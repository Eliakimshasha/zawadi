'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import logo2 from '@/assets/images/Zawadi2.png';
import { CiLocationOn } from 'react-icons/ci';
import { SiWhatsapp } from 'react-icons/si';

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
  const handleShowMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 300);
  };

  const pathLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/Screens/Home',
    },
    {
      id: 2,
      name: 'About',
      path: '/Screens/About',
    },
    {
      id: 3,
      name: 'Services',
      path: '/Screens/Services',
    },
    
    {
      id: 4,
      name: 'Products',
      path: '/Screens/Products',
    },
    {
      id: 5,
      name: 'Blogs',
      path: '/Screens/Blogs',
    },
    {
      id: 6,
      name: 'Contact',
      path: '/Screens/Contact',
    },
  ];

  // useEffect to listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Trigger after scrolling 100px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-[100vw]">
      <div
        className={`fixed top-0 lg:pt-5 left-0 w-[100%] z-50 ${
          isScrolled ? 'bg-white lg:py-2 shadow-md' : 'shadow-none'
        }`}
        id={styles.h}
      >
        <div
          id={styles.head}
          className="items-center flex flex-row justify-between lg:hidden md:hidden"
          style={{ backgroundColor: showMenu ? 'white' : 'transparent' }}
        >
          <div className="flex items-center relative overflow-hidden h-[50px] w-[150px]">
            <Image
              src={isScrolled ? logo : logo2}
              alt="logo"
              className="w-[130px]"
              style={{ height: isScrolled ? '120px' : '55px' }}
            />
          </div>
          <div className="lg:py-0 py-4 flex justify-between lg:justify-end px-3 items-center">
            {!showMenu ? (
              <div
                className="flex items-center lg:hidden px-4 gap-2 py-1 justify-between rounded-sm"
                onClick={() => setShowMenu(true)}
                style={{
                  border: isScrolled
                    ? 'none'
                    : !showMenu && '1px solid white',
                    backgroundColor: isScrolled? "#134e4a":""
                }}
              >
                <p
                  className={`${
                    'text-white'
                  } font-title`}
                >
                  MENU
                </p>
                <FaBars
                  className='text-white'
                />
              </div>
            ) : (
              <div
                className="flex items-center lg:hidden px-4 gap-2 justify-between rounded-sm"
                onClick={() => setShowMenu(false)}
                style={{ border: showMenu && '1px solid #134e4a' }}
              >
                <p className="text-teal-900 font-title">MENU</p>
                <IoIosClose color="#134e4a" size={30} />
              </div>
            )}
          </div>
        </div>

        <div
          id={`${styles.header}`}
          style={{ top: showMenu ? '60px' : '-820px', transition: '.7s' }}
          onClick={handleShowMenu}
          className="flex lg:items-center lg:gap-9 lg:px-7 "
        >
          <div className="w-[200px] h-[5vh] lg:flex justify-center items-center hidden">
            <Image
              src={isScrolled ? logo : logo2}
              alt="logo"
              style={{ height: isScrolled ? '150px' : '55px' }}

            />
          </div>
          <div
            id={styles.layout}
            className="text-teal-900 lg:text-white bg-white lg:bg-transparent h-[53vh] lg:h-auto flex flex-col justify-center items-center flex-1 lg:justify-end lg:flex-row lg:gap-5 lg:px-10 lg:py-3"
          >
            {pathLinks.map((path) => (
              <div
                key={path.id}
                className={`${
                  pathname === path.path ? styles.active : styles.link
                } rounded-sm font-title`}
              >
                <Link href={path.path}>{path.name}</Link>
              </div>
            ))}
          </div>
          <div className="lg:flex lg:items-center lg:gap-2 hidden">
            <p className="p-3 rounded-full flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: isScrolled? '#134e4a': 'white'}}
            
            >
              <CiLocationOn className="font-bold"
              style={{ color: isScrolled? 'white': '#134e4a'}}
              
              />
            </p>
            <div
              className="flex items-center gap-2 px-5 py-2 rounded-full"
              style={{ border: isScrolled? '2px solid #134e4a': '2px solid white'}}
            >
              <SiWhatsapp style={{
                color: isScrolled? '#134e4a' : 'white'
              }} />
              <p style={{
                color: isScrolled? '#134e4a' : 'white'
              }}>Whatsapp now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
