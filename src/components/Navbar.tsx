"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // Import from 'next/navigation'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearchChange = (e:any) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e:any) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/profile/${search.trim()}`)
    }
  }

  return (
    <div className='h-24 flex items-center justify-between'>
      {/* Left */}
      <div className='md:hidden lg:block w-[20%] block flex-row gap-10'>
        <div className='flex items-center gap-2'>
          <Image src="/socialifylogo.png" height={25} width={25} alt=""></Image>
          <Link href="/" className='font-bold text-[25px] text-[#3bacf7]'>Socialify</Link>
        </div>
      </div>
      {/* Center */}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        {/* Links */}
        <div className='flex gap-6 text-gray-600 mr-5 '>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/home.png" alt="homepage" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className='flex items-center gap-2'>
            <Image src="/friends.png" alt="friends" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className='flex  items-center gap-2'>
            <Image src="/stories.png" alt="stories" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
        <form onSubmit={handleSearchSubmit} className=' xs:block xl:flex p-2 bg-slate-100 items-center rounded-xl '>
          <input
            type="text"
            placeholder='search...'
            value={search}
            onChange={handleSearchChange}
            className='bg-transparent outline-none'
          />
          <button type="submit">
            <Image src="/search.png" alt="search" height={14} width={14} className='mr-4' />
          </button>
        </form>
       
      </div>
      
      {/* Right */}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-gray-400 border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"> </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer '>
              <Image src="/people.png" alt="people" width={24} height={24} />
            </div>
            <div className='cursor-pointer'>
              <Image src="/messages.png" alt="messages" width={20} height={20} />
            </div>
            <div className='cursor-pointer'>
              <Image src="/notifications.png" alt="notifications" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='cursor-pointer flex items-center gap-2'>
              <Image src="/login.png" alt="login" width={20} height={20} />
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