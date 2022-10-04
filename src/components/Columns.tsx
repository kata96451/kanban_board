import React, { useMemo } from 'react';
import { Row } from 'react-bootstrap';
import { Task } from '../types/Task';
import { Column } from './Column';

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
      <Column
        name={'To do'}
        issues={openedTasks}
      />

      <Column
        name={'In Progress'}
        issues={inProgressTasks}
      />

      <Column
        name={'Done'}
        issues={closedTasks}
      />
    </Row>
  );
};
