import React from 'react';
import styles from './about.module.css';
import { FaEarthAfrica } from 'react-icons/fa6';
import Card from '../../components/About/Card';
import Footer from '@/app/components/Footer/Footer';
import { WorldMap } from '@/components/ui/world-map';
import { AnimatedProducts } from '@/components/ui/products';
// import { Globe } from '@/components/ui/globe';

function page() {
  return (
    <div>
      <div
        className="h-[60vh] flex justify-center items-center py-10 flex-col"
        id={styles.bg}
      >
        <p className="font-bold text-white text-lg uppercase">
          About Bibo-Food
        </p>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          recusandae corrupti illo hic est repellat saepe ducimus animi
          reprehenderit sequi.
        </p>
      </div>
      <div className="p-4">
        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="font-bold">Bibo-Food Industry LTD</h1>
            <p className="p-2 rounded-full bg-green-100">
              <FaEarthAfrica className="text-green-500" />
            </p>
          </div>
          <p>
            zawadi-agrifood is a premium food food company that is committed to
            offering value to food chains around the world, from logistics to
            being an intermediary representative of other food companies around
            the world. We are currently based in Tanzania.
          </p>
        </div>
        <div>
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

        <div>
          <h1 className="text-lg font-semibold mt-2">Success Stories</h1>
          <p className="my-3">
            <span className="font-semibold">
              Boosting Agricultural Productivity:
            </span>{' '}
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
        <div className="py-2 relative">
          <h1 className="absolute z-10 text-xl font-bold text-gray-400 top-[48%] w-full text-center">
            across the world
          </h1>
          <WorldMap />
        </div>
        <div>
          <h1 className='text-lg font-bold'>Our Products</h1>
          <p>
            We specialize in trading of a variety of agro-food and cash
            crops, contributing to the global food supply chain. Some of the key crops we work with include cashew nuts,
            cocoa beans, sunflower seeds, rice, maize (corn), wheat, groundnuts
            (peanuts), cotton, soybeans, and various spices such as black pepper
            and turmeric.
          </p>
        </div>
        <div>
          <AnimatedProducts />
        </div>
        <div>
          <Card />
        </div>
        <div>{/* <Globe /> */}</div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
