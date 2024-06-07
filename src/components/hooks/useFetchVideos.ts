import { useState, useEffect } from 'react';
import axios from 'axios';
import { VideoCardProps } from '@/components/VideoCard';

const my_user_id = 'russ_gomez';

const useFetchVideos = () => {
  const [allVideos, setAllVideos] = useState<VideoCardProps[]>([]);

  const fetchVideosFromServer = async () => {
    try {
      const response = await axios.get(`/videos/?user_id=${my_user_id}`);
      if (response.status === 200) {
        const videosFromServer = JSON.parse(response.data);
        setAllVideos(videosFromServer);
      } else {
        console.error(
          `ERROR: Error retrieving videos, server returned error code ${response.status}, and response ${response}`
        );
      }
    } catch (error) {
      console.error(
        `ERROR: Error retrieving videos from the server, here's the error:`,
        error
      );
    }
  };

  useEffect(() => {
    fetchVideosFromServer();
  }, []);

  return { allVideos };
};

export default useFetchVideos;
