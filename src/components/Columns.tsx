import React, { useMemo } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Column } from './Column';

export const Columns: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

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
