import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {
  
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().dialogsPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          };

          let onNewMessageChange = (evt) => {
            let body = evt.target.value;
            store.dispatch(updateNewMessageBodyCreator(body));
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
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
