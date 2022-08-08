import React from 'react';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {
  
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      });
  }
  
  let usersElements = props.users
    .map(u => <UserItem key={u.id} user={u} follow={props.follow } unfollow={props.unfollow} />
    );
  
  return (
    <div className={classes.users}>
      {
        usersElements
      }
    </div>
  );
}

export default Users;

// [
//   {
//     id: 1,
//     followed: true,
//     photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
//     fullName: 'Elena',
//     status: 'I am a developer',
//     location: { city: 'Mykolaiv', country: 'Ukraine' }
//   },
//   {
//     id: 2,
//     followed: false,
//     photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
//     fullName: 'Kenneth',
//     status: 'I am a developer',
//     location: { city: 'Kotinth', country: 'Denmark' }
//   },
//   {
//     id: 4,
//     followed: true,
//     photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
//     fullName: 'Adelaine',
//     status: 'I am a developer',
//     location: { city: 'Milan', country: 'Italy' }
//   },
// ]
