import { VideoMetaData } from '../components/VideoCard';

export const SAMPLE_VIDEO_PATH = 'SampleVideo_1280x720_1mb.mp4';

export const EXAMPLE_COMMENTS = [
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

export const SAMPLE_VIDEO_META_DATA: VideoMetaData = {
  user_id: 'asdg7a98sd7g9a87dg',
  description:
    'This is a story of a great battle as a strange animal comes out of his home',
  video_thumbnail: '',
  title: 'The Animal that Comes Out of The Whole',
  video_id: 'video_1',
};

export const SAMPLE_VIDEO_LIST = [
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_1',
      title: 'The Gorilla and the Banana',
    },
  },
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_2',
      title: 'The Beaver and the Dam',
    },
  },
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_3',
      title: 'The Cheetag and the Gazelle',
    },
  },
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_4',
      title: 'The Mammoth and the Ice',
    },
  },
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_5',
      title: 'The Lizard on the Rock',
    },
  },
  {
    videoMetaData: {
      ...SAMPLE_VIDEO_META_DATA,
      video_id: 'video_6',
      title: 'The Horse and the Saddle',
    },
  },
];
