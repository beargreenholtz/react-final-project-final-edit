import classes from './Header.module.sass';

import { Fragment } from 'react';

const HeaderTimeReflection = () => {
  const date = new Date();
  const showTime = date.getHours();
  let isMorning = false;
  let isEvening = false;
  let isAfterNoon = false;

  if (showTime < 12) {
    isMorning = true;
  } else if (showTime < 18) {
    isAfterNoon = true;
  } else {
    isEvening = true;
  }

  return (
    <Fragment>
      {isEvening && <span className={classes.timeReflaction}>its evening</span>}
      {isAfterNoon && <span className={classes.timeReflaction}>its aftternoon</span>}
      {isMorning && <span className={classes.timeReflaction}>its morning</span>}
    </Fragment>
  );
};

export default HeaderTimeReflection;
