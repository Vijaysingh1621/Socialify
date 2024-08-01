import prisma from "@/lib/client";
import CommentList from "./CommentList";

interface Props {
  postId: string;
}

const Comments = async ({ postId }: Props) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: `${postId}`, //added
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="">
      {/* WRITE */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;