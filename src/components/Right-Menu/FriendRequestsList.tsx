"use client"
import React from 'react'
import Image from 'next/image'
import { FollowRequest, User } from '@prisma/client'
import { useOptimistic, useState } from "react";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";


type RequestWithUser = FollowRequest & {sender:User};
const FriendRequestsList = ({requests}:{requests:RequestWithUser[]}) => {
  //console.log('requests:', requests);

  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {}
  };
  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {}
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  

  return (
    <>
    {optimisticRequests.map((request)=>(
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
              <form action={()=>accept(request.id,request.sender.clerkId)}>
                <button>
            <Image src="/accept.png" alt="" height={20} width={20} className=" cursor-pointer"></Image>
            </button>
            </form>
            <form action={()=>decline(request.id,request.sender.clerkId)}>
                <button>
            <Image src="/reject.png" alt="" height={20} width={20} className="cursor-pointer"></Image>
            </button>
            </form>
            </div>
        </div>
    ))
}
      
    </>
  )
}

export default FriendRequestsList
