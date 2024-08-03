import Feed from '@/components/Feed'
import LeftMenu from '@/components/Left-Menu/LeftMenu'
import RightMenu from '@/components/Right-Menu/RightMenu'
import React from 'react'
import Image from 'next/image'
import prisma from '@/lib/client'
import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

const page = async({params}:{params:{username:string,clerkId:string}}) => {
  const username = params.username;
  const clerkId=params.clerkId;

  const user = await prisma.user.findFirst({
    where:{
      username,
      clerkId,
     // clerkId,
    },
    include:{
      _count:{
      select:{
        followers:true,
        following:true,
        posts:true,
      }
    }
  }
});

if(!user) return notFound();

const {userId:currentUserId}= auth();

let isBlocked;
if(currentUserId){
  const res= await prisma.block.findFirst({
    where:{
      blockerId:user.clerkId,// clerkId
      blockedId:currentUserId,
    },
  });
  if(res) isBlocked=true;
}else{
  isBlocked=false;
}

if(isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-4">
    <div className="hidden xl:block w-[20%]"><LeftMenu type='profile'/></div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full h-64 relative'>
            <Image src={user.cover || "/noCover.png"} alt="" fill className="object-cover rounded-lg" />
            <Image src={user.avatar || "/noAvatar.png"} alt="" width={128} height={128} className="2-32 h-32 rounded-full absolute left-0 right-0 -bottom-16 m-auto ring-4 ring-white object-cover" />
          </div>
          <h1 className='mt-20 mb-4 text-2xl font-medium'>{(user.name && user.surname)? user.name+ " "+ user.surname : user.surname}</h1>
          <div className='flex items-center justify-center gap-12 mb-4'>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>{user._count.posts}</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>{user._count.followers}</span>  {/*   there is a chnage*/} 
              <span className='text-sm'>Followers</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>{user._count.following}</span>
              <span className='text-sm'>Following</span>
            </div>
          </div>
        </div>
       <Feed/>
      </div>
      
    </div>
    <div className="hidden lg:block w-[30%]"><RightMenu user={user}/></div>
  </div>
  )
}

export default page
