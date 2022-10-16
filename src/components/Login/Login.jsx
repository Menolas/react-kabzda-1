import React from 'react';
import styles from './Login.module.css';
import cn from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required } from '../../utils/validators/validators';
import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  
  return (
    <form
      className={cn(styles.formBlock)}
      onSubmit={handleSubmit}>
      <div className={cn(styles.inputWrap)}>
        <label>Name</label>
        <Field
          name={"email"}
          component={Input}
          placeholder={'Email'}
          validate={[required]} />
      </div>
      <div className={cn(styles.inputWrap)}>
        <label>Password</label>
        <Field
          name={"password"}
          component={Input}
          placeholder={'Password'}
          validate={[required]}
          type={"password"} />
      </div>
      <div className={cn(styles.inputWrap, styles.inputWrapCheckbox)}>
        <Field
          name={"rememberMe"}
          component={Input}
          type={'checkbox'} />
        <span className={cn(styles.checkboxLabel)}>remember me</span>
      </div>

      { captchaUrl && <img src={captchaUrl} alt="" />}
      { captchaUrl &&
        <Field
          name={"captcha"}
          component={Input}
          placeholder="Symbols from image" />
      }
      
      { error &&
        <div className={cn(styles.inputWrap, styles.formSummaryError)}>
          {error}
        </div>
      }
      <div className={cn(styles.inputWrap)}>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) return <Navigate to="/profile" />

  return (
    <div className={cn(styles.login)}>
      <h1 className={cn(styles.title)}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
}

const mapStateToProps = (state) => (
  { 
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  }
)

export default connect(mapStateToProps, {login})(Login);
