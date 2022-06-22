import { Fragment } from 'react';

import Header from '../components/Header/Header';
import GoalForm from '../components/GoalForm/GoalForm';

export default function AddGoal() {
  return (
    <Fragment>
      <Header />
      <GoalForm />
    </Fragment>
  );
}
