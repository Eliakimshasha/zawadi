'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
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
      name: 'Profile',
      path: '/Screens/Profile',
    },
    {
      id: 5,
      name: 'Gallery',
      path: '/Screens/Gallery',
    },
    {
      id: 6,
      name: 'Blogs',
      path: '/Screens/Blogs',
    },
    {
      id: 7,
      name: 'Contact',
      path: '/Screens/Contact',
    },
  ];
  return (
    <div className="relative w-[100vw]">
      <div className="fixed top-0 left-0 w-[100%] z-50">
        <div
          id={styles.head}
          className="bg-white items-center flex flex-col lg:flex-row lg:justify-around lg:px-28  lg:py-1"
        >
          <div
            id={styles.contact}
            className="bg-black text-white w-full px-4 py-3 flex lg:bg-transparent lg:text-black justify-around"
          >
            <p className=" ">phone: +255 695 366 753</p>
            <p className=" ">whatsapp: +255 695 366 753</p>
          </div>
          <div className="lg:py-0 py-4 w-full flex justify-between lg:justify-end px-3  items-center bg-green-200">
            <p className="font-semibold ">
              ZAWADI<span className="text-green-600">.AGRIFOOD</span>
            </p>
            {!showMenu ? (
              <>
                <div
                  className="bg-green-600 flex items-center lg:hidden  px-4 gap-2 justify-between"
                  onClick={() => setShowMenu(true)}
                >
                  <p className="text-white">MENU</p>
                  <FaBars color="white" />
                </div>
              </>
            ) : (
              <>
                <div
                  className="bg-green-600 flex items-center lg:hidden  px-4 gap-2 justify-between"
                  onClick={() => setShowMenu(false)}
                >
                  <p className="text-white">MENU</p>
                  <IoIosClose color="white" size={30} />
                </div>
              </>
            )}
          </div>
        </div>
        <div
          id={`${styles.header}`}
          style={{ top: showMenu ? '100px' : '-820px', transition: '.7s' }}
          onClick={handleShowMenu}
        >
          <div
            id={styles.layout}
            className="bg-green-300 text-green-800 lg:flex lg:justify-around lg:px-10 lg:py-3"
          >
            {pathLinks.map((path) => (
              <div
                key={path.id}
                className={`${
                  pathname === path.path ? styles.active : styles.link
                } rounded-sm`}
              >
                <Link href={path.path}>{path.name}</Link>
                {/* <p
                  className={`${pathname === path.path && styles.active} rounded-sm`}
                  onClick={() => router.push(path.path)}
                >
                  {path.name}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
