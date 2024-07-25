import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MobileMenu = () => {
  return (
    <div className='fixed bottom-0 w-full bg-gray-200 py-2 shadow-lg rounded-2xl '>
      <div className='flex justify-around items-center text-[16px]  '>
        <Link href="/">
          <div className='flex flex-col items-center justify-center text-black hover:text-blue-600 cursor-pointer'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M...'></path></svg>
            <span className=''>Home</span>
          </div>
        </Link>
        <Link href="/friends">
          <div className='flex flex-col items-center justify-center text-black hover:text-blue-600 cursor-pointer'>
            <Image src="/search.png" alt="" height={20} width={20} />
            <span className=''>Friends</span>
          </div>
        </Link>
        <Link href="/stories">
          <div className='flex flex-col items-center justify-center text-black hover:text-blue-600 cursor-pointer'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M...'></path></svg>
            <span className=''>Stories</span>
          </div>
        </Link>
        <Link href="/profile/123">
          <div className='flex flex-col items-center justify-center text-black hover:text-blue-600 cursor-pointer'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M...'></path></svg>
            <span className=''>Profile</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu
