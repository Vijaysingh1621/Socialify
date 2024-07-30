import React, { Suspense } from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Add from './Add'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

const RightMenu = ({user}:{user?:User}) => {
  return (
    <div className='flex flex-col gap-6 lg:w-[325px]'>
      {user?(
        <>
        <Suspense fallback="loading...">
        <UserInfoCard user={user}/>
        </Suspense>
        <Suspense fallback="loading...">
        <UserMediaCard user={user}/>
        </Suspense>
        </>):null
      }
      <FriendRequests/>
      <Birthdays/>
      <Add size="md"/>
    </div>
  )
}

export default RightMenu
