import React from 'react';
import { Card } from 'react-bootstrap';
import { Task } from '../types/Task';

interface Props {
  task: Task
}

export const TaskCard: React.FC<Props> = (props) => {
  const { task } = props;

  const date = new Date();
  const oldDate = new Date(task.created_at);
  const oneDay = 1000 * 3600 * 24;
  const daysAgo = Math.floor((date.getTime() - oldDate.getTime()) / oneDay);
  const passedTime = daysAgo === 0 ? 'today' : `${daysAgo} days ago`;

  return (
    <Card className='mb-3'>
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`#${task.id} opened ${passedTime}`}</Card.Subtitle>
      <Card.Text>
        {`${task.user.login} | Comments: ${task.comments}`}
      </Card.Text>
    </Card.Body>
    </Card>
  );
};
