import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/dragon-head.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={classes.profileInfo}>
      <div className={classes.avatar}>
        <img src={props.profile.photos && props.profile.photos.small && props.profile.photos.small !== null ? props.profile.photos.small : userPhoto} alt="" />
      </div>
      <div className={classes.name + " " + classes.profileInfoBlock}>{props.profile.fullName}</div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus} />
      <div className={classes.lookingForJob + " " + classes.profileInfoBlock}>
        <span>{props.profile.lookingForAJob ? "Searching for Job" : "Not Searching for Job"}</span>
        <span>{props.profile.lookingForAJobDescription}</span>
      </div>
      <div className={classes.socialContacts  + " " + classes.profileInfoBlock}>
        <ul className={classes.socialContactsList}>
          {
            props.profile.contacts.facebook
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.facebook} target="_blank" rel="noreferrer">FB</a></li>
              : ''
          }
          {
            props.profile.contacts.website
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.website} target="_blank" rel="noreferrer">WB</a></li>
              : ''
          }
          {
            props.profile.contacts.vk
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.vk} target="_blank" rel="noreferrer">VK</a></li>
              : ''
          }
          {
            props.profile.contacts.twitter
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.twitter} target="_blank" rel="noreferrer">TW</a></li>
              : ''
          }
          {
            props.profile.contacts.instagram
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.instagram} target="_blank" rel="noreferrer">IN</a></li>
              : ''
          }
          {
            props.profile.contacts.youtube
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.youtube} target="_blank" rel="noreferrer">YB</a></li>
              : ''
          }
          {
            props.profile.contacts.github
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.github} target="_blank" rel="noreferrer">GB</a></li>
              : ''
          }
          {
            props.profile.contacts.mainLink
              ? <li className={classes.socialContactsItem}><a href={props.profile.contacts.mainLink} target="_blank" rel="noreferrer">ML</a></li>
              : ''
          }
        </ul>
      </div>
      <div className={classes.aboutMe + " " + classes.profileInfoBlock}>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
