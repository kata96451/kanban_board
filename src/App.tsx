import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { getRepo, getTasks } from './api';
import { Task } from './types/Task';
import { Columns } from './components/Columns';
import { UrlInput } from './components/UrlInput';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Repo } from './types/Repo';

function App () {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [data, setData] = useState<string[]>([]);
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    getTasks(data)
      .then(res => setTasks(res))
      .catch(err => console.log(err));

    getRepo(data)
      .then(res => {
        if (res !== null) {
          setRepo(res);
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  }, [data]);

  console.log(repo);

  return (
    <Container fluid className='py-5'>
      <UrlInput setData={setData} />

      {data.length > 0 && <Breadcrumbs data={data} repo={repo} />}

      <Columns tasks={tasks} />
    </Container>
  );
}

export default App;
