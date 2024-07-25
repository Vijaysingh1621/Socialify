import Feed from '@/components/Feed'
import LeftMenu from '@/components/Left-Menu/LeftMenu'
import RightMenu from '@/components/Right-Menu/RightMenu'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex gap-6 pt-4">
    <div className="hidden xl:block w-[20%]"><LeftMenu type='profile'/></div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full h-64 relative'>
            <Image src="https://images.pexels.com/photos/14092389/pexels-photo-14092389.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover rounded-lg" />
            <Image src="https://images.pexels.com/photos/26971939/pexels-photo-26971939/free-photo-of-boy-in-shirt-standing-close-to-elephant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={128} height={128} className="2-32 h-32 rounded-full absolute left-0 right-0 -bottom-16 m-auto ring-4 ring-white object-cover" />
          </div>
          <h1 className='mt-20 mb-4 text-2xl font-medium'>Peter parker</h1>
          <div className='flex items-center justify-center gap-12 mb-4'>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>123</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.2K</span>
              <span className='text-sm'>Followers</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.4K</span>
              <span className='text-sm'>Following</span>
            </div>
          </div>
        </div>
       <Feed/>
      </div>
      
    </div>
    <div className="hidden lg:block w-[30%]"><RightMenu userId='text'/></div>
  </div>
  )
}

export default page
