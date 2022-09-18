import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/dragon-head.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  
  return (
    <div className={classes.profileInfo}>
      <div className={classes.avatar}>
        <img src={profile.photos && profile.photos.small && profile.photos.small !== null ? profile.photos.small : userPhoto} alt="" />
      </div>
      {isOwner && <input type={"file"} onChange={ onMainPhotoSelected } /> }
      <div className={classes.name + " " + classes.profileInfoBlock}>{profile.fullName}</div>
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus} />
      <div className={classes.lookingForJob + " " + classes.profileInfoBlock}>
        <span>{profile.lookingForAJob ? "Searching for Job" : "Not Searching for Job"}</span>
        <span>{profile.lookingForAJobDescription}</span>
      </div>
      <div className={classes.socialContacts  + " " + classes.profileInfoBlock}>
        <ul className={classes.socialContactsList}>
          {
            profile.contacts.facebook
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.facebook} target="_blank" rel="noreferrer">FB</a></li>
              : ''
          }
          {
            profile.contacts.website
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.website} target="_blank" rel="noreferrer">WB</a></li>
              : ''
          }
          {
            profile.contacts.vk
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.vk} target="_blank" rel="noreferrer">VK</a></li>
              : ''
          }
          {
            profile.contacts.twitter
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.twitter} target="_blank" rel="noreferrer">TW</a></li>
              : ''
          }
          {
            profile.contacts.instagram
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.instagram} target="_blank" rel="noreferrer">IN</a></li>
              : ''
          }
          {
            profile.contacts.youtube
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.youtube} target="_blank" rel="noreferrer">YB</a></li>
              : ''
          }
          {
            profile.contacts.github
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.github} target="_blank" rel="noreferrer">GB</a></li>
              : ''
          }
          {
            profile.contacts.mainLink
              ? <li className={classes.socialContactsItem}><a href={profile.contacts.mainLink} target="_blank" rel="noreferrer">ML</a></li>
              : ''
          }
        </ul>
      </div>
      <div className={classes.aboutMe + " " + classes.profileInfoBlock}>
        <p>{profile.aboutMe}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
