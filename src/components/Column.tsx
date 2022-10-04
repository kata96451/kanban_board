import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Task } from '../types/Task';
import { TaskCard } from './TaskCard';

interface Props {
  name: string
  issues: Task[]
}

export const Column: React.FC<Props> = (props) => {
  const { name, issues } = props;

  return (
    <Col className='w-25'>
      <Card>
        <Card.Header>{`${name}`}</Card.Header>
        <Card.Body>
          {issues.map(task => (
            <TaskCard task={task} key={task.id} />
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};
