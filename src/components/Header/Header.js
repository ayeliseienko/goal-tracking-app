import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
// import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { auth } from '../../firebase/firebaseConfig';

// import { logOutUser } from '../../store/user/userSlice';

import User from './components/User/User';
import Button from '../../common/Button/Button';

import { HOME } from '../../pages/routes';

export default function Header() {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme');
  });

  const themeChangeHandler = useCallback(() => {
    document.querySelector('html').classList.toggle('dark');

    setTheme((prevState) => {
      if (prevState === 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      } else {
        localStorage.setItem('theme', 'dark');
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
    <header className='flex justify-end items-center gap-10 p-5 bg-white drop-shadow-md dark:bg-darkModeLightBlack'>
      <User name='user' className='mr-auto' />
      <Button
        onClick={themeChangeHandler}
        className='text-darkGrey hover:text-white hover:bg-darkGrey active:text-black'
      >
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </Button>
      <Button
        onClick={logOutHandler}
        className='text-darkGrey hover:text-white hover:bg-darkGrey active:text-black'
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Button>
    </header>
  );
}
