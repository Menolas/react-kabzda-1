import React from 'react';
import classes from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import UserItem from './UserItem/UserItem';

let Users = (props) => {
  
  let usersElements = props.users
    .map(u => <UserItem
      key={u.id}
      user={u}
      followingInProgress={props.followingInProgress}
      follow={props.follow}
      unfollow={props.unfollow} />
  );
  
  return (
    <div className={classes.users}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage} />
      {usersElements}
    </div>
  )
};

export default Users;
