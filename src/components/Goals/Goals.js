import { useState } from 'react';

import GoalsList from './components/GoalsList/GoalsList';
import Tabs from '../../common/Tabs/Tabs';

import { useSelector } from 'react-redux/es/exports';
import { getAllGoals } from '../../store/selectors';

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
    <section className='mt-4 w-11/12 mx-auto lg:w-1/2'>
      <Tabs
        items={[
          { title: 'All', param: '' },
          { title: 'Completed', param: 'completed' },
          { title: 'In progress', param: 'uncompleted' },
        ]}
        filterParam={filterParam}
        onFilterChange={setFilterParam}
      />
      <GoalsList goalsList={filteredGoals} filterParam={filterParam} />
    </section>
  );
}
