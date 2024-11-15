import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-purple-500 p-3 w-[250px] h-screen fixed '>
      <div className="flex flex-col">
          <span>Side bar</span>
          <div className="flex flex-col">
          <Link href={'/dashboard'} ><span className='px-2 py-1 border'>Dashboard</span></Link>
          <Link href={'/'} ><span className='px-2 py-1 border'>User</span></Link>
          </div>
      </div>
    </div>
  )
}

export default Sidebar