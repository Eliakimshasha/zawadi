'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';

function Page() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('Screens/Home');
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-white relative z-[999] left-0 top-0 w-full">
      <TypeAnimation
        sequence={[`Zawadi Agrifood`, 1000]}
        wrapper="h2"
        speed={25}
        cursor={false}
        repeat={Infinity}
        className="tangerine-regular text-center  text-lg lg:text-2xl capitalize text-green-800"
      />
    </div>
  );
}

export default Page;
