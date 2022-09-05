import React from 'react';
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required } from '../../utils/validators/validators';
import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";

const LoginForm = (handleSubmit, error) => {
  
  return (
    <form
      className={classes.formBlock}
      onSubmit={handleSubmit}>
      <div className={classes.inputWrap}>
        <label>Name</label>
        <Field
          name={"email"}
          component={Input}
          placeholder={'Email'}
          validate={[required]} />
      </div>
      <div className={classes.inputWrap}>
        <label>Password</label>
        <Field
          name={"password"}
          component={Input}
          placeholder={'Password'}
          validate={[required]}
          type={"password"} />
      </div>
      <div className={classes.inputWrap + " " + classes.inputWrapCheckbox}>
        <Field
          name={"rememberMe"}
          component={Input}
          type={'checkbox'} />
        <span className={classes.checkboxLabel}>remember me</span>
      </div>
      { error &&
        <div className={classes.inputWrap + " " + classes.formSummaryError}>
          {error}
        </div>
      }
      <div className={classes.inputWrap}>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) return <Navigate to="/profile" />

  return (
    <div className={classes.login}>
      <h1 className={classes.title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    isAuth: state.auth.isAuth
  }
)

export default connect(mapStateToProps, {login})(Login);
