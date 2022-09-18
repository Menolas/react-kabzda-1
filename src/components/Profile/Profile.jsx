import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import background from '../../assets/images/portfolio-background.jpg';

const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <div className={classes.background}>
        <img src={background} alt="" />
      </div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
