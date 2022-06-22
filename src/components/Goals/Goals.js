import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass,
  faCircleCheck,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux/es/exports';
import { getAllGoals } from '../../store/selectors';

import GoalsList from './components/GoalsList/GoalsList';
import Button from '../../common/Button/Button';

function filteringFunc(goal, filterParam) {
  if (filterParam === 'completed') {
    return goal.completed === true;
  }

  if (filterParam === 'uncompleted') {
    return goal.completed === false;
  }
  return goal;
}

export default function Goals() {
  const [filterParam, setFilterParam] = useState('');

  const filteredGoals = useSelector(getAllGoals).filter((goal) =>
    filteringFunc(goal, filterParam)
  );

  return (
    <section className='mt-4'>
      <div className='w-11/12 mx-auto flex justify-between lg:w-1/2'>
        <Button
          className={`${
            filterParam === '' ? 'bg-darkGrey text-white' : 'bg-white'
          }`}
          onClick={() => setFilterParam('')}
        >
          <FontAwesomeIcon icon={faListCheck} />
        </Button>
        <Button
          className={`${
            filterParam === 'completed' ? 'bg-darkGrey text-green' : 'bg-white'
          }`}
          onClick={() => setFilterParam('completed')}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
        </Button>
        <Button
          className={`${
            filterParam === 'uncompleted'
              ? 'bg-darkGrey text-yellow'
              : 'bg-white'
          }`}
          onClick={() => setFilterParam('uncompleted')}
        >
          <FontAwesomeIcon icon={faHourglass} />
        </Button>
      </div>
      <GoalsList goalsList={filteredGoals} />
    </section>
  );
}
