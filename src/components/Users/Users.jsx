import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/dragon-head.jpg';
import { NavLink } from "react-router-dom";

let Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let slicedPages = pages.slice(pagesCount - 6, pagesCount - 1);

  return (
    <div className={classes.users}>
      <div className={classes.pagination}>
        {
          slicedPages.map(
            p => {
              return (
                <span
                  key={p}
                  className={props.currentPage === p ? classes.selected : ''}
                  onClick={(e) => {props.onPageChanged(p)}}>
                  {p}
                </span>
              )
            })
        }
      </div>
      {
        props.users.map(
        u => <div key={u.id} className={classes.userItem}>
                <div className={classes.avatarBlock}>
                  <NavLink to={'/profile/' + u.id}>
                    <img
                      src={
                        u.photos.small != null
                          ? u.photos.small
                          : userPhoto
                      }
                      alt="" />
                  </NavLink>
                    <button
                      disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => { u.followed ? props.unfollow(u.id) : props.follow(u.id) }}>
                      {u.followed ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
                <div className={classes.userInfo}>
                  <div>
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                  </div>
                  <div>
                    <span>{"u.location.country"}</span>
                    <span>{"u.location.city"}</span>
                  </div>
                </div>
              </div>
        )
      }
    </div>
  )
};

export default Users;
