import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControl/FormsControl';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

  let messagesElements = state.messages
    .map(m => <Message message={m.message} key={m.id} />);

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
      validate={[required, maxLength50]} />
      <button>Send</button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({ form: "dialogMessageForm" })(AddMessageForm);

export default Dialogs;
