import { useState } from 'react';

import GoalsList from './components/GoalsList/GoalsList';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass,
  faCircleCheck,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';

const mockedGoals = [
  {
    id: 'id1',
    title: 'Test title 1',
    creationDate: '20/06/2022',
    deadline: '21/06/2022',
    completed: true,
    milestones: [
      {
        milestoneId: 'm1.1',
        milestoneTitle: 'milestone 1.1',
        completed: true,
      },
      {
        milestoneId: 'm1.2',
        milestoneTitle: 'milestone 1.2',
        completed: true,
      },
      {
        milestoneId: 'm1.3',
        milestoneTitle: 'milestone 1.3',
        completed: true,
      },
    ],
  },
  {
    id: 'id2',
    title: 'Test title 2',
    creationDate: '20/06/2022',
    deadline: '22/06/2022',
    completed: false,
    milestones: [
      {
        milestoneId: 'm2.1',
        milestoneTitle: 'milestone 2.1',
        completed: false,
      },
      {
        milestoneId: 'm2.2',
        milestoneTitle: 'milestone 2.2',
        completed: false,
      },
      {
        milestoneId: 'm2.3',
        milestoneTitle: 'milestone 2.3',
        completed: false,
      },
    ],
  },
  {
    id: 'id3',
    title: 'Test title 3',
    creationDate: '20/06/2022',
    deadline: '23/06/2022',
    completed: false,
    milestones: [
      {
        milestoneId: 'm3.1',
        milestoneTitle: 'milestone 3.1',
        completed: false,
      },
      {
        milestoneId: 'm3.2',
        milestoneTitle: 'milestone 3.2',
        completed: false,
      },
      {
        milestoneId: 'm3.3',
        milestoneTitle: 'milestone 3.3',
        completed: false,
      },
    ],
  },
];

function filteringFunc(goal, filterParam) {
  if (filterParam === 'completed') {
    return goal.completed === true;
  }

  if (filterParam === 'uncompleted') {
    return goal.completed === false;
  }

  return goal;
}

function Goals() {
  const [filterParam, setFilterParam] = useState('');

  const filteredGoals = mockedGoals.filter((goal) =>
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
            filterParam === 'completed' ? 'bg-darkGrey text-white' : 'bg-white'
          }`}
          onClick={() => setFilterParam('completed')}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
        </Button>
        <Button
          className={`${
            filterParam === 'uncompleted'
              ? 'bg-darkGrey text-white'
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

export default Goals;
