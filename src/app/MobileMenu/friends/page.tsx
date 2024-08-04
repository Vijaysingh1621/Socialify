import FriendRequests from '@/components/Right-Menu/FriendRequests'
import FriendRequestsList from '@/components/Right-Menu/FriendRequestsList'
import React from 'react'

const page = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        friends
        <FriendRequests/>
    </div>
  )
}

export default page
