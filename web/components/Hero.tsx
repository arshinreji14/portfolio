import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
    
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-gray-600 md:text-8xl text-6xl font-bold">FRONTEND</h1>
        <h1 className="text-gray-600 md:text-8xl text-6xl font-bold pl-32">WEB</h1>
        <h1 className="text-gray-600 md:text-8xl text-6xl font-bold">DEVELOPER</h1>
        <div className="col-span-2 flex justify-center items-center relative">
        </div> 
      </div>

  
      <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center p-7 md:pl-14 w-full">
     
        <div className="col-span-1 text-center md:text-left">
          <h2 className="text-gray-500 text-3xl font-bold">HELLO,    I&apos;M</h2>
          <h1 className="text-violet-700 text-7xl md:text-8xl font-bold">ARSHIN</h1>
          <h1 className="text-white text-7xl md:text-8xl font-bold">REJI</h1>
          <p className="text-white font-bold text-lg md:text-xl mt-4">
            I am a skilled Front End Developer with 1 year of experience in designing and implementing efficient 
            and scalable web applications. I have a strong background in coding, testing, and debugging, and 
            have successfully delivered projects on time, exceeding client expectations.
          </p>
        </div>
        <div className='col-span-1'>

        </div>
        <div className='col-span-1'>
        <div className="relative w-full  h-[500px] md:h-[600px] ">
            <Image
              src="/background/img2.png"
              alt="Profile"
              fill
              className="object-cover mix-blend-soft-light opacity-100"
            />
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

     
    
      </div>
    </div>
  );
};

export default Hero;
