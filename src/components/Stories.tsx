import React from 'react'
import Image from 'next/image'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
        <div className='flex gap-8 w-max'>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
            {/*story*/}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20623114/pexels-photo-20623114/free-photo-of-saint-marks-basilica-in-venice.jpeg" alt=""  height={80} width={80} className='h-16 w-16 rounded-full ring-2' ></Image>
                <span className='font-medium'>Rahul</span>
            </div>
        </div>
    </div>
  )
}

export default Stories