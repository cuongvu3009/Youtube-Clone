import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axiosInstance';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axiosInstance.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card video={video} key={video._id} />
      ))}
    </Container>
  );
};

export default Home;
