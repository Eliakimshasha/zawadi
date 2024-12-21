'use client';
import React from 'react';
import styles from './page.module.css';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { products } from '@/app/components/json/products';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

function Page() {
  return (
    <div>
      <div
        className=" h-[50vh] relative  flex flex-col justify-center items-center px-2 gap-2"
        id={styles.bg}
      >
        <h1 className="text-center font-title text-white text-2xl font-semibold">
          Products & Services
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
      </div>
      <div className="p-4 bg-blue-50">
        <div className="pt-7">
          <p className="text-center text-red-500">OUR PRODUCTS</p>
          <h1 className="font-title text-center font-bold text-2xl">
            We Provide High Quality Products
          </h1>
        </div>
        <div className="my-4">
          {products.map((product) => {
            return (
              <div key={product.id} className="my-4 p-2 rounded-b-sm  shadow-md bg-white">
                <div className="w-[100%] h-[200px] rounded-lg relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt="product"
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-2">
                  <h1>{product.title}</h1>
                  <p className='line-clamp-6'>{product.desc}</p>
                </div>
                <div className="flex text-green-700  cursor-pointer items-center rounded-xl shadow-md w-fit px-4 py-1">
                  <p>Request for quote</p>
                  <p>
                    <MdOutlineKeyboardDoubleArrowRight size={20}/>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
