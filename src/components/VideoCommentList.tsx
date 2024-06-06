import React from 'react';
import VideoComment, { VideoCommentProps } from './VideoComment';

type VideoCommentListProps = {
  comments: VideoCommentProps[];
};

const VideoCommentList: React.FC<VideoCommentListProps> = ({ comments }) => {
  return (
    <div className='bg-white'>
      <p className='text-center text-3xl font-bold pt-2 px-2'>Comments</p>
      <div className='flex flex-col gap-y-3 pb-2'>
        {comments.map((comment, index) => (
          <VideoComment
            key={index}
            commentAuthor={comment.commentAuthor}
            commentText={comment.commentText}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCommentList;
