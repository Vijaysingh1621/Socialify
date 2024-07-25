import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const FriendRequests = () => {
  return (
    <div className=' p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/*TOP*/}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>
                Friend Requests
            </span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/*USER*/}
        <div className='flex items-center justify-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <Image src="https://images.pexels.com/photos/7016662/pexels-photo-7016662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={40} width={40} className="w-10 h-10 rounded-full object-cover"></Image>
                <span className='font-medium'>Hellen keller</span>
            </div>
            <div className='flex gap-3 justify-end'>
            <Image src="/accept.png" alt="" height={20} width={20} className=" cursor-pointer"></Image>
            <Image src="/reject.png" alt="" height={20} width={20} className="cursor-pointer"></Image>
            </div>
        </div>
        <div className='flex items-center justify-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <Image src="https://images.pexels.com/photos/7016662/pexels-photo-7016662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={40} width={40} className="w-10 h-10 rounded-full object-cover"></Image>
                <span className='font-medium'>Hellen keller</span>
            </div>
            <div className='flex gap-3 justify-end'>
            <Image src="/accept.png" alt="" height={20} width={20} className=" cursor-pointer"></Image>
            <Image src="/reject.png" alt="" height={20} width={20} className="cursor-pointer"></Image>
            </div>
        </div>
        <div className='flex items-center justify-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <Image src="https://images.pexels.com/photos/7016662/pexels-photo-7016662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={40} width={40} className="w-10 h-10 rounded-full object-cover"></Image>
                <span className='font-medium'>Hellen keller</span>
            </div>
            <div className='flex gap-3 justify-end'>
            <Image src="/accept.png" alt="" height={20} width={20} className=" cursor-pointer"></Image>
            <Image src="/reject.png" alt="" height={20} width={20} className="cursor-pointer"></Image>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests