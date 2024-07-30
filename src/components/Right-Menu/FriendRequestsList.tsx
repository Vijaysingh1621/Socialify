import React from 'react'
import Image from 'next/image'
import { FollowRequest, User } from '@prisma/client'


type RequestWithUser = FollowRequest & {sender:User};
const FriendRequestsList = ({requests}:{requests:RequestWithUser[]}) => {
  console.log('requests:', requests);

  

  return (
    <>
    {requests.map((request)=>(
<div className='flex items-center justify-center justify-between'>
            <div className='flex items-center justify-center gap-4' key={request.id}>
            
              <Image
                src={request.sender?.avatar || "/noAvatar.png"}
                alt=""
                height={40}
                width={40}
                className="w-10 h-10 rounded-full object-cover"
              />
            
                <span className='font-medium'>{(request.sender && request.sender.name && request.sender.surname)
               ? request.sender?.name + " " + request.sender?.surname
                : request.sender && request.sender?.username}</span>
            </div>
            <div className='flex gap-3 justify-end'>
            <Image src="/accept.png" alt="" height={20} width={20} className=" cursor-pointer"></Image>
            <Image src="/reject.png" alt="" height={20} width={20} className="cursor-pointer"></Image>
            </div>
        </div>
    ))
}
      
    </>
  )
}

export default FriendRequestsList
