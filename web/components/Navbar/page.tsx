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
      <div className='col-span-1 flex justify-end pr-10 items-center'>
        <a className='text-lg px-5 py-4 text-white  border-2 border-white' href='/Arshinreji.pdf' download={`/Arshinreji.pdf`}>Downlod CV </a>
      </div>
    </nav>
  )
}

export default Navbar
