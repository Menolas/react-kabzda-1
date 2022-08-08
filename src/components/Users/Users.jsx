import React from 'react';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      });
    }
  }
  
  let usersElements = props.users
    .map(u => <UserItem key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />
    );
  
  return (
    <div className={classes.users}>
      <button onClick={getUsers}>Get Users</button>
      {
        usersElements
      }
    </div>
  );
}

export default Users;
