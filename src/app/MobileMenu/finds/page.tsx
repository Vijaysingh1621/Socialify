"use client"
import React ,{useState}from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {

  const [search, setSearch] = useState("")
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
    <div className='flex flex-col w-full'>
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-5 mt-5">
        <span>Find friends by username</span>
        <form onSubmit={handleSearchSubmit} className=' xs:block xl:flex p-2 bg-slate-100 items-center relative rounded-xl '>
          <input
            type="text"
            placeholder='search...'
            value={search}
            onChange={handleSearchChange}
            className='bg-transparent outline-none '
          />
          <button type="submit">
            <Image src="/search.png" alt="search" height={18} width={18} className=' absolute flex  top-3 right-2 justify-end ' />
          </button>
        </form>
    </div>
    </div>
  )
}

export default Page