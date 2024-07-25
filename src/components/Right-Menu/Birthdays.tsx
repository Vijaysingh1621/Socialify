import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Birthdays = () => {
  return (
    <div className=' p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>
                Birthdays
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
            <button className='bg-blue-500 text-white text-xs py-1 px-2 rounded-md'>Celebrate</button>
            </div>
            </div>
            {/*UPCOMING*/}
            <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
            <Image src="/gift.png" alt="" height={24} width={24}></Image>
            <Link href="/" className='flex flex-col gap-1 text-xs'>
                <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                <span className='text-gray-500 text-[10px]'>See other 16 have upcoming Birthdays</span>
            </Link>
            </div>
        
    </div>
  )
}

export default Birthdays
