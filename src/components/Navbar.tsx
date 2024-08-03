"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e: any) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/profile/${search.trim()}`)
    }
  }

  return (
    <div className='h-24 flex items-center justify-between px-4'>
      {/* Left */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href="/" className='font-bold text-[25px] text-blue-600'>Socialify</Link>
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
      </div>
      <form onSubmit={handleSearchSubmit} className='flex items-center bg-slate-100 rounded-xl w-full xs:w-auto xs:flex-grow md:w-1/2lg:w-1/3 min-w-10'>
        <input
          type="text"
          placeholder='search...'
          value={search}
          onChange={handleSearchChange}
          className='bg-transparent outline-none p-2 flex-grow'
        />
        <button type="submit" className='p-2'>
          <Image src="/search.png" alt="search" height={14} width={14} />
        </button>
      </form>
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
