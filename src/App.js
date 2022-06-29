import { Routes, Route } from 'react-router-dom';

import { HOME, GOALS, ADD_GOAL } from './pages/routes';

import Login from './components/Login/Login';
import AllGoals from './pages/AllGoals';
import AddGoal from './pages/AddGoal';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Login />} />
      <Route path={GOALS} element={<AllGoals />} />
      <Route path={ADD_GOAL} element={<AddGoal />} />
    </Routes>
  );
}

export default App;
