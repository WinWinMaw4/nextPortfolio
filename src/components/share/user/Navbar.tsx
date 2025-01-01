'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import logo from "@/app/assets/images/diamondWithe520px.png"
import Image from 'next/image'
import SwipeThemeSwitcher from '@/components/ui/SwipeThemeSwitcher'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='bg-white dark:bg-primary text-secondary p-3 w-full'>
      <div className="flex justify-between items-center ">
        <div>
          <Image src={logo} alt='logo' width={"50"} height={"50"} className='rotate-45 dark:invert-0 invert'></Image>
           <span className='text-primary dark:text-white font-extrabold'>Double Win</span>
        </div>

        <div className="flex space-x-2">
        <SwipeThemeSwitcher />

          {/* <Link href={'/dashboard'} className={`link ${pathname === '/dashboard' ? 'active bg-platinum text-black ' : ''}`} ><span className='px-2 py-1 border'>Dashboard</span></Link> */}
          <Link href={'/'} className={`link ${pathname === '/' ? 'active bg-primary dark:bg-platinum text-white dark:text-black' : ''}`} ><span className='px-2 py-1 border'>Resume</span></Link>
          <Link href={'/contactus'} className={`link ${pathname === '/projects' ? 'active bg-primary dark:bg-platinum text-white dark:text-black' : ''}`} ><span className='px-2 py-1 border'>Projects</span></Link>
          <Link href={'/contactus'} className={`link ${pathname === '/contactus' ? 'active bg-primary dark:bg-platinum text-white dark:text-black' : ''}`} ><span className='px-2 py-1 border'>Contact Us</span></Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar