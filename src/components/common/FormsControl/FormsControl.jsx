import React from "react";
import styles from "./FormsControl.module.css";
import cn from 'classnames';

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={cn(styles.formControl, {[styles.error] : hasError})}>
      {props.children}
      {hasError && <span>{meta.error}</span> }
    </div>
  );
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return  (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
}
