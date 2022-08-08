import React from "react";
import classes from './UserItem.module.css';
import userPhoto from '../../../assets/images/dragon-head.jpg';

const UserItem = (props) => {

  return (
    <div className={classes.userItem}>
      <div className={classes.avatarBlock}>
        <div>
          <img
            src={
              props.user.photos.small != null
                ? props.user.photos.small
                : userPhoto
            }
            alt="" />
        </div>
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
          <span>{props.user.name}</span>
          <span>{props.user.status}</span>
        </div>
        <div>
          <span>{"props.user.location.country"}</span>
          <span>{"props.user.location.city"}</span>
        </div>
      </div>
    </div>
  )
};

export default UserItem;
