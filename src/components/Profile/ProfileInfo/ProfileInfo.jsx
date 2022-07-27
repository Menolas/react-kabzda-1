import React from 'react';
import classes from './ProfileInfo.module.css';
import background from './portfolio-background.jpg';

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <div className={classes.background}>
        <img src={background} alt="" />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
