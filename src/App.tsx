import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { getRepo, getTasks } from './api';
import { Columns } from './components/Columns';
import { UrlInput } from './components/UrlInput';
import { Breadcrumbs } from './components/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { actions as tasksActions } from './features/tasks';
import { actions as repoActions } from './features/repo';

function App () {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data);

  useEffect(() => {
    getTasks(data)
      .then(res => dispatch(tasksActions.set(res)))
      .catch(err => console.log(err));

    getRepo(data)
      .then(res => {
        if (res !== null) {
          dispatch(repoActions.set(res));
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  }, [data]);

  return (
    <Container fluid className='py-5'>
      <UrlInput />
      {data.length > 0 && <Breadcrumbs />}
      <Columns />
    </Container>
  );
}

export default App;
