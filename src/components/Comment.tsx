import React from 'react'
import Image from 'next/image'

const Comment = () => {
  return (
    <div className=''>
        {/* WRITE*/}
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/15390504/pexels-photo-15390504/free-photo-of-fisherman-standing-on-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={32} height={32} className='w-8 h-8 rounded-full'></Image>
            {/*COmments*/}
            <div className='flex-1 flex items-center justify-center bg-slate-100 rounded-xl text-sm px-6 py-2 w-full '>
                <input type='text' placeholder='Write a comment...' className='bg-transparent outline-none flex-1'/>
                <Image src="/emoji.png" alt='' width={16} height={16} className='cursor-pointer '/>
            </div>
        </div>
        {/* COMMENTS*/}
        <div className=''>
            {/*Comment*/}
            <div className='flex gap-4 justify-between mt-6'>
                {/*AVATAR*/}
                <Image src="https://images.pexels.com/photos/15390504/pexels-photo-15390504/free-photo-of-fisherman-standing-on-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className='w-10 h-10 rounded-full'></Image>
                <div className=''></div>
                {/*DESC*/}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>John cena</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, doloremque eos nostrum officiis quaerat beatae id quas quibusdam excepturi ?</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-4'>
                        <div className='flex items-center gap-4'>
                        <Image src="/like.png" alt="" width={12} height={12} className='cursor-pointer'></Image>   
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>123 
                    <span className='hidden md:inline'> Comments</span>
                </span>
                <div className=''>Reply</div>
                        </div>
                    </div>
                </div>
                <div className=''></div>
                {/*ICON*/}
                <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4'/>
            </div>
        </div>
    </div>
  )
}

export default Comment