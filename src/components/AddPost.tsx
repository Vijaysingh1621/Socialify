import React from 'react'
import Image from 'next/image'
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';

const {userId}= auth()
console.log(userId)
const AddPost = () => {
 

  
  const testAction= async(formData:FormData)=>{
    "use server"
    if(!userId) return;
    const desc = formData.get("desc") as string;
    try{
      const res = await prisma.post.create({
        data:{
          
          userId: userId.toString(),
          desc:desc,
        },
      });
      console.log(res);
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/*AVATAR*/}
      <Image 
      src="https://images.pexels.com/photos/27001883/pexels-photo-27001883/free-photo-of-a-white-car-is-driving-down-a-city-street.jpeg" 
      alt=""
      width={48} height={48} 
      className='w-12 h-12 object-cover rounded-full'></Image>
      {/*POST*/}
      <div className='flex-1'>
        {/*TEXT INPUT*/}
        <form action={testAction} className='flex  gap-4'>
          <textarea placeholder="What's on your mind?"   name="desc" className='flex-1 bg-slate-100 rounded-lg p-2'></textarea>
          <Image 
            src="/emoji.png" 
            alt=""
            width={20} height={20} 
            className='w-5 h-5 cursor-pointer self-end'></Image>
            <button>Send</button>
        </form>
         {/*POST OPtions*/}
         <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image 
            src="/addimage.png" 
            alt=""
            width={20} height={20} 
            ></Image> Photo
            </div> 
            <div className='flex items-center gap-2 cursor-pointer'>
          <Image 
            src="/addvideo.png" 
            alt=""
            width={20} height={20} 
            ></Image>Video
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
          <Image 
            src="/poll.png" 
            alt=""
            width={20} height={20} 
            ></Image>Poll
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
          <Image 
            src="/addevent.png" 
            alt=""
            width={20} height={20} 
            ></Image>Event
            </div>
         </div>
      </div>
    </div>
  )
}

export default AddPost