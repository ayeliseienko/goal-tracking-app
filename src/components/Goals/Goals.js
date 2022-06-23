import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass,
  faCircleCheck,
  faListCheck,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import GoalsList from './components/GoalsList/GoalsList';
import Button from '../../common/Button/Button';

import { useSelector } from 'react-redux/es/exports';
import { getAllGoals } from '../../store/selectors';

import { ADD_GOAL } from '../../pages/routes';

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
  const navigate = useNavigate();
  const [filterParam, setFilterParam] = useState('');

  const filteredGoals = useSelector(getAllGoals).filter((goal) =>
    filteringFunc(goal, filterParam)
  );

  return (
    <section className='mt-4'>
      <div className='w-11/12 mx-auto flex flex-col gap-7 justify-between md:flex-row lg:w-1/2'>
        <div className='flex justify-between items-center md:justify-start md:gap-3'>
          <Button
            className={`${
              filterParam === ''
                ? 'bg-darkGrey text-white'
                : 'bg-white text-darkGrey'
            } hover:text-white hover:bg-darkGrey active:text-black`}
            onClick={() => setFilterParam('')}
          >
            <FontAwesomeIcon icon={faListCheck} />
          </Button>
          <Button
            className={`${
              filterParam === 'completed'
                ? 'bg-darkGrey text-green'
                : 'bg-white'
            } text-darkGrey hover:text-white hover:bg-darkGrey active:text-black`}
            onClick={() => setFilterParam('completed')}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </Button>
          <Button
            className={`${
              filterParam === 'uncompleted'
                ? 'bg-darkGrey text-yellow'
                : 'bg-white'
            } text-darkGrey hover:text-white hover:bg-darkGrey active:text-black`}
            onClick={() => setFilterParam('uncompleted')}
          >
            <FontAwesomeIcon icon={faHourglass} />
          </Button>
        </div>
        <Button
          className='mb-5 bg-blue text-white hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white md:ml-auto md:shrink md:mb-0'
          onClick={() => {
            navigate(ADD_GOAL, { replace: true });
          }}
        >
          <FontAwesomeIcon className='mr-1' icon={faPlus} />
          {'Add new goal'}
        </Button>
      </div>
      <GoalsList goalsList={filteredGoals} filterParam={filterParam} />
    </section>
  );
}
