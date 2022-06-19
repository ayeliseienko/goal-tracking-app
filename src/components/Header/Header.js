import User from './components/User/User';
import { useState } from 'react';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
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
  }
  return (
    <header className='flex justify-end items-center gap-10 p-5 bg-white'>
      <User
        name='John'
        avatar={require('./components/User/logo192.png')}
        className='mr-auto'
      />
      <Button onClick={themeChangeHandler}>
        {lightTheme && <FontAwesomeIcon icon={faSun} />}
        {!lightTheme && <FontAwesomeIcon icon={faMoon} />}
      </Button>
      <Button>
        <FontAwesomeIcon icon={faChartColumn} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Button>
    </header>
  );
}

export default Header;
