"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Img1 from '../../assets/images/par1.jpg';
import Img2 from '../../assets/images/on1.jpg';
import Img3 from '../../assets/images/sunflower.jpg';
import Img4 from '../../assets/images/pepper.jpg';
import Img5 from '../../assets/images/dra1.jpg';

export const AnimatedProducts = ({
  testimonials = [
    {
      src: Img1,
      name: "Cashew Nuts ",
      designation: "Anacardium occidentale",
      quote: "Cashew nuts are the seeds of the cashew tree, known for their rich, nutty flavor. They are commonly used in cooking, snacking, and as an ingredient in many food products."
    },
    {
      src: Img2,
      name: "Cocoa Beans",
      designation: "Theobroma cacao",
      quote: "Cocoa beans are the primary ingredient in chocolate production. They are harvested from the cacao tree, with a distinct bitter flavor that turns sweet during processing."
    },{
      src: Img3,
      name: "Sunflower Seeds ",
      designation: "Helianthus annuus",
      quote: "Sunflower seeds are rich in healthy fats, protein, and fiber. They are often eaten raw, roasted, or used to produce sunflower oil, a popular cooking ingredient."
    },{
      src: Img4,
      name: "Black Pepper",
      designation: "Piper nigrum",
      quote: "Black pepper is a widely used spice known for its sharp, pungent flavor. It is harvested from the dried fruit of the pepper vine and is a key ingredient in many cuisines."
    },{
      src: Img5,
      name: "Dragon Fruit",
      designation: "Hylocereus spp",
      quote: "Dragon fruit is a tropical fruit known for its striking appearance, with vibrant pink or yellow skin and white or red flesh speckled with tiny black seeds. It is rich in antioxidants, vitamin C, and fiber, making it a popular choice for health-conscious consumers."
    },
  ],
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-9">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="relative z-10"> {/* Add z-index and position relative */}
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom bg-green-900"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex relative justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              ({testimonials[active].designation})
            </p>
            <motion.p className="text-lg text-gray-500 mt-4 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6 md:pt-0 absolute top-0 right-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft
                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"
              />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight
                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
