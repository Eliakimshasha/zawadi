'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import img from '@/assets/images/img11.jpg';
import BlogCount from '@/app/components/Blog/BlogCount';

// Function to handle the blog page rendering
function BlogPage() {
  const searchParams = useSearchParams();
  const image = searchParams.get('image') || img;
  const desc = searchParams.get('desc') || '';
  const title = searchParams.get('title') || '';
  const date = searchParams.get('date') || '';

  return (
    <div>
      <div className="pt-28 p-4 relative">
        <div className="flex justify-between items-center py-5 sticky top-24 bg-white">
          <p className="text-green-600">
            <span className="font-bold">Author: </span><span className=''>Ezekiel Williams</span>
          </p>
          <p className="bg-green-200 px-3">{date}</p>
        </div>
        <h1 className="font-bold mb-3 line-clamp-none ">{title}</h1>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-sm h-[30vh] overflow-hidden w-[100%]" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Image src={image} alt="image" className="h-full w-full" />
          </div>
          <div>
            <h1 className="font-bold py-3 ">
              Revolutionary Advancement: Turbocharged Next.js
            </h1>
            <p className="">
              {desc} A pivotal enhancement in Next.js 14 lies in its turbocharged compiler. The diligent efforts of the Next.js team manifest in a Rust-based compiler that is poised to achieve stabilization imminently. The commitment to accelerating local server startup and expediting code updates underscores the significance of this development.
            </p>
            <h1 className="font-bold py-3 ">
              Empowering Developers: Forms and Mutations
            </h1>
            <p className="">
              Introducing a streamlined approach to managing forms and mutations, Next.js 14 breaks away from the conventional method where developers were compelled to manually create API routes for handling form submissions. Enter Server Actions, empowering developers to articulate functions executed securely on the server and directly callable from React.
            </p>
            <h1 className="font-bold py-3 ">
              Revolutionary Advancement: Turbocharged Next.js
            </h1>
            <p className="">
              {desc} A pivotal enhancement in Next.js 14 lies in its turbocharged compiler. The diligent efforts of the Next.js team manifest in a Rust-based compiler that is poised to achieve stabilization imminently. The commitment to accelerating local server startup and expediting code updates underscores the significance of this development.
            </p>
          </div>
        </div>
      </div>
      <BlogCount />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPage />
    </Suspense>
  );
}
