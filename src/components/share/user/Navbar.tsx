'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  return (
    <div className='bg-primary text-secondary p-3 w-screen'>
      <div className="flex justify-between items-center ">
          <span>LOgo</span>
          <button
        className="p-2 bg-primary text-primary-foreground rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Dark Mode
      </button>
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