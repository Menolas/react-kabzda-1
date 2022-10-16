import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from "../../../common/FormsControl/FormsControl";
import styles from '../../../common/FormsControl/FormsControl.module.css';
import cn from "classnames";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form className="profileForm" onSubmit={handleSubmit}>
      <h2>Updating profile</h2>
      <div className={cn(styles.profileFormInputWrap)}>
        <label>Full Name:</label>
        <Field
          component={Input}
          name="fullName"
          placeholder="Full Name"/>
      </div>
      <div className={cn(styles.profileFormInputWrap)}>
        <label>Looking for a job:</label>
        <Field
          component={Input}
          name="lookingForAJob"
          type="checkbox" />
      </div>
      <div className={cn(styles.profileFormInputWrap)}>
        <label>My professional skills:</label>
        <Field
          component={Textarea}
          name="lookingForAJobDescription"
          placeholder="My professional skills" />
      </div>
      <div className={cn(styles.profileFormInputWrap)}>
        <label>About me:</label>
        <Field
          component={Textarea}
          name="aboutMe"
          placeholder="About me" />
      </div>
      <div className="">
        <h3>Contacts</h3>
        <div className="">
          { Object.keys(profile.contacts)
              .map(key => {
                return (
                  <div
                    key={key}
                    className={cn(styles.profileFormInputWrap)}>
                    <label>{key}</label>
                    <Field
                      component={Input}
                      name={"contacts." + key}
                      placeholder="" />
                  </div>
                )
              })
          }
        </div>
      </div>
      { error &&
        <div className={cn(styles.inputWrap, styles.formSummaryError)}>
          {error}
        </div>
      }
      <div><button>save</button></div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
