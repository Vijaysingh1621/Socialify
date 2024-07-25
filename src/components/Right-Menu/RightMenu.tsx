import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Add from './Add'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6 lg:w-[325px]'>
      {userId?(
        <>
        <UserInfoCard userId={userId}/>
        <UserMediaCard userId={userId}/>
        </>):null
      }
      <FriendRequests/>
      <Birthdays/>
      <Add size="md"/>
    </div>
  )
}

export default RightMenu
