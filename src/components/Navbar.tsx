"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut,UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/*Left*/}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href="/" className='font-bold text-[25px] text-blue-600'>Socialify</Link>
      </div>
      {/*center*/}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        {/* Links*/}
        <div className='flex gap-6 text-gray-600'>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/home.png" alt="homepage" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>          
          </Link>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/friends.png" alt="homepage" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>          
          </Link>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/stories.png" alt="homepage" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>          
          </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl '>
          <input type="Text" placeholder='search...' className='bg-transparent outline-none'/>
          <Image src="/search.png" alt="" height={14} width={14}/>
         </div>
      </div>
      {/*right*/}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoading>
        <div className="inline-block h-4 w-4 animate-spin rounded-full border-gray-400 border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white "
              role="status"> </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
           <div className='cursor-pointer'>
            <Image src="/people.png" alt="" width={24} height={24}/>
           </div>
           <div className='cursor-pointer'>
            <Image src="/messages.png" alt="" width={20} height={20}/>
           </div>
           <div className='cursor-pointer'>
            <Image src="/notifications.png" alt="" width={20} height={20}/>
           </div>
           <UserButton/>
          </SignedIn>
          <SignedOut>
          <div className='cursor-pointer flex items-center gap-2'>
            <Image src="/login.png" alt=""  width={20} height={20}/>
            <Link href="/sign-in">Login</Link>
            <Link href="/sign-up">Register</Link>
           </div>
          </SignedOut>
        </ClerkLoaded>

        
        
      </div>
    </div>
  )
}

export default Navbar