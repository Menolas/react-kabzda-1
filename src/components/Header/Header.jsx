import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="https://norsomnews.com/wp-content/uploads/2016/10/starbucks-logo.jpg" alt="" />
      </div>
      <div>
        <h1>Fashion is my Profession</h1>
      </div>
    </header>
  );
}

export default Header;
