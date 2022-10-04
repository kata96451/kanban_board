import React, { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';

interface Props {
  setData: (arr: string[]) => void
}

export const UrlInput: React.FC<Props> = (props) => {
  const { setData } = props;
  const [url, setUrl] = useState('');

  const getData = () => {
    const arr = url.split('/');
    const index = arr.indexOf('github.com');
    const data = arr.slice(index + 1, index + 3);
    setData(data);
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
