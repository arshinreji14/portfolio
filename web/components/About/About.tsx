import React from "react";

const About = () => {
  return (
    <div className="pb-20">
      <div className="h-screen w-full bg-cover bg-center relative  ">
        {/* <div className='hidden md:block h-screen absolute top-1/3 left-1/2'>
          <h1  className='text-8xl font-bold text-gray-700'>ABOUT</h1>
          </div> */}
        <div className="absolute z-0 md:grid grid-cols-2 h-screen w-full">
          <div className="col-span-1 text-center  ">
            <h1 className="text-white font-bold text-2xl p-6 ">EDUCATION</h1>
            <ul className="text-xl p-5 font-bold text-white list-disc list-inside  space-y-4">
              <li>
                <span className="text-gray-300">
                  INTERNSHIP - NACTET CERTIFICATION
                </span>
                <br /> MEARN DEVELOPMENT
                <br /> LUMINAR TECHNOLAB, KOCHI
              </li>
              <li>
                <span className="text-gray-300">
                  UG FROM AL-AZHAR COLLEGE OF ARTS AND SCIENCE
                </span>
                <br /> 2019-2022
              </li>
              <li>
                <span className="text-gray-300">HSE from SNHSS KANJIKUZHY</span>
                <br /> 2017-2019
              </li>
            </ul>
          </div>
          <div className="col-span-1  grid grid-cols-2">
            <div className="col-span-1"> <h1 className="text-white font-bold text-2xl p-6 ">SOFTWARE SKILLS </h1>
            <ul className="md:text-xl sm:text-xs p-5 font-bold text-white list-disc list-inside  space-y-3 text-left">
              <li>
                <span className="">React Js</span>
              </li>
              <li>
                <span className="">Next Js</span>
              </li>
              <li>
                <span className="">Tailwind Css</span>
              </li>
              <li>
                <span className="">Javascript</span>
              </li>
              <li>
                <span className="">git</span>
              </li>
              <li>
                <span className="">GitHub</span>
              </li>
            </ul> </div>
            <div className="col-span-1"> <h1 className="text-white font-bold text-2xl p-6 ">PROFESSIONAL SKILLS</h1>
            <ul className="md:text-xl sm:text-xs p-5 font-bold text-white list-disc list-inside  space-y-3 text-left">
              <li>
                <span className="">Quick Learner</span>
              </li>
              <li>
                <span className="">Theam Player</span>
              </li>
              <li>
                <span className="">Problem Solver</span>
              </li>
              <li>
                <span className="">Communication</span>
              </li>
             
            </ul> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
