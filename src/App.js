import { Fragment } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { HOME, GOALS, ADD_GOAL } from './pages/routes';

import Login from './components/Login/Login';
import AllGoals from './pages/AllGoals';
import AddGoal from './pages/AddGoal';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        localStorage.setItem('theme', 'dark');
        document.querySelector('html').classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    return () => {
      localStorage.removeItem('theme');
    };
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={GOALS} element={<AllGoals />} />
        <Route path={ADD_GOAL} element={<AddGoal />} />
      </Routes>
      <Toaster position='bottom-center' reverseOrder={false} />
    </Fragment>
  );
}

export default App;
