import Image from 'next/image'
import React from 'react'


const Add = ({size}:{size:"sm" |"md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/*TOP*/}
        <div className='flex items-center justify-between text-gray-500 font-medium'>
            <span className=''>Sponsored Ads</span>
            <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/*BOTTOM*/}
        <div className={`flex flex-col mt-4 ${size==="sm"?"gap-2" :"gap-4"}`}>
            <div className={`relative w-full ${size==="sm"? "h-24" : size==="md"?"h-36":"h-28"}`}>
                <Image src="https://images.pexels.com/photos/26890887/pexels-photo-26890887/free-photo-of-morning-granola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className='rounded-lg object-cover'/>
            </div>
            <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/26890887/pexels-photo-26890887/free-photo-of-morning-granola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={24} width={24} className='rounded-full w-6 h-6object-cover'/>
            <span className='text-blue-500 font-medium'>BigChef Lounge</span>

            </div>
            <p className={size==="sm"?"text-xs":"text-sm"} >
                {size==="sm"? " doloremque eos nostrum officiis quaerat beatae id quas quibusdam excepturi ?" 
                : size==="md"? " doloremque eos nostrum officiis quaerat beatae id quas quibusdam excepturi ?":"lorem  doloremque eos nostrum officiis quaerat beatae id quas quibusdam excepturi ? ispum write solify general store ispum "}
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>
        </div>  
    </div>
  )
}

export default Add
