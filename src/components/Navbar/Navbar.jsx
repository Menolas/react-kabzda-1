import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
  return (
    <aside className={classes.sideBar}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem} >
            <NavLink to="/profile" className = {({isActive}) => isActive ? classes.activeLink : ''}>Profile</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/dialogs" className = {({isActive}) => isActive ? classes.activeLink : ''}>Messages</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/news" className = {({isActive}) => isActive ? classes.activeLink : ''}>News</NavLink>
          </li>
          <li className={`${classes.navItem} ${classes.active}`}>
            <NavLink to="/music" className = {({isActive}) => isActive ? classes.activeLink : ''}>Music</NavLink>
          </li>
          <li className={`${classes.navItem} ${classes.active}`}>
            <NavLink to="/users" className = {({isActive}) => isActive ? classes.activeLink : ''}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <FriendsContainer />
    </aside>
  );
}

export default Navbar;
