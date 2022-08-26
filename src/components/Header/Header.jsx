import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.jpg';

const Header = (props) => {
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={Logo} alt="" />
      </div>
      <div>
        <h1>Fashion is my Profession</h1>
      </div>
      <div className={classes.loginBlock}>
        <NavLink to={'/login'}>
          {
            props.isAuth ? props.login : 'Login'
          }
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
