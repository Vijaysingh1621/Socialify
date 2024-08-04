import FriendRequests from '@/components/Right-Menu/FriendRequests';
import React from 'react';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';

const Page = async () => {
  const { userId } = await auth(); // await is missing here

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12"><span>No Friend requests found!</span></div>; // return a JSX element instead of false

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      Friends Requests
      <FriendRequests />
    </div>
  );
};

export default Page;