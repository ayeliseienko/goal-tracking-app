import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { auth } from '../../firebase/firebaseConfig';

import User from './components/User/User';
import Button from '../../common/Button/Button';

import { HOME } from '../../pages/routes';

export default function Header() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme');
  });

  const themeChangeHandler = useCallback(() => {
    document.querySelector('html').classList.toggle('dark');

    setTheme((prevState) => {
      if (prevState === 'dark') {
        return 'light';
      } else {
        return 'dark';
      }
    });
  }, []);

  const logOutHandler = useCallback(() => {
    signOut(auth)
      .then(() => navigate(HOME))
      .catch((error) => console.log(error));
  }, [navigate]);

  return (
    <header className='flex justify-end items-center gap-5 p-5 bg-white drop-shadow-md dark:bg-darkModeLightBlack md:gap-16'>
      <User photoURL={user.photoURL} className='mr-auto' />
      <Button onClick={themeChangeHandler} className='btn-grey'>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </Button>
      <Button onClick={logOutHandler} className='btn-grey'>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Button>
    </header>
  );
}
