'use client';
import CarouselPlugin from '../../components/Carousel';
import Box from '../../components/box/Box';
import Image from 'next/image';
import styles from './page.module.css';
import Footer from '../../components/Footer/Footer';
import { FaRegHandshake } from 'react-icons/fa6';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaTrophy } from 'react-icons/fa6';
import { IoMdPeople } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Blogs from '../../components/Blog/Blogs';
import { products } from '../../components/json/products';
import { blogs } from '../../components/json/blogs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  const latestBlogs = blogs.slice(-3);

  return (
    <div className=" m-0 h-[100vh]">
      <CarouselPlugin />
      <div className="py-10 px-4 lg:px-24 flex flex-col space-y-8">
        <div className=" lg:-top-32 md:-top-32 flex flex-col gap-4 w-full md:flex-row lg:flex-row">
          <div
            className="  h-fit w-full pb-4 px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']"
            style={{}}
          >
            <h1
              className=" text-center text-lg font-bold mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Zawadi Agrifood Company LTD
            </h1>
            <p className="text-center mb-3">
              zawadi-agrifood is a premium food food company that is committed
              to offering value to food chains around the world, from logistics
              to being an intermediary representative of other food companies
              around the world. We are currently based in Tanzania.
            </p>
            <h1
              className="text-lg font-bold text-center mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Our Vission
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis veniam maiores possimus. Labore voluptatibus
              temporibus blanditiis molestias ad exercitationem dolorum illo
              consectetur, suscipit quas voluptas, ullam mollitia, eius unde.
            </p>
          </div>
          <div
            className="   h-fit w-full pb-4 px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']"
            style={{}}
          >
            <h1
              className="text-lg font-bold text-center mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Our Mission
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis veniam maiores possimus. Labore voluptatibus
              temporibus blanditiis molestias ad exercitationem dolorum illo
              consectetur, suscipit quas voluptas, ullam mollitia, eius unde.
            </p>
          </div>
          <div
            className="   h-fit w-full pb-4 px-1 text-['rgb(71, 72, 3)'] bg-['rgba(19, 72, 3, 0.087)']"
            style={{}}
          >
            <h1
              className="text-lg font-bold text-center mb-2 py-1"
              style={{ borderBottom: '1px dotted green' }}
            >
              Our Goals
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis veniam maiores possimus. Labore voluptatibus
              temporibus blanditiis molestias ad exercitationem dolorum illo
              consectetur, suscipit quas voluptas, ullam mollitia, eius unde.
            </p>
          </div>
        </div>
        <h1
          className="text-xl lg:text-4xl mb-5 text-center font-semibold lg:mt-36 md:mt-36 mt-10 pb-2"
          style={{ borderBottom: '1px dotted black' }}
        >
          why <span className="text-green-700">choose us?</span>
        </h1>
        <p className="line-clamp-6 text-center">
          Zawadi Export Company LTD started in the year 2019. We export nuts,
          Sunflower Oil, Beans, Green Cardamom, etc, Under the leadership of
          Sebastian Omary, our Operations Manager, the company has emerged as
          one of the leading merchant exporters from Tanzania. Total customer
          satisfaction is the main focus of the company. We have a well-equipped
          factory, warehouses, and trucks to deal with the buyer's request
          within the shortest time possible. Our sole aim is to establish a
          long-term business relationship working with trust and good faith.
        </p>
        <button className="text-green-600 w-fit bg-green-100 px-4 mx-auto  border-none outline-none">
          Read More
        </button>

        <div>
          <div className="grid lg:grid-cols-3 p-1 rounded-t-sm md:grid-cols-2 lg:gap-6 md:gap-6 ">
            {/* <Box
            icon={<FaRegHandshake size={20} />}
            title="Living by our
                values"
            para="At Zawadi Agri-food, the way we work is as important to us as
                what we do. We have a set of values that we live by every day."
          />
          <Box
            icon={<IoIosCheckmarkCircle size={20} />}
            title="Our Goal"
            para=" Our goal is to make all of our customers’ lives easier every day
                by offering great quality and service at a fair price."
          />
          <Box
            icon={<FaRegHandshake size={20} />}
            title="Passion"
            para=" We are emotional at times because we care about delivering
                excellence."
          />
          <Box
            icon={<FaTrophy size={20} />}
            title="Integrity"
            para="How we deliver results is as important as the results
                themselves. We emulate the values of a family enterprise."
          />
          <Box
            icon={<IoMdPeople size={20} />}
            title="Teamwork"
            para=" In our business every job is important. We value each person and
                their job as much as we value our own."
          />
          <Box
            icon={<FaTrophy size={20} />}
            title="Quality"
            para=" We constantly strive to provide the best products and services
                at all times."
          /> */}

            <div
              className="flex justify-between bg-white py-3 items-center rounded-t-sm z-20 px-2 mb-4 sticky top-24 "
              style={{ boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.0.7)' }}
            >
              <h1 className="text-lg">
                <span className="text-green-900">Our </span>Blogs
              </h1>
              <p
                className="bg-green-100 rounded-sm hover: text-sm px-3 py-[2px] cursor-pointer"
                onClick={() => router.push('Blogs')}
              >
                View All
              </p>
            </div>

            <div className="flex flex-col gap-2">
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
        </div>

        <div>
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
            <button className=" bg-green-100 text-green-800 px-10 py-1">
              Read More
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold">
            <span className="text-green-700">OUR </span>PRODUCTS
          </h1>
          <p className="text-center">
            Sourced from the farms directly. Fresh, best quality products.
          </p>
          <div>
            {products.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden py-3 grid lg:grid-cols-3 md:grid-cols-2 w-full lg:w-[300px]  rounded-t-sm h-60"
                style={{ height: '300px' }}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image
                  src={product.image}
                  className="w-[100%] h-full"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="absolute w-full h-full top-0 left-0 bg-transparent  flex justify-center items-center"
                  id={styles.img}
                >
                  <p
                    className="bg-green-100 w-fit text-cyan-800 m-4 px-5 py-1"
                    id={styles.imgPara}
                  >
                    {product.title}
                  </p>
                </div>
                <p className="text-[13px] text-center h-10 line-clamp-1 bg-green-100 -mt-6 text-green-800  justify-center flex items-center">
                  {product.desc}
                </p>
              </div>
            ))}
            <div className="w-full h-fit bg-green-50 flex items-center justify-end p-1 rounded-sm" onClick={()=>router.push('Gallery')}>
              <span className="w-fit px-4 bg-green-300 text-green-900 text-sm rounded-sm">
                View All
              </span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-lg font-bold">
            <span className="text-green-700">Distribution</span> Centers
          </h1>
          <p>
            As Zawadi Agri-food we have seen the need to set distribution
            centers of various products, enhancing them with the
            state-of-the-art warehouses and logistics in overseas areas:
          </p>
          <p>
            <span className="text-green-500">Dubai</span> |{' '}
            <span className="text-yellow-400">Rotterdam</span> |{' '}
            <span className="text-cyan-600">Jeddah</span> |{' '}
            <span className="text-orange-500">Malaga</span> |{' '}
            <span className="text-purple-700">France</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
