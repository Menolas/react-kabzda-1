import React from 'react';
import classes from './Login.module.css';
import { Form, Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  
  return (
    <form
      className={classes.formBlock}
      onSubmit={props.handleSubmit}>
      <div className={classes.inputWrap}>
        <label>Name</label>
        <Field name="name" component="input" placeholder={'Login'} />
      </div>
      <div className={classes.inputWrap}>
        <label>Password</label>
        <Field name="password" component="input" placeholder={'Password'} />
      </div>
      <div className={classes.inputWrap + " " + classes.inputWrapCheckbox}>
        <Field name="rememberMe" component="input" type={'checkbox'} />
        <span className={classes.checkboxLabel}>remember me</span>
      </div>
      <div className={classes.inputWrap}>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={classes.login}>
      <h1 className={classes.title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
