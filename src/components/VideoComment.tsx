import React from 'react';

type VideoCommentProps = {
  commentAuthor: string;
  commentText: string;
};

const VideoComment: React.FC<VideoCommentProps> = ({
  commentAuthor,
  commentText,
}) => {
  return (
    <div className='flex flex-col rounded-lg px-3 bg-white'>
      <p className='font-bold'>{commentAuthor}</p>
      <p>{commentText}</p>
    </div>
  );
};

export default VideoComment;
