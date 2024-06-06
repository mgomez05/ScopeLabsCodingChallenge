import React from 'react';
import VideoComment from './VideoComment';

const EXAMPLE_COMMENTS = [
  {
    commentAuthor: 'Johnny Appleseed',
    commentText: 'This is a great video!',
  },
  {
    commentAuthor: 'Jane Doe',
    commentText: 'I love this video!',
  },
  {
    commentAuthor: 'John Smith',
    commentText: 'This video is amazing!',
  },
];

const VideoCommentList: React.FC = () => {
  return (
    <div className='bg-white'>
      <p className='text-center text-3xl font-bold pt-2 px-2'>Comments</p>
      <div className='flex flex-col gap-y-3 pb-2'>
        {EXAMPLE_COMMENTS.map((comment, index) => (
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
