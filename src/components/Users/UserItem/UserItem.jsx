import React from 'react';
import classes from './UserItem.module.css';
import userPhoto from '../../../assets/images/dragon-head.jpg';
import { NavLink } from "react-router-dom";

let UserItem = ({ user, followingInProgress, follow, unfollow,  }) => {
  
  return (
    <div className={classes.userItem}>
      <div className={classes.avatarBlock}>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={
              user.photos.small != null
              ? user.photos.small
              : userPhoto
            }
            alt="" />
        </NavLink>
        <button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => { user.followed ? unfollow(user.id) : follow(user.id) }}>
          {user.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={classes.userInfo}>
        <div>
          <span>{user.name}</span>
          <span>{user.status}</span>
        </div>
        <div>
          <span>{"u.location.country"}</span>
          <span>{"u.location.city"}</span>
        </div>
      </div>
    </div>
  )
}

export default UserItem;
