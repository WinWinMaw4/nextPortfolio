import Image from 'next/image'
import React from 'react'
import profileImage from "@/app/assets/images/diamondWithe520px.png"
import UserProfile from '@/components/share/user/UserProfile'


const page = () => {
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default page