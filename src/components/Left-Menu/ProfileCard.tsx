import React from 'react'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client';
import Link from 'next/link';


const ProfileCard = async () => {
  const {userId}=auth();
;
  

  if(!userId) return null;

  const user = await prisma.user.findFirst({
    where:{
      clerkId:userId,
    },include:{
      _count:{
        select:{
          followers:true
      }
    }
  }});
  console.log(user)

  if(!user) return null;
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src={user.cover || "./noCover.png" } alt="" fill className="rounded-md object-cover"/>
            <Image src={user.avatar || "./noAvatar.png"} alt="" height={48} width={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"/>

        </div>
        <div className='h-20 flex flex-col gap-2 items-center'>
            <span className='font-semibold'>{(user.name && user.surname)? user.name+ " "+ user.surname : user.surname}</span>
            <div className='flex items-center gap-4'>
                <span className='text-xs text-gray-500'>{user._count.followers} Followers</span>
            </div>
            <Link href={`/profile/${user.username}`}>
            <button className='bg-blue-500 text-white px-4 py-1 rounded-lg'>My profile</button>
            </Link>
        </div>
      
    </div>
  )
}

export default ProfileCard
