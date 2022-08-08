import React from "react";
import classes from './UserItem.module.css';

const UserItem = (props) => {

  return (
    <div className={classes.userItem}>
      <div className={classes.avatarBlock}>
        <div><img src={props.user.photoUrl} alt="" /></div>
        {props.user.followed ?
          <button
            onClick={() => {props.unfollow(props.user.id)} }>
            Unfollow
          </button> :
          <button
            onClick={() => { props.follow(props.user.id) }}>
            Follow
          </button>}
      </div>
      <div className={classes.userInfo}>
        <div>
          <span>{props.user.fullName}</span>
          <span>{props.user.status}</span>
        </div>
        <div>
          <span>{props.user.location.country}</span>
          <span>{props.user.location.city}</span>
        </div>
      </div>
    </div>
  )
};

export default UserItem;
