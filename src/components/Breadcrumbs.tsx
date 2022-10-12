import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const Breadcrumbs: React.FC = () => {
  const data = useSelector((state: RootState) => state.data);
  const repo = useSelector((state: RootState) => state.repo);

  let starsCount = '';

  if (repo !== null) {
    starsCount = repo.stargazers_count < 1000
      ? (repo.stargazers_count).toString()
      : `${repo.stargazers_count.toString().slice(0, 3)} K`;
  }

  return (
    <Breadcrumb className='mb-5'>
      <Breadcrumb.Item href={`https://github.com/${data[0]}`}>
        {data[0]}
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`https://github.com/${data[0]}/${data[1]}`}>
        {data[1]}
      </Breadcrumb.Item>

      <div className='px-4'>
        <img
          src="https://img.icons8.com/external-those-icons-flat-those-icons/344/external-Star-vote-and-reward-those-icons-flat-those-icons-2.png"
          style={{ height: '18px', width: '18px', marginTop: '-3px', marginRight: '5px' }} alt="star-icon"
        />
        <span>{`${starsCount} stars`}</span>
      </div>
    </Breadcrumb>
  );
};
