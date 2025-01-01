import UserProfile2 from '@/components/share/user/UserProfile2'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='p-5'>
      
      <div className="flex">
        <div className="p-5 bg-richBlack">richBlack</div>
        <div className="p-5 bg-oxfordBlue">oxfordBlue</div>
        <div className="p-5 bg-primary">primary</div>
        <div className="p-5 bg-platinum ">platinum</div>

      </div>
      <UserProfile2 />
    </div>
  )
}

export default ContactUs