import { useState, useEffect } from 'react';
import { firestore } from '../../firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

import { auth } from '../../firebaseConfig';

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

const getCollectionDocs = async (collectionRef) => {
  const collectionQuery = query(collectionRef);
  const querySnapshot = await getDocs(collectionQuery);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(data);
  });
};

export default function Goals() {
  const collectionRef = collection(firestore, auth.currentUser.uid);

  useEffect(() => {
    getCollectionDocs(collectionRef);
  }, [collectionRef]);

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
