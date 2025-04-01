import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' w-full h-32  grid grid-cols-2'>
      <div className='col-span-1 grid grid-cols-3'>
      <div className='col-span-1'></div>
      <div className='col-span-2 flex justify-between items-center px-32'>
{/* <a className='text-sm text-white'>Home</a>
<a className='text-sm text-white'>About</a>
<a className='text-sm text-white' >Works</a> */}
      </div>
     
      </div>
      <div className='col-span-1 flex justify-end pr-10 items-center '>
      <a
  className=" text-sm px-2 py-2 md:text-lg md:px-5 md:py-4 text-white border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300"
  href="/Arshinreji.pdf"
  rel="noopener noreferrer"
  download="Arshinreji.pdf"
>
  📄 Download CV
</a>
      </div>
    </nav>
  )
}

export default Navbar
