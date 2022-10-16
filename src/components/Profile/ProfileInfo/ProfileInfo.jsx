import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/dragon-head.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import cn from "classnames";

const Contact = ({ contactTitle, contactValue }) => {
  console.log(contactValue);
  return (
    <li className={cn(styles.socialContactsItem)}>
      <span>{contactTitle}:</span>
      <span>{contactValue}</span>
    </li>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div className={cn(styles.lookingForJob, styles.profileInfoBlock)}>
        <span>{profile.lookingForAJob ? "Searching for Job" : "Not Searching for Job"}</span>
        <div>
          <span>Description:</span>
          <span>
            {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ' ---'}
          </span>
        </div>
      </div>
      <div className={cn(styles.aboutMe, styles.profileInfoBlock)}>
        <span>About me:</span>
        <span>{profile.aboutMe ? profile.aboutMe : ' ---'}</span>
      </div>
      <div className={cn(styles.socialContacts, styles.profileInfoBlock)}>
        <ul className={styles.socialContactsList}>
          {
            Object.keys(profile.contacts)
              .map(key => {
                return <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]} />
              })
          }
        </ul>
      </div>
    </div>
  )
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    console.log(formData);
    saveProfile(formData).then(
        () => {
          setEditMode(false);
        }
    );
  }
  
  return (
    <div className={cn(styles.profileInfo)}>
      <div className={cn(styles.avatar)}>
        <img src={profile.photos && profile.photos.small && profile.photos.small !== null ? profile.photos.small : userPhoto} alt="" />
      </div>
      {isOwner && <input type={"file"} onChange={ onMainPhotoSelected } /> }
      <div className={cn(styles.name, styles.profileInfoBlock)}>{profile.fullName}</div>
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus} />
      {
        editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : 
          <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
      }
    </div>
  );
}

export default ProfileInfo;
