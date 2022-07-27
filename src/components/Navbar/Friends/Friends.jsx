import React from 'react';
import classes from './Friends.module.css';
import StoreContext from '../../../StoreContext';

const Friends = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let friends = store.getState().sideBar.friends
            .map(
              f =>
                <li className={classes.friendsItem}>
                  <span className={classes.friendAvatar}></span>
                  {f.name}
                </li>
            );
  
          return (
            <div className={classes.friends}>
              <h3>Friends</h3>
              <ul className={classes.friendsList}>
                {friends}
              </ul>
            </div>
          );
        }
      }
    </StoreContext.Consumer>
  );
};

export default Friends;
