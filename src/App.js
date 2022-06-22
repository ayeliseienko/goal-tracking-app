import { Routes, Route, Navigate } from 'react-router-dom';

import { HOME, GOALS, ADD_GOAL } from './pages/routes';

import AllGoals from './pages/AllGoals';
import AddGoal from './pages/AddGoal';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Navigate to={GOALS} replace={true} />} />
      <Route path={GOALS} element={<AllGoals />} />
      <Route path={ADD_GOAL} element={<AddGoal />} />
    </Routes>
  );
}

export default App;
