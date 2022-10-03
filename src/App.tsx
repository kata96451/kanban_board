import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Stack } from 'react-bootstrap';
import { getTasks } from './api';
import { Task } from './types/Task';
import { Columns } from './components/Columns';

function BasicExample () {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    getTasks
      .then(res => setTasks(res))
      .catch(err => console.log(err));
  }, []);

  console.log(tasks);

  return (
    <Container className='py-5'>
      <Stack direction="horizontal" gap={3} className='mb-5'>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
      </Stack>

      <Columns tasks={tasks} />

    </Container>
  );
}

export default BasicExample;
