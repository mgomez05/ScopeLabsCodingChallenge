import React from 'react';
import VideoComment from './VideoComment';
import { ServerVideoComment } from './VideoCommentsSection';

type VideoCommentListProps = {
  comments: ServerVideoComment[];
};

const VideoCommentList: React.FC<VideoCommentListProps> = ({ comments }) => {
  return (
    <div className='bg-white'>
      <p className='text-center text-3xl font-bold pt-2 px-2'>Comments</p>
      <div className='flex flex-col gap-y-3 pb-2'>
        {comments.map((comment, index) => (
          <VideoComment
            key={index}
            commentAuthor={comment.user_id}
            commentText={comment.content}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCommentList;
