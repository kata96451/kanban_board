import React, { useMemo } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Task } from '../types/Task';
import { TaskCard } from './TaskCard';

interface Props {
  tasks: Task[]
}

export const Columns: React.FC<Props> = (props) => {
  const { tasks } = props;

  const closedTasks = useMemo(() => tasks.filter(task => task.state === 'closed'), [tasks]);

  const openedTasks = useMemo(() => tasks.filter(task => task.state === 'open' && task.comments === 0), [tasks]);
  const inProgressTasks = useMemo(() => tasks.filter(task => task.state === 'open' && task.comments > 0), [tasks]);

  return (
    <Row>
    <Col>
      <Card>
        <Card.Header>To do</Card.Header>
        <Card.Body>
          {openedTasks.map(task => (
            <TaskCard task={task} key={task.id} />
          ))}
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Header>In Progress</Card.Header>
        <Card.Body>
          {inProgressTasks.map(task => {
            if (task.id !== undefined) {
              return <TaskCard task={task} key={task.id} />;
            }

            return '';
          })}
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Header>Done</Card.Header>
        <Card.Body>
          {closedTasks.map(task => (
            <TaskCard task={task} key={task.id} />
          ))}
        </Card.Body>
      </Card>
    </Col>
  </Row>
  );
};
