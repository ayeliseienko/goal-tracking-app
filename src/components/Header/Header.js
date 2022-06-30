import User from './components/User/User';
import { useState } from 'react';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [lightTheme, setLightTheme] = useState(true);

  function themeChangeHandler() {
    setLightTheme((prevState) => {
      return !prevState;
    });

    document.querySelector('html').classList.toggle('dark');
  }
  return (
    <header className='flex justify-end items-center gap-10 p-5 bg-white drop-shadow-md transition-all ease-in-out duration-500 dark:bg-darkModeLightBlack'>
      <User
        name='user'
        avatar={require('./components/User/logo192.png')}
        className='mr-auto'
      />
      <Button
        onClick={themeChangeHandler}
        className='text-darkGrey hover:text-white hover:bg-darkGrey active:text-black'
      >
        {lightTheme && <FontAwesomeIcon icon={faSun} />}
        {!lightTheme && <FontAwesomeIcon icon={faMoon} />}
      </Button>
      <Button className='text-darkGrey hover:text-white hover:bg-darkGrey active:text-black'>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Button>
    </header>
  );
}

export default Header;
