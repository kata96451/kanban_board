import React from 'react';
import { Card } from 'react-bootstrap';
import { Task } from '../types/Task';
// import { User } from '../types/User';

interface Props {
  task: Task
}

export const TaskCard: React.FC<Props> = (props) => {
  const { task } = props;

  return (
    <Card className='mb-3'>
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`#${task.id} opened`}</Card.Subtitle>
      <Card.Text>
        {`${task.user.login} | Comments: ${task.comments}`}
      </Card.Text>
    </Card.Body>
    </Card>
  );
};
