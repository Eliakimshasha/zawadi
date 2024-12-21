'use client';
import React from 'react';
import styles from './about.module.css';
import { FaEarthAfrica } from 'react-icons/fa6';
import Card from '../../components/About/Card';
import Footer from '@/app/components/Footer/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { WorldMap } from '@/components/ui/world-map';
import { AnimatedProducts } from '@/components/ui/products';
import Page from '@/app/components/Counting/page';
import { reviews } from '@/app/components/json/about';
import Team from '@/app/components/About/Team';
import Image1 from '@/assets/images/part1.png';
import Image2 from '@/assets/images/part2.png';
import Image3 from '@/assets/images/part3.png';
import Image from 'next/image';

function page() {
  return (
    <div>
      <div
        className="h-[60vh] flex relative justify-center items-center py-10 flex-col"
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
        <div className="p-4">
          <div className="flex justify-between items-center py-3">
            <h1 className="font-bold text-lg font-title">
              Zawadi-Agrifood Industry LTD
            </h1>
            <p className="p-2 rounded-full bg-teal-100">
              <FaEarthAfrica className="text-teal-900" />
            </p>
          </div>
          <p>
            We are a dynamic enterprise bridging the gap between Tanzanian
            farmers and global markets. We work with international buyers by
            offering them high-quality, authentic Tanzanian products.
          </p>
        </div>
        <div className="p-4">
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
        <div className="p-4">
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
          <div className="h-fit w-full  px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
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
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="h-fit w-full  px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
            <h1
              className="text-lg font-bold font-title mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Why We Exist
            </h1>
            <p className="mb-2">
              <span className="font-bold font-title">Exellency:</span> We
              obsessed with exceptional quality in everything we do from farms
              to the world market
            </p>
            <p className="mb-2">
              <span className="font-bold font-title">Partnership: </span>
              Building strong relationship with farmers, suppliers and customers
              based on trust, collaboration, and mutual benefits
            </p>
            <p className="mb-2">
              <span className="font-bold font-title">Sustainability: </span>We
              encompasses environmental respinsibility, social impacts, and
              economic visibility. it ensures the long-term health of both the
              business and the community it self.
            </p>
            <p className="mb-2">
              <span className="font-bold font-title">Integrity: </span>Operating
              with honest, transparency and ethical business practices. This
              includes fair trade principles and complience with regurations
            </p>
            <p className="mb-2">
              <span className="font-bold font-title">
                Nourishing the World with Tanzania's Bountry:{' '}
              </span>{' '}
              We aim to share the unique flavours and health benefits of
              Tanzanian agriculture with the global community
            </p>
          </div>
        </div>
        <div>
          <div className="h-fit w-full  px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
            <div className="px-4 pb-3">
              <h1
                className="text-lg font-bold font-title mb-2 py-1"
                style={{ borderBottom: '1px dotted green' }}
              >
                Our Team
              </h1>
              <p>
                Our mission is to bridge the gap between passionate Tanzanian
                farmers.
              </p>
            </div>
            <div>
              <Team />
            </div>
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold font-title mt-2">
            Success Stories
          </h1>
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
            <span className="font-semibold">International Expansion: </span> Our
            team assisted [Client Name], a leading producer of organic
            vegetables, in navigating the complex exportation process. By
            providing market research, legal support, and logistical solutions,
            we helped them expand their reach to Europe and North America,
            increasing their international revenue by 40% in just one year.
          </p>
        </div>
        <div className="relative bg-white p-4 overflow-hidden">
          <h1 className="absolute z-10 text-xl font-title font-bold text-gray-400 top-[48%] w-full text-center">
            across the world
          </h1>

            <WorldMap />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-bold font-title">Our Products</h1>
          <p>
            We specialize in trading of a variety of agro-food and cash crops,
            contributing to the global food supply chain. Some of the key crops
            we work with include cashew nuts, cocoa beans, sunflower seeds,
            rice, maize (corn), wheat, groundnuts (peanuts), cotton, soybeans,
            and various spices such as black pepper and turmeric.
          </p>
        </div>
        <div className="p-4">
          <AnimatedProducts />
        </div>
        {/* <div className="p-4">
          <Card />
        </div> */}
        <div>
          <Page />
        </div>
        <div className="px-4 lg:px-24 bg-blue-50 py-5">
          <div className="grid lg:grid-cols-3 p-1  rounded-t-sm md:grid-cols-2 lg:gap-6 md:gap-6">
            <div
              className="flex justify-between bg-white py-3 items-center rounded-t-sm z-20 px-2 mb-4 sticky top-[65px]"
              style={{ boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.0.7)' }}
            >
              <h1 className="text-lg font-bold font-title">
                Our Happy Clients
              </h1>
            </div>

            <div className="flex flex-col gap-5">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="p-3 bg-white">
                  <div className="flex items-center text-yellow-400">
                    <p>{review.star}</p>
                    <p>{review.star}</p>
                    <p>{review.star}</p>
                    <p>{review.star}</p>
                    <p>{review.star}</p>
                  </div>
                  <div className="flex justify-between items-center my-3">
                    <p className="font-title">{review.name}</p>
                    <p>{review.icon}</p>
                  </div>
                  <p>{review.paragraph}</p>
                  <p className="font-title mt-3">{review.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 py-5">
        <div className="px-4">
          <h1 className="font-title font-bold text-xl text-center">
            Our partiners
          </h1>
          <p className="text-center">
            we work with mutiple partiners to ensure we deliver to you the best
            quality products on-time
          </p>
        </div>
        <div className="grid lg:grid-cols-3 p-1  rounded-t-sm md:grid-cols-2 lg:gap-6 md:gap-6">
          <div className="flex flex-col gap-5 bg-white">
            <div className="w-full  h-[100px] relative overflow-hidden flex justify-center items-center">
              <Image src={Image1} alt="partiners" className="w-[30%] h-auto" />
            </div>
            <div className="w-full  h-[100px] relative overflow-hidden flex justify-center items-center">
              <Image src={Image2} alt="partiners" className="w-[30%] h-auto" />
            </div>
            <div className="w-full  h-[100px] relative overflow-hidden flex justify-center items-center">
              <Image src={Image3} alt="partiners" className="w-[30%] h-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
