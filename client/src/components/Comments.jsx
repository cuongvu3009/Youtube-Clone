import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 10px;
  padding-right: 100px;
  width: 100%;
`;
const Button = styled.button`
  background-color: #1897;
  color: #fff;
  cursor: pointer;
  width: 50%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const [comments, setComments] = useState([]);
  const [channel, setChannel] = useState({});
  const [desc, setDesc] = useState('');

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/comments', { desc, videoId });
      setDesc('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId, comments]);

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <div style={{ display: 'flex' }}>
          <Input
            placeholder='Add a comment...'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button onClick={handleComment}>Send</Button>{' '}
        </div>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
