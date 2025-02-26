import React from 'react'

const Works = () => {
  return (
    <div>
    <div className="h-screen w-full bg-cover bg-center relative ">
      <div className='hidden md:block h-screen absolute top-1/3 left-1/2'>
      <h1  className='text-8xl font-bold text-gray-700 '>WORK</h1>
      </div>
      <div className='absolute z-0 md:grid grid-cols-2 h-screen w-full'>
        <div className='col-span-1 text-center  '>
        </div>
        <div className='col-span-1  text-center  '>
        <h1 className='text-white font-bold text-2xl p-6 '>
        EXPERIANCE
</h1>
<p className='text-xl p-5 font-bold text-white text-left'>
Chainzent Pvt Ltd jr Software Developer
2023 Dec - Present
</p>
<p className='text-sm p-5 text-left text-white'>
Collaborated with a team to develop and enhance web applications using Next Framework and Tailwind
CSS. Assisted in implementing new features and debugging issues to ensure smooth user experiences.
Gained hands-on experience with version control using Git and contributed to project repositories.
</p>
</div>


      </div>

    </div>
</div>
  )
}

export default Works
