import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = props.messages
    .map(m => <Message message={m.message} />);
  let newMessageBody = props.newMessageBody;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (body) => {
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
