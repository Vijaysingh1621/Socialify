import React from 'react'
import Image from 'next/image'


const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src="https://images.pexels.com/photos/24407577/pexels-photo-24407577/free-photo-of-green-light-of-aurora-borealis-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            <Image src="https://images.pexels.com/photos/27132382/pexels-photo-27132382/free-photo-of-libertad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={48} width={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"/>

        </div>
        <div className='h-20 flex flex-col gap-2 items-center'>
            <span className='font-semibold'>Eva Marie</span>
            <div className='flex items-center gap-4'>
                <span className='text-xs text-gray-500'>500 Followers</span>
            </div>
            <button className='bg-blue-500 text-white px-4 py-1 rounded-lg'>My profile</button>
        </div>
      
    </div>
  )
}

export default ProfileCard
