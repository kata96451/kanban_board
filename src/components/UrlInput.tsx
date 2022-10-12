import React, { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../features/data';

export const UrlInput: React.FC = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const getData = () => {
    const arr = url.split('/');
    const index = arr.indexOf('github.com');
    const data = arr.slice(index + 1, index + 3);
    if (data.length > 0) {
      dispatch(actions.set(data));
    }
  };

  return (
    <Stack direction="horizontal" gap={3} className='mb-3'>
      <Form.Control
        className="me-auto"
        placeholder="Add your item here..."
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <Button variant="primary"
      onClick={getData}
      >
        Submit
      </Button>
    </Stack>
  );
};
