import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserInfoCard = ({userId}:{userId?:string}) => {
  return (
    <div className=' p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/*TOP*/}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>
                User Information
            </span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/*Bottom*/}
        <div className='flex flex-col gap-4 text-gray-500'>
            <div className='flex items-center gap-2'>
                <span className='text-xl text-black'>Prabal Verma</span>
                <span className='text-sm'>@prabalverma</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quo! Modi, beatae aperiam.
            </p>
            <div className='flex items-center gap-2'>
                <Image src="/map.png" alt="" height={16} width={16}/>
                <span>Living in <b>Delhi</b></span>
            </div>
            <div className='flex items-center gap-2'>
                <Image src="/school.png" alt="" height={16} width={16}/>
                <span>Went to <b>NSUT</b></span>
            </div>
            <div className='flex items-center gap-2'>
                <Image src="/work.png" alt="" height={16} width={16}/>
                <span>work at <b>TCS</b></span>
            </div>
            <div className='flex items-center justify-between flex-wrap'>
                <div className='flex gap-1 items-center '>
                    <Image src="/link.png" alt="" width={16} height={16}/>
                    <Link href="https://prabalverma.me" className='text-blue-500 font-medium '>Prabalverma.me</Link>
                </div>
                <div className='flex gap-1 items-center text-[13px] '>
                    <Image src="/date.png" alt="" width={16} height={16}/>
                   <span>Joined Nov 2024</span>
                </div>
            </div>
            <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
            <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
        </div>
        </div>
  )
}

export default UserInfoCard