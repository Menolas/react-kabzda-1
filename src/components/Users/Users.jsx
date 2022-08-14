import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/dragon-head.jpg';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

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
              {u.followed
                ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "b58005cf-88b0-4f79-8a3d-30cc5b096349"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                  }}>Unfollow</button>
                : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "b58005cf-88b0-4f79-8a3d-30cc5b096349"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                  }}>Follow</button>
                }
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
