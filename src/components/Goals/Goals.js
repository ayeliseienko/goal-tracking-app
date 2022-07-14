import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase/firebaseConfig';
import { collection, query, orderBy } from 'firebase/firestore';

import { auth } from '../../firebase/firebaseConfig';

import GoalsList from './components/GoalsList/GoalsList';
import Tabs from '../../common/Tabs/Tabs';
import Spinner from '../../common/Spinner/Spinner';

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
  const collectionRef = collection(firestore, auth.currentUser.uid);
  const goalsQuery = query(collectionRef, orderBy('completed', 'asc'));

  const [goals, loading] = useCollectionData(goalsQuery);

  const [filterParam, setFilterParam] = useState('');

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
      {goals && (
        <GoalsList
          goalsList={goals.filter((goal) => filteringFunc(goal, filterParam))}
          filterParam={filterParam}
        />
      )}
      {loading && <Spinner className='text-center mt-28' />}
    </section>
  );
}
