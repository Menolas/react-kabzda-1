import classes from './Friends.module.css';

const Friends = (props) => {

  let friends = props.friends
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
};

export default Friends;
