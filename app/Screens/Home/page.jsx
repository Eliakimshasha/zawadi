'use client';
import CarouselPlugin from '../../components/Carousel';
import Box from '../../components/box/Box';
import Image from 'next/image';
import styles from './page.module.css';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { blogs } from '../../components/json/blogs';
import { products } from '../../components/json/products';
import Blogs from '../../components/Blog/Blogs';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Page from '@/app/components/Counting/page';
import { reviews } from '@/app/components/json/about';

export default function Home() {
  const router = useRouter();

  const latestBlogs = blogs.slice(-3);

  return (
    <div className="">
      <div className="w-[100%] bg-white h-[95vh] lg:h-[100vh] md:h-[100vh] relative overflow-hidden">
        <CarouselPlugin />
      </div>

      <div className="pt-10 flex flex-col">
        <div className="px-4 mb-8 lg:px-24 lg:-top-32 md:-top-32 flex flex-col gap-4 w-full md:flex-row lg:flex-row">
          <div className="h-fit w-full pb-4 px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']">
            <p className="text-red-500">ABOUT US</p>
            <h1
              className="text-lg font-title font-bold mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Who We Are
            </h1>
            <p className="mb-3">
              We are a dynamic enterprise bridging the gap between Tanzanian
              farmers and global markets. We work with international buyers by
              offering them high-quality, authentic Tanzanian products.
            </p>
          </div>
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
        <div className="px-4 lg:px-24 mb-8">
          <h1 className="text-center text-lg font-title font-semibold">
            OUR PRODUCTS
          </h1>
          <p className="text-center font-paragraph">
            Sourced from the farms directly. Fresh, best quality products.
          </p>
          <div className="bg-white">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="shadow-md rounded-sm">
                <div
                  className="relative items-center justify-center overflow-hidden py-3 pt-0 my-4 grid lg:grid-cols-3 md:grid-cols-2 w-full lg:w-[300px]"
                  style={{ height: '200px' }}
                >
                  <Image
                    src={product.image}
                    alt="image"
                    className="w-[100%] h-full rounded-md"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-center items-center"
                    id={styles.img}
                  >
                    <p
                      className="bg-green-100 w-fit text-cyan-800 m-4 px-5 py-1"
                      id={styles.imgPara}
                    >
                      {product.title}
                    </p>
                  </div>
                </div>
                <div className="py-4 px-1">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, harum voluptas architecto perferendis maiores adipisci
                    cupiditate rem, soluta nobis iure sequi, necessitatibus
                    ipsam molestiae quibusdam repudiandae delectus corrupti
                    alias eaque.
                  </p>

                  <div
                    className="flex items-center justify-center m-auto px-4 my-3 py-1 bg-teal-700 w-fit text-white"
                    onClick={() => router.push('Products')}
                  >
                    <p>Explore {product.title}</p>
                    <p>
                      <MdOutlineKeyboardDoubleArrowRight
                        color="white"
                        size={25}
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Page />
        </div>

        {/* <div className="px-4 lg:px-24 bg-blue-50">
          <div className="grid lg:grid-cols-3 p-1 rounded-t-sm md:grid-cols-2 lg:gap-6 md:gap-6">
            <div
              className="flex justify-between bg-white py-3 items-center rounded-t-sm z-20 px-2 mb-4 sticky top-[65px]"
              style={{ boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.0.7)' }}
            >
              <h1 className="text-lg font-bold font-title">Our Blogs</h1>
              <p
                className="bg-teal-700 text-white rounded-sm hover: text-sm px-3 py-[2px] cursor-pointer"
                onClick={() => router.push('Blogs')}
              >
                View All
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-white">
              {latestBlogs.map((blog) => (
                <div key={blog.id}>
                  <Blogs
                    image={blog.image}
                    desc={blog.desc}
                    title={blog.title}
                    date={blog.date}
                    path={blog.path}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}

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

        {/* <div className="px-4 lg:px-24">
          <h1 className="text-center font-semibold">
            Zawadi Agrifood Company LTD is involved in the export of a gamut of
            products such as pulses, cereals, vegetables, nuts, spices, safety
            matches, coir products etc.
          </h1>
          <p className="text-center mt-3">
            Our comprehensive range of products, competitive price, cost policy
            and timely delivery has given us a winning edge in the export
            market.
          </p>
          <div className="w-fit m-auto mt-3">
            <button className="bg-green-100 text-green-800 px-10 py-1">
              Read More
            </button>
          </div>
        </div> */}

        {/* <div className="text-center px-4 lg:px-24">
          <h1 className="text-lg font-bold">
            <span className="text-green-700">Distribution</span> Centers
          </h1>
          <p>
            As Zawadi Agri-food we have seen the need to set distribution
            centers of various products, enhancing them with the
            state-of-the-art warehouses and logistics in overseas areas:
          </p>
          <p>
            <span className="text-green-500">Dubai</span> |
            <span className="text-yellow-400">Rotterdam</span> |
            <span className="text-cyan-600">Jeddah</span> |
            <span className="text-orange-500">Malaga</span> |
            <span className="text-purple-700">France</span>
          </p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
