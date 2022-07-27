import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
  
  let friends = props.sideBar.friends
    .map(f => <li>{f.name}</li>);
  
  return (
    <div className={classes.friends}>
      <h3>Friends</h3>
      <ul className={classes.friendsList}>
        {friends}
      </ul>
    </div>
  );
        
};

export default Friends;
