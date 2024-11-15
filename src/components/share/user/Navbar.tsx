import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-500 p-3 w-screen'>
      <div className="flex justify-between items-center ">
          <span>LOgo</span>
          <div className="flex space-x-2">
          <Link href={'/dashboard'} ><span className='px-2 py-1 border'>Dashboard</span></Link>
          <Link href={'/'} ><span className='px-2 py-1 border'>User</span></Link>
          <Link href={'/contactus'} ><span className='px-2 py-1 border'>Contact Us</span></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar