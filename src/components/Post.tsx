import Image from 'next/image'
import React from 'react'
Image
import Comment from './Comment'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/*USER*/}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/27141298/pexels-photo-27141298/free-photo-of-rainy-days.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={40} width={40} className='w-10 h-10 rounded-full'></Image>
                <span className='font-medium'>Prabal verma</span>
            </div>
            <Image src="/more.png" alt="" height={16} width={16}></Image>
        </div>
        {/*DESCIPTION*/}
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
            <Image src="https://images.pexels.com/photos/16720495/pexels-photo-16720495/free-photo-of-man-with-a-fishing-rod-on-a-shore-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className='object-cover rounded-md'></Image>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil, placeat, eum omnis fuga modi nam eius minus doloribus cumque, vel quidem! 
            </p>
        </div>
        {/*INTERACTION*/}
        <div className="flex items-center justify-between text-sm mt-4">
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/like.png" alt="" width={16} height={16} className='cursor-pointer'></Image>   
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123 <span className='hidden md:inline'>Likes</span>
                </span>
                </div>
                <div className='flex items-center gap-4 bg-slate-50 rounded-xl'>
                <Image src="/comment.png" alt="" width={16} height={16} className='cursor-pointer'></Image>   
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 
                    <span className='hidden md:inline'> Comments</span>
                </span>
                </div>
            </div>
            <div className="">
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/share.png" alt="" width={16} height={16} className='cursor-pointer'></Image>   
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123 <span className='hidden md:inline'> Shares</span>
                </span>
                </div>
        </div>
        </div>
       
      <Comment/>
    </div>
  )
}

export default Post
