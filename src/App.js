import { useEffect } from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase/firebaseConfig';

import { HOME, GOALS, ADD_GOAL } from './pages/routes';

import Login from './components/Login/Login';
import AllGoals from './pages/AllGoals';
import AddGoal from './pages/AddGoal';

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.querySelector('html').classList.add('dark');
    }
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={GOALS} element={user && <AllGoals />} />
        <Route path={ADD_GOAL} element={user && <AddGoal />} />
      </Routes>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
        toastOptions={{
          className:
            'drop-shadow-md dark:bg-darkModeLightBlack dark:text-lightGrey',
        }}
      />
    </Fragment>
  );
}

export default App;
