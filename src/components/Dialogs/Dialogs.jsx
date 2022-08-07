import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

  let messagesElements = state.messages
    .map(m => <Message message={m.message} key={m.id} />);
  
  let newMessageBody = state.newMessageBody;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder='Enter your message'
              value={newMessageBody}
              onChange={onNewMessageChange} />
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
