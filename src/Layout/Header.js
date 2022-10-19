import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import classes from './Header.module.sass';
import HeaderTimeReflection from './HeaderTimeReflection';
import bgphoto from '../images/bg.png';

const Header = (props) => {
  const email = useSelector((state) => state.user.email);
  const length = useSelector((state) => state.user.length);
  const name = email.split('@');

  // const email = props.email;

  return (
    <Fragment>
      <header className={classes.header}>
        <svg
          className={`${classes.headerItem} ${classes.logo}`}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 32 32"
        >
          <path
            fill="#ba63c6"
            d="M29.42 2.59a6.48 6.48 0 0 0-8.9-.25L9.27 12.39A6.89 6.89 0 0 0 7 12a7 7 0 0 0-.94 13.94A7 7 0 0 0 20 25a6.89 6.89 0 0 0-.39-2.27l10.05-11.24a6.48 6.48 0 0 0-.24-8.9Zm-2.74 6.23L15.75 21a2 2 0 0 0-.21 2.39A2.94 2.94 0 0 1 16 25a3 3 0 1 1-5.91-.68 2 2 0 0 0-2.41-2.41A3 3 0 1 1 7 16a2.94 2.94 0 0 1 1.57.46 2 2 0 0 0 2.43-.21l8.69-7.78 1.94 1.94a2 2 0 0 0 2.83-2.83L22.63 5.8l.54-.49a2.48 2.48 0 0 1 3.41.09 2.48 2.48 0 0 1 .1 3.42Z"
          />
        </svg>

        {email && (
          <p className={classes.headerItem}>
            {name[0]} you have {length} cm
          </p>
        )}
        <HeaderTimeReflection
          className={`${classes.headerItem} ${classes.timeReflaction}`}
        />
      </header>
      <img src={bgphoto} alt="" className={classes.bgphoto}/>
    </Fragment>
  );
};

export default Header;
