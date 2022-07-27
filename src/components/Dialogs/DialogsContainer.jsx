import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (evt) => {
    let body = evt.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      dialogs={state.dialogs}
      messages={state.messages}
      newMessageBody={state.newMessageBody}
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick} />
  );
}

export default DialogsContainer;
