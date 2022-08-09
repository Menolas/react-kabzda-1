import React from 'react';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/dragon-head.jpg';

class Users extends React.Component {

  componentDidMount() {
    axios.get("/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render = () => {

    return (
      <div className={classes.users}>
        
        {
          this.props.users.map(
            u => <div key={u.id} className={classes.userItem}>
                  <div className={classes.avatarBlock}>
                    <div>
                      <img
                        src={
                          u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                        }
                        alt="" />
                    </div>
                    {u.followed ?
                      <button
                        onClick={() => {this.props.unfollow(u.id)} }>
                        Unfollow
                      </button> :
                      <button
                        onClick={() => { this.props.follow(u.id) }}>
                        Follow
                      </button>}
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
}

export default Users;
