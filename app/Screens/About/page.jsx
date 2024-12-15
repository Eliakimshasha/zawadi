'use client'
import React from 'react';
import styles from './about.module.css';
import { FaEarthAfrica } from 'react-icons/fa6';
import Card from '../../components/About/Card';
import Footer from '@/app/components/Footer/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { WorldMap } from '@/components/ui/world-map';
import { AnimatedProducts } from '@/components/ui/products';
import Page from '@/app/components/Counting/page';

function page() {
  return (
    <div>
      <div
        className="h-[60vh] flex justify-center items-center py-10 flex-col"
        id={styles.bg}
      >
        <p className="font-bold text-white font-title text-lg uppercase">
          About Zawadi-Agrifood
        </p>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          recusandae corrupti illo hic est repellat saepe ducimus animi
          reprehenderit sequi.
        </p>
      </div>
      <div className="">
        <div className='p-4'>
          <div className="flex justify-between items-center py-3">
            <h1 className="font-bold text-lg font-title">Zawadi-Agrifood Industry LTD</h1>
            <p className="p-2 rounded-full bg-green-100">
              <FaEarthAfrica className="text-green-500" />
            </p>
          </div>
          <p>
           
            We are a dynamic enterprise bridging the gap between Tanzanian
              farmers and global markets. We work with international buyers by
              offering them high-quality, authentic Tanzanian products.
          </p>
        </div>
        <div className='p-4'>
          <div className="w-full py-3">
            <embed
              type="image/svg+xml"
              title="YouTube video player"
              src="https://www.youtube.com/embed/YVTJMu8bJ8g?si=zhKcTtEu7DYW4_KT"
              allowFullScreen
              className="w-full"
            />
          </div>
        </div>
        <div className='p-4'>
        <div className="h-fit w-full pb-4 px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
            <h1
              className="text-lg font-bold font-title mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Our Vission
            </h1>
            <p>
              Our vission is to be leading force in unlocking Tanzania's
              agricultural bountry, nouring the world through sustainable
              practices while empowering farmers and our land
            </p>
          </div>
          <div className="h-fit w-full px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
            <h1
              className="text-lg font-bold font-title mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Our Mission
            </h1>
            <p>
              Our mission is to bridge the gap between passionate Tanzanian
              farmers and discerning global consumers, ensuring fair
              compensation, promoting sustainable practices, and utilizing
              technology to streamline processes.
            </p>
            <div
              className="flex items-center m-auto w-fit mt-5 px-8 rounded-md"
              style={{ border: '1px solid #134e4a' }}
              onClick={() => router.push('About')}
            >
              <p className="text-teal-800 font-title">Exprole More</p>
              <p className="text-teal-800 font-title">
                <MdOutlineKeyboardDoubleArrowRight size={21} />
              </p>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <h1 className="text-lg font-semibold font-title mt-2">Success Stories</h1>
          <p className="my-3">
            <span className="font-semibold">
              Boosting Agricultural Productivity:
            </span>
            Zawadi-Agrifood worked with local farmers to implement sustainable
            farming practices. Through our in-depth research and tailored
            support, we helped increase crop yields by 30% over two seasons,
            ensuring greater food security in the region.
          </p>
          <p>
            <span className="font-semibold">International Expansion:</span> Our
            team assisted [Client Name], a leading producer of organic
            vegetables, in navigating the complex exportation process. By
            providing market research, legal support, and logistical solutions,
            we helped them expand their reach to Europe and North America,
            increasing their international revenue by 40% in just one year.
          </p>
        </div>
        <div className="relative bg-white p-4">
          <h1 className="absolute z-10 text-xl font-title font-bold text-gray-400 top-[48%] w-full text-center">
            across the world
          </h1>
          <WorldMap />
        </div>
        <div className='p-4'>
          <h1 className="text-lg font-bold font-title">Our Products</h1>
          <p>
            We specialize in trading of a variety of agro-food and cash crops,
            contributing to the global food supply chain. Some of the key crops
            we work with include cashew nuts, cocoa beans, sunflower seeds,
            rice, maize (corn), wheat, groundnuts (peanuts), cotton, soybeans,
            and various spices such as black pepper and turmeric.
          </p>
        </div>
        <div className='p-4'>
          <AnimatedProducts />
        </div>
        <div className='p-4'>
          <Card />
        </div>
        <div>
          <Page />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
